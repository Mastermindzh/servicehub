import React from 'react';
import PropTypes from "prop-types";

const ItemContainer = ({children}) => {
  return (

    <section className="features-icons text-center">
      <div className="container">
          {children}
      </div>
    </section>
  );
};

ItemContainer.propTypes = {
  children: PropTypes.any // eslint-disable-line react/forbid-prop-types
};

export default ItemContainer;
