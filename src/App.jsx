import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { useEffect, useState } from "react";
//import { httpGET } from "./modules/api";
import Category from "./components/Category/Category";
function App() {
  useEffect(() => {
    //httpGET("/tv/", "63770").then((data) => console.log(data));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <div>
          <h1 className="title">ORIGINALE NETFLIX</h1>
          <p className="p-app">
            Netflix produce una straordinaria programmazione originale che non
            <br />
            troverai da nessun'altra parte. Film, Serie tv, speciali e molto di
            piu...
            <br />
            su misura per te.{' '}
            <a className="link" href="/">
              Inizia a guardare gratis.
            </a>
          </p>
        </div>
        <Category title="Serie Tv più popolari" category="/tv/popular" />
        <Category title="Film più popolari" category="/movie/popular" />
      </main>
    </div>
  );
}

export default App;
