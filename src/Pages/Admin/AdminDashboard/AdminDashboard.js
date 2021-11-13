import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import AddServices from '../../AddServices/AddServices';
import Services from '../../Home/Services/Services';
import ManageOrder2 from '../../ManageOrder2/ManageOrder2';
import ManageOrder4 from '../../ManageOrder4/ManageOrder4';
import MyOrder from '../../My Order/MyOrder';
import Payment from '../../Payment/Payment';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Box from '@mui/material/Box';
import Review from '../../Review/Review';

const AdminDashboard = () => {
    const [control, setControl] = useState("");
    const { admin } = useAuth();
    console.log(control);

    console.log(control);


    return (
        <div className="admin-container">
            <div className="dashboard">
                <div className="admin-box">
                    <div className="row admin-container">
                        <div className="col-md-3 ">
                            <div className="admin-area p-1">
                                <h6>Dashboard</h6>
                                <div className="all-menu mt-5">
                                    <li
                                        onClick={() => setControl("payment")}
                                        className="admin-menu p-2"
                                    >
                                        Payment
                                    </li>
                                    <li
                                        onClick={() => setControl("myOrder")}
                                        className="admin-menu p-2"
                                    >
                                        My Order
                                    </li>
                                    <li
                                        onClick={() => setControl("review")}
                                        className="admin-menu p-2"
                                    >
                                        Review
                                    </li>




                                    {/* <li
                                        onClick={() => setControl("addServices")}
                                        className="admin-menu p-2"
                                    >
                                        Add Services
                                    </li>

                                    <li
                                        onClick={() => setControl("services")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Services
                                    </li>
                                    <li
                                        onClick={() => setControl("ManageOrder4")}
                                        className="admin-menu p-2"
                                    >
                                        Manage Orders
                                    </li>
                                    <li
                                        onClick={() => setControl("status")}
                                        className="admin-menu p-2"
                                    >
                                        Orders Status
                                    </li>

                                    <li
                                        onClick={() => setControl("makeadmin")}
                                        className="admin-menu p-2"
                                    >
                                        Make Admin
                                    </li> */}
                                    {
                                        admin && <Box>

                                            <li
                                                onClick={() => setControl("addServices")}
                                                className="admin-menu p-2"
                                            >
                                                Add A Products
                                            </li>

                                            <li
                                                onClick={() => setControl("services")}
                                                className="admin-menu p-2"
                                            >
                                                Manage All Products
                                            </li>
                                            <li
                                                onClick={() => setControl("ManageOrder4")}
                                                className="admin-menu p-2"
                                            >
                                                Manage Prodcuts Status
                                            </li>
                                            <li
                                                onClick={() => setControl("status")}
                                                className="admin-menu p-2"
                                            >
                                                Orders Status (not working)
                                            </li>

                                            <li
                                                onClick={() => setControl("makeadmin")}
                                                className="admin-menu p-2"
                                            >
                                                Make Admin
                                            </li>

                                        </Box>
                                    }


                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 text-center  text-center">
                            {/* <h1>render your components</h1> */}
                            {control === "review" && <Review></Review>}


                            {control === "payment" && <Payment></Payment>}
                            {control === "myOrder" && <MyOrder></MyOrder>}
                            {/* {control === "services" && <Services></Services>} */}
                            {control === "services" && <ManageOrder2></ManageOrder2>}


                            {control === "ManageOrder4" && <ManageOrder4></ManageOrder4>}


                            {/* {control === "MangeOrder" && <ManageOrder2></ManageOrder2>} */}

                            {control === "addServices" && <AddServices></AddServices>}

                            {control === "makeadmin" && <MakeAdmin></MakeAdmin>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;