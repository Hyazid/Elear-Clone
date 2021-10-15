import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.css"
import "../Component/Topnav.js"
import Topnav from "../Component/Topnav.js";
import "../public/css/styles.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {Provider} from '../context/index.js'



function MyApp({Component, pageProps}){

    
    
    return (
        <Provider>
    <ToastContainer position="top-center"/>
    <Topnav/>  
    <Component  {... pageProps} />
     </Provider>
        )
}
export default MyApp;