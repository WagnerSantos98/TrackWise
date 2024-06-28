import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import DeliveryList from '../components/DeliveryList';
import AddDelivery from '../components/AddDelivery';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" exact component={DeliveryList} />
                <Route path="/add" component={AddDelivery} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
