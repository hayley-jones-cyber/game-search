import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
  const { game } = props;
  const { name } = game;
  return (
    <div>
      {name}
    </div>
  )
}

Result.propTypes = {
  game: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired
}

export default Result;
