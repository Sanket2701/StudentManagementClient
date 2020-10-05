import React, { Component } from 'react';
import { Nav, NavItem, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import './SidebarComponent.css';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <Nav className="sidebar">
                    <NavbarBrand className="sidebar-title">
                        <h1>Welcome,</h1>
                        <h3>Student Name</h3>
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
                        <NavLink className="nav-link sidebar-text" to="/login">Logout</NavLink>
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Sidebar