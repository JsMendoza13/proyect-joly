import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const urlProductos = "http://localhost:3100/productos";
import { HiArchiveBoxXMark, HiPencilSquare } from "react-icons/hi2";

const Listado = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    mostrarProductos();
  }, []);

  const mostrarProductos = async () => {
    const res = await axios.get(urlProductos);
    setProductos(res.data);
    console.log(res.data);
  };

  const eliminarProducto = async (id) => {
    await axios.delete(`${urlProductos}/${id}`);
    mostrarProductos();
  };

  return (
    <main className="-mb-[190%] md:mb-[0%]">
      <h2 className="text-5xl text-primary text-center">
        Productos registrados.
      </h2>
      <section className="centrar">
        <button className="boton_lista">
          <Link to={"/crear"}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text"> Nuevo producto </span>
          </Link>
        </button>
      </section>

      <section className="tabla">
        <table className="prueba">
          <thead>
            <tr className="text-xl ">
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
                <td data-label="Nombre:">{productos.nombre}</td>
                <td data-label="Descripcion:">{productos.descripcion}</td>
                <td data-label="Valor:">{productos.valor}</td>
                <td data-label="Cantidad:">{productos.cantidad}</td>
                <td data-label="Fecha Vencimiento:">
                  {productos.fechaVencimiento}
                </td>

                <td>
                  <button
                    onClick={() => eliminarProducto(productos.id)}
                    className="text-orange-500 text-3xl pt-2 hover:text-yellow-400"
                  >
                    <HiArchiveBoxXMark />
                  </button>

                  <Link
                    to={`/editar/${productos.id}`}
                    className=" text-lime-500 text-3xl justify-center
                                    float-right
                                    -ml-10 mr-5 mt-2
                                    hover:text-green-400"
                  >
                    <HiPencilSquare />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default Listado;
