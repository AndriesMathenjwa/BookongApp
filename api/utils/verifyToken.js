import { Jwt } from "jsonwebtoken";
import { createError } from "./error";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    if (!token) {
        return next(createError(401, "you are not authenticated"));
    }

    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "token not valid!"));
        req.user = user;
        next()
    });
};  

export const verifyUser = (req, res, next) => {
    verifyToken(req,res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        next()
    }else{
      return next(createError(401, "you are not authorized!"));
    }   
 })
};  

export const verifyAdin = (req, res, next) => {
    verifyToken(req,res, () => {
    if (req.user.isAdmin) {
        next()
    }else{
      return next(createError(401, "you are not authorized!"));
    }   
 })
};  