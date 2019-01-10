import React, { Component } from 'react';
import * as apiCalls from './api';

const ForcastItem = ({ cityName, temp }) => {
  return (
    <li>{cityName} {temp}</li>
  )
}

class ForcastList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forcasts: []
    }
  }

  componentWillMount() {
    this.loadForcasts();
  }

  async loadForcasts() {
    let forcasts = await apiCalls.getForcasts();
    console.log('got forcasts!!!!!', forcasts);
    this.setState({ forcasts: forcasts });
  }

  render() {
    const forcast = this.state.forcasts.map((forcast) => (
      <ForcastItem key={forcast._id} {...forcast} />
    ))
    return (
      <div>
        <h1>forcast Goes here!</h1>
        <ul>
          {forcast}
        </ul>
      </div>
    );
  }
}

export default ForcastList;
