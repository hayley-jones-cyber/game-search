import React from 'react';
import Result from './Result.jsx';
import PropTypes from 'prop-types';

const SearchResults = (props) => {
  const { gameList } = props;
  const list = gameList.map((game, i) => {
    return (
      <div key={i}>
        <Result game={game} />
      </div>
    )
  })
  return (
    <ul>{list}</ul>
  )
}

SearchResults.propTypes =  {
  gameList: PropTypes.instanceOf(Array).isRequired
}

export default SearchResults;
