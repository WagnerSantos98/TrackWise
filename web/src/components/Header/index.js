import person from '../../assets/img/person.png'
const Header = () =>{
    return(
        <header className="container-fluid d-flex justify-content-end">
            <div className="d-flex align-items-center">
                <div>
                    <span className="d-block m-0 p-0 text-white">Track Wise</span>
                    <small className="m-0 p-0">Admin</small>
                </div>
                <img src={person}/>
                <span class="mdi mdi-chevron-down text-white"></span>
            </div>
        </header>
    );
}

export default Header;