import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "axios";
import FlipMove from "react-flip-move";
import Cards from "./Cards";
// import { Card } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import Rating from '@mui/material/Rating';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2)
    },
    media: {
        height: '260',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      cartActions: {
        justifyContent: 'space-between',
      },
      buttons: {
        display: 'flex',
        alignItems: 'center',
      },
      cardStyle :{
        display: "block",
        transitionDuration: "0.3s",
        height: "45vw"
      }
  }));
const Results = () => {
  const [movies, setMovies] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get("http://localhost:4001/api/v1/getAllMovies")
      .then((result) => {
        console.log(result);
        setMovies(result);
      })
      .catch(() => {
        setMovies(undefined);
      });
  }, []);
  console.log(
    movies?.data?.map((yy) => {
      return yy.Title;
    })
  );
  
  return (
    
    <div className={classes.root}>
      {/* <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        //   src={card.image}
        />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card> */}
      <Grid container spacing={2}>
      {movies && movies?.data?.map((movie)=>{
        return (
            <Grid item xs={4}>
                 <Divider orientation="vertical" flexItem/>
            <Card style={{ width: "26rem",height:"20rem" }} key={movie.Title} >
        <CardMedia
        component="img"
        className={classes.media}
        height="194"
        image={movie.Images[2]}
        alt="Paella dish"
      />
      <CardContent className={classes.cardContent}>
      <Typography gutterBottom variant="h5" component="div">{movie.Title}</Typography>
      <Typography gutterBottom variant="h5" component="div">{movie.Released}</Typography>
      {/* <Typography gutterBottom variant="h5" component="div">{movie.imdbRating}</Typography> */}
      <Rating name="read-only" value={movie.imdbRating} readOnly />
          </CardContent>
      </Card>
      </Grid>
        )
      })}
      </Grid>
    </div>
  );
};

export default Results;
