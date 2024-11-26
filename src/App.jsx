import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Home from './Pages/Home'
import Cities from './Pages/Cities'
import About from './Pages/About'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import StandarLayout from './Layouts/StandarLayout'
import City from './Pages/City'
import SignIn from './Pages/SignIn'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from './store/actions/authAction'
import { useEffect, useState } from 'react'
import SignUp from './Pages/SignUp'
import SignRoute from './Components/SignRoute'
import PrivateRoute from './Components/PrivateRoute'
import Profile from './Pages/Profile'


const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <PrivateRoute><About></About></PrivateRoute> },
      { path: "/contact", element: <PrivateRoute><Contact></Contact></PrivateRoute> },
      { path: "/home", element: <Home></Home> },
      { path: "/*", element: <NotFound></NotFound> },
      { path: "/cities", element: <PrivateRoute><Cities></Cities></PrivateRoute> },
      { path: "/city/:id", element: <PrivateRoute><City></City></PrivateRoute> },
      { path: "/sign-in", element: <SignRoute><SignIn></SignIn></SignRoute> },
      { path: "/sign-up", element: <SignRoute><SignUp></SignUp></SignRoute> },
      { path: "/profile", element: <PrivateRoute><Profile></Profile></PrivateRoute> },
    ]
  },
])

const loginWithToken = async (token) => {
  try {
    const response = await axios.get("http://localhost:8080/api/auth/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    )

    return response.data.response
  } catch (error) {
    console.error("Error validating the token", error)
    return null
  }
}

function App() {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      loginWithToken(token).then((user) => {
        if (user) {
          dispatch(setUser({ user, token }))
        } else {
          localStorage.removeItem("token")
        }
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
  }, [dispatch])

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
