import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    height: "280px",
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 36,
  },
  headerTitle: {
    fontWeight: 900,
  },
}));

export const Header = () => {
  const classes = useStyles();
  const headerText = {
    title: "HN Feed",
    subtitle: "We <3 hacker news!",
  };
  return (
    <>
      <div className={classes.header}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              variant="h1"
              component="h2"
              className={classes.headerTitle}>
              {headerText.title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2">
              {headerText.subtitle}
            </Typography>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
