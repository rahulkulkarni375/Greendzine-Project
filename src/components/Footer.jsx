import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
        <button type="button"  id="home" name="home">Home</button>
        <button type="button"  id="contact" name="contact"><Link style={{textDecoration : "none"  , color : "black"}}to="/list">Details</Link></button>
    </div>
  )
}
