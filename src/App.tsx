import React from 'react';
import './App.css';
import Products from './admin/Products';
import Main from './main/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsCreate from './admin/ProductsCreate';
import ProductsEdit from './admin/ProductsEdit';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/ProductsCreate' element={<ProductsCreate />} />
          <Route path="/admin/Products/:id/edit" element={<ProductsEdit />} /> {/* Ruta de edición */}
    
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
