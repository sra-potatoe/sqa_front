import React from 'react';
const Nav = ()=> {
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-3 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 me-3 px-3" href="#">
          Company name
        </a>
        <div className="mx-auto w-100 d-none d-md-block">
          <input
            className="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
        </div>
        <button
          className="navbar-toggler d-md-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSearch"
          aria-controls="navbarSearch"
          aria-expanded="false"
          aria-label="Toggle search"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="#">Sign out</a>
          </li>
        </ul>
      </nav>
    );
};
export default Nav;