import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Footer = () => (
  <div>
    <hr />
    <div className="footer-panel">
      <div className="footer-note">
        <p>{"Andrew & Dan are badasses. Check out their circuit and coding journey on this project"}</p>
        <a href="" className="inline-link">HERE</a>
        <p>.</p>
      </div>
    </div>
  </div>
);

export default Footer
