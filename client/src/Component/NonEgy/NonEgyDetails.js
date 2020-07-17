import React, { Component } from 'react';
import Data from './InfoNonEgy.json';

class EgyNonDetails extends Component {
  constructor(props) {
    super(props);
    this.uni = Data.find((uni) => uni.id == this.props.match.params.id);
  }

  render() {
    return (
      <>
        {this.uni ? (
          <div key={this.uni.id} className='card'>
            <button className='card-title'>{this.uni.info}</button>
            <button className='card-title'>{this.uni.faculties}</button>
            <button className='card-title'>{this.uni.location}</button>
            <br />
          </div>
        ) : (
          <div>الجامعة غير موجوده!!</div>
        )}
      </>
    );
  }
}

export default EgyNonDetails;
