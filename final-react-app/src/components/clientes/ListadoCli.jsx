import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Formularios from "../../css/Formularios.css"
const urlClientes = "http://localhost:3100/clientes";



const Listado = () => {
    const [clientes, setClientes] = useState([]);

    useEffect (() => {
        mostrarClientes();

    }, []);

    const mostrarClientes = async () => {
        const res = await axios.get(urlClientes);
        setClientes(res.data);
        console.log(res.data);
    };

    const eliminarClientes = async (id) => {
        await axios.delete(`${urlClientes}/${id}`)
        mostrarClientes()
      }

  return (
    <main>

    <section className="centrar">
        
        <button className="boton_lista">
        <Link to={'/crear_cli'}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front text"> Nuevo Cliente </span>
        </Link>
        </button>
        
    </section>

    
    <section className='tabla'>
            <table className='prueba'>
                <thead>
                <tr >
                    <th>Documento</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Barrio</th>
                    <th>Direccion</th>
                    <th>Foto</th>
                    <th>acciones</th>
                </tr>
                </thead>
                <tbody>
                {clientes.map((clientes) => (   
                     
                    <tr>
                        <td>{clientes.documento}</td>
                        <td>{clientes.nombre}</td>
                        <td>{clientes.apellido}</td>
                        <td>{clientes.telefono}</td>
                        <td>{clientes.correo}</td>
                        <td>{clientes.barrio}</td>
                        <td>{clientes.direccion}</td>
                        <td>
                        <img src={`${clientes.foto}`} alt="Foto" />
                        </td>


                        <td>
                        <button onClick={()=> eliminarClientes(clientes.id) } className="btn btn-danger form-control">Eliminar</button>
                        <Link to={`/editar/${clientes.id}`} className="btn btn-warning form-control" >Editar</Link> 

                        
                        </td>
                    </tr>
                    ))}
                    </tbody>
            </table>
        </section>
        </main>
  )
}

export default Listado