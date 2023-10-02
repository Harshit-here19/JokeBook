import { useState } from "react";
import FactList from "./FactList";
import FactCard from "./FactCard";

export default function FactUpLine() {
  const [flagVisible, setFlagVisible] = useState(true);
  const [fact, setfact] = useState("Reload For More.....");

  async function fetchData() {
    let url = `https://api.api-ninjas.com/v1/facts`;
    const response = await fetch(url, {
      method: "GET",
      headers: { "X-Api-Key": "tnMzZ5cNtzUZzrOub7Id5A==9JPRJAg2jccyzQgH" },
      contentType: "application/json",
    });
    const data = await response.json();
    setfact(data[0].fact);
  }

  async function handleClick() {
    setTimeout(() => {
      setFlagVisible(true);
    }, 250);
  }

  return (
    <div className="container">
      <h1>RANDOM FACTS</h1>
      <div style={{ display: "inline-grid", gridAutoColumns: "1fr 1fr" }}>
        {flagVisible && (
          <div
            style={{ height: "2vh", width: "50vw", backgroundColor: "#7B1FA2" }}
            onClick={() => {
              setFlagVisible(false);
            }}
          ></div>
        )}
        {!flagVisible && <FactList handleClick={handleClick} />}
      </div>
      <FactCard fact={fact} fetchData={fetchData} />
    </div>
  );
}
