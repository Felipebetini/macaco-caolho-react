import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
    textAlign: "center",
    fontSize: "20px",
  },
  Grid: {
    textAlign: "center",
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid}>
      <Grid item xs={12}>
        <Grid className={classes.Grid} component="h1">
          Quem somos nos?
        </Grid>
        <Grid className={classes.Grid} component="p">
          Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um
          texto randômico. Com mais de 2000 anos, suas raízes podem ser
          encontradas em uma obra de literatura latina clássica datada de 45 AC.
          Richard McClintock, um professor de latim do Hampden-Sydney College na
          Virginia, pesquisou uma das mais obscuras palavras em latim,
          consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por
          entre citações da palavra na literatura clássica, descobriu a sua
          indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do
          "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de
          Cícero, escrito em 45 AC.
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
