import React, { useContext } from 'react'

import mainLogo from '../assets/MainLogo.png'
import { Link } from 'react-router-dom';
export default function Login() {
    return (
        <form >
            <div className='container'>
                <div className="form-group">
                    <img src={mainLogo} alt="Main Logo" width="90px" height="90px" />
                </div>
                <h2>#We are Electric</h2>

                <div className="form-group">
                    <input type="email" id="email" name="email" placeholder='E-mail' required />
                </div>

                <div className="form-group">
                    <input type="password" id="password" name="password" placeholder='Password' required />
                </div>

                <div id="btn">
                <Link to="/home">
                    <button type="submit" className="btn">Login</button>
                </Link>
                </div>
                <p>Forget Password?</p>
            </div>
        </form>
    )

}



