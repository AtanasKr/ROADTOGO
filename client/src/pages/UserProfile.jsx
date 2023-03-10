import { Avatar, Button, Grid, Typography } from '@mui/material'
import {Link} from 'react-router-dom';
import { Box, margin, width } from '@mui/system'
import { useContext } from 'react'
import React from 'react'
import { AuthContext } from '../context/authContext.js'

export const UserProfile = () => {
    const {currentUser} = useContext(AuthContext);
  return (
    <>
        <Grid container spacing={2} sx={{padding:"3em"}}>
            <Grid item xs={4} component="img" src={require ("../storage/Aheloi.jpg")} sx={{borderRadius:"5em"}}>
            </Grid>
            <Grid item xs={8}>
                <Box sx={{backgroundColor:"lightGray", borderRadius:"2em"}}>
                    <Typography sx={{textAlign:"center", fontSize:"2em", mt:"0.3em"}}>Име:</Typography>
                </Box>
                <Typography sx={{textAlign:"center", fontSize:"2em"}}>{currentUser.username}</Typography>
                <Box sx={{backgroundColor:"lightGray", borderRadius:"2em"}}>
                    <Typography sx={{textAlign:"center", fontSize:"2em", mt:"0.3em"}}>Имейл:</Typography>
                </Box>
                <Typography sx={{textAlign:"center", fontSize:"2em", mt:"0.3em"}}>{currentUser.email}</Typography>
                <Box sx={{backgroundColor:"lightGray", borderRadius:"2em"}}>
                    <Typography sx={{textAlign:"center", fontSize:"2em", mt:"0.3em"}}>Присаединил се нa:</Typography>
                </Box>
                <Typography sx={{textAlign:"center", fontSize:"2em", mt:"0.3em"}}>{currentUser.joindate}</Typography>
            </Grid>
        </Grid>
        <Box textAlign='center' sx={{marginTop:"10vh"}}>    
        <Button sx={{color:"black",border: 1.5, borderRadius:10}} component={Link} to={"/"}>
          Начало
        </Button>
      </Box>
    </>
  )
}
