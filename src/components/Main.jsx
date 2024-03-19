import React from 'react';
import search from '../assets/search.png';
import Logo from '../assets/moptro.png';

export default function Main() {
    return (
        <>
            <div className='container '>
                <div className='innerDiv'>
                    <div className='innerInnerDiv'>{length}</div>
                </div>
                <div className='form-group'><img src={Logo} alt="Logo" /></div>
            </div>
            <div className="form-group search ">
                <input type="search" className='seachInput' id="email" name="email" placeholder='Search with name' required />
            </div>
        </>
    )
}
