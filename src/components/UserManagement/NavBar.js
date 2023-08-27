import { Component } from "react";
import { MenuItems } from "./menuItems";
import { Link } from "react-router-dom";

import "../../styles/UserManagement/NavBar.css"

class Navbar extends Component {
  state = {clicked: false}
  
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Peace Bank</h1>
        
        <div className="menu-icons" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item,index) => {
            return (
              <li key={index}>
            <Link to={item.url} className={item.cName}><i className={item.icon}></i>{item.title}</Link>
              </li>
            )
          })}
                    <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>

                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;