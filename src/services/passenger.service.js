import Passenger from "../models/Passenger.js";

export const createService = (body) => Passenger.create(body);
export const findAllService = () => Passenger.find();
