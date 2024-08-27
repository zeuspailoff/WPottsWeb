import { Link } from 'react-router-dom';

const Nav = () => {

    return (

        <nav id='nav'>
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