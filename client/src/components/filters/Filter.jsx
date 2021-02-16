import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
  const { list } = props;
  let filterButtons = list.map((option, i) => {
    return (
      <div key={i}>
        <button>{option.name}</button>
      </div>
    )
  })
  return (
    <ul>{filterButtons}</ul>
  )
}

Filter.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired
}

export default Filter;