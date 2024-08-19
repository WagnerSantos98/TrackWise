import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/css/style.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
//import Login from './components/Login';

import Entregas from './pages/Entregas';
import Veiculos from './pages/Veiculos';

const App = () => {
    return(
        <>
            <Header/>
            <div className="container-fluid h-100">
                <div className="row  h-100">
                    <Router>
                        <Sidebar/>
                        <Routes>
                            <Route path="/" excat element={<Entregas/>}/>     
                            <Route path="/veiculos" excat element={<Veiculos/>}/>     
                        </Routes>  
                    </Router>
                </div>
            </div>
        </>
    );
};

export default App;