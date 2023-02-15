import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bg1 from '../img/bg1.png'
import { ReactSearchAutocomplete } from "react-search-autocomplete";

let data = {};
const handleOnSearch = (string, results) => {
  console.log(string, results);
};

const handleOnHover = (result) => {
  console.log(result);
};

const handleOnSelect = (item) => {
  window.location = `/products/${item.id}`;
};

const handleOnFocus = () => {
  console.log("Focused");
};

const handleOnClear = () => {
  console.log("Cleared");
};

export default function Destination() {
  return (
    <>
    <div className="search-bar" style={{marginTop:"2em", marginRight:"20em",marginLeft:"20em"}}>
              <ReactSearchAutocomplete
                items={data}
                maxResults={15}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                placeholder="Намерете локация"
                onClear={handleOnClear}
                fuseOptions={{ keys: ["name", "description"] }} // Search in the description text as well
                styling={{
                  zIndex: 100,
                  borderRadius: "5px",
                  boxShadow: "none",
                  border: "1px solid #e5e5e5",
                  height: "5vh",
                  placeholderFontSize: "2.5vh",
                  fontSize: "1.5rem",
                }}
                className="search" // To display it on top of the search box below
              />
            </div>
      <Box sx={{ flexGrow: 1, marginTop:"6em", marginLeft:"22vw", marginRight:"22vw"}}>
        <Grid container spacing={2} >
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 345, paddingLeft:"0" }}>
              <CardMedia
                sx={{ height: 140}}
                image={bg1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={bg1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={bg1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={bg1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={bg1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={4}>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={bg1}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}