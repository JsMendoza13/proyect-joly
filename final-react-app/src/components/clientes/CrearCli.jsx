import React from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const urlClientes = 'http://localhost:3100/clientes';

const CrearCli = () => {

    const [documento, setDocumento] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");
    const [barrio, setBarrio] = useState("");
    const [direccion, setDireccion] = useState("");
    const [foto, setFoto] = useState("");
    const navigate = useNavigate();

    const crearCliente = async (e) => {
      e.preventDefault()
      const clientes = {
        documento,
        nombre,
        apellido,
        telefono,
        correo,
        barrio,
        direccion,
        foto,
      };
      await axios.post(urlClientes, clientes);
      navigate('/clientes')
    };

  return (
    
       <section className='formulario'>
        <form>

            
            <input 
              onChange={(e) => setDocumento(e.target.value)}
              value={documento}
              placeholder="Documento"
              type="text"
            />

            <input 
               onChange={(e) => setNombre(e.target.value)}
               value={nombre}
               placeholder="Nombre"
               type="text"
            />

            <input 
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
            placeholder="Apellido"
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
            onChange={(e) => setBarrio(e.target.value)}
            value={barrio}
            placeholder="Barrio"
            type="text"
            />

            <input 
            onChange={(e) => setDireccion(e.target.value)}
            value={direccion}
            placeholder="Direccion"
            type="text"
            />

            <input 
            onChange={(e) => setFoto(e.target.value)}
            value={foto}
            placeholder="Fotografia"
            type="text"
            />

            <button onClick={crearCliente} className='boton'>Guardar</button>
            <Link to={"/clientes"} className="btnCancel">
            Cancelar
            </Link>  
        </form>

    </section>
    
   
  );
};

export default CrearCli