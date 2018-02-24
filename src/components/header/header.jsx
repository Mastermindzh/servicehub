import React from 'react';
import PropTypes from "prop-types";

const Header = ({text, onChange, currentValue}) => {

  return (
    <header className="masthead text-white text-center">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-xl-9 mx-auto">
          <h1 className="mb-5">
            {text}
          </h1>
        </div>
        <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
          <form>
            <div className="form-row">
              <div className="col-12 col-md-12 mb-0 mb-md-0">
                <input
                  onChange={onChange}
                  value={currentValue}
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter service name"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </header>
  );
};

Header.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func,
  currentValue: PropTypes.string
};

export default Header;
