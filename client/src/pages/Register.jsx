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
import {Link as LinkTo, useNavigate} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios'



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

export default function Register() {
  const [err,setError] = React.useState(null);
  const navigate = useNavigate();
  const [inputs,setInputs] = React.useState({
      username:"",
      email:"",
      password:"",
      password2:""
    })

  const handleChange = (event) =>{
      setInputs(prev=>({...prev,[event.target.name]:event.target.value}))
    }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await axios.post("/auth/register",inputs)
      console.log(inputs)
      navigate("/login");
    }catch(err){
      setError(err.response.data);
    }
  };

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
            Регистрация
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Имейл"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              id="username"
              label="Име"
              name="username"
              autoComplete="name"
              autoFocus
            />
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Парола"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <TextField
              onChange={handleChange}
              margin="normal"
              required
              fullWidth
              name="password2"
              label="Повторете парола"
              type="password"
              id="password2"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
              style={{ border: '2px solid' }}
              sx={{ mt: 3, mb: 2, bgcolor: 'white', color: "Black", '&:hover': {
                backgroundColor: 'lightgrey',
                boxShadow: 'none',
              },}}
              
            >
              Регистрация
            </Button>
            <Grid container>
              <Grid item xs>
              <Link href="#" variant="body2">
                  <LinkTo to="/forgotten-password">Забравена парола?</LinkTo>
                </Link>
              </Grid>
              <Grid item>
                  <Link href="#" variant="body2">
                  <LinkTo to="/login">Вече имате акаунт? Влезте</LinkTo>
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