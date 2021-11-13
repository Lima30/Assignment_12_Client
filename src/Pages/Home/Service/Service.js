import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import Booking from '../../Booking/Booking/Booking';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, picture } = service;
    return (
        <div className="service pb-3">
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h5>Price: ${price}</h5>
            <p className="px-3">{description}</p>

            <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Buy Now </button>
            </Link>




        </div>
    );
};

export default Service;