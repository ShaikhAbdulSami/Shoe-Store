import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" >
              <Link variant="contained" href="/" style={{color:"White","padding": "5px"}}>Home</Link>
          </Typography>
          <Typography variant="h6" className={classes.title}>
              <Link variant="contained" href="/cart" style={{color:"White","padding": "15px"}}>Cart</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
