import React, { Component } from "react";
import HomeTitle from "./../components/pages/home/home-title.jsx";
import HomeProfile from "./../components/pages/home/home-profile.jsx";
import PersonalInfo from "./../components/info-panel/personal-info.jsx";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class HomeContainer extends Component {

  render() {
    return (
      <div>
        <HomeTitle lang={this.props.language} />
        <div className="sep1" />
        <HomeProfile lang={this.props.language} />
        <PersonalInfo language={this.props.language} />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  language: PropTypes.string
};

function mapStateToProps(state) {
  return { language: state.languageReducer.language };
}

export default connect(mapStateToProps, {})(HomeContainer);
