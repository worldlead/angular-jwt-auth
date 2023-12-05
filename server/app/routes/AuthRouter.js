import express from "express";
import UserModel from "../models/user.model.js";

const router = express.Router();

//Add a new user
router.post("/signup", async(req, res) => {
    const user = new UserModel(req.body);

    try {
        await user.save();
        res.send(user);
    } catch (err) {
        res.status(500).send(err);
    }
});

export default router;