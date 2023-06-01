import asyncHandler from "express-async-handler";
import UserModel from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";

// description	 user/set token
// route POST	 	/api/users/auth
// access 			Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email });
  // console.log(user);
  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(201).json({
      message: "Login User",
      data: { email: user.email },
    });
    return;
  } else {
    res.status(401);
    throw new Error("Invalid Email Or Password");
  }
  // res.status(200).json({ message: "Auth User" });
});

// description	 register a new user
// route 				POST	 	/api/users/register
// access 			Public
const registerUser = asyncHandler(
  async (req, res) => {
    const { name, email, password } = req.body;

    const userExist = await UserModel.findOne({ email });
    if (userExist) {
      res.status(400);
      throw new Error("User ready exist");
    }

    const user = await UserModel.create({
      name,
      email,
      password,
    });

    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        message: "Register User",
        data: {
          _id: user._id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      res.status(400);
      throw new Error("Invalid User Data");
    }
  },
);

// description	 Logout user
// route 				POST	 	/api/users/logout
// access 			Public
const logoutUser = asyncHandler(
  async (req, res) => {
    res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });

    // res.status(401)
    // throw  new Error('Something wrong ')
    res.status(200).json({ message: "logout User" });
  },
);

// description 	GET Profile user
// route 				POST	 	/api/users/profile
// access 			Private
const profileUserProfile = asyncHandler(
  async (req, res) => {
    const user = {
      _id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    };
    // console.log(user);

    // res.status(401)
    // throw  new Error('Something wrong ')
    res.status(200).json({ message: "Profile User", data: user });
  },
);

// description 	Update Profile user
// route 				PUT	 	/api/users/profile
// access 			Private
const updateProfileUSer = asyncHandler(
  async (req, res) => {
    const user = await UserModel.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = req.body.password;
      }
      const updateHandler = await user.save();

      res.status(200).json({
        _id: updateHandler._id,
        name: updateHandler.name,
        email: updateHandler.email,
      });
      return;
    } else {
      res.status(404);
      throw new Error("User Not Found");
    }
    // res.status(401)
    // throw  new Error('Something wrong ')
    res.status(200).json({ message: "Update Profile User" });
  },
);

export {
  authUser,
  logoutUser,
  profileUserProfile,
  registerUser,
  updateProfileUSer,
};
