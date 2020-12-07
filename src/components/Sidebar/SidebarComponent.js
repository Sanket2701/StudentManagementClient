import React, { Component } from 'react';
import { Nav, NavItem, NavbarBrand, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './SidebarComponent.css';
import history from '../../redux/history';

class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        localStorage.removeItem('username');
        // localStorage.removeItem('token');
        history.push('/login');
        window.location.reload(true);
    }

    render() {
        var username = localStorage.getItem('username');
        return (
            <div>
                <Nav className="sidebar">
                    <NavbarBrand className="sidebar-title">
                        <h1>Welcome,</h1>
                        <h3>{username}</h3>
                    </NavbarBrand>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/home">Dashboard</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/personaldetails">Personal Details</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/academics">Academics</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/internships">Internships</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/projectdetails">Project Details</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/onlinecertifications">Online Certifications</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/co-curriculars">Co-Curriculars</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/extra-curriculars">Extra-Curriculars</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/attendance">Attendance</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <NavLink className="nav-link sidebar-text" to="/settings">Settings</NavLink>
                    </NavItem>
                    <NavItem className="sidebar-item">
                        <Button className="nav-link sidebar-text" onClick={this.handleLogout}>Logout</Button>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Sidebar