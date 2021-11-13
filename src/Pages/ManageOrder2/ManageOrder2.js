import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const ManageOrder2 = () => {
    const [services, setServices] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch("https://rocky-river-51306.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    console.log(services);


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
            <div className="container">
                <h1>Manage All Products </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Room Name</th>

                            <th>Image Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {services?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.name}</td>

                                <td>{pd.picture}</td>
                                <td>{pd.status}</td>
                                <button onClick={() => handleDelete(pd?._id)} className="btn bg-danger p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageOrder2;