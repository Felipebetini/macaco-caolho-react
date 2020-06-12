import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Drinks from "../img/com-o-olho-do-macaco.jpg";
import Grid from "@material-ui/core/Grid";
import historia from "../img/staff.jpeg";
import agenda from "../img/macacoCaolho.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "linear-gradient(to bottom, #ff4530 30%, #FF8E53 100%)",
  },
  card: {
    background: " #1CC770",
    borderRadius: "2%",
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-evenly"
        alignItems="flex-start"
        spacing={5}
      >
        <Grid item xs>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Drinks"
                image={Drinks}
                title="Drinks da Casa"
                height={300}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  Drinks da Casa
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Drinks"
                image={historia}
                title="Nossa Historia"
                height={300}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Cervejas
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Drinks"
                image={agenda}
                title="Agenda da Semana"
                height={300}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Agenda da Semana
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Saiba Mais
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
