import { useState } from "react";
import FlagList from "./components/FlagList";
import JokeCard from "./components/JokeCard";

export default function App() {
  const [flagVisible, setFlagVisible] = useState(true);
  const [joke, setJoke] = useState({
    category: "Category",
    joke: "Reload for Jokes",
  });
  const [category, setCategory] = useState("Any");

  async function fetchData() {
    let url = `https://v2.jokeapi.dev/joke/${category}?type=single`;
    const response = await fetch(url);
    const data = await response.json();
    setJoke({
      category: data.category,
      joke: data.joke,
    });
  }

  async function handleClick(e) {
    setCategory(e);
    console.log(e);
    console.log(joke.category);

    setTimeout(() => {
      setFlagVisible(true);
      fetchData();
    }, 500);
  }

  return (
    <div className="container">
      <div style={{ display: "inline-grid", gridAutoColumns: "1fr 1fr" }}>
        {flagVisible && (
          <div
            style={{ height: "2vh", width: "50vw", backgroundColor: "#130f40" }}
            onClick={() => {
              setFlagVisible(false);
            }}
          ></div>
        )}
        {!flagVisible && <FlagList handleClick={handleClick} />}
      </div>
      <JokeCard joke={joke} fetchData={fetchData} />
    </div>
  );
}
