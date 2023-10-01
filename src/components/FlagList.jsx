/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  root: {
    minWidth: "50vw",
    maxWidth: "80vw",
    height: "10vh",
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

export default function FlagList(props) {
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
            <Typography variant="h5" component="h2" align="center" gutterBottom>
              Category
            </Typography>

            <br />
            <Chip
              size="medium"
              label="Any"
              clickable
              onClick={() => {
                props.handleClick("Any");
              }}
            />
            <Chip
              size="medium"
              label="Programming"
              clickable
              onClick={() => {
                props.handleClick("Programming");
              }}
            />
            <Chip
              size="medium"
              label="Misc"
              clickable
              onClick={() => {
                props.handleClick("Misc");
              }}
            />
            <Chip
              size="medium"
              label="Dark"
              clickable
              onClick={() => {
                props.handleClick("Dark");
              }}
            />
            <Chip
              size="medium"
              label="Pun"
              clickable
              onClick={() => {
                props.handleClick("Pun");
              }}
            />
          </div>
          <br />
        </Typography>
      </CardContent>
    </Card>
  );
}

FlagList.propTypes = {
  handleClick: PropTypes.func,
};
