import React , { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import './Navbar.css';

class Navbar extends Component {

    state = { clicked : false}

    handleClick = () => {
        this.setState({ clicked : !this.state.clicked })
    }

    render() {
        return(
            <nav className="NavbarItems">
                <h2><Link className="navbar-logo" to='/'>Shopping</Link></h2>
                <div className="menu-icon" onClick={this.handleClick}>
                    <li className={this.state.clicked ? 'fa fa-times' : 'fa fa-bars'}></li>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item , index) => {
                        if (item.title === 'Men'){
                            return (
                                    <div>
                                        <li key={index}>
                                            <NavLink className={item.cName} to={item.url}>
                                                {item.title}
                                            </NavLink>
                                            <div className="dropdown">
                                                <div className="dropdown-content">
                                                    <Link className="nav-link" to='/mentops'>Tops</Link>
                                                    <Link className="nav-link" to='/menbottoms'>Bottoms</Link>
                                                    <Link className="nav-link" to='/menaccessories'>Accessories</Link>
                                                    <Link className="nav-link" to='/menfeatures'>Features</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                            )
                        }
                        if (item.title === 'Women'){
                            return (
                                    <div>
                                        <li key={index}>
                                            <NavLink className={item.cName} to={item.url}>
                                                {item.title}
                                            </NavLink>
                                            <div className="dropdown">
                                                <div className="dropdown-content">
                                                    <Link className="nav-link" to='/womentops'>Tops</Link>
                                                    <Link className="nav-link" to='/womenbottoms'>Bottoms</Link>
                                                    <Link className="nav-link" to='/womenfeatures'>Features</Link>
                                                    <Link className="nav-link" to='/womenaccessories'>Accessories</Link>
                                                    <Link className="nav-link" to='/womendressesandjumpSuits'>Dresses & JumpSuits</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                            )
                        }
                        if (item.title === 'Kids'){
                            return (
                                    <div>
                                        <li key={index}>
                                            <NavLink className={item.cName} to={item.url}>
                                                {item.title}
                                            </NavLink>
                                            <div className="dropdown">
                                                <div className="dropdown-content">
                                                    <Link className="nav-link" to='/kidsgraphics'>Graphics</Link>
                                                    <Link className="nav-link" to='/kidszippers'>Zippers</Link>
                                                    <Link className="nav-link" to='/kidspants'>Pants</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                            )
                        }
                        return(
                            <li key={index}>
                                <NavLink className={item.cName} to={item.url}>
                                    {item.title}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar