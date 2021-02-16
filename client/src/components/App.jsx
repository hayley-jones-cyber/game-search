import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from './home-page/search-results/SearchResults.jsx';

function App() {
  const [gameList, setGameList] = useState([]);

  const getGames = () => {
    axios.get('http://localhost:3000/api/games')
      .then((response) => {
        setGameList(response);
        console.log(response);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  useEffect(() => {
    getGames();
  })

  return (
    <div>
      <div>
        <h1>Game Search</h1>
      </div>
      < SearchResults gameList={gameList} />
      {/* <Filters /> */}
    </div>
  )
}

export default App;