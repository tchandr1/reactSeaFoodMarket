import React from "react";
import { daysInWeek } from "date-fns/esm/fp";
import Header from "./Header" ;
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish"

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish) => {
    // Take a copy of the existing state
    const fishes = {...this.state.fishes}
    //Add the new fish
    fishes[`fish${Date.now()}`] = fish
    // Set the new fishes object to state
    this.setState({fishes})
  }

  loadSampleFishes = () =>{
    this.setState({fishes:sampleFishes})
  }

  addToOrder = (key) => {
    //Take a copy of the state order
    const order = {...this.state.order}
    //Add to order or increment the number in the order
    order[key] = order[key]+1 || 1
    //Call setState to update our state object
    this.setState({ order});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
            <Header tagline="Fresh Seafood Market" age={50}/>
            <ul className="fishes">
              {Object.keys(this.state.fishes)
              .map(key => 
              <Fish key={key} 
              index={key} 
              details={this.state.fishes[key]}
              addToOrder= {this.addToOrder}/>
              )}
            </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order}/>
        <Inventory 
        addFish={this.addFish}
        loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
