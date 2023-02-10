import React from 'react'

const Main = () => {
  return (
    <section className='container h-[90vh] grid grid-cols-1 md:grid-cols-8 '>

       {/*  Informacion del Main, y divisiones */}
          
        <section className='md:col-span-5'>
          <div className='flex justify-center'>  </div>
            {/* Imagen Main */}
        <div>   

            <img className='md:mt-20 mt-[20%] md:w-[50%] w-[100%] md:h-86 h-80  -rotate-3  ' src="../src/assets/img1.png" />

   {/*  Cuadro abajo de imagenes */}
            <div className='relative bg-emerald-900 shadow-2xl rounded-tr-3xl rounded-br-lg xl:p-14 p-10 w-full md:w-[50%] flex flex-col justify-center  md:ml-[30%] ml-[50%] -translate-x-[60%] xl:-mt-[2%] -mt-[2%]  h-[100%] '></div>

            </div>
                {/*  boton contactame */}
         <div className='md:ml-[70%] m-5 '>
          <button className='BtnImg text-quaternary '>Contáctanos</button>
         </div>
           

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