import { Menu} from "antd"
import Link from "next/link";
import {AppstoreOutlined, LoginOutlined, UserAddOutlined} from "@ant-design/icons";
import {useState, useEffect} from "react"
const {Item} = Menu;


const Topnav=()=>{
    const [current , setCurrent]=useState("");
    useEffect(()=>{
            process.browser && setCurrent(window.location.pathname)
        console.log(window.location.pathname)
    },[process.browser && window.location.pathname])
    return (
       <Menu mode="horizontal" selectedKeys={[current]}>
           <Item key="home" onClick={(e)=>{setCurrent(e.key)}} icon={<AppstoreOutlined/>}>
            <Link href="/">
             <a className="link-page">APP</a>
            </Link>
           </Item>
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
       </Menu>
    )
}
export default Topnav;