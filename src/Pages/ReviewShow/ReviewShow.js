import React, { useEffect, useState } from 'react';
import './RviewShow.css'

const ReviewShow = () => {
    const [review, setReview] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReview(data));
        // .then(data => {
        //     const slicedData = data.slice(0, 6)
        //     setServices(slicedData)
        // })
    }, []);


    //     useEffect(() => {
    //         fetch('http://localhost:5000/review')
    //             .then(res => res.json())
    //             .then(data => setReview(data));
    //     })
    // },[]);


    return (
        <div>
            <h2>CUSTOMER REVIEW</h2>

            {/* <div id="review-container">
                {review?.map((pd) => (
                    <div className="review-container">
                        <div className=" bg-info border border p-3 ">

                            <h6 className="text-black">{pd?.user}</h6>

                            <h3 className="text-black"> {pd?.description}</h3>




                        </div>
                    </div>
                   

                ))}

            </div> */}


            <div className="services">
                <div className="row container">
                    {review?.map((pd) => (
                        <div className="col-md-4 col-lg-4">
                            <div className="service border border p-3">


                                <h2>{pd?.user}</h2>

                                <h3 className="text-dark"> {pd?.description}</h3>






                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default ReviewShow;