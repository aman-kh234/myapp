import {useState} from "react";    //We initialize our state by calling useState in our function component.

export default function RegisterPage(){
    const [username, setUsername] = useState('');    // usestate is used to initialize it and it return two state current and update state
    const [password, setPassword] = useState('');

    async function register(ev){   //The keyword async before a function makes the function return a promise
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/register',{   //The await keyword makes the function pause the execution and wait for a resolved promise before it continues
            method:'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type' : 'application/json'},
        });
        // console.log(response);
        if(response.status === 200){
            alert('registration successful');
        }
        else{
            alert('registration failed');
        }
    }
    
    // onchange event detects the change in value
    return(
    <form className="register" onSubmit={register}>
        <h1>Register</h1>
            <input type="text" 
                placeholder="username" 
                value={username}
                onChange={ev => setUsername(ev.target.value)}></input>   
            <input type="password" 
                placeholder="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}></input>
            <button>Register</button>
    </form>
    );
}

