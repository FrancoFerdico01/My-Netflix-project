import "./Login.css";
import { useLockBodyScroll } from "@uidotdev/usehooks";
function Login() {
  useLockBodyScroll()
  return (
    <div className="background">
      <dialog className="dialog" open>
        <h2>Accedi</h2>
        <div>
          <input placeholder="E-mail o numero di telefono" type="text"></input>
        </div>
        <div>
          <input placeholder="Password" type="text"></input>
        </div>
        <button> Accedi </button>
        <a href="/">
          Hai dimenticato la password?
        </a>
      </dialog>
    </div>
  );
}

export default Login;
