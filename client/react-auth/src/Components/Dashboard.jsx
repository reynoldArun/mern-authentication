import React from 'react'
import {useNavigate} from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const Logout = () => {
    const token = localStorage.removeItem('check')
    if(!token) {
      navigate('/login')
    }
  }

  return (
    <section className='dashboard'>
      <h1>Welcome to Dashboard</h1>
      <button className='btn' onClick={Logout}>Logout</button>
    </section>
  )
}

export default Dashboard