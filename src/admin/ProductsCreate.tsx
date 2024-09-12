import React, { SyntheticEvent, useState } from 'react';
import Wrapper from './Wrapper';
import { useNavigate } from 'react-router-dom';

const ProductsCreate = () => {
  const [title, setTitle] = useState(''); 
  const [image, setImage] = useState('');
  const navigate = useNavigate(); // Reemplaza Redirect por useNavigate

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch('http://localhost:8000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: title,
        image
      })
    });
    
    navigate('/admin/products'); // Redirige a la página de productos
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="text"
            className="form-control"
            name="image"
            onChange={e => setImage(e.target.value)}
          />
        </div>
        <button className="btn btn-outline-secondary">Save</button>
      </form>
    </Wrapper>
  );
};

export default ProductsCreate;
