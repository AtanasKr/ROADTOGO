import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LandscapeIcon from '@mui/icons-material/Landscape';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link as LinkTo} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'
import { useContext } from 'react'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
        RoadToGo
      {" "+new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Login() {

  const [inputs,setInputs] = useState({
    email:"",
    password:"",
  })

  const [err,setError] =useState(null);
  const navigate = useNavigate();
  const {login} = useContext(AuthContext)


  const handleSubmit = async e =>{
    e.preventDefault();
    try{
      await login(inputs);
      navigate("/");
    }catch(err){
      console.log(err)
      setError(err.response.data);
    }
  }

  const handleChange = e =>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: "3em",
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'green' }}>
            <LandscapeIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Имейл"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Парола"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ border: '2px solid' }}
              onClick={handleSubmit}
              sx={{ mt: 3, mb: 2, bgcolor: 'white', color: "Black", '&:hover': {
                backgroundColor: 'lightgrey',
                boxShadow: 'none',
              },}}
              
            >
              Влез
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  <LinkTo to="/forgotten-password">Забравена парола?</LinkTo>
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  <LinkTo to="/register">Все още нямате акаунт? Регистрация</LinkTo>
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              component={LinkTo}
              to='/'
              startIcon = {<ArrowBackIosIcon/>}
            >
              Начало
            </Button>
            {err&&<Typography sx={{color:"red"}}>{err}</Typography>}
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}