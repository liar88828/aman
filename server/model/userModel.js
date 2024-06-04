import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
// import uuid from 'node-uuid'
// const dateMilic = new Date().getMilliseconds()
const userSchema = new Schema( {
	// _id: {type: String, required: true, default:uuid.v4()},
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
}, {
	autoIndex: true,
	timestamps: true,

} );

userSchema.pre( "save", async function ( next )
{
	if ( !this.isModified( "password" ) )
	{
		next();
	}
	const salt = await bcrypt.genSalt( 10 );
	this.password = await bcrypt.hash( this.password, salt );
} );

userSchema.methods.matchPassword = async function ( enteredPassword )
{
	return await bcrypt.compare( enteredPassword, this.password );
};

const userModel = mongoose.model( "User", userSchema );


export default userModel;
