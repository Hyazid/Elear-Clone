import { Menu} from "antd"
import Link from "next/link";
import {AppstoreOutlined, LoginOutlined, UserAddOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import {useState, useEffect, useContext} from "react"
import axios from 'axios';
import router, {useRouter} from 'next/router'
import { Context } from "../context/index.js";
import { toast } from "react-toastify";
const {Item, SubMenu} = Menu;



const Topnav=()=>{
    const [current , setCurrent]=useState("");
    const {state, dispatch}= useContext(Context);
    const {user}= state;
    const router = useRouter()
    useEffect(()=>{
            process.browser && setCurrent(window.location.pathname)
        console.log(window.location.pathname)
    },[process.browser && window.location.pathname])

    const logout =async()=>{
        dispatch({
            Type:"LOGOUT"
        
        })
        //remove the data from local storage 
        window.localStorage.removeItem('user');
        const {data}= await axios.get("http://localhost:3001/api/logout")
        //redirect to login page 
        router.push("/Login")

    }
    return (
       <Menu mode="horizontal" selectedKeys={[current]}>
           <Item key="home" onClick={(e)=>{setCurrent(e.key)}} icon={<AppstoreOutlined/>}>
            <Link href="/">
             <a className="link-page">APP</a>
            </Link>
           </Item>
          {user ===null && (<>
            <Item key="Register"  onClick={(e)=>{setCurrent(e.key)}} icon ={<UserAddOutlined/>}>
               <Link href="/Register">
                <a className="link-page-Register">Register</a>
               </Link>
           </Item>
           <Item key="Login" onClick={(e)=>{setCurrent(e.key)}} icon={<LoginOutlined/>}>
               <Link href="/Login">
                <a className="link-page-login">Login</a>
               </Link>
           </Item>
          
          </>
            )}
          {user!=null && (
            <SubMenu icon={<UserOutlined/>}  title={user && user.name} className="float-right">
               <Item key=" logout" onClick={logout} icon={<LogoutOutlined/>} className="float-right">
               Logout
                </Item>
                </SubMenu>
          )}
       </Menu>
    )
}
export default Topnav;