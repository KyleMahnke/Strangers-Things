import React, { useState } from 'react';

//helper functions



function Login({setIsLoggedIn}) {

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    // function isLoggedIn() {
    //     when logged in, show username
    // }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('https://strangers-things.herokuapp.com/api/2109-lsu-rm-web-ft/users/login',
        {
        method: "POST",
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
        }
    })
}).then(response => response.json())
  .then(result => {
//// saves token to local storage
    localStorage.setItem('token', result.data.token);
    setIsLoggedIn(true)
  })
  .catch(console.error);
    }
   
    return (
        <div>
            <h1>This is the Login page</h1>
            <form onSubmit={handleSubmit}>
                <input 
                required
                value={username} 
                placeholder="Enter your username" 
                onChange={handleUsername} 
                />
                <input 
                required
                type="password"
                value={password} 
                placeholder="Enter your password" 
                onChange={handlePassword}
                />
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

export default Login;