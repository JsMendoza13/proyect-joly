import React, {useState} from 'react'
/* import {Link} from 'react-router-dom'
import {RiCloseLine, RiMenu3Fill, RiMenuLine } from "react-icons/ri"; */

const Header = () => {
  /* 
  const [showMenu, setShowMenu] = useState(false);
   */
  return (

    <header className="flex item-center justify-between xl:justify-start w-full py-13 px-5 xs:px-40 h-[10vh] z-50 bg-secundary">
          
   {/*  <div className=' text-center mt-3'>
      <Link to='/'>
      <img className=' w-[0%] xl:w-[40%] ml-20'  src={logo} alt="logo" />
      </Link>
     
    </div> */}
   <nav className={`fixed w-[80%] md:w-[20%] xl:w-full h-full  top-0 xl:static flex-2 flex flex-col xl:flex-row items-center justify-center gap-10 bg-secundary transition-all duration-500 z-50`}>
      
   
     {/*  <Link className='hoverLink text-primary' to='/'><a>Home</a></Link>
      <Link className='hoverLink text-primary' to=''>Productos</Link>
      <Link className='hoverLink text-primary' to=''>Clientes</Link>
      <Link className='hoverLink text-primary' to=''>Proveedores</Link>  */}

    </nav>     {/* <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden text-4xl  p-2 text-primary'>
    {showMenu ? <RiCloseLine /> : <RiMenu3Fill/>}

    </button> */}
  </header>



  )
}

export default Header