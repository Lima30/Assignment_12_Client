import { Alert } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
// import Distance from '../../Home/Distance/Distance';
// import PlaceOrder from '../../PlaceOrder/PlaceOrder';
import useAuth from '../../../hooks/useAuth';

const Booking = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const { user } = useAuth();
    // const [success, setSuccess] = useState(false);


    // const email = sessionStorage.getItem("email");

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
        // data.hero = "hero alom";
        // data.email = email;
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
            <img src={service.picture} alt="" />

            {/* <h2>this is booking: {serviceId}</h2>
            <br />


            <br />
            <br />

            <br />
            <PlaceOrder></PlaceOrder> */}
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
                {/* <input
                    {...register("price", { required: true })}
                    defaultValue={service?.Price}
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                // className="p-2 m-2 w-100"
                /> */}

                {/* <input
                    {...register("user", { required: true })}
                    defaultValue={user?.displayName}
                    className="p-2 m-2 w-100"
                /> */}



                <br />
                {/* <input
                    {...register("date")}
                    // placeholder="Name"
                    type="date"
                    className="p-2 m-2 w-100"
                />
                <br /> */}
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


                {/* <input
                    {...register("price", { required: true })}
                    defaultValue={service?.Price}
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                /> */}

                {/* <input
                    {...register("image", { required: true })}
                    defaultValue={service?.picture}
                    className="p-2 m-2"
                    className="p-2 m-2 w-100"
                /> */}
                <br />
                {/* <select {...register("model")} className="p-2 m-2 w-100">
                    <option value={service?.model}>{service?.model}</option>
                    <option value="premium">premium</option>
                    <option value="classic">classic</option>
                    <option value="business">business</option>
                </select> */}
                <br />

                {errors.exampleRequired && <span>This field is required</span>}

                {/* <input
                    type="submit"
                    value="Order Now"
                    className="btn btn-info w-50"
                /> */}
                <button onclick={onSubmit}>Order Now</button>
                {/* {success && <Alert severity="success">Made Admin successfully!</Alert>} */}
            </form>



        </div>


    );
};

export default Booking;