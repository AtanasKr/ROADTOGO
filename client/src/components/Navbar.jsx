import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
import Logo from "../img/Main-Logo.png";
import {Link} from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../context/authContext'

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const {currentUser, logout} = useContext(AuthContext);

  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogOut = (e) =>{
    e.preventDefault();
    logout();
    window.location.reload()
  }

  return (
    <AppBar position="static" sx={{backgroundColor:"white"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
            height: "2em",
            paddingRight:"4em",
            paddingBottom:"0.3em"
            }}
            alt="Main-logo"
            src={Logo}
        />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key={"Начало"}
                to={"/"}
                component={Link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {"Начало"}
              </Button>
              <Button
                key={"Дестинации"}
                to={"/Destinations"}
                component={Link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {"Дестинации"}
              </Button>
              <Button
                key={"За нас"}
                to={"/About"}
                component={Link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {"За нас"}
              </Button>
              <Button
                key={"Съвети"}
                to={"/Tips"}
                component={Link}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {"Съвети"}
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }}}>
          {!currentUser&&<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
                component={Link}
                to = {"/login"}
              >
                Вход
              </Button>}
            {!currentUser&&<Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
                component={Link}
                to = {"/register"}
              >
                Регистрация
              </Button>}
          {currentUser&& <Tooltip title="Към профил">
              <IconButton  sx={{ p: 0, mr:2 }} component={Link} to = {"/profile"}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
            }
            {currentUser&&<Button
                sx={{ my: 2, color: 'black', display: 'block' }}
                component={Link}
                to = {"/register"}
                onClick={handleLogOut}
                // onClick={handleOpenUserMenu}
              >
                Излез
              </Button>}
            {/* <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key={"Профил"} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{"Профил"}</Typography>
                </MenuItem>
              <MenuItem key={"Излез"} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{"Излез"}</Typography>
                </MenuItem>
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;