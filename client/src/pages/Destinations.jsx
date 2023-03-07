import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import bg1 from '../storage/Aheloi.jpg'
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useEffect, useState } from 'react';
import {Link, useLocation} from 'react-router-dom'
import axios from 'axios';

let data2 = [{
  id: 0,
  name: "Cobol",
  category:"Programming"
},
{
  id: 1,
  name: "JavaScript",
  category:"Programming"
},];

export default function Destination() {
  const [searchTerm, setSearchTerm] = useState("");

const handleOnSearch = (string, results) => {
  console.log(string, results);
  setSearchTerm(string)
  console.log(bg1)
  // window.location = `/products/${string}`;
};

const handleOnHover = (result) => {
  console.log(result);
};

const handleOnSelect = (item) => {
  // window.location = `/location/${item.id}`;
  setSearchTerm(item.name)
  console.log("../storage/"+item.pic)
};

const handleOnFocus = () => {
  console.log("Focused");
};

const handleOnClear = () => {
  console.log("Cleared");
};

  const [data,setData] = useState([])
  const cat = useLocation().search;
  console.log("The cat is:"+cat)

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await axios.get(`/locations${cat}`)
        setData(res.data)
        console.log(res.data)
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  },[cat])
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
                fuseOptions={{ keys: ["name", "desc"] }} // Search in the description text and category text as well
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
          {data.filter((val) =>{
            if(searchTerm==""){
              return val;
            }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
              return val;
            }
          })
          .map((val)=>{
            return(
              <Grid item xs={4}>
              <Card sx={{ maxWidth: 345, paddingLeft:"0" }}>
                <CardMedia
                  sx={{ height: 140}}
                  image={require ("../storage/"+val.pic)}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {val.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {val.desc.substring(0,100)+"..."}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Запази</Button>
                  <Button size="small">Информация</Button>
                </CardActions>
              </Card>
            </Grid>
            )
          })}
        </Grid>
      </Box>
    </>
  );
}