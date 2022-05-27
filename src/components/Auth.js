import { useRef } from "react";

import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";
import { authActions } from "../store/index";

const Auth = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;

    if (emailInput !== "buraz1980@gmail.com" || passwordInput !== "lsd12345") {
      return;
    } else {
      dispatch(authActions.login());
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" ref={passwordInputRef} />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
