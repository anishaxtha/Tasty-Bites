import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

//create the token

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

// register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // checking the user alreasy exists or not
    const userExists = await userModel.findOne({ email });
    if (userExists) {
      return res.json({
        success: false,
        message: "User already exists",
      });
    }

    // validating the email and strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // checking the password is strong or not
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be  strong and atleast 8 characters",
      });
    }

    //hashing the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // creating the new user
    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
      cartData: {}, // explicitly initialize the cartData
    });

    const user = await newUser.save();

    if (user) {
      const token = createToken(user._id);
      return res.status(200).json({
        success: true,
        message: "User created successfully",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          cartData: user.cartData,
        },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Failed to create user",
      });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({ success: false, message: "Error" });
  }
};

// login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  try {
    if (!user) {
      return res.json({
        success: false,
        message: "User does not exists",
      });
    }

    // checking the password match withe the password stored on the mongodb database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Invalid Credentails",
      });
    }

    const token = createToken(user._id);
    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.log("error", error);
    return res.json({
      success: false,
      message: "Error",
    });
  }
};

export { registerUser, loginUser };
