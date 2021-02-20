import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './filters.module.css';

class Option extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterOn: false
    }
  }


  toggleFilter() {
    if (!this.state.filterOn) {
      this.setState({
        filterOn: true
      })
      this.props.addFilter(this.props.option.id)
      console.log(`${this.props.option.name} Filter on`)
      document.getElementById(`${this.props.option.name}`).classList.add('filterOn');
    } else {
      this.setState({
        filterOn: false
      })
      this.props.removeFilter(this.props.option.id)
      console.log(`${this.props.option.name} Filter off`)
      document.getElementById(`${this.props.option.name}`).classList.remove('filterOn');
    }
  }



  render() {
    const {
      option,
    } = this.props;
    return (
      <div id={option.name}>
        <button onClick={this.toggleFilter.bind(this)}>{option.name}</button>
      </div>
    )
  }
}

Option.propTypes = {
  option: PropTypes.object.isRequired,
  addFilter: PropTypes.func.isRequired,
  removeFilter: PropTypes.func.isRequired
}

export default Option;
