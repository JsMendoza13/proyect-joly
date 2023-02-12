import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const urlproveedores = "http://localhost:3100/proveedores";



const ListadoProvee = () => {
    const [proveedores, setProveedores] = useState([]);

    useEffect (() => {
        mostrarProveedores();

    }, []);

    const mostrarProveedores = async () => {
        const res = await axios.get(urlproveedores);
        setProveedores(res.data);
        console.log(res.data);
    };

    const eliminarProveedores = async (id) => {
        await axios.delete(`${urlproveedores}/${id}`)
        mostrarProveedores()
      }

  return (
    <main>

<section className="centrar">
        
        <button className="boton_lista">
        <Link to={'/crear_proveedores'}>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front text"> Nuevo proveedor </span>
        </Link>
        </button>
        
    </section>

    
    <section className='tabla'>
            <table className='prueba'>
                <thead>
                <tr >
                    <th>Nit</th>
                    <th>Nombre</th>
                    <th>NombreRepresentante</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Direccion</th>
                    <th>Logo</th>
                    <th>acciones</th>
                </tr>
                </thead>
                <tbody>
                {proveedores.map((proveedores) => (   
                     
                    <tr>
                        <td>{proveedores.nit}</td>
                        <td>{proveedores.nombre}</td>
                        <td>{proveedores.nombreRepresentante}</td>
                        <td>{proveedores.telefono}</td>
                        <td>{proveedores.correo}</td>
                        <td>{proveedores.direccion}</td>
                        
                        
                        <td>
                        <img src={`${proveedores.logo}`} alt="Logo" />
                        </td>


                        <td>
                        <button onClick={()=> eliminarProveedores(proveedores.id) } className="btn btn-danger form-control">Eliminar</button>

                        
                <Link to={`/editarProveedores/${proveedores.id}`} className="btn btn-warning form-control" >Editar</Link> 

                        
                        </td>
                    </tr>
                    ))}
                    </tbody>
            </table>
        </section>
        </main>
  )
}

export default ListadoProvee