import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; 

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="header">
        <h1>Nedas Janonis</h1>
      </div>
      <div className="button-container">
        <Link to="/list-page">
          <button className="main-button">List Page</button>
        </Link>
        <Link to="/data-page">
          <button className="main-button">Data Page</button>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;