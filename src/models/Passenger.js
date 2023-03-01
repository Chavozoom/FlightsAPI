import mongoose from "mongoose";

const PassengerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  assent:{
    type: Number,
    required: true,
  },
  destination:{
    type: String,
    required: true,
  },
});
const Passenger = mongoose.model("Passenger", PassengerSchema);

export default Passenger;