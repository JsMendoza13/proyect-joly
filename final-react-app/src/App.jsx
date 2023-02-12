/* import {createBrowserRouter, RouterProvider} from 'react-router-dom' */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error404 from "/src/components/helpers/Error404"

/*↓ principal ↓*/
import Footer from '/src/components/pages/Footer'
import Header from '/src/components/pages/Header'
import Main from '/src/components/pages/Main'

/*↓ productos ↓*/
import Listado from './components/productos/Listado';
import Editar from './components/productos/Editar';
import Crear from './components/productos/Crear';

/*↓ clientes ↓*/
import Clientes from './components/clientes/ListadoCli';
import Crear_cli from './components/clientes/CrearCli'


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
       <Route path="/crear" element={<Crear/>}/>  
       <Route path="/editar/:id" element={<Editar/>}/> 
       

       <Route path="/clientes" element={<Clientes/>}/>   
       <Route path="/crear_cli" element={<Crear_cli/>}/>   
       
       </Routes>
        
    {/*   <RouterProvider router={router} /> */}
      <Footer/>
            </Router> 
  )
}

export default App
