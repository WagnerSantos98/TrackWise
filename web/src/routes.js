import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/css/style.css';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

const App = () => {
    return(
        <>
            <Header/>
            <div className="container-fluid h-100">
                <div className="row  h-100">
                    <Router>
                        <Sidebar/> 
                        <Routes>
                            <Route path="/veiculos"/>    
                        </Routes>  
                    </Router>
                </div>
            </div>
        </>
    );
};

export default App;