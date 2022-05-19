import React from "react";
import { Link } from "react-router-dom";
import "./Styles.css"

export default function Navbar() {
  return (
      <>
      {/* <div className="Container">
      <Link to="/">
        <span className="item">Home</span>
      </Link>
      <Link to="student">
        <span className="item">Student</span>
      </Link>
      <Link to="contact">
        <span className="item">Contact Us</span>
      </Link>
    </div> */}

    <ul className="nav">
        <li> <Link to="/" style={{textDecoration:"none"}}>
        <span className="item">Home</span>
      </Link></li>
      <li><Link to="student" style={{textDecoration:"none"}}>
        <span className="item">Student</span>
      </Link></li>
      <li><Link to="contact" style={{textDecoration:"none"}}>
        <span className="item">Contact Us</span>
      </Link></li>
    </ul>
      </>
    

    
    
    );
}
