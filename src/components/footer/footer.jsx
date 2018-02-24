import React from "react";
import PropTypes from "prop-types";
import FooterIcon from "./footer-icon.jsx";
import Parser from "html-react-parser";

const Footer = ({ title, icons = [] }) => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 h-100 text-center text-lg-left my-auto">
          <p className="text-muted small mb-4 mb-lg-0">{Parser(title)}</p>
        </div>
        <div className="col-lg-6 h-100 text-center text-lg-right my-auto">
          <ul className="list-inline mb-0">
            {icons.map(icon => {
              return (
                <FooterIcon key={icon.link} link={icon.link} icon={icon.code} />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  title: PropTypes.string,
  icons: PropTypes.array
};

export default Footer;
