
const User = require("../model");
const register = async(req,res)=>{
    const { username } = req.body;
    const { password } = req.body;
  
    myuser = new User(

        {
            username,
            password
        }
    )
    myuser.save()
    .then(()=>res.json(myuser))
   


};
module.exports=register;

    // // http://localhost:5000/api/register

    // // {
    // // 	"username" : "new user",
    // // 	"password" : "1234"
    // // }