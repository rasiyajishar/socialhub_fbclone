// const { sendVerificationEmail } = require("../helpers/mail");
// const { generateToken } = require("../helpers/token");
// const { validateEmail, validateLength, validateUsername } = require("../helpers/validation");
// const User = require("../models/User");
// const bcrypt = require("bcrypt");

// exports.register = async (req, res) => {
//     try {
//         const {
//             first_name,
//             last_name,
//             email,
//             password, 
//             username, 
//             byear, 
//             gender
//         } = req.body;

//         if (!validateEmail(email)) {
//             return res.status(400).json({
//                 message: "Invalid email address"
//             });
//         }

//         const check = await User.findOne({ email });

//         if (check) {
//             return res.status(400).json({
//                 message: "This email address already exists, try with a different email",
//             });
//         }

//         if (!validateLength(first_name, 3, 30)) {
//             return res.status(400).json({
//                 message: "First name must be between 3 and 30 characters"
//             });
//         }

//         if (!validateLength(last_name, 3, 30)) {
//             return res.status(400).json({
//                 message: "Last name must be between 3 and 30 characters"
//             });
//         }

//         if (!validateLength(password, 6, 12)) {
//             return res.status(400).json({
//                 message: "Password must be at least 6 characters"
//             });
//         }

//         const cryptedPassword = await bcrypt.hash(password, 12);
//         console.log(cryptedPassword);

//         const tempUsername = first_name + last_name;
//         const newUsername = await validateUsername(tempUsername);

//         const user = await new User({
//             first_name,
//             last_name,
//             email,
//             password: cryptedPassword,
//             username: newUsername,
//             byear,
//             gender
//         }).save();

//         const emailVerificationToken = generateToken({ id: user._id.toString() }, "30m");
//         console.log(emailVerificationToken);

//         const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
//         sendVerificationEmail(user.email, user.first_name, url);
// const token = generateToken({id: user._id.toString()},"7d")
//        res.send({id:user._id,
//     username:user.username,
//     picture:user.picture,
//     first_name:user.first_name,
//     last_name:user.last_name,
//     token:token,
//     verified:user.verified,
//     message:"register success please activate your email"
// }) 
// res.json(user);

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });

//         if (!user) {
//             return res.status(400).json({ message: "Invalid email" });
//         }

//         const check = await bcrypt.compare(password, user.password);

//         if (!check) {
//             return res.status(400).json({ message: "Invalid credentials, please try again" });
//         }

//         // Your login logic here...

//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };


const { sendVerificationEmail } = require("../helpers/mail");
const { generateToken } = require("../helpers/token");
const { validateEmail, validateLength, validateUsername } = require("../helpers/validation");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
exports.register = async (req, res) => {
    try {
        const {
            first_name,
            last_name,
            email,
            password,
            byear,
            gender
        } = req.body;

        if (!validateEmail(email)) {
            return res.status(400).json({
                message: "Invalid email address"
            });
        }

        const check = await User.findOne({ email });

        if (check) {
            return res.status(400).json({
                message: "This email address already exists, try with a different email",
            });
        }

        if (!validateLength(first_name, 3, 30) || !validateLength(last_name, 3, 30)) {
            return res.status(400).json({
                message: "First and last names must be between 3 and 30 characters"
            });
        }

        if (!validateLength(password, 6, 12)) {
            return res.status(400).json({
                message: "Password must be at least 6 characters"
            });
        }

        const cryptedPassword = await bcrypt.hash(password, 12);

        const tempUsername = first_name + last_name;
        const newUsername = await validateUsername(tempUsername);

        const user = await new User({
            first_name,
            last_name,
            email,
            password: cryptedPassword,
            username: newUsername,
            byear,
            gender
        }).save();

        const emailVerificationToken = generateToken({ id: user._id.toString() }, "30m");
        console.log(emailVerificationToken);

        const url = `${process.env.BASE_URL}/activate/${emailVerificationToken}`;
        sendVerificationEmail(user.email, user.first_name, url);

        const token = generateToken({ id: user._id.toString() }, "7d");

        res.status(201).json({
            id: user._id,
            username: user.username,
            picture: user.picture, // Ensure user.picture is available in your model
            first_name: user.first_name,
            last_name: user.last_name,
            token,
            verified: user.verified,
            message: "Registration successful. Please activate your email."
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


exports.activateAccount = async(req,res)=>{
    const {token} = req.body;
    console.log(token);
    const user = jwt.verify(token,process.env.TOKEN_SECRET)
console.log(user);
const check = await user.findById(user._id)
if(check.verified ==true){
    return res.status(400).json({message:"this email is already activated"})
}else{
   await User.findByIdAndUpdate(user.id,{verified:true})
   return res.status(200).json({message:"account has been activated successfully"})
}
}




exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "email you entered is not connected" });
        }

        const check = await bcrypt.compare(password, user.password);

        if (!check) {
            return res.status(400).json({ message: "Invalid credentials, please try again" });
        }

        const token = generateToken({ id: user._id.toString() }, "7d");

        res.status(201).json({
            id: user._id,
            username: user.username,
            picture: user.picture, // Ensure user.picture is available in your model
            first_name: user.first_name,
            last_name: user.last_name,
            token,
            verified: user.verified,
            message: "Registration successful. Please activate your email."
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
