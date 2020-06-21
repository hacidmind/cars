import React from 'react';

const Cars = ({cars, deleteCar}) => {
    // const { cars } = props;
    // const carList = cars.map((vehicle) => {
    //     if (vehicle.year > 2016) {
    //         return (
    //             <div className="car" key={vehicle.id}>
    //                 <div>Car Brand: {vehicle.brand}</div>
    //                 <div>Car Model: {vehicle.model}</div>
    //                 <div>Model Year: {vehicle.year}</div>
    //             </div>
    //         )
    //     } else {
    //         return null
    //     }
    // })
    const carList = cars.map(vehicle => {
        return vehicle.year > 0 ? (
            <div className="car" key={vehicle.id}>
                <div>Car Brand: {vehicle.brand}</div>
                <div>Car Model: {vehicle.model}</div>
                <div>Model Year: {vehicle.year}</div>
                <button onClick={() => { deleteCar(vehicle.id) }}>Delete Car</button>
            </div>
        ) : null;
    })
    return (
        <div className='car-list'>
            {carList}
        </div>
    )
}

export default Cars
