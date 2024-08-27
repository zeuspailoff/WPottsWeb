import { Link } from 'react-router-dom';

const Nav = () => {

    return (

        <nav id='nav'>
            <div>
                <img src='./public/logo/logo.png' alt='logo panaderia' />
                <h2>W.Potts & Sons</h2>
            </div>
            <ul >
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >History</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;