import { useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { StyledSignUpPage } from "../styles/signUpPage.styled";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { UserContext } from "../contexts/userContext"

function Login() {
  const { userDispatch } = useContext(UserContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [loading, setIsloading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true)
    setError('')
    try {
      console.log("anything")
      const res = await axios.post("/api/users/login", {
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })
     
      if (res) {
        setIsloading(false)
      const user = { username: res.data.user.user_name, token: res.data.token }
      localStorage.setItem("user", JSON.stringify(user))
      userDispatch({type: "LOGIN", payload: user})
        console.log("this is ", res)
      }
      navigate("/home/public")
    } catch (err) {
      setError("Invalid Login Credentials")
      console.log("this is err", err)
    }
    setTimeout(() => {
        setError('')
      },3000)
      setEmail('')
      setPassword('')
    }

  return (
    <div>
      <StyledSignUpPage>
        <form className="signup" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <p>Check out the latest at Flash😁.</p>
          <div className="email field">
            <label>Email:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="password-field field">
            <label>Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          {error && <p style={{ color: "red" }}> {error}</p>}
          {loading ? <button className="signup-btn">Just a Sec...</button> : <button className="signup-btn">Login</button>}
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </form>
        <ToastContainer />
      </StyledSignUpPage>
    </div>
  );
}

export default Login;
