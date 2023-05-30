import asyncHandler from 'express-async-handler'

// description	 user/set token
// route POST	 	/api/users/auth
// access 			Public
const authUser = asyncHandler(
		async (req, res) => {
			// res.status(401)
			// throw  new Error('Something wrong ')
			res.status(200).json({ message: 'Auth User' })
		})


// description	 register a new user
// route 				POST	 	/api/users/register
// access 			Public
const registerUser = asyncHandler(
		async (req, res) => {
			// res.status(401)
			// throw  new Error('Something wrong ')
			res.status(200).json({ message: 'Register User' })
		})

// description	 Logout user
// route 				POST	 	/api/users/logout
// access 			Public
const logoutUser = asyncHandler(
		async (req, res) => {
			// res.status(401)
			// throw  new Error('Something wrong ')
			res.status(200).json({ message: 'logout User' })
		})

// description 	GET Profile user
// route 				POST	 	/api/users/profile
// access 			Private
const profileUser = asyncHandler(
		async (req, res) => {
			// res.status(401)
			// throw  new Error('Something wrong ')
			res.status(200).json({ message: 'Profile User' })
		})

// description 	Update Profile user
// route 				PUT	 	/api/users/profile
// access 			Private
const updateProfileUSer = asyncHandler(
		async (req, res) => {
			// res.status(401)
			// throw  new Error('Something wrong ')
			res.status(200).json({ message: 'Update Profile User' })
		})


export { authUser, logoutUser, profileUser, registerUser, updateProfileUSer }