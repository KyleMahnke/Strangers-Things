import React from "react";
import { Link } from "react-router-dom";

function Nav({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Posts">Posts</Link>
        </li>
        {isLoggedIn ? null : (
          <>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </>
        )}
        <button onClick={() => {
          setIsLoggedIn(false)
          localStorage.clear()}}>Log Out</button>
      </ul>
    </div>
  );
}

export default Nav;
