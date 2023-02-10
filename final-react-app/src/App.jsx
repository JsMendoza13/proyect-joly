import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from "./components/helpers/Error404"
import Header from './components/pages/Header'
import Main from './components/pages/Main'
import Productos_m from './components/productos/Productos_m'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error404 />
  },
  {
    path: '/productos',
    element: <Productos_m />,
    errorElement: <Error404 />
  }
])


function App() {
  return (
    <div>
      <Header />
      <RouterProvider router={router} />

    </div>
    
  )
}

export default App
