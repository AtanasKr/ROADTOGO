import React from 'react'
import Slider from '../components/Slider'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
export const Home = () => {
  return (
    <>
    <Slider/>
    <Button sx={{marginTop:"90vh", marginLeft:"46vw",marginRight:"45vw", color:"black",border: 1.5, borderRadius:10}}>
        Планирай
      </Button>
    </>
  )
}

export default Home