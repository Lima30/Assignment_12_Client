// import React from 'react';

// const Review = () => {
//     return (
//         <div>
//             <h2>This is Review</h2>
//         </div>
//     );
// };

// export default Review;


import React from 'react';
import { useForm } from 'react-hook-form';
import useFirebase from '../../hooks/useFirebase';
// import useFirebase from '../../hooks/useFirebase';

const Review = () => {
    const { user } = useFirebase();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/addReview", {
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
            <div>
                <h1 className="mt-5 text-center text-info">Please Add Review</h1>
                <div className="login-box w-25 m-auto mt-5">
                    <div className="event-box border border d-flex justify-content-center align-items-center">
                        <div className="login-form">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <br />
                                <input
                                    {...register("user", { required: true })}
                                    defaultValue={user?.displayName}
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />
                                <input
                                    {...register("description")}
                                    placeholder="Description"
                                    className="p-2 m-2"
                                    className="p-2 m-2 w-100"
                                />
                                <br />


                                <br />

                                {errors.exampleRequired && <span>This field is required</span>}

                                <input
                                    type="submit"
                                    value="Add"
                                    className="btn btn-info w-50"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;