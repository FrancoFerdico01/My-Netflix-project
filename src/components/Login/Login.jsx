import "./Login.css";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import { useState } from "react";
function Login({ setDialog }) {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleInputChange(identifier, value) {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }

  useLockBodyScroll();
  return (
    <>
      <div className="background" onClick={() => setDialog(false)}></div>

      <dialog className="dialog" open>
        <form onSubmit={handleSubmit}>
          <h2>Accedi</h2>
          <div>
            <input
              id="email"
              type="email"
              name="email"
              onChange={(event) =>
                handleInputChange("email", event.target.value)
              }
              value={enteredValues.email}
              placeholder="E-mail o numero di telefono"
            ></input>
          </div>
          <div>
            <input
              id="password"
              type="password"
              name="password"
              onChange={(event) =>
                handleInputChange("password", event.target.value)
              }
              value={enteredValues.password}
              placeholder="Password"
            ></input>
          </div>
          <button className="btn-ok" onClick={handleInputChange}>
            Accedi
          </button>
          <button className="btn-back" onClick={() => setDialog(false)}>
            Torna indietro
          </button>
          <a href="/">Hai dimenticato la password?</a>
        </form>
      </dialog>
    </>
  );
}

export default Login;
