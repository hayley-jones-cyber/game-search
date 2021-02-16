import React from 'react';

const Result = (props) => {
  const { game } = props;
  return (
    <div src={game.url}>
      {game.name}
    </div>
  )
}

export default Result;
