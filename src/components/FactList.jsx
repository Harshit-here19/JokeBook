/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FlagList from "./FlagList";

const useStyles = makeStyles({
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

export default function FactList(props) {
  const classes = useStyles();

  return (
    <>
      <div className="listRoot">
        <Typography variant="h5" component="h2" align="center" gutterBottom>
          More Updates Will Be Coming.....
        </Typography>
        <br />
        <Chip
          size="medium"
          label="Close"
          clickable
          onClick={props.handleClick}
        />
      </div>
    </>
  );
}

FactList.propTypes = {
  handleClick: PropTypes.func,
};
