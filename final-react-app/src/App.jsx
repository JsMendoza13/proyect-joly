import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Error404 from "./components/helpers/Error404"
import Header from './components/pages/Header'
import Main from './components/pages/Main'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
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
