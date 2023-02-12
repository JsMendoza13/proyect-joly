import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const urlproveedores = 'http://localhost:3100/proveedores';

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
      await axios.post(urlproveedores, proveedores);
      navigate('/proveedores')
    };

  return (
    
    <section className="-mb-[150%] md:mb-[0%]">
        <h2 className='text-5xl text-center text-primary pt-5' >Registrar proveedores.</h2>
       <section className='formulario my-5'>
        <form className='py-2'>

            
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

            <button onClick={crearProveedore} className='boton'> <span> Guardar 
              
            </span>
            </button>

            <Link to={"/proveedores"} className="btnCancel">
            Cancelar
          </Link> 


        </form>

    </section>
      </section>
    
   
  );
};

export default CrearProvee