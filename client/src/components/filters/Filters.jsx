import React from 'react';
import Filter from './Filter.jsx';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const { platforms } = props
  return (
    <div>
      <Filter list={platforms}/>
    </div>
  )
}

Filters.propTypes = {
  platforms: PropTypes.instanceOf(Array).isRequired,
}

export default Filters;