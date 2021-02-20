import React from 'react';
import Filter from './Filter.jsx';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const {
    platforms,
    addFilter,
    removeFilter,
  } = props
  return (
    <div>
      <Filter
        list={platforms}
        addFilter={addFilter}
        removeFilter={removeFilter}
      />
    </div>
  )
}

Filters.propTypes = {
  platforms: PropTypes.instanceOf(Array).isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired
}

export default Filters;