import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import Services from '../Home/Services/Services';
import './Explore.css'

const Explore = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://rocky-river-51306.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setServices(data));
        // .then(data => {
        //     const slicedData = data.slice(0, 3)
        //     setServices(slicedData)
        // })
    }, []);
    return (
        <div id="services">
            <h2 className="text-info mt-5">More Products</h2>
            <div className="service-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Explore;