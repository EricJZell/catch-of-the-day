import React from 'react';
import Order from './Order';
import Inventory from './Inventory';
import Menu from './Menu';
import sampleFishes from '../sample-fishes';
import base from '../base';


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    })
  }

  componentDidUpdate() {
    console.log("updtateddd ")
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    const fishes = { ...this.state.fishes };
    fishes[`fish${Date.now()}`] = fish;
    this.setState({
      fishes: fishes
    });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Add to order or update the number in order
    order[key] = order[key] + 1 || 1;
    // 3. Set new state
    this.setState({ order: order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <Menu addToOrder={this.addToOrder} fishes={this.state.fishes} />
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;
