import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';

import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();


    useEffect(() => {
        fetch(`https://rocky-river-51306.herokuapp.com/products/${serviceId}`)
            .then((res) => res.json())
            .then((data) => setService(data));

    }, []);

    // console.log(service);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        console.log(data);



        fetch("https://rocky-river-51306.herokuapp.com/confirmOrder", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        console.log(data);
    };


    return (
        <div>
            <h2>Details of: {service.name}</h2>
            <h2>Price: ${service.price}</h2>
            <img className="img-fluid" src={service.picture} alt="" />


            <h1>booking Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("name", { required: true })}
                    defaultValue={service?.name}
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"

                />
                <input
                    {...register("price", { required: true })}
                    defaultValue={service?.price}
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                // className="p-2 m-2 w-100"
                />
                <input
                    {...register("image", { required: true })}
                    defaultValue={service?.picture}
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                // className="p-2 m-2 w-100"
                />

                <input
                    {...register("user", { required: true })}
                    defaultValue={user?.displayName}
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                />

                <input
                    {...register("email", { required: true })}
                    defaultValue={user?.email}
                    className="p-2 m-2 w-100"
                />

                <input
                    {...register("address")}
                    placeholder="address"
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                />
                <input
                    {...register("Phone Number")}
                    placeholder="Phone Number"
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                />



                <br />

                {errors.exampleRequired && <span>This field is required</span>}


                <button onclick={onSubmit}>Order Now</button>
                {/* {success && <Alert severity="success">Made Admin successfully!</Alert>} */}
            </form>



        </div>


    );
};

export default Booking;