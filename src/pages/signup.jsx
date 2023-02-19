import { useState } from 'react';
import { StyledSignUpPage } from "../styles/signUpPage.styled";
import axios from "axios"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';

const Signup = () => {
  const navigate = useNavigate()
  const { userDispatch } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [gender, setGender] = useState('');
  const [loading, setIsloading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true)
    console.log({ email, password, firstname, lastname, username, gender })

    try {
      const res = await axios.post("http://localhost:4000/api/users/signUp", {
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name: firstname,
          last_name: lastname,
          user_name: username,
          email: email,
          password: password,
          gender: gender
        }),
      })
      if (res) {
       setIsloading(false)
       const user = { username: res.data.newUser.user_name, token: res.data.token }
      localStorage.setItem("user", JSON.stringify(user))
      userDispatch({ type: "SIGNUP", payload: user })
      navigate("/home/public")
      console.log(res)
      }
    
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <StyledSignUpPage>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <p>Join Flash, It's quick and easy😁.</p>
        <div className='firstname-field field'>
          <label>Firstname:</label>
          <input
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            value={firstname}
          />
        </div>
        <div className='lastname-field field'>
          <label>Lastname:</label>
          <input
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
        </div>
        <div className='email-field field'>
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className='username field'>
          <label>Username:</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className='gender field'>
          <label>Gender:</label>
          <input
            type="text"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
        </div>
        <div className='password-field field'>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {loading ? <button className="signup-btn">Just a Sec...</button> : <button className='signup-btn'>SignUp</button>}
        <p>Already have an account?<Link to="/login">SignIn</Link></p>
      </form>
    </StyledSignUpPage>
  );
}
export default Signup;
