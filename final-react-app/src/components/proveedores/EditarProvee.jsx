import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlproveedores = "http://localhost:3100/proveedores";
import Formularios from "../../css/Formularios.css"

export const EditarProvee = () => {
  const [nit, setNit] = useState("");
    const [nombre, setNombre] = useState("");
    const [nombreRepresentante, setNombreRepresentante] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [logo, setLogo] = useState("");
  const navigate = useNavigate();
  const {id} = useParams()

  const actualizarProveedores = async (e) => {
    e.preventDefault()
    const proveedores = {
      nit,
      nombre,
      nombreRepresentante,
      telefono,
      correo,
      direccion,
      logo,
    };
    await axios.put(`${urlproveedores}/${id}`, proveedores);
    navigate('/proveedores')
  };

  const listarProveedores = async () => {
    const res = await axios.get(`${urlproveedores}/${id}`)
    setNit(res.data.nit)
    setNombre(res.data.nombre)
    setNombreRepresentante(res.data.nombreRepresentante)
    setTelefono(res.data.telefono)
    setCorreo(res.data.correo)
    setDireccion(res.data.direccion)
    setLogo(res.data.logo)
  }

  useEffect(()=> {
    listarProveedores()
  }, [])

  return (
    <main>
      <section className='formulario'>
    <form>
            
    <input 
              onChange={(e) => setNit(e.target.value)}
              value={nit}
              placeholder="Nit"
              type="text"
            />

            <input 
               onChange={(e) => setNombre(e.target.value)}
               value={nombre}
               placeholder="Nombre"
               type="text"
            />

            <input 
            onChange={(e) => setNombreRepresentante(e.target.value)}
            value={nombreRepresentante}
            placeholder="Nombre del representante"
            type="text"
            />  
            
            <input 
            onChange={(e) => setTelefono(e.target.value)}
            value={telefono}
            placeholder="Telefono"
            type="text"
            />

            <input 
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
            placeholder="Correo"
            type="text"
            />

            <input 
            onChange={(e) => setDireccion(e.target.value)}
            value={direccion}
            placeholder="Direccion"
            type="text"
            />

            <input 
            onChange={(e) => setLogo(e.target.value)}
            value={logo}
            placeholder="logo"
            type="text"
            />

          <Link to={"/proveedores"} className="btnCancel">
            Cancelar
          </Link>  

    <Link onClick={actualizarProveedores} className='boton'>Actualizar</Link>
</form>
</section>
</main>
  )
}


export default EditarProvee
