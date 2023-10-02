/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import ReplayIcon from "@material-ui/icons/Replay";

const useStyles = makeStyles({
  root: {
    minWidth: "50vw",
    maxWidth: "60vw",
    backgroundColor: "#130f40",
    color: "#fff",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function FactCard(props) {
  const classes = useStyles();

  return (
    <>
      <div className="root">
        <h2>Facts: </h2>
        <h6>{props.fact}</h6>
        <Fab
          variant="circular"
          size="medium"
          className="btn"
          onClick={() => {
            props.fetchData("Any");
          }}
        >
          <ReplayIcon />
        </Fab>
      </div>
    </>
  );
}

FactCard.propTypes = {
  fact: PropTypes.any,
  fetchData: PropTypes.func,
};
