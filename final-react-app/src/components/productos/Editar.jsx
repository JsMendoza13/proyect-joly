import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlProductos = "http://localhost:3100/productos";
import Formularios from "../../css/Formularios.css"

export const Editar = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()

  const actualizarProductos = async (e) => {
    e.preventDefault()
    const productos = {
      nombre,
      descripcion,
      valor,
      cantidad,
      fechaVencimiento,
    };
    await axios.put(`${urlProductos}/${id}`, productos);
    navigate('/productos')
  };

  const listarProductos = async () => {
    const res = await axios.get(`${urlProductos}/${id}`)
    setNombre(res.data.nombre)
    setDescripcion(res.data.descripcion)
    setValor(res.data.valor)
    setCantidad(res.data.cantidad)
    setFechaVencimiento(res.data.fechaVencimiento)
  }

  useEffect(()=> {
    listarProductos()
  }, [])

  return (
    <main>
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
    type="date"
    />
    <Link onClick={actualizarProductos} className='boton'>Editar</Link>

     <Link to={"/productos"} className="btnCancel">
            Cancelar
      </Link> 
</form>
</section>
</main>
  )
}


export default Editar
