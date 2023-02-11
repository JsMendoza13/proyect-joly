import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const urlProductos = "http://localhost:3100/productos";

const Crear = () => {

  const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [valor, setValor] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [fechaVencimiento, setFechaVencimiento] = useState("");

    const crearProducto = async (e) => {
      e.preventDefault()
      const producto = {
        nombre,
        descripcion,
        valor,
        cantidad,
        fechaVencimiento,
      };
      await axios.post(urlProductos, producto);
      navigate('/productos')
    };

  return (
    
       <section className='formulario'>
        <form>

            
            <input 
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              placeholder="Nombre"
              type="text"
            />

            <input 
               onChange={(e) => setDescripcion(e.target.value)}
               value={descripcion}
               placeholder="descripcion"
               type="text"
            />

            <input 
            onChange={(e) => setValor(e.target.value)}
            value={valor}
            placeholder="valor"
            type="text"
            />  
            
            <input 
            onChange={(e) => setCantidad(e.target.value)}
            value={cantidad}
            placeholder="Cantidad"
            type="text"
            />

            <input 
            onChange={(e) => setFechaVencimiento(e.target.value)}
            value={fechaVencimiento}
            placeholder="FechaVencimiento"
            type="text"
            />

            <input type="submit" value="Agregar" onClick={crearProducto} className='boton'/>
            <button onClick={crearProducto} className='boton'>Guardar</button>
        </form>
    </section>
    
   
  )
}

export default Crear