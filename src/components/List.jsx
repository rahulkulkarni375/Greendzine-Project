import React from 'react';
import Navbar from './Navbar';
import Logo from '../assets/moptro.png';
import productivity from '../assets/productivity.js';


export default function List() {
    return (
        <>
            <Navbar />
            <div className='container '>
                <div className='innerDiv'>
                    <div className='innerInnerDiv'>{productivity.length}</div>
                </div>
                <div className='form-group'><img src={Logo} alt="Logo" /></div>
            </div>
            <div className="form-group search ">
                <input type="search" className='seachInput' id="email" name="email" placeholder='Employee Productivity Dashboard' required />
            </div>
            <div className='card'>
                {productivity.map(item => {
                    return (
                        <>
                        <p>Productivity on {item.day1[1]}<span className='percentage'>{item.day1[0]}</span></p>
                        <div className="progress-bar" style={{ width: `${item.day1[0]}`+"%" }}>
                            <div className="progress-div progress"></div>
                        </div>

                        <p>Productivity on {item.day2[1]}<span className='percentage'>{item.day2[0]}</span></p>
                        <div className="progress-bar" style={{ width: `${item.day2[0]}`+"%" }}>
                            <div className="progress-div progress"></div>
                        </div>

                        <p>Productivity on {item.day3[1]}<span className='percentage'>{item.day3[0]}</span></p>
                        <div className="progress-bar" style={{ width: `${item.day3[0]}`+"%" }}>
                            <div className="progress-div progress"></div>
                        </div>

                        <p>Productivity on {item.day4[1]}<span className='percentage'>{item.day4[0]}</span></p>
                        <div className="progress-bar" style={{ width: `${item.day4[0]}`+"%" }}>
                            <div className="progress-div progress"></div>
                        </div>

                        <p>Productivity on {item.day5[1]}<span className='percentage'>{item.day5[0]}</span></p>
                        <div className="progress-bar" style={{ width: `${item.day5[0]}`+"%" }}>
                            <div className="progress-div progress"></div>
                        </div>

                        <p>Productivity on {item.day6[1]}<span className='percentage'>{item.day6[0]}</span></p>
                        <div className="progress-bar" style={{ width: `${item.day6[0]}`+"%" }}>
                            <div className="progress-div progress"></div>
                        </div>
                        
                        </>
                    );
                })}
            </div>
        </>
    )
}
