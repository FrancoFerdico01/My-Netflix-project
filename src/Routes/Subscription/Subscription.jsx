import React from "react";
import "./Subscription.css";
import { Link } from "react-router-dom";

const Subscription = () => {
  return (
    <div className="Subscription">
      <nav className="nav-sub">
        <img
          className="sub-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        />
        <Link className="link-sub" to="/">
          <button>
            <strong>Torna alla Home</strong>
          </button>
        </Link>
      </nav>
      <div className="form-sub">
        <h2>
          Crea una password per <br />
          iniziare l'abbonamento
        </h2>
        <p>
          Mancano solo alcuni passaggi! <br /> Anche noi detestiamo la
          burocrazia.
        </p>

        <input placeholder="Email"></input>
        <input placeholder="Aggiungi una password"></input>
        <button>Abbonati</button>
      </div>
    </div>
  );
};

export default Subscription;
