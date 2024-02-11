import "./Navbar.css";

import { useState } from "react";
import Login from "../Login";

function Navbar() {
  const [dialog, setDialog] = useState(false);

  function handleclick() {
    setDialog(true);
  }

  return (
    <>
      {dialog && <Login />}
      <nav className="navbar">
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/Netflix-logo-red-black-png.png"
          className="img"
        ></img>

        <div className="buttons">
          <p className="p">SERIE TV E FILM SENZA LIMITI</p>
          <button className="btn-abbonati"> ABBONATI ORA</button>
          <button onClick={handleclick} className="btn-accedi">
            ACCEDI
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
