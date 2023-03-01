import {
  createService,
  findAllService,
} from "../services/passenger.service.js";

// Create and Save a new Passenger
export const create = async (req, res) => {
  try {
    const { name, age, email, assent, destination } = req.body;
    if (!name || !age || !email || !assent || !destination) {
      return res.status(400).send({
        message: "Missing data",
      });
    }

    await createService({
      name,
      age,
      email,
      assent,
      destination,
    });

    res.status(201).send({ message: "Passenger add successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const findAll = async (req, res) => {
  try {
    const passenger = await findAllService();

    if (passenger.length === 0) {
      return res.status(400).send({ message: "No registred passenger" });
    }

    res.send({ passenger });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
