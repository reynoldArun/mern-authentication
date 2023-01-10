import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

  const RegisterUser = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(`http://localhost:3000/api/register`, {
        username: name,
        password,
        email
      })
      console.log(result)
      if (result) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }

  }

  return (
    <section className="containerReg">
      <form>
        <div className='inputblock'>
          <label htmlFor="username">Username</label><br />
          <input type="username" value={name} onChange={(e) => setName(e.target.value)} id="username" placeholder="Enter username" />
        </div>
        <div className='inputblock'>
          <label htmlFor="password">Password</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password" />
        </div>
        <div className='inputblock'>
          <label htmlFor="email">Email</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" placeholder="Email" />
        </div>
        <button type="submit" className="btn" onClick={RegisterUser}>Register</button>
      </form>
      <Link to={"/login"}>Login?</Link>
    </section>
  )
}

export default Register