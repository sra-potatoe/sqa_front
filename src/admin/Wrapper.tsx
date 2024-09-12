import React, { PropsWithChildren } from 'react';
import Nav from './components/Nav'; // Importa el componente Nav
import Menu from './components/Menu'; // Importa el componente Menu

const Wrapper = (props: PropsWithChildren<any>) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Menu /> {/* Menú lateral a la izquierda */}
        <main role="main" className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <Nav /> {/* Barita de navegación si es necesaria */}
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default Wrapper;
