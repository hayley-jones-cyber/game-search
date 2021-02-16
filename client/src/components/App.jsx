import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from './home-page/search-results/SearchResults.jsx';
import Filters from './filters/Filters.jsx';

function App() {
  const [gameList, setGameList] = useState([]);
  const [platforms, setPlatforms] = useState([]);

  const getGames = () => {
    axios.get('http://localhost:3001/api/games')
      .then((response) => {
        setGameList(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const getPlatforms = () => {
    axios.get('http://localhost:3001/api/platforms')
      .then((response) => {
        console.log(response.data);
        setPlatforms(response.data)
      })
  }

  useEffect(() => {
    getGames();
    getPlatforms();
  }, [])

  return (
    <div>
      <div>
        <h1>Game Search</h1>
      </div>
      <button>Search</button>
      <div>
        <Filters platforms={platforms} setPlatforms={setPlatforms}/>
      </div>
      <div>
        <SearchResults gameList={gameList} />
      </div>
    </div>
  )
}

export default App;