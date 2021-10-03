import { Menu} from "antd"
import Link from "next/link";
import {AppstoreOutlined, LoginOutlined, UserAddOutlined} from "@ant-design/icons";

const {Item} = Menu;


const Topnav=()=>{
    return (
       <Menu mode="horizontal">
           <Item key="home" icon={<AppstoreOutlined/>}>
            <Link href="/">
             <a className="link-page">APP</a>
            </Link>
           </Item>
           <Item key="Register" icon ={<UserAddOutlined/>}>
               <Link href="/Register">
                <a className="link-page-Register">Register</a>
               </Link>
           </Item>
           <Item key="Login" icon={<LoginOutlined/>}>
               <Link href="/Login">
                <a className="link-page-login">Login</a>
               </Link>
           </Item>
       </Menu>
    )
}
export default Topnav;