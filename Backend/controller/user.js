const User  = require('../model/user');

const signup = async(req,res) => {

const {email,password} = req.body;

if(!email || !password){
    return res.status(400).json("enter email and password");

}

const existingUser = await User.findOne({email});
if(existingUser){
    return res.status(400).json("user already exist");
}

const user = await  User.create(
    {
        email:email,
        password:password
    }

);
res.json(user);

};

const login = async(req,res) => {

    const {email,password} = req.body;
    
    if(!email || !password){
        return res.status(400).json("enter email and password");
    
    }
    
  const user =await  User.findOne({
   email,
   password
  });

  if(!user){
    return res.status(400).json("invalid user and email");

  }
    
    res.json(user);    
    
    };


module.exports= {signup,login};