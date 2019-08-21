import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    sushis: [],
    eatenSushis: [],
    index: 0,
    money: 100
  };

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushi => this.setState({ sushis: sushi }));
  }

  moreClickButton = () => {
    if (this.state.index + 4 >= this.state.sushis.length) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 4 });
    }
  };

  sushiClickHandler = sushiObj => {
    if (sushiObj.price > this.state.money) {
      alert("out of money");
    } else {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushiObj],
        money: this.state.money - sushiObj.price
      });
    }
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.state.sushis}
          index={this.state.index}
          moreClickButton={this.moreClickButton}
          sushiClickHandler={this.sushiClickHandler}
          eatenSushis={this.state.eatenSushis}
        />
        <Table money={this.state.money} eatenSushis={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;
