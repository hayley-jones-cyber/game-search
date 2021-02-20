import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option.jsx';

const Filter = (props) => {
  const {
    list,
    addFilter,
    removeFilter
  } = props;
  let filterButtons = list.map((option, i) => {
    return (
      <div key={i}>
        <Option
          option={option}
          addFilter={addFilter}
          removeFilter={removeFilter}
        />
      </div>
    )
  })
  return (
    <ul>{filterButtons}</ul>
  )
}

Filter.propTypes = {
  list: PropTypes.instanceOf(Array).isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired
}

export default Filter;