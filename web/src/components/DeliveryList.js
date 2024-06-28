import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeliveryList = () => {
    const [deliveries, setDeliveries] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/api/deliveries')
            .then(response => setDeliveries(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2>Delivery List</h2>
            <ul>
                {deliveries.map(delivery => (
                    <li key={delivery.id}>
                        {delivery.pickup_location} to {delivery.delivery_location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DeliveryList;
