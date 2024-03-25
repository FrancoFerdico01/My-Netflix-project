import Navbar from "../../components/Navbar/Navbar";
import "./App.css";
import Category from "../../components/Category/Category";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        
          <h1 className="title">Originale Netflix</h1>
          <p className="p-app">
            Netflix produce una straordinaria programmazione originale che non
            <br />
            troverai da nessun'altra parte. Film, Serie tv, speciali e molto di
            piu...
            <br />
            su misura per te.{" "}
            <a className="link" href="/">
              Inizia a guardare gratis.
            </a>
          </p>
        
        <Category title="Serie Tv più popolari" detail='tv' category="/tv/popular" />
        <Category title="Film più popolari" detail='movie' category="/movie/popular" />
      </main>
    </div>
  );
}

export default App;
