import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://rocky-river-51306.herokuapp.com/products')
            .then(res => res.json())
            // .then(data => setServices(data));
            .then(data => {
                const slicedData = data.slice(0, 6)
                setServices(slicedData)
            })
    }, []);

    return (
        <div id="services">
            <h2 className="text-success mt-5">Products</h2>
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

export default Services;