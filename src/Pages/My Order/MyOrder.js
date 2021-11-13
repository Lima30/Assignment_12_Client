import React, { useEffect, useState } from 'react';


import useAuth from '../../hooks/useAuth';


const MyOrder = () => {
    // const email = sessionStorage.getItem("email");
    const { user } = useAuth();
    const [services, setServices] = useState([]);

    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://rocky-river-51306.herokuapp.com/myOrders/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [control]);

    const handleDelete = (id) => {
        fetch(`https://rocky-river-51306.herokuapp.com/delteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    };

    return (
        <div>
            <h1>My orders </h1>

            <div className="services">
                <div className="row container">
                    {services?.map((pd) => (
                        <div className="col-md-4">
                            <div className="service border border p-3">
                                <div className="services-img ">
                                    <img className="w-100" src={pd?.picture} alt="" />
                                </div>
                                {/* <img src={pd?.picture} alt="" /> */}
                                <h6>{pd?.name}</h6>
                                {/* <h4>{pd?.model}</h4> */}
                                {/* <p>{pd?.description}</p> */}
                                <h3 className="text-black"> Cost :${pd?.price}</h3>

                                <button
                                    onClick={() => handleDelete(pd?._id)}
                                    className="btn btn-danger"
                                >
                                    Cancel
                                </button>

                                {/* <button className="btn btn-danger">Cancel</button> */}


                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyOrder;


