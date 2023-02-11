/* import {createBrowserRouter, RouterProvider} from 'react-router-dom' */
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Error404 from "/src/components/helpers/Error404"
import Footer from '/src/components/pages/Footer'
import Header from '/src/components/pages/Header'
import Main from '/src/components/pages/Main'


/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error404 />
  }
 ]) */


function App() {
  return (
    <Router>
       <Header />
       
       <Routes>
       <Route path="/" element={<Main />}/>    
       </Routes>
        
    {/*   <RouterProvider router={router} /> */}
      <Footer/>
            </Router> 
  )
}

export default App
