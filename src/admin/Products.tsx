import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { Product } from '../interfaces/product';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const del = async (id: number) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await fetch(`http://localhost:8000/products/${id}`, {
        method: 'DELETE',
      });
      setProducts(products.filter(p => p.id !== id));
    }
  };

  return (
    <Wrapper>
      <div className="pt-3 pb-2 mb-3 border-bottom">
        <div className="btn-toolbar mb-2 mb-md-0">
          <Link to="/admin/ProductsCreate" className="btn btn-sm btn-outline-secondary">
            Add
          </Link>
        </div>
      </div>

      <div className="table-responsive small">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Title</th>
              <th scope="col">Likes</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p: Product, index: number) => (
              <tr key={p.id}>
                <td>{index + 1}</td> {/* Incrementa manualmente el índice */}
                <td>
                  {p.image ? (
                    <img src={p.image} height="180" alt={p.title} />
                  ) : (
                    'No image available'
                  )}
                </td>
                <td>{p.title}</td>
                <td>{p.likes}</td>
                <td>
                  <div className="btn-group mr-2">
                    {/* Botón Edit que redirige a la ruta de edición */}
                    <Link 
                      to={`/admin/Products/${p.id}/edit`} 
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Edit
                    </Link>

                    {/* Botón Delete que elimina el producto */}
                    <button
                      className="btn btn-sm btn-outline-secondary"
                      onClick={() => del(p.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Products;
