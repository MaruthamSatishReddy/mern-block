import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
export const signup = async (req, res,next) => {
    const {username,email,password}=req.body;
   if(!username || !email || !password){
      next(errorHandler(400,'All Fields are Mandatory'));
   }
   const hashPassword=bcryptjs.hashSync(password,10);
   const newUser= new User({
    username,
    email,
    password:hashPassword,
});
try{
await newUser.save();
  res.json({message:'SignUp SuccessFully'});
}
catch(error){
  next(error);
   }
}