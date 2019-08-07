import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Footer = () => (
  <div className="content-panel">
    <div className="footer-note">
      <p>{"Andrew & Dan are badasses. Check out their circuit and coding journey on this project"}</p>
      <a href="https://github.com/andrewdansmarthome/smart_thermo" className="inline-link">HERE</a>
      <p>.</p>
    </div>
    <div className="footer-info">
      <h3>Developed by</h3>
      <div className="dev-section">
        <div className="dev-info">
          <h4>Andrew Trahan</h4>
          <a href="https://github.com/globalart19">GitHub</a>
          <a href="https://linkedin.com/andrewtrahan">LinkedIn</a>
        </div>
        <div className="dev-info">
          <h4>Dan Gutt</h4>
          <a href="https://github.com/">GitHub</a>
          <a href="https://linkedin.com/">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer
