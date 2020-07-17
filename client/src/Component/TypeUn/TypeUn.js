import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './TypeUn.css';

class TypeUn extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/Egy' class='round green'>
              Egyptian
              <br />
              Universities
              <span class='round arabic'>
                الجامعات
                <br />
                المصرية
              </span>
            </Link>
          </li>

          <li>
            <Link to='/NonEgy' class='round yellow'>
              Universities
              <br />
              Outside <br />
              Egypt
              <span class='round arabic'>
                الجامعات
                <br />
                خارج
                <br />
                مصر
              </span>
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default TypeUn;
