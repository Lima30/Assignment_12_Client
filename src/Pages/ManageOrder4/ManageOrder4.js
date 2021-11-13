import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder4 = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");

    const handleStatus = (e) => {
        setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
        fetch("https://rocky-river-51306.herokuapp.com/allOrders")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);
    // const status = "apporved";
    const handleUpdate = (id) => {
        fetch(`https://rocky-river-51306.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        });

        console.log(id);
    };
    return (
        <div>
            <h2>Manage Orders</h2>
            <h2>All Orders: {orders.length}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Title</th>
                        <th>Event description</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>
                            <td>
                                <input
                                    onChange={handleStatus}
                                    type="text"
                                    defaultValue={pd.status}
                                />
                            </td>
                            {/* <button className="btn bg-danger p-2">Delete</button> */}
                            <button
                                onClick={() => handleUpdate(pd._id)}
                                className="btn bg-success p-2"
                            >
                                Update
                            </button>
                        </tr>
                    </tbody>
                ))}
            </Table>

        </div>
    );
};

export default ManageOrder4;