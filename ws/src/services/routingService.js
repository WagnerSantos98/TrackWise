const axios = require('axios');

const optimizeRoute = async (deliveries) => {
    const waypoints = deliveries.map(d => `${d.pickup_location}|${d.delivery_location}`).join('|');
    const apiUrl = `https://maps.googleapis.com/maps/api/directions/json?origin=${deliveries[0].pickup_location}&destination=${deliveries[deliveries.length - 1].delivery_location}&waypoints=${waypoints}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    try {
        const response = await axios.get(apiUrl);
        return response.data.routes[0].overview_polyline.points;
    } catch (error) {
        throw new Error('Error optimizing route');
    }
};

module.exports = { optimizeRoute };
