import mongoose from 'mongoose'
const {Schema}= mongoose;

const userSchema = new Schema(
    {
    name:{
        type: String,
        trim: true,
        required: true,
    },
    username:{
        type: String,
        trim: true,
        required: true,
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        unique: true,
        required: true,
        min: 6,
        max :64,
    },
    profession:{
        type:[String],
        default:["Subscriber"],
        enum:["Subscriber","Instructor","Admin"]
    },
    //this part is for paymeny
    stripe_account_id:"",
    stripe_seller:{},
    stripeSession:{}
},
{timestamps: true}


);

export default mongoose.model("User",userSchema);