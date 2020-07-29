import React, { useState, useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import { Hit } from "./Hit";
import moment from "moment";
import { Typography } from "@material-ui/core";
import { API } from "../../contants";

export const Feed = () => {
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getNews();
  }, []);

  const onRemove = useCallback(
    (id) => {
      setHits(hits.filter((hit) => hit._id !== id));
    },
    [hits]
  );

  const useStyles = makeStyles((theme) => ({
    feed: {
      padding: theme.spacing(4),
    },
  }));

  const getNews = async () => {
    const hits = await fetch(API, { method: "GET" }).then((res) => res.json());
    hits.sort(
      (a, b) => moment(b.created_at).unix() - moment(a.created_at).unix()
    );
    setHits(hits);
    setLoading(false);
    console.log("fetched!");
  };

  const handleDelete = (id) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const deletedHit = fetch(`${API}/${id}`, options)
      .then((res) => res.json())
      .then((res) => console.log(res));
    console.log("handleDelete -> deletedHit", deletedHit);
    onRemove(id);
  };

  const classes = useStyles();

  return (
    <div className={classes.feed}>
      <Grid container>
        <Grid item xs={12}>
          <List>
            {!loading && !hits.length && (
              <Typography variant={"h4"}>Oops! No news yet</Typography>
            )}
            {!loading &&
              !!hits.length &&
              hits.map((hit, i) => (
                <Hit key={i} hit={hit} handleDelete={handleDelete}></Hit>
              ))}
            {loading && <Typography variant={"h4"}>Loading...</Typography>}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};
