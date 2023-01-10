import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';



const Login = () => {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const LoginUser = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post(`http://localhost:3000/api/login`, {
        username: name,
        password
      })
      if (result) {
        const GeTtoken = await result.data.token
        const setToken = await localStorage.setItem('check', GeTtoken)
        if (!setToken) {
          navigate('/login')
        }
        navigate('/')
      }
    } catch (error) {
      console.log(error)
    }

  }


  return (
    <section className='containerLogin'>
      <form>
        <div className='inputblock'>
          <label htmlFor="username">Username</label> <br />
          <input type="username" value={name} onChange={(e) => setName(e.target.value)} id="username" placeholder="Enter username" />
        </div>
        <div className='inputblock'>
          <label htmlFor="password">Password</label><br />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" placeholder="Password" />
        </div>
        <button type="submit" className="btn" onClick={LoginUser}>Login</button>
      </form>
      <Link to={"/register"}>Register?</Link>
    </section>
  )
}

export default Login