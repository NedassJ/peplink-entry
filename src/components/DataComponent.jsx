import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DataComponent = () => {
  const [apiData, setApiData] = useState(null);
  const [lastFetched, setLastFetched] = useState(null);
  const [nextFetchIn, setNextFetchIn] = useState(15);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setApiData(response.data);
      setLastFetched(new Date().toLocaleString());
      setNextFetchIn(15);
      console.log(apiData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
    const fetchInterval = setInterval(fetchData, 15000);
    const countdownInterval = setInterval(() => {
      setNextFetchIn(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(fetchInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  return (
    <div className="api-page">
      <h1>Data from public API</h1>
      {apiData ? (
        <div className="api-container">
          <img src={apiData.icon_url} alt="Chuck Norris Avatar" className="api-icon" />
          <p>{apiData.value}</p>
          <br />
          <p><strong>ID:</strong> {apiData.id}</p>
          <p><strong>Categories:</strong> {Array.isArray(apiData.categories) && apiData.categories.length > 0 ? apiData.categories.join(', ') : 'None'}</p>
          <p><strong>Last Fetched:</strong> {lastFetched}</p>
          <p><strong>Next fetch in:</strong> {nextFetchIn} seconds</p>
          <br />
          <br />
          <p><strong>Created at:</strong> {apiData.created_at}</p>
          <p><strong>Updated at:</strong> {apiData.updated_at}</p>
          <p><strong>URL:</strong> {apiData.url}</p>
          <p><strong>Icon URL:</strong> {apiData.icon_url}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Link to="/">
        <button className="back-button">Back to Main Page</button>
      </Link>
    </div>
  );
};

export default DataComponent;