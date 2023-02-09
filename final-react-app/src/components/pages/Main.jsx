import React from 'react'

const Main = () => {
  return (
    <section className=' h-[90vh] grid grid-cols-1 md:grid-cols-8 '>

       {/*  Informacion del Main, y divisiones */}


        {/*  Parte Imagen y boton */}

       
        
       
        <section className='md:col-span-5'>
          <div className='flex justify-center'>  </div>
       
            <img className='md:mt-20 w-auto h-96 ' src="../src/assets/img1.png" />
  
         <div className='md:ml-[70%]'>
          <button className='BtnImg text-quaternary '>Contáctanos</button>
         </div>
        
         <div className='relative bg-emerald-900 shadow-2xl rounded-tr-3xl rounded-br-lg xl:p-4 p-2 w-[80%] flex flex-col justify-center max-w-[80%] ml-[30%] -translate-x-[60%] xl:-mt-[6%] h-[30%] '></div>

        </section>

         

           {/*  Parte de titulo y Descripcion */}
        <section className='md:col-span-3 flex items-center justify-center p-8  '>
           <div>
            <h1 className='font-bold text-quaternary m-1 text-center text-3xl'>Joly <span className='text-secundary text-2xl '> Guacamole y Hummus </span></h1>
            <p className='text-gray-300'>Mejore cualquier comida o refrigerio con este delicioso guacamole que complace a todos, perfectamente obtenido y preparado para obtener el máximo sabor. </p>
            </div>
        </section>
    </section>
  )
}

export default Main