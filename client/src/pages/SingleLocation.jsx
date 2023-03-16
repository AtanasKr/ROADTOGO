import { Button, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export const SingleLocation = () => {

    const [data, setData] = useState([]);

    const location = useLocation();

    const locationId = location.pathname.split("/")[2];

    useEffect(()=>{
        const fetchData = async()=>{
          try{
            console.log(locationId)
            const res = await axios.get(`/locations/${locationId}`)
            console.log(res.data)
            setData(res.data)
          }catch(err){
            console.log(err)
          }
        }
        fetchData();
      },[locationId])
    

  return (
    <Box>
        <Typography sx={{textAlign:"center", pt:"1em", fontSize:"3em"}}>{data.name}</Typography>
        <Grid 
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={"1em"}>
            <Box
            component="img"
            sx={{
                height: "20em",
                width: "40em",
                borderRadius:"2em"
            }}
            alt="Destination picture"
            src={"../storage/"+data.pic}
            />
        </Grid>
        <Typography sx={{textAlign:"left", pt:"2em", fontSize:"1.5em", pl:"5em",pr:"5em"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
        <Grid 
        display="flex"
        justifyContent="center"
        alignItems="center"
        paddingTop={"2em"}>
            <Button variant="contained" color="success">
            Запази
            </Button>
        </Grid>
    </Box>
  )
}
