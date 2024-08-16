import { Link } from 'react-router-dom';
import logo from '../../assets/img/logo.png';

const Sidebar = () =>{
    return(
        <sidebar className="col-2 h-100">
           <img src={logo} className="img-fluid px-3 py-4"/>
           <ul className="p-0 m-0">
                <li>
                    <Link to="/">
                        <span className="mdi mdi-archive-marker"></span>
                        <text>Entregas</text>
                    </Link>
                </li>
                <li>
                    <Link to="/motoristas">
                        <span className="mdi mdi-card-account-details"></span>
                        <text>Motoristas</text>
                    </Link>
                </li>
                <li>
                    <Link to="veiculos">
                        <span className="mdi mdi-car-back"></span>
                        <text>Veículos</text>
                    </Link>
                </li>
                <li>
                    <Link to="rotas">
                        <span className="mdi mdi-routes"></span>
                        <text>Rotas</text>
                    </Link>
                </li>
           </ul>
        </sidebar>
    );
}

export default Sidebar;