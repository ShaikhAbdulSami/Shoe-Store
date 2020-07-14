import React ,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import shoes from "./Item.json";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {   CardActionArea, CardActions, CardMedia, Button, Typography , Container } from "@material-ui/core";



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const Home = () => {
  const classes = useStyles();
  const { addToCart } = useContext(GlobalContext);


  return (
    <div className={classes.root}>
      <Container  style={{width:"80%"}} >
      <div >
            <Container  sm={4} >
            <h1  style={{ "textAlign": "center" }}>  </h1>
            </Container>
      </div>
      </Container>
      <Grid container spacing={4}>
        {Object.entries(shoes).map(([shoe, { name, img,  price }]) => {
          return (
            <Grid item xs={12} sm={6} md={3}>
              <Grid className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={img[0]}
                    title={name}
                  />
                  <Paper>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography variant="h5">
                      Price: ${price}
                    </Typography>
                  </Paper>
                </CardActionArea>
                <CardActions>
                <Button  href="/cart" onClick={() => addToCart(shoe)}>Add to Cart</Button>
                </CardActions>
              </Grid >
            </Grid>
          )
        })}

      </Grid>
    </div>
  )
};