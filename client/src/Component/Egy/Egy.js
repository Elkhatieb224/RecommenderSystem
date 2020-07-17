import React, { Component } from 'react';
// import {BrowserRouter, Link } from 'react-router-dom';
import Data from './dataEgy.json';
import './Egy.css';

class Egy extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        {Data.map((uni) => {
          return (
            <div key={uni.id} className='card'>
              <a href={'/Egy/' + uni.id} className='btn btn-primary'>
                <button className='card-title'>{uni.name}</button>
                <img src={uni.image} className='card-img-top' alt='...' />
                <br />
              </a>
              <br />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Egy;
