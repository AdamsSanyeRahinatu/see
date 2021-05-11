import {Link} from "react-router-dom"
const Navbar =()=> {
    return(
        <nav className="nav-items"> 
             <h1>ROUTER APP</h1>
             <div>
                 <Link to="/" className="items">Home </Link>
                 <Link to="/about" className="items">About</Link>
                 <Link to="/services" className="items">Services</Link>
             </div>
        </nav>
    );
}
export default Navbar;