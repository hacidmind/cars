import React, { Component } from 'react';

class AddCar extends Component {
    state = {
        brand: null,
        model: null,
        year: null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state); 
        this.props.addCar(this.state);

        // new codes
    }
   
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='brand'>Car Brand: </label>
                    <input type='text' id='brand' onChange={this.handleChange} />
                    <label htmlFor='model'>Car Model: </label>
                    <input type='text' id='model' onChange={this.handleChange} />
                    <label htmlFor='year'>Model Year: </label>
                    <input type='text' id='year' onChange={this.handleChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddCar


// onChange = {}
// onChange = {}
// onChange = {}