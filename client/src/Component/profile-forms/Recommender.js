import React from 'react';
import { Link } from 'react-router-dom';

const Recommender = () => {
  return (
    <div>
      احنا بنقترح عليك كلية...
      <div>
        <Link to='/'>
          <button> الرجوع للصفحةالرئيسية</button>
        </Link>
      </div>
    </div>
  );
};

export default Recommender;
