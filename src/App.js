import "./App.css";
import France from "./images/france";
import { useState, useEffect } from "react";

function App() {
  const metropoles = [
    "Lille",
    "Rouen",
    "Paris",
    "Metz",
    "Nancy",
    "Strasbourg",
    "Brest",
    "Rennes",
    "Orleans",
    "Nantes",
    "Tours",
    "Dijon",
    "Clermont-Ferrand",
    "Lyon",
    "Bordeaux",
    "Saint-Etienne",
    "Grenoble",
    "Toulouse",
    "Montpellier",
    "Marseille",
    "Toulon",
    "Nice",
  ];

  const metropoles2 = [
    "Metropole Europeenne de Lille",
    "Metropole Rouen Normandie",
    "Metropole du Grand Paris",
    "Metz Metropole",
    "Metropole du Grand Nancy",
    "Eurometropole de Strasbourg",
    "Brest Metropole",
    "Rennes Metropole",
    "Orleans Metropole",
    "Nantes Metropole",
    "Tours Metropole Val de Loire",
    "Dijon Metropole",
    "Clermont Auvergne Metropole",
    "Metropole de Lyon",
    "Bordeaux Metropole",
    "Saint-Etienne Metropole",
    "Grenoble-Alpes-Metropole",
    "Toulouse Metropole",
    "Montpellier-Mediterranee Metropole",
    "Metropole d'Aix-Marseille-Provence",
    "Metropole Toulon-Provence-Mediterranee",
    "Metropole Nice Cote d'Azur",
  ];

  const [score, setScore] = useState(0);
  const [searchingFor, setSearchingFor] = useState();
  const [searchingFor2, setSearchingFor2] = useState();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();
  const [showVilles, setShowVilles] = useState();

  function randomize() {
    const number = Math.floor(Math.random() * metropoles.length);
    setSearchingFor(metropoles[number]);
    setSearchingFor2(metropoles2[number]);
  }

  function checkNumber(metropole) {
    const div = document.getElementById(metropole);
    if (metropole === searchingFor) {
      setMessage("Correct !");
      div.style = "background-color: green;";
      setScore(score + 1);
      setTimeout(() => {
        setMessage();
        div.style = "background-color: white;";
      }, 1000);
      randomize();
    } else {
      setMessage("Faux !");
      div.style = "background-color: red;";
      setScore(score - 1);
      setTimeout(() => {
        setMessage();
        div.style = "background-color: white;";
      }, 1000);
    }
  }

  useEffect(() => {
    console.log(localStorage.getItem("showVilles"));
    setShowVilles(localStorage.getItem("showVilles") === "true" ? true : false);
    randomize();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !loading && (
      <>
        <button
          className="button"
          onClick={() => {
            setShowVilles(!showVilles);
            localStorage.setItem("showVilles", !showVilles);
          }}
        >
          Afficher les {showVilles ? "metropoles" : "villes"}
        </button>
        <span>Score: {score}</span>
        <div className="request">
          <h1>Trouvez {showVilles ? searchingFor : searchingFor2}</h1>
          {message ? (
            <h1 style={{ color: message === "Correct !" ? "green" : "red" }}>
              {message}
            </h1>
          ) : (
            ""
          )}
        </div>
        <div className="container">
          <France fill="lightblue" className="carte"></France>
          {metropoles.map((metropole) => {
            return (
              <div id={metropole} onClick={() => checkNumber(metropole)} />
            );
          })}
        </div>
        <div style={{ color: "gray" }}>
          <p>Copyright 2021 &#169; Terence Dumas</p>
          <a href="https://github.com/dumast">Github</a>
        </div>
      </>
    )
  );
}

export default App;
