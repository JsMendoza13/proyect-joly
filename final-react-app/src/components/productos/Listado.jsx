import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const urlProductos = "http://localhost:3100/productos";


const Listado = () => {
    const [productos, setProductos] = useState([]);

    useEffect (() => {
        mostrarProductos();

    }, []);

    const mostrarProductos = async () => {
        const res = await axios.get(urlProductos);
        setProductos(res.data);
        console.log(res.data);
    };

    const eliminarProducto = async (id) => {
        await axios.delete(`${urlProductos}/${id}`)
        mostrarProductos()
      }

  return (

    <main>

    <button className="boton_lista">
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front text"> Ir al formulario
      </span>
    </button>

    <section className='tabla'>
            <table className='prueba'>
                <thead>
                <tr >
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Valor</th>
                    <th>Cantidad</th>
                    <th>FechaVencimiento</th>
                    <th>acciones</th>
                </tr>
                </thead>
                <tbody>
                {productos.map((productos) => (   
                     
                    <tr>
                        <td>{productos.nombre}</td>
                        <td>{productos.descripcion}</td>
                        <td>{productos.valor}</td>
                        <td>{productos.cantidad}</td>
                        <td>{productos.fechaVencimiento}</td>

                        <td>
                        <button onClick={()=> eliminarProducto(productos.id) } className="btn btn-danger form-control">Eliminar</button>

                        
                <Link to={`/editar/${productos.id}`} className="btn btn-warning form-control" >Editar</Link> 

                        
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