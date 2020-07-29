import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

export const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(1),
      width: "100%",
      position: "fixed",
      bottom: 0,
    },
  }));

  const classes = useStyles();

  return (
    <footer position="sticky" className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {`Hacker News, ${new Date().getFullYear()}.`}
      </Typography>
    </footer>
  );
};
