const User = require("../model");
const login = async(req,res)=>{
    const { username } = req.body;
    const { password } = req.body;
  
    var myuser = await User.findOne({username : username,password:password })

    console.log(myuser)
   

res.json(myuser)

};
module.exports=login;


////            http://localhost:5000/api/login 
// // //        {
// // // 	        "username" : "Eriny Yousrey",
// // // 	        "password" : "4567"
// // //        }