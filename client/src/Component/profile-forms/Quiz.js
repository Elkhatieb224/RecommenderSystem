import React, { Fragment } from 'react';
import Questions from './Questions';
import './quiz.css';

const Quiz = () => {
  return (
    <div>
      <br />
      <br />
      <h1>الامتحان</h1>
      <br />
      <Fragment>
        <Questions />
      </Fragment>
    </div>
  );
};

export default Quiz;
