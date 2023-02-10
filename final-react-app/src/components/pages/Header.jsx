import React, {useState} from 'react'
/* import {Link} from 'react-router-dom' */
import {RiCloseLine, RiMenu3Fill, RiMenuLine } from "react-icons/ri";
/* import logo from '../src/assets/logo.png' */
 

const Header = () => {

  /* Variables para los iconos del nav, hacer responsive */
 
  const [showMenu, setShowMenu] = useState(false);
   
  return (
  /*  Caracteristicas Header */  
    <header className="text-quaternary flex item-center justify-between xl:justify-start w-full py-13 px-5 xs:px-40 h-[10vh] z-50">
         
   <div className=' text-center mt-3'>
    <p>Logo</p>
        {/* <Link to='/'>
        <img className=' w-[0%] xl:w-[40%] ml-20'  src="{logo}" alt="logo" />
              </Link> */}
                  </div>

         {/*  Inicio de Caracteristicas NAV */}

   <nav id="nav" className={`fixed w-[80%] md:w-[20%] xl:w-full h-full  top-0 xl:static flex-2 flex flex-col ${showMenu ? "left-0" : "-left-full"} xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
              
           <a href='#' className=''>Inicio</a>
           <a href='#' className=''>Productos</a>
           <a href='#' className=''>Clientes</a>
           <a href='#' className=''>Proveedores</a>   



    {/*  <Link className='hoverLink text-primary' to='/'><a>Home</a></Link>
       <Link className='hoverLink text-primary' to='/'>Productos</Link>
      <Link className='hoverLink text-primary' to='/'>Clientes</Link>
      <Link className='hoverLink text-primary' to='/'>Proveedores</Link>  */}

    </nav>  
    
       {/*  funcion del Nav responsive */}

    <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden text-4xl  p-2 text-primary'>
    {showMenu ? <RiCloseLine /> : <RiMenu3Fill/>} 

       </button>
         </header>



  )
}

export default Header