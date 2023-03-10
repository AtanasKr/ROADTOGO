import {db} from "../db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = (req,res) =>{
    
    //check for valid passowrd
    if(req.body.password!==req.body.password2){
        return res.status(409).json("Паролите не съвпадат!")
    }else if(req.body.password.length<6){
        return res.status(409).json("Паролата трябва да е поне 6 символа!")
    }else{
        //check if user exists
        const q = "SELECT * FROM users WHERE email = ?";

        db.query(q,[req.body.email,req.body.username], (err,data)=>{
            if(err) return res.json(err)
            if(data.length) return res.status(409).json("Вече съществува акаунт с дадения имейл!");

            //hashing the password

            const salt = bcrypt.genSaltSync(10);
            const hash = bcrypt.hashSync(req.body.password,salt)

            const q = "INSERT INTO users(`username`,`email`,`password`,`joindate`) VALUES (?)"
            const values = [req.body.username,req.body.email,hash,req.body.date]
            db.query(q,[values],(err,data)=>{
                if(err) return res.json(err)
                return res.status(200).json("User has been created!")
            })

        });
    }
}

export const logIn = (req,res) =>{
    //check if user exists
    const q = "SELECT * FROM users WHERE email = ?"
    db.query(q,[req.body.email], (err,data)=>{
        if(err) return res.json(err)
        //check if user is found
        if(data.length===0) return res.status(404).json("Не е намерен такъв потребител!")
        //check user password
        const isPasswordCorrect = bcrypt.compareSync(req.body.password,data[0].password)

        if(!isPasswordCorrect) return res.status(400).json("Грешна парoла!")
        const token = jwt.sign({id:data[0].id},"jwtkey");
        //deconstruct password from the user data
        const {password, ...other} = data[0];

        res.cookie("access_token",token,{
            httpOnly:true
        }).status(200).json(other)
    })
}

export const logOut = (req,res) =>{
    res.clearCookie("access_token",{
        sameSite:"none",
        secure:true
    }).status(200).json("User has been logged out!")
}