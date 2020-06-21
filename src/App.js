import React, {Component} from 'react';
import './App.css';
import Cars from './cars';
import AddCar from './AddCar'

class App extends Component {
  state = {
    cars: [
      { brand: 'Mercedes', model: 'CLA', year: 2015, id:1 },
      { brand: 'BMW', model: '5 series', year: 2017, id:2 },
      { brand: 'Tesla', model: 'Model 3', year: 2019, id:3 }
    ]
  }
  addCar = (motor) => {
    console.log(motor);
    motor.id = Math.random();
    
    // let cars = [...this.state.cars, motor]
    // this.setState({
    //   cars: cars
    // })  
    
    // if (!motor) {
    //   return 'Enter valid value to add item'  //our error message
    // } else if (this.state.cars.indexOf(motor) > -1) {
    //   return 'This option already exist'
    // }
    if (this.state.cars.indexOf(motor) > -1) {
      return ''
    }
    
    this.setState((prev) => {
      return {
        cars: prev.cars.concat([motor])
      }
    }) 
    
  }
  deleteCar = (id) => {
    // console.log(id);
    let cars = this.state.cars.filter(car => {
      return car.id !== id
    });
    this.setState({
      cars: cars
    })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Heading">Hello and welcome brethrens to REACT</h1>
        <Cars deleteCar={this.deleteCar} cars={this.state.cars} />
        <AddCar addCar={this.addCar} />
      </div>
    );
  }
}

export default App;
