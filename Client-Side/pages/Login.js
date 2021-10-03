import { useState } from "react";
import { Button } from 'react-bootstrap';

const Login =()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");


    const handleLogin=(e)=>{
        e.prenventDefault();
        alert("---->"+email+"----"+password);

    }

    return(
        <>
        <h1  className="jumbotron text-center ">this is Login</h1>

        <div className="container col-md-4 offset-md-4 pb-5">
            <form onSubmit={handleLogin}>
                <input 
                    type="email"
                    className="form-control mb-3 p-3"
                    placeholder="Email"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />

                <input 
                    type="password"
                    className="form-control mb-3 p-3"
                    placeholder="password"
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    required
                />
                
                <button className="btn btn-warning  btn-block p-2">Login</button>
               


            </form>
        </div>
        </>
    )
}
export default Login;
