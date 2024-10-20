import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import ApiPage from './pages/ApiPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/list-page" element={<ListPage />} />
          <Route path="/data-page" element={<ApiPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
