import "bootstrap/dist/css/bootstrap.min.css"
import "antd/dist/antd.css"
import "../Component/Topnav.js"
import Topnav from "../Component/Topnav.js";
import "../public/css/styles.css"



function MyApp({Component, pageProps}){
    return (
        <>
    <Topnav/>  
    <Component  {... pageProps} />
     </>
        )
}
export default MyApp;