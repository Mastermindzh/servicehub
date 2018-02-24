import React, { Component } from 'react';
import PropTypes from "prop-types";

class Item extends Component {

  constructor(props){
    super(props);

    this.state = {
      online: true,
      pinging: false,
      interval: ''
    };

    this.ping = this.ping.bind(this);
  }

  componentDidMount(){
    this.ping();
    let interval = setInterval(this.ping,5000);
    this.setState({interval: interval});
  }

  componentWillUnmount(){
    clearInterval(this.state.interval);
  }

  ping(){

    fetch(this.props.link, {
      mode: 'no-cors',
      method: 'get'
    }).then(() => {
      this.setState({online:true});
    }).catch(() => {
      this.setState({online:false});
    });

  }

  render() {

    const { link, image, name, background, size } = this.props;

    let colName = "col-lg-";

    if(size > 0 && size < 13){
      colName+=size;
    }else{
      colName+="4";
    }

    return (
      <a href={link} className={colName + " " + (this.state.online ? "online" : "offline")}>
        <div className="item" style={{ background: background }}>
          <img src={image} alt={name} />
        </div>
      </a>
    );
  }
}

Item.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf([1, 2, 3])
};


export default Item;
