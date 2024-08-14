import mongoose from 'mongoose';

// const mongoURI = process.env.URI;
const mongoURI = "mongodb://localhost:27017/bookstore";

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connection Successful');
  } catch (err) {
    throw new Error(err.message); // Use err.message to get the error message
  }
};

export default connectDB;
