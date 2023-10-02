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
  root: {
    minWidth: "50vw",
    maxWidth: "80vw",
    height: "10vh",
    backgroundColor: "#7B1FA2",
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

export default function FactList(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h6">
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="h6" component="h2" align="center" gutterBottom>
              More Updates will be Coming
            </Typography>

            <br />
            <Chip
              size="medium"
              label="Close"
              clickable
              onClick={props.handleClick}
            />
          </div>
        </Typography>
      </CardContent>
    </Card>
  );
}

FactList.propTypes = {
  handleClick: PropTypes.func,
};
