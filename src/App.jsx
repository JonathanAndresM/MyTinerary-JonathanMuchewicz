import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import Cities from './Pages/Cities';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import StandarLayout from './Layouts/StandarLayout';

const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>,
    children: [
      {path: "/", element: <Home></Home>},
      {path: "/about", element: <About></About>},
      {path: "/contact", element: <Contact></Contact>},
      {path: "/home", element: <Home></Home>},
      {path: "/*", element: <NotFound></NotFound>}
    ]
  },
  {path: "/cities", element: <Cities></Cities>},
])

function App() {

  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
