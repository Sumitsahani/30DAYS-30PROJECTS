import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch('https://fakestoreapi.com/products');
        let data = await res.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <style>
        {`
          body {
            width: 100%;
            height: 100%;
            background-color: #faef5d;
            margin: 0;
            padding: 0;
            font-family: "Century Gothic", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }

          .main {
            max-width: 1200px;
            margin: 20px;
            padding: 20px;
            background-color: #1d2b53;
            border-radius: 15px;
            box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
            color: white;
          }

          .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
          }

          .card {
            background-color: white;
            color: black;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease;
          }

          .card:hover {
            transform: scale(1.05);
          }

          .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            border-radius: 10px;
          }

          .card h2 {
            font-size: 1.5rem;
            color: #1d2b53;
            margin: 10px 0;
          }

          .card p {
            font-size: 1rem;
            margin: 5px 0;
            color: #333;
          }

          .card .price {
            font-size: 1.2rem;
            color: #ff004d;
            margin-top: 10px;
          }

          .loading {
            font-size: 1.5rem;
            color: #ff004d;
          }
        `}
      </style>

      <div className="main">
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="cards">
            {data.map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h2>{item.title}</h2>
                <p>{item.description.substring(0, 100)}...</p>
                <p className="price">${item.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
