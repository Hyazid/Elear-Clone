import { useState } from "react";
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from "react-toastify";
import Link from "next/link"

const Login =()=>{
    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");


    const handleLogin=async(e)=>{
        e.prenventDefault();
        try {
            const {data }=await axios.post("http://localhost:3001/api/login",
            {email, password}
            );
            console.log("responding to login--->"+data);
        } catch (error) {
            console.error("-->"+error);
        }

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
            <p className="text-center p-3">
                you didn't register ? 
                <Link href="/Register">
                    <a>
                        register
                    </a>
                </Link>
            </p>  
        </div>
        </>
    )
}
export default Login;
