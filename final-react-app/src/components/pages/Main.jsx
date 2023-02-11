import React from 'react'
import Slider from './Slider'
import img1 from '/src/assets/img1.png'
import mision from '/src/assets/mision.png'
import vision from '/src/assets/vision.png'

const Main = () => {
  return (
      <section>
    <section className='h-[90vh] grid grid-cols-1 md:grid-cols-8 '>

               {/*  Informacion del Main, y divisiones */}
          
        <section className='md:col-span-5'>
          <div className='flex justify-center'>  </div>
                 {/* Imagen Main */}
        <div>   

            <img className='md:w-[50%] w-[80%] ' src={img1} />

                {/*  Cuadro abajo de la imagen */}
            <div className='relative bg-emerald-900 shadow-2xl rounded-tr-3xl rounded-br-lg xl:p-[5%] p-10 w-full md:w-[50%] flex flex-col justify-center  md:ml-[30%] ml-[50%] -translate-x-[60%] xl:-mt-[2%] -mt-[2%]  h-[100%] '></div>

            </div>
                {/*  boton contactame */}
         <div className='md:ml-[70%] m-5 '>
          <button className='BtnImg text-quaternary'>Contáctanos</button>
         </div>
              
        </section>
        
              
                  
           {/*  Parte de titulo y Descripcion */}
        <section className='md:col-span-3 flex items-center justify-center '>
           <div className='p-10' >
            <h1 className='font-bold text-quaternary mr-20 md:-mt-10 float-right text-7xl '>Joly </h1>
            <h2 className='text-secundary text-4xl '> <br></br> Guacamole y Hummus </h2>
            <p className='text-gray-300 '>Mejore cualquier comida o refrigerio con este delicioso guacamole que complace a todos, perfectamente obtenido y preparado para obtener el máximo sabor. </p>
            </div>
        </section>
        </section>
                      {/* Se llama al Slider */}
        <section> <Slider/> </section>

              {/*  PARTE DE LA MISION - VISION */}
        <section className='h-[100vh] grid grid-cols-1 md:grid-cols-8 mt-40'>
       
          <section className='md:col-span-4 flex items-center justify-center p-8'>
          <div>
            <h1 className='font-bold m-1 ml-5 text-6xl text-secundary' >Mision</h1>
            <img className='md:mt-10 mt-[7%] md:w-[45%] w-[80%] md:h-86 h-60 ' src={mision} />

          <p className='relative bg-emerald-900 shadow-2xl rounded-tr-3xl rounded-br-lg md:p-3 p-5 w-full md:w-[50%] flex flex-col md:ml-[30%] ml-[0%] md:-translate-x-[-40%] md:-mt-[23%] mt-[5%]  h-[100%] text-quaternary'>Guacamole y Hummus es un proyecto innovador que ofrece deliciosos platillos con la misión de llevar el sabor de nuestra region a cualquier cocina. 
          Ademas es una empresa que se esfuerza por crear un impacto significativo en el mundo. Como esfuerzo empresarial, valoramos la creación de un ambiente de trabajo colaborativo y empoderado. Nuestro objetivo es empoderar a las personas a través de nuestros productos y brindarles la oportunidad de aprender nuevas habilidades mientras se divierten.</p></div>
          </section>
                    {/* Parte de vision text-img */}
        <section className='md:col-span-4 flex items-center justify-center p-8'>
          <div>
            <h1 className='font-bold m-1 ml-5 text-6xl text-secundary md:float-right'>Vision</h1>
            <img className='md:mt-10 mt-[20%] md:w-[55%] w-[80%]  h-80  -rotate-3  ' src={vision} />

            <p className='relative bg-emerald-900 shadow-2xl rounded-tr-3xl rounded-br-lg xl:p-5 p-5 mt-[2%]  h-[100%] text-quaternary'>Creemos en una visión empresarial que está guiada por la pasión de crear productos sorprendentes mientras promovemos la calidad y la nutrición saludable.
            A través de nuestra innovación, hacemos que la alimentación saludable sea más fácil, más asequible, más accesible y, lo que es más importante, ¡deliciosa!
            </p>
            </div>
          </section>
          
        </section>
       
    </section>
        
  )
}

export default Main