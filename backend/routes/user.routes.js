import express from "express"
import { getCurrentUser, updateUserLocation } from "../controllers/user.controllers.js"
import { SearchTrainStationList } from "../controllers/station.controller.js"
import isAuth from "../middlewares/isAuth.js"


const userRouter = express.Router()

userRouter.get("/current", isAuth, getCurrentUser)
userRouter.get("/search", SearchTrainStationList)
userRouter.post('/update-location', isAuth, updateUserLocation)
export default userRouter