import { useState } from "react";
import { authenticateUser } from "../utils/utils.js";
import { UserContext } from "../components/UserContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { user, updateUserState } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const getUser = async () => {
      const response = await authenticateUser(email, password);
      response
        ? (updateUserState(response), setIsLogged(true), navigate("/checkout"))
        : setErrorMessage("INVALID USER OR PASSWORD");
      console.log(response);
    //   updateUserState(response)
      console.log(user);
    };
    getUser();
  };

  return (
    <>
      <section className="login">
        <div className="right-box">
          <form action="">
            <div className="head">
              <h3 className="form__header">Login to Proceed</h3>
            </div>

            <div className="inner__form">
              <span className="error-msg">{errorMessage}</span>
              <label htmlFor="email">
                Email address: <br />
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <small></small>
              </label>
              <label htmlFor="password">
                Password: <br />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>

              <div className="btn-box">
                <button onClick={handleLogin}>Login account</button>
                <button onClick={() => navigate("/")}>Go Back to Home</button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
