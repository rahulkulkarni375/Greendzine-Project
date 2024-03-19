import React, { useState } from 'react';
import EMPLOYEE_DATA from '../assets/data.js';
import Navbar from './Navbar.jsx';
import Main from './Main.jsx';
import Footer from './Footer.jsx';

export default function Home() {
    const [data, setData] = useState(EMPLOYEE_DATA);
    const length = data.length;

    return (    
        <>
        <Navbar />
        <Main />
            {
                data.map(item => {
                    return (
                        <div className='card' key={item.empId}>
                            <p id='counter'>{item.empId}</p>
                            <p id="emp-id">Emp ID : {item.empId}</p>
                            <p id="emp-name">Name : {item.name}</p>
                            <p>DOB : <span id="emp-dob">{item.dob}</span></p>
                            <p>Role : <span id="emp-role">{item.role}</span></p>
                        </div>
                    )
                })
            }
        <Footer/>
    </>
    )
}


