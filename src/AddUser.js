import React from 'react'
import Sidebar from './Sidebar'
import './AddUser.css'
import "./Sidebar.css";

function AddUser() {
    return (
        <>
            <Sidebar />
            <div className='adduser'>
                <div className="top">
                    <h1>Add New User</h1>
                    <div />
                    <div className="form">


                        <select>

                            <option value="öğrenci">Öğrenci</option>
                            <option value="asistan">Asistan</option>
                            <option value="öğretim görevlisi">Öğretim görevlisi</option>
                        </select >


                        <div className="formInput">
                            <label>Name</label>
                            <input type="text" placeholder="Name"></input>
                        </div>
                        <div className="formInput">
                            <label>Surname</label>
                            <input type="text" placeholder="Surname"></input>
                        </div>
                        <div className="formInput">
                            <label>Email</label>
                            <input type="text" placeholder="Email"></input>
                        </div>
                        <div className="formInput">
                            <label>Username</label>
                            <input type="text" placeholder="Username"></input>
                        </div>

                        <button color="secondary">Send</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AddUser
