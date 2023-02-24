import { useState } from 'react';
import { StyledSignUpPage } from "../styles/signUpPage.styled";
import axios from "axios"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../contexts/userContext';
import BASE_URL from '../helpers/axios';

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
    if (!email || !password || !firstname || !lastname || !username || !gender) {
      setIsloading(false)
    }
    try {
      const res = await axios.post(`${BASE_URL}/api/users/signUp`, {
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

  const handleSelect = (e) => {
    console.log(e.target.value)
    setGender(e.target.value)
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
            required
          />
        </div>
        <div className='lastname-field field'>
          <label>Lastname:</label>
          <input
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
            required
          />
        </div>
        <div className='email-field field'>
          <label>Email:</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
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
          <select name="gender" id="gender"
            onChange={handleSelect}
            required
          >
            <option value="">-Select Gender-</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className='password-field field'>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        {loading ? <button className="signup-btn" disabled>Loading...</button> : <button className='signup-btn'>SignUp</button>}
        <p>Already have an account?<Link to="/login">SignIn</Link></p>
      </form>
    </StyledSignUpPage>
  );
}
export default Signup;
