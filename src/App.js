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

  const [searchingFor, setSearchingFor] = useState();

  const [loading, setLoading] = useState(true);

  const [message, setMessage] = useState();

  function randomize() {
    const number = Math.floor(Math.random() * metropoles.length);
    setSearchingFor(metropoles[number]);
  }

  function checkNumber(metropole) {
    if (metropole === searchingFor) {
      setMessage("Correcte !");
      setTimeout(() => {
        setMessage();
      }, 1000);
      randomize();
    } else {
      setMessage("Faux !");
      setTimeout(() => {
        setMessage();
      }, 1000);
    }
  }

  useEffect(() => {
    randomize();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    !loading && (
      <>
        <div className="request">
          <h1>Trouvez {searchingFor}</h1>
          {message ? (
            <h1 style={{ color: message === "Correcte !" ? "green" : "red" }}>
              {message}
            </h1>
          ) : (
            ""
          )}
        </div>
        <div className="container">
          <France fill="green" className="carte"></France>
          {metropoles.map((metropole) => {
            return (
              <div id={metropole} onClick={() => checkNumber(metropole)} />
            );
          })}
        </div>
      </>
    )
  );
}

export default App;
