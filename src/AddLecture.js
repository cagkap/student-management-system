import React from 'react'
import './AddUser.css'
import "./Sidebar.css";
import Sidebar from './Sidebar';

function AddLecture() {
    return (
        <>
            <Sidebar />
            <div className='adduser'>
                <div className="top">
                    <h1>Create New Class</h1>
                    <div />
                    <div className="form">
                        <div className="formInput">
                            <label className="type">Class Type</label>
                            <select>

                                <option value="öğrenci">Zorunlu</option>
                                <option value="asistan">Seçmeli</option>

                            </select >
                        </div>

                        <div className="formInput">
                            <label>Class Name</label>
                            <input type="text" placeholder="Class Name"></input>
                        </div>
                        <div className="formInput">
                            <label>Info</label>
                            <input type="text" placeholder="Info"></input>
                        </div>
                        <div className="formInput">
                            <label>Code</label>
                            <input type="text" placeholder="Code"></input>
                        </div>
                        <div className="formInput">
                            <label>Day</label>
                            <select>

                                <option value="öğrenci">Pazartesi</option>
                                <option value="asistan">Salı</option>
                                <option value="asistan">Çarşamba</option>
                                <option value="asistan">Perşembe</option>
                                <option value="asistan">Cuma</option>


                            </select >
                        </div>
                        <div className="formInput">
                            <label>Room</label>
                            <input type="text" placeholder="Room"></input>
                        </div>
                        <div className="formInput">
                            <label>Lecturer</label>
                            <input type="text" placeholder="Lecturer"></input>
                        </div>

                        <button color="secondary">Send</button>

                    </div>
                </div>

            </div>
        </>
    )
}

export default AddLecture
