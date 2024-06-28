import React, { useState } from 'react';
import axios from 'axios';

const AddDelivery = () => {
    const [formData, setFormData] = useState({
        pickup_location: '',
        delivery_location: '',
        status: '',
        driver_id: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/api/deliveries', formData)
            .then(response => console.log(response.data))
            .catch(error => console.error(error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="pickup_location"
                placeholder="Pickup Location"
                value={formData.pickup_location}
                onChange={handleChange}
            />
            <input
                type="text"
                name="delivery_location"
                placeholder="Delivery Location"
                value={formData.delivery_location}
                onChange={handleChange}
            />
            <input
                type="text"
                name="status"
                placeholder="Status"
                value={formData.status}
                onChange={handleChange}
            />
            <input
                type="text"
                name="driver_id"
                placeholder="Driver ID"
                value={formData.driver_id}
                onChange={handleChange}
            />
            <button type="submit">Add Delivery</button>
        </form>
    );
};

export default AddDelivery;
