import React from "react"
import {Link,withRouter} from "react-router-dom"



const Navbar=(props)=>{
  {/*  setInterval(()=>{props.history.push("/about")},5000)  */}
    return(
        <div >
    <nav className="nav-wrapper red">
            <div className="container">
            <a  className="brand-logo">Logo</a>
            <ul id="nav-list" className="right hide-on-med-and-down">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
            </div>
            </nav>
    
        </div>
    )
}
export default withRouter(Navbar)