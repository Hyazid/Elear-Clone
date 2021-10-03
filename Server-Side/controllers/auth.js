export const register =(req,res,next)=>{
    console.log(req.body);
    res.json("register response to  controller")
    next();
}
