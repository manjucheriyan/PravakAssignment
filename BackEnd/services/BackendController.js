const {User}= require("../models/users");

let currentUser;


function addUser(username,password){
    console.log("in router bank")
    return User.findOne({
        username
    })
    .then (user=>{
        if(user){
            return{
                statusCode:400,
                message:"User already exists"
            }
        }
        const newUser= new User({
            username,password
        });
        newUser.save();

        return {
            statusCode:200,
            message:"New User registered successfully"
        }
    })
   
}

function login(username,password){
    console.log('Login Function in Bank.js')
   
    return User.findOne({
        username,
        password
    })
    .then (user=>{
        if(user){
            return{
                statusCode:200,
                message:"Logged in successfully"
            }
        }
        else return {
            statusCode:400,
            message:"Invalid credentials"
        }
    })

}

module.exports={
    login:login,
    addUser:addUser
   
    }