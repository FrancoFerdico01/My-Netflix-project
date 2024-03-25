import "./Navbar.css";
import { useState } from "react";
import Login from "../Login/Login";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const [dialog, setDialog] = useState(false);
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/abbonati");
  }

  function handleclick() {
    setDialog(true);
  }

  return (
    <>
      {dialog && <Login setDialog={setDialog} />}

      <nav className="Navbar">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          className="logo"
        ></img>

        <div className="buttons">
          <p>SERIE TV E FILM SENZA LIMITI</p>
          <Link>
            <button onClick={navigateHandler} className="btn-subscript">
              ABBONATI ORA
            </button>
          </Link>
          <button onClick={handleclick} className="btn-login">
            ACCEDI
          </button>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
