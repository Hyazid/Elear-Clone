import { useState } from "react";
import axios from 'axios';
import { toast } from "react-toastify";
import Link from "next/link"

const Register=()=>{
    const [name, setName]=useState('yazid');
    const [username, setUserName]=useState("hanniche");
    const [email, setEmail]  =useState("tazidhanniche@mail");
    const [password, setPassword]= useState("zeze");
    const [profession, setProfession]= useState("Subscriber");
    const handleSubmit=async(e)=>{
        e.preventDefault()

        try{
        alert("-->"+name+"---"+username+"---"+email+"---- "+password+"");
        const {data}= await axios.post("http://localhost:3001/api/register",
        {name, username, email, password, profession}
    
        );
        console.log("responding to registration--->"+data);
        toast.success("Registration complete, please login")
    }catch (err){
        toast.error("Try aigain")
    }

    }

    return(

        <>
        <h1  className="jumbotron text-center">this is Register</h1>
        <div className="container col-md-4 offset-md-4 pb-5">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="form-control mb-3 p-3"
                    placeholder="Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                    required
                />

                <input 
                    type="text"
                    className="form-control mb-3 p-3"
                    placeholder="username"
                    value={username}
                    onChange={(e)=> setUserName(e.target.value)}
                    required
                />

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
                  

                <input 
                    type="text"
                    className="form-control mb-3 p-3"
                    placeholder="profession"
                    value={profession}
                    onChange={(e)=> setProfession(e.target.value)}
                    required
                />
                <br/>
                <button className="btn btn-block btn-primary p-2"
                 >Submit</button>
            </form> 
            <p className="text-center p-3">
                Already registered ? 
                <Link href="/Login">
                    <a>
                        login
                    </a>
                </Link>
            </p>  
        </div>
        </>
    )
}
export  default Register;
