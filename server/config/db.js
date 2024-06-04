import mongoose from "mongoose";

const connectDb = async () =>
{
  try
  {
    const conn = await mongoose.connect( process.env.MONGO_URL );
    console.info( `mongodb Connect :${ conn.connection.host }  ` );
  } catch ( error )
  {
    console.error( `Error ${ error.message }` );
    process.exit( 1 );
  }
};

export default connectDb;
