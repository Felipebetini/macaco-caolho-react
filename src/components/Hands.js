import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hand from "../img/hand.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Hands() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <img src={Hand} className="hands" />
        </Grid>
        <Grid item xs>
          <img src={Hand} className="hands" />
        </Grid>
        <Grid item xs>
          <img src={Hand} className="hands" />
        </Grid>
        <Grid item xs>
          <img src={Hand} className="hands" />
        </Grid>
        <Grid item xs>
          <img src={Hand} className="hands" />
        </Grid>
        <Grid item xs>
          <img src={Hand} className="hands" />
        </Grid>
        <Grid item xs>
          <img src={Hand} className="hands" />
        </Grid>
      </Grid>
    </div>
  );
}
