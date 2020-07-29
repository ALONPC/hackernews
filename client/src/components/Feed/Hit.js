import React from "react";
import {
  ListItem,
  IconButton,
  ListItemSecondaryAction,
  Link,
  makeStyles,
  Typography,
  Grid,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  hit: {
    backgroundColor: "#fff",
    borderTop: "solid 1px #ccc",
    padding: theme.spacing(1),
    "&:hover": {
      backgroundColor: "#fafafa",
    },
  },
  text: {
    color: theme.palette.primary.main,
    fontSize: "13pt",
  },
  author: {
    color: theme.palette.secondary.main,
  },
}));

const Title = ({
  hit: { story_title, title, author, created_at, story_url, url },
}) => {
  const classes = useStyles();
  const finalTitle = story_title || title;
  const time = moment(created_at).calendar(null, {
    sameDay: "hh:mm A",
    lastDay: "[Yesterday]",
    lastWeek: "MMMM DD",
    sameElse: "DD/MM/YYYY",
  });
  return (
    <>
      <Grid container spacing={1} xs={10}>
        <Grid item>
          <Link href={story_url || url} target="_blank" underline="none">
            <Typography className={classes.text}>{finalTitle || ""}</Typography>
          </Link>
        </Grid>
        <Grid item>
          <Typography className={classes.author}>{`- ${author} -`}</Typography>
        </Grid>
      </Grid>

      <Grid container xs={2}>
        <Grid item>
          <Typography className={classes.text}>{time}</Typography>
        </Grid>
      </Grid>
    </>
  );
};

const RemoveAction = ({ hit: { _id: id }, handleDelete }) => (
  <ListItemSecondaryAction>
    <IconButton onClick={() => handleDelete(id)} edge="end" aria-label="delete">
      <DeleteIcon />
    </IconButton>
  </ListItemSecondaryAction>
);

export const Hit = ({ hit, handleDelete }) => {
  const classes = useStyles();

  return (
    <div className={classes.hit}>
      <ListItem
        children={
          <>
            <Title hit={hit}></Title>
            <RemoveAction hit={hit} handleDelete={handleDelete}></RemoveAction>
          </>
        }></ListItem>
    </div>
  );
};
