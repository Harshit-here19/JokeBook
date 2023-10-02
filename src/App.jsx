import { useState } from "react";
import JokeBook from "./components/JokeBook";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Fab from "@material-ui/core/Fab";
import FactUpLine from "./components/FactUpLine";

export default function App() {
  const [swipe, setSwipe] = useState(false);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Fab
        variant="circular"
        size="medium"
        color="primary"
        className="appBtn"
        onClick={() => {
          setSwipe(false);
        }}
      >
        <ChevronLeftIcon />
      </Fab>
      {!swipe && <JokeBook />}
      {swipe && <FactUpLine />}

      <Fab
        variant="circular"
        size="medium"
        color="primary"
        className="appBtn"
        onClick={() => {
          setSwipe(true);
        }}
      >
        <ChevronRightIcon />
      </Fab>
    </div>
  );
}
