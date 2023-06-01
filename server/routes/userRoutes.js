import { Router } from 'express'
import { authUser, logoutUser, profileUser, registerUser, updateProfileUSer } from "../controller/userController.js";

const router = Router()

router.post('/register', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(profileUser).put(updateProfileUSer)

export default router
