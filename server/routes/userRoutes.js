import { Router } from "express";
import {
  authUser,
  logoutUser,
  profileUserProfile,
  registerUser,
  updateProfileUSer,
} from "../controller/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile")
  .get(protect, profileUserProfile)
  .put(protect, updateProfileUSer);

export default router;
