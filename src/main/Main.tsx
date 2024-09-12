import React, { useEffect, useState } from 'react';
import { Product } from '../interfaces/product';

const Main = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Función para obtener los productos de la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/products');
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError('Error fetching products.');
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts(); // Llamar a la función de forma inmediata
  }, []);

  // Función para incrementar los likes de un producto
  const like = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:8000/products/${id}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const updatedProduct = await response.json();
  
      // Actualizar el estado con la respuesta del servidor
      setProducts(products.map(p =>
        p.id === id ? updatedProduct : p
      ));
    } catch (error) {
      setError('Error updating likes.');
      console.error('Error updating likes:', error);
    }
  };
  

  return (
    <main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="row">
            {products.map((p: Product) => (
              <div className="col-md-4" key={p.id}>
                <div className="card mb-4 shadow-sm">
                  <img src={p.image} height="180" alt={p.title} className="card-img-top" />
                  <div className="card-body">
                    <p className="card-text">{p.title}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => like(p.id)}
                        >
                          Like
                        </button>
                      </div>
                      <small className="text-muted">{p.likes ?? 0}</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {/* Puedes agregar más columnas aquí según sea necesario */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
