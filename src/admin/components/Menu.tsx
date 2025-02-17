import React from 'react';

const Menu = () => {
  return (
    <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Dashboard
            </a>
          </li>
          {/* Agrega más elementos de la barra lateral aquí */}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
