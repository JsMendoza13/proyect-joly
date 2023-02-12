/* import {createBrowserRouter, RouterProvider} from 'react-router-dom' */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error404 from "/src/components/helpers/Error404"
import Footer from '/src/components/pages/Footer'
import Header from '/src/components/pages/Header'
import Main from '/src/components/pages/Main'
import Listado from './components/productos/Listado';
import Clientes_m from './components/clientes/Clientes_m';
import Editar from './components/productos/Editar';
import Crear from './components/clientes/CrearCli';


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
       <Route path="/productos" element={<Listado/>}/> 
       <Route path="/clientes" element={<Clientes_m/>}/>    
       <Route path="/editar/:id" element={<Editar/>}/> 
       <Route path="/crear" element={<Crear/>}/>   
       
       </Routes>
        
    {/*   <RouterProvider router={router} /> */}
      <Footer/>
            </Router> 
  )
}

export default App
