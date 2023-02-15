import React from 'react'
import Slider from '../components/Slider'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
export const Home = () => {
  return (
    <>
    <Slider/>
    <Box textAlign='center' sx={{marginTop:"90vh"}}>    
      <Button sx={{color:"black",border: 1.5, borderRadius:10}}>
        Планирай
      </Button>
      </Box>
    </>
  )
}

export default Home