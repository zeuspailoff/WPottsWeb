import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {

    return (

        <nav id='nav'>
            <div className="logo-container">
                <img src='./public/logo/logo2.png' alt='logo panaderia' className='navBarLogo' />
                <h2>W.Potts & Sons</h2>
            </div>
            <ul className='links'>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/History" >History</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;