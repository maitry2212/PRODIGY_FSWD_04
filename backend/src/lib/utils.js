import jwt from "jsonwebtoken";

export const generateToken =(userId,res) =>{
    const token = jwt.sign({ userId }, process.env.JWT_SECRET,{
        expiresIn: "7d",
    });

    res.cookie("jwt", token,{
    maxAge:7 * 24 * 60 * 1000, //ms
    httpOnly:true,  //prevent XSS attaacks cross-site scripting attacks
    sameSite: "strict",//CSRF  attaks cross-sie request forgery attacks
    secure: process.env.NODE_ENV !== "developement",
    });
    return token;
}

