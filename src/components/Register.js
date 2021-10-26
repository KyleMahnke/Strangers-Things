import React, { useState } from 'react';

function Register(props) {

    const [username, setUsername] = useState("");
    const [password,setPassword] = useState("");

    function handleUsername(event) {
        setUsername(event.target.value);
    }

    function handlePassword(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await fetch('https://strangers-things.herokuapp.com/api/2109-lsu-web-ft/users/register',
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
    console.log(result);
  })
  .catch(console.error);
    }

    return (
        <div>
            <h1>This is the Register page</h1>
            <form onSubmit={handleSubmit}>
                <input 
                value={username} 
                placeholder="Choose your username" 
                onChange={handleUsername} 
                />
                <input 
                value={password} 
                placeholder="Choose your password" 
                onChange={handlePassword}
                />
                <button type='submit'>Register</button>
            </form>
        </div>
    );
}

export default Register;