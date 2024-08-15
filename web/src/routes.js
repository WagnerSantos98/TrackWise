import Header from './components/Header';
import Sidebar from './components/Sidebar';

const Routes = () => {
    return(
        <>
            <Header/>
            <div className="container-fluid h-100">
                <Sidebar/>
            </div>
            
        </>
    );
};

export default Routes;