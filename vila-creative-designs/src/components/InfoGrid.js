import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ShoppingCartIcon } from '@material-ui/icons/ShoppingCart';
import CarpenterWorking from '../images/carpenter-working.png';
import { Image } from 'react-bootstrap';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      textAlign: 'center',
      //height: 140,
      //width: 100,
      color: theme.palette.text.secondary,
    },
    avatar: {
      width: 100,
      height: 140
    }
}));

export default function InfoGrids() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Paper className={classes.paper}>
              {/* <Image src={ CarpenterWorking } alt="First slide"/> */}
              <Avatar src={  CarpenterWorking } alt="Carpenter" className={classes.avatar}/>
              
              xs=3
              </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper}>xs=3</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
  