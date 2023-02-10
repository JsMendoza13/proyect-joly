import React from 'react'


const Crear = () => {
  return (
    
       <section className='formulario'>
        <form id="formulario" method="post"  name="form" action="">

            
            <input type="text" placeholder="texto" name="texto" />

            <input type="text" placeholder="texto" name="texto" />

            <input type="email" placeholder="texto" name="texto" />  
            
            <input type="text" placeholder="texto" name="texto" />

            <input type="text" placeholder="texto" name="texto" />

            <input type="submit" value="Agregar" className='boton' name="add"/>
        </form>
    </section>
    
   
  )
}

export default Crear