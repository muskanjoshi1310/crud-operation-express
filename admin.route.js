import express from "express";
import { adminAction, adminDashboard, adminSignin } from "../controller/admin.controller.js"; //controller functions 

const router=express.Router();// express router(); ek special object hota hai,jo ek tarah ka mini  express application hai.iska use hum
//ek specific part (module ) ke liye routers ko manage karte h.
//this creates a new router instance using express.// the router is used to define routes for the admin functionality.

router.get("/sign-in",adminSignin);
router.post("/sign-in",adminAction);
router.get("/dashboard",adminDashboard);

export default router;
//export the route object from the current module so that it can be used in other parts of the application.