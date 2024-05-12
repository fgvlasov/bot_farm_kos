import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [price, setPrice] = useState(0.0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prevPrice) => prevPrice + 0.001);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="center">
          <div className="circle">
            <p>F</p>
          </div>
          <p>@ted_beard</p>
          <p>B {price.toFixed(3)}</p>
        </div>
        <div className="button-container">
          <button className="button">Farming B {price.toFixed(3)}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
