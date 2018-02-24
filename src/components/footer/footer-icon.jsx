import React from 'react';
import PropTypes from "prop-types";

const FooterIcon = ({ link, icon }) => (
  <li className="list-inline-item mr-3">
    <a href={link}>
      <i className={`fa ${icon} fa-2x fa-fw`} />
    </a>
  </li>
);
FooterIcon.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string
};


export default FooterIcon;
