 import User from '../models/user.js'
 import { hashed, comparPassword } from '../utils/auth.js';

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



