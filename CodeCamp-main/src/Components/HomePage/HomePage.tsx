import React, { useState } from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [podatak, postaviPodatak] = useState({
    body: "",
    id: null,
    title: "",
    userId: null,
  });
  const [id, setId] = useState(1);

  // Function to fetch data from the URL
  const fetchData = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(json => postaviPodatak(json))
      .catch(error => console.error('Error fetching data:', error));
  };

  console.log(podatak);

  return (
    <div>
      {/* Input to specify ID */}
      <h3 className='naslov'>Unesi Id:</h3>
      <input
        type="number"
        value={id}
        onChange={(e) => setId(Number(e.target.value))}
        placeholder="Enter ID"
        className="id-input"
        min={1}
        max={100}
      />

      {/* Button to trigger fetch function */}
      <button className="button fetch-button" onClick={fetchData}>
        Dohvati podatke
      </button>
      <p>Naslov: {podatak.title}</p>

      {/* Display fetched data */}
      <div className="fetched-data">
        {podatak.id !== null ? (
          <pre>{JSON.stringify(podatak, null, 2)}</pre>
        ) : (
          <p>Nema podataka.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;