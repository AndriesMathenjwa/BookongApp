import express from "express"

const router = express.Router();

router.get("/",(req,res)=>{
    res.send("hellow auth");
})

export default router;