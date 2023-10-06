import { useState } from "react"
import { authenticationRequest } from "../../api/calls";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [login, setLogin] = useState(false)
  const [error, setError] = useState("")
  const navigate = useNavigate();

  const authenticate = async (e) => {
    e.preventDefault();
    const email = e.target.elements[0].value
    const password = e.target.elements[1].value
    authenticationRequest(email, password, navigate, setError, setLogin)

    // if (response === 200) {
    //   setLogin("Successfully logged in.")
    // } else if (response === 401) {
    //   setLogin("That email and password combination is incorrect")
    // } else {
    //   setLogin("We couldn't log this user in")
    // }
  }

  return (
    <div>
      <form onSubmit={authenticate}>
        <div>
          <input id="email" type="text" placeholder="email" required />
          <input id="password" type="text" placeholder="password" required />
        </div>
        <button type="submit" disabled={login}>Log in</button>
      </form>
      <p>{login ? "Successfully logged in. Redirecting to Profile." : ""}</p>
      <p>{error ? `${error}` : ""}</p>
    </div>
  )
}

export default Login