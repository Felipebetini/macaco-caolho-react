import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import mascote from "../img/macaco-caolho-mascote 2.png";
import CardMedia from "@material-ui/core/CardMedia";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 700,
    marginLeft: "auto",
    marginRight: "auto",
  },
  media: {
    height: 140,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.root}>
        <CardMedia className={classes.media} image={mascote} />
      </Card>
    </Grid>
  );
}
