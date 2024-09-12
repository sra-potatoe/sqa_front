import React, { SyntheticEvent, useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { useNavigate, useParams } from 'react-router-dom';
import { Product } from '../interfaces/product';

const ProductsEdit = () => {
  const [title, setTitle] = useState(''); 
  const [image, setImage] = useState('');
  const navigate = useNavigate(); 
  const { id } = useParams(); // Use useParams to get the product ID from the URL

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/products/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const product: Product = await response.json();
        setTitle(product.title);
        setImage(product.image);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch(`http://localhost:8000/products/${id}`, {
      method: 'PUT', // Assuming you want to update the product
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        image
      })
    });
    
    navigate('/admin/products'); // Redirect to the products page after saving
  };

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            value={image}
            onChange={e => setImage(e.target.value)}
          />
        </div>
        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default ProductsEdit;
