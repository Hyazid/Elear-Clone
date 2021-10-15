 import User from '../models/user.js'
 import { hashed, comparPassword } from '../utils/auth.js';
 import jwt from 'jsonwebtoken'

export const register =async(req,res,next)=>{
   try{ 
    console.log(req.body);
    const {name, username, email , password, profession}=  req.body;
    if(!name)return res.status(400).send("no name inserted");
    if(!username)return res.status(400).send("no username inserted");
    if(!password)return res.status(400).send("no password inserted");
    if(!profession)return res.status(400).send("no profession inserted");
    let emailexist = await User.findOne({ email }).exec();
    if(emailexist)return  res.status(400).send("Choose another email");
    //hash password
    const passwordHash= await hashed(password);
    
    //save the data and register
    const user=  await new User({
        name,
        username,
        email,
        password:passwordHash,
        profession,
    }).save()
    console.log("user added--------");
    res.json("user adddseddddd---")

    //res.json("register response to  controller")
    next();

    }catch(err){
        console.log(err);
        return res.status(400).send("errrooor try again ")
    }

}
export const login=async(req,res, next)=>{
    try{
        console.log("login partt")
        console.log(req.body);
        const {email, password}= req.body;
        //check if user in db 
        const user = await User.findOne({email}).exec()
        if(!user) return res.status(400).send("email not found");
        //check password 
        const checkPassword=await comparPassword(password, user.password)

        //create jtoken sign 
        const token =jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn:'7d',});
        //return the token to client, exclude hashed password
        user.password=undefined;
        //send token in cookie
        res.cookie("token", token, {
            httpOnly: true,
        })
        res.json(user)

    }catch(err){
         console.log(err);
         return res.status(400).send("error in login")   
    }
}
export const logout =async(req,res)=>{

    try {
        res.clearCookie("token");
        return res.json({message:'signe out success'})
        
    } catch (err) {
        console.log(err);
         return res.status(400).send("error in logout")  
    }

}



