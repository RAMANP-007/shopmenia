const Users = require("../models/usermodel.js");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        errors: "Existing user found with the same email ID",
      });
    }
    let cart = {};
    const user = new Users({
      name: username,
      email,
      password: password,
      cartData: cart,
    });
    await user.save();
    const payload = { user: { id: user.id } };
    const token = jwt.sign(payload, 'secret_ecom');
    res.json({ success: true, token });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const Login = async(req, res) => {
 let user = await Users.findOne({
    email:req.body.email
 });
 if(user) {
    const passCompare = req.body.password === user.password;  // fixed typo: passwword -> password
    if(passCompare) {
        const data = {
            user : {
                id : user.id
            }
        }
         const token = jwt.sign(data, 'secret_ecom')
         res.json({
            success : true,
            token
         });

    }
    else {
        res.json({
            success : false,
            error : "wrong password",
        })
    }
 }
 else{
    res.json({
        success : false,
        errors : "wrong email id",
    })
 }
}

module.exports = { Signup, Login };
