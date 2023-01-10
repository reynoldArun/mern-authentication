import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import Login from './Components/Login'
import CheckAuth from './Components/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CheckAuth><Dashboard /></CheckAuth>
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '*',
    element: (
      <h1>Page Not Found</h1>
    )
  },
])



const App = () => {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App