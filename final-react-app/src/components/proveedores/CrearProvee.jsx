import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const urlProveedores = 'http://localhost:3100/proveedores';

const CrearProvee = () => {

    const [nit, setNit] = useState("");
    const [nombre, setNombre] = useState("");
    const [nombreRepresentante, setNombreRepresentante] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [direccion, setDireccion] = useState("");
    const [logo, setLogo] = useState("");
    const navigate = useNavigate();

    const crearProveedore = async (e) => {
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
      await axios.post(urlProveedores, proveedores);
      navigate('/proveedores')
    };

  return (
    
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

            <button onClick={crearProveedore} className='boton'>Guardar</button>
        </form>

    </section>
    
   
  );
};

export default CrearProvee