import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Header(){
  const myFav=useSelector((state)=>state.fav);

    return(<>
    <div className="container-fluid " style={{ margin: 0,padding:0}}>
   <nav className="navbar navbar-expand-lg navbar-light bg-black col-12 p-2"  >
    <img style ={{width:'80px'}} src="https://static.vecteezy.com/system/resources/previews/005/903/347/original/gold-abstract-letter-s-logo-for-negative-video-recording-film-production-free-vector.jpg"></img>
   
  <div className="collapse navbar-collapse p-2" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link className="nav-link text-light btn btn-dark fs-3" to="/Movies">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-danger text-light btn btn-dark fs-3" to="/login">Sign in</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-light btn btn-dark fs-3" to="/signup">sign up</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link " to="/form">form</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link text-danger btn btn-dark fs-3 " to="/wish">wish list {myFav.length}</Link>
      </li>
      <li className="nav-item">
      </li>
    </ul>
  </div>
</nav>
</div>
    </>)
}
export default Header;