/* import {createBrowserRouter, RouterProvider} from 'react-router-dom' */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error404 from "/src/components/helpers/Error404"
import Footer from '/src/components/pages/Footer'
import Header from '/src/components/pages/Header'
import Main from '/src/components/pages/Main'
import Productos_m from './components/productos/Productos_m'
import Clientes_m from './components/clientes/Clientes_m';
import Editar from './components/productos/Editar';


/* const router = createBrowserRouter([
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
 ]) */


function App() {
  return (
    <Router>
       <Header />
       
       <Routes>
       <Route path="/" element={<Main />}/> 
       <Route path="/productos" element={<Productos_m/>}/> 
       <Route path="/clientes" element={<Clientes_m/>}/>     
       <Route path="/editar/:id" element={<Editar/>}/>  
       </Routes>
        
    {/*   <RouterProvider router={router} /> */}
      <Footer/>
            </Router> 
  )
}

export default App
