import React from "react";
import Footer from "./footer/footer.jsx";
import Header from "./header/header.jsx";
import ItemContainer from "./items/item-container.jsx";
import Item from "./items/item.jsx";
import FlipMove from 'react-flip-move';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search: "",
      enterLeaveAnimation: 'fade',
      config: {
        footerText: "",
        headerText: "",
        icons: [
        ],
        items: [

        ]
      }
    };

    this.changeSearch = this.changeSearch.bind(this);
  }

  componentDidMount() {
    let url = `${window.location.protocol}//${window.location.host}/data/data.json`;

    fetch(url).then(response => response.json()).then(result => {
      this.setState({ config: Object.assign(this.state.config, result) });
    });
  }

  changeSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    let config = this.state.config;

    return (
      <div>
        <Header text={config.headerText} onChange={this.changeSearch} currentValue={this.state.search} />
        <ItemContainer>
          <FlipMove className="row" enterAnimation="elevator">
            {config.items.filter(item =>
              item.title.toLowerCase().includes(this.state.search.toLowerCase())).map(item => {
                return (<Item
                  key={item.title}
                  link={item.link}
                  image={item.image}
                  name={item.title}
                  background={item.background}
                  size={item.size}
                />);
              })}
          </FlipMove>
        </ItemContainer>
        <Footer
          title={config.footerText}
          icons={config.icons}
        />
      </div>
    );
  }
}

export default App;
