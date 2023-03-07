import {db} from '../db.js'

export const getLocations = (req,res) =>{
    const q = req.query.cat ? "SELECT l.id, l.name, l.desc, l.pic, l.cat, l.userid from locations l where l.locationCat like %"+req.query.cat+"%":"SELECT * FROM LOCATIONS"
    db.query(q,[req.query.cat],(err,data)=>{
        if(err) return res.status(500).send(err)
        return res.status(200).json(data);
    })
}