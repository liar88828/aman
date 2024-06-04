import jwt from "jsonwebtoken";

const generateToken = ( res, userId ) =>
{
	const token = jwt.sign(
		{ userId },    									// body token
		process.env.JWT_SECRET,// signature token
		{ expiresIn: "30d", }						// expire token
	);

	res.cookie( "jwt", token, {
		httpOnly: true,     														// hanya bisa di lihat
		secure: process.env.NODE_ENV !== "development",	// mode application
		sameSite: "strict",															// hanya bisa di akses oleh web yang sama
		maxAge: 30 * 24 * 60 * 60 * 1000,								// expire 30d
	} );
	return;
};

export default generateToken;
