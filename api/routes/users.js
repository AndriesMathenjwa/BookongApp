import express from "express"
import { updatedUser,deleteUser,getUser,getUsers } from "../controllers/userController";
import { verifyToken, verifyUser, verifyAdin } from "../utils/verifyToken";
const router = express.Router();

router.get("/checkauthentication", verifyToken, (req,res,next)=> {
    res.send("hellow user, you are logged in")
});

router.get("/checkuser/:id", verifyToken, (req,res,next)=> {
    res.send("hellow user, you are logged in and you can delete your account")
});

router.get("/checkadmin/:id", verifyToken, (req,res,next)=> {
    res.send("hellow user, you are logged in and you can delete all accounts")
});

router.put("/:id",updatedUser);

router.delete("/:id",deleteUser);

router.get("/:id", getUser);

router.get("/",getUsers);

export default router;