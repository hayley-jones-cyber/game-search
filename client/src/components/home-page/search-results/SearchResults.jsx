import React from 'react';
import Result from './Result.jsx';

const SearchResults = (props) => {
  const { gameList } = props;
  const list = gameList.map((game) => {
    <div>
      <Result game={game} />
    </div>
  })
  return (
    <ul>{list}</ul>
  )
}

export default SearchResults;
