import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './home.css';

import TypeUn from '../TypeUn/TypeUn';

const home = ({ isAuthenticated }) => {
  return (
    <div>
      <p className='home'>
        الجامعات و الكليات كتير اعرف انت عاوز ايه عشان تبدا صح
      </p>
      <TypeUn />
    </div>
  );
};

home.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(home);
