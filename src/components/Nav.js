import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div>
            <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Posts">Posts</Link>
            </li>
            <li>
                <Link to="/Login">Login</Link>
            </li>
            <li>
                <Link to="/Register">Register</Link>
            </li>
          </ul>
        </div>
    );
}

export default Nav;