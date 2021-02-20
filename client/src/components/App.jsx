import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchResults from './home-page/search-results/SearchResults.jsx';
import Filters from './filters/Filters.jsx';
import { platforms } from '../../../server/query-data.js';

function App() {
  const [gameList, setGameList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const getAllGames = () => {
    axios.get('http://localhost:3001/api/games')
      .then((response) => {
        setGameList(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
  };

  const getFilteredGames = (queryParams) => {
    let newList = gameList.filter((game) => {
      if (!game.platforms || !game.name) {
        return false;
      }
      for (let i = 0; i < queryParams.length; i++) {
        for (let j = 0; j < game.platforms.length; j++) {
          if (queryParams[i] === game.platforms[j]) {
            return true;
          }
        }
      }
    })
    console.log('filtered list arr: ', newList);
    setGameList(newList);
  }

  const addFilter = (filter) => {
    let newValue = [filter]
    setFilterList(prevState => {
      return [...prevState, ...newValue]
    })
  }

  const removeFilter = (filter) => {
    let newList = filterList.filter(id => id !== filter);
    console.log(`${newList} should not include: ${filter}`);
    setFilterList(newList);
  }

  useEffect(() => {
    if (filterList.length) {
      getFilteredGames(filterList);
    } else {
      getAllGames();
    }
  }, [filterList])

  useEffect(() => {
    getAllGames();
  }, [])

  return (
    <div>
      <div>
        <h1>Game Search</h1>
      </div>
      <div>
        <Filters
          platforms={platforms}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
      </div>
      <div>
        <SearchResults gameList={gameList} />
      </div>
    </div>
  )
}

export default App;