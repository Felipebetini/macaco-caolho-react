import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import drinks from "../img/com-o-olho-do-macaco.jpg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Grid className={classes.root}>
      <Grid item xs={6}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={drinks}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={drinks}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item xs={6}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image={drinks}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}
