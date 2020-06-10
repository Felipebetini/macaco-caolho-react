import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid id="paper1" className={classes.paper1} component="h1">
            Macaco caolho
          </Grid>
          <Grid id="paper2" className={classes.paper2} component="h1">
            Rock N' Drinks
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
