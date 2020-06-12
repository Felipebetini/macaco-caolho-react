import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  headerMacaco: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  headerRock: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  grid: {
    height: 1000,
    alignItems: "center",
    background:
      "linear-gradient(to bottom, #ff4530 10%,#ff8e53 29%,#ffffff 100%)",
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.grid}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Grid
            id="headerMacaco"
            className={classes.headerMacaco}
            component="h1"
          >
            Macaco Caolho
          </Grid>
          <Grid id="headerRock" className={classes.headerRock} component="h1">
            Rock N' Drinks
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
