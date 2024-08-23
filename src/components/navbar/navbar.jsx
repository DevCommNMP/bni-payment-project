import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo/logo.jpeg';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import FaChevronUp icon

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const togglePaymentDropdown = () => {
        setIsPaymentDropdownOpen(!isPaymentDropdownOpen);
    };

    return (
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="logo img" className="logoImg" />
            </div>
            <div className="nav-links">
                <a href="#member-application">Member Application Form</a>
                <a href="#interview-sheet">Interview Sheet</a>
                <a href="#commitment-sheet">Commitment Sheet</a>
                <a href="#eoi-form">EOI Form</a>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes className="icon-animation" /> : <FaBars className="icon-animation" />}
            </div>
            <div className={`side-menu ${isMenuOpen ? 'open' : 'close'}`}>
                <img src={logo} alt="logo img" className="side-menu-logo" style={{borderBottom:"1px solid #ccc"}}/>
                
                {/* First Dropdown */}
                <div className="dropdown">
                    <button className="dropdown-button" onClick={toggleDropdown} style={{alignItems:'center'}}>
                        Basic Services {isDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <div className={`dropdown-content ${isDropdownOpen ? 'open' : ''}`}>
                        <a href="#member-application" onClick={toggleMenu}>Member Application Form</a>
                        <a href="#interview-sheet" onClick={toggleMenu}>Interview Sheet</a>
                        <a href="#commitment-sheet" onClick={toggleMenu}>Commitment Sheet</a>
                        <a href="#eoi-form" onClick={toggleMenu}>EOI Form</a>
                    </div>
                </div>

                {/* Second Dropdown */}
                <div className="dropdown">
                    <button className="dropdown-button" onClick={togglePaymentDropdown} style={{alignItems:'center'}}>
                        All Payments {isPaymentDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    <div className={`dropdown-content ${isPaymentDropdownOpen ? 'open' : ''}`}>
                        <a href="#payment-link-1" onClick={toggleMenu}>New Member Payment</a>
                        <a href="#payment-link-2" onClick={toggleMenu}>Renewal Payment</a>
                        <a href="#payment-link-3" onClick={toggleMenu}>Renewal Payment With Late Fee </a>
                        <a href="#payment-link-4" onClick={toggleMenu}>All Training Payments</a>
                        <a href="#payment-link-4" onClick={toggleMenu}>Meeting Payment</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
