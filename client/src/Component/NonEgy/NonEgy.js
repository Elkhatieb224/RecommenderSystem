import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Data from './dataNonEgy.json';
import './NonEgy.css';

class NonEgy extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        {Data.map((uni) => {
          return (
            <div key={uni.id} className='card'>
              <Link to={'/NonEgy/' + uni.id} className='btn btn-primary'>
                <button className='card-title'>{uni.name}</button>
                <img src={uni.image} className='card-img-top' alt='...' />
                <br />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NonEgy;
