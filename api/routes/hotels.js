import express from "express"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js";
import { createHotel, deleteHotel, getHotel, getHotels, updatedHotel } from "../controllers/hotelController.js";

const router = express.Router();

router.post("/", createHotel);  

router.put("/:id",updatedHotel);

router.delete("/:id",deleteHotel);

router.get("/:id", getHotel);

router.get("/",getHotels);                                                              


export default router;