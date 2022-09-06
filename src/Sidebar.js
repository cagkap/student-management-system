import React from 'react'

import { Link } from "react-router-dom";
import "./Sidebar.css";
import PersonIcon from '@mui/icons-material/Person';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">Student Management System</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <li>
                    <Link to="/users" style={{ textDecoration: "none" }}>

                        <p className="title">Users</p>
                    </Link>
                </li>
                <li>
                    <Link to="/users/add-user" style={{ textDecoration: "none" }}>
                        <PersonIcon className="icon" />
                        <span>Add User</span>
                    </Link>
                </li>

                <ul>
                    <Link to="/lectures" style={{ textDecoration: "none" }}>
                        <p className="title">Lectures</p>
                    </Link>
                    <li>
                        <Link to="/lectures/add-lecture" style={{ textDecoration: "none" }}>
                            <MenuBookIcon className="icon" />
                            <span>Add Lecture</span>
                        </Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar
