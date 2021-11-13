import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import useAuth from '../../hooks/useAuth';
import './Order.css';

const PlaceOrder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    const onSubmit = data => {
        // console.log(data)

        fetch('https://rocky-river-51306.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };
    return (
        <div>
            <h2>Please Add Details to Book Your Room</h2>
            <form className="placeorder-form" onSubmit={handleSubmit(onSubmit)}>


                <input placeholder="Name" defaultValue={service?.name} {...register("name")} />



                <input placeholder="Full Name" defaultValue={user.displayName} {...register("name")} />
                <br />
                <br />
                <input placeholder="Email Address" defaultValue={user.email} {...register("email", { required: true })} />

                {errors.email && <span className="bg-danger text-white">This field is required</span>}
                <br />
                <br />
                <input placeholder="Address" defaultValue="" {...register("Address")} />
                <br />
                <br />
                <input placeholder="City" defaultValue="" {...register("City")} />
                <br />
                <br />
                <input placeholder="Zip Code" defaultValue="" {...register("Zip Code")} />
                <br />
                <br />

                <input type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;