import PropTypes from "prop-types";
import "./styles.css";

const Navbar = ({ className = "" }) => {
  return (
    <>
    <nav className="navbar">
        <div className="navbar-left">
            <div className="nav-icon marginRight">
                <img src="menu.png" alt="Search"/>
            </div>
            <a className="navbar-brand" href="#">SURGE</a>
            <ul className="nav-list">
                <li><a href="#">Phones</a></li>
                <li><a href="#">Tablets</a></li>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Watches</a></li>
                <li><a href="#">Drones</a></li>
            </ul>
        </div>
        <div className="navbar-right">
            <div className="nav-icon">
                <img src="search-interface-symbol.png" alt="Search"/>
            </div>
            <div className="nav-icon">
                <img src="wishlist.png" alt="Wishlist"/>
            </div>
            <div className="nav-icon">
                <img src="trolley.png" alt="Cart"/>
                <span className="notification">1</span>
            </div>
            <div className="nav-icon marginLeft">
                <img src="account.png" alt="Account"/>
            </div>
        </div>
    </nav>
    </>
  );
};

export default Navbar;