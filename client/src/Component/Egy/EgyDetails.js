import React, { Component } from 'react';
import Data from './InfoEgy.json';
import './Egy.css';

class EgyDetails extends Component {
  constructor(props) {
    super(props);
    console.log('ASD', this.props.match.params.id);
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

export default EgyDetails;
