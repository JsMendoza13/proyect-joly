import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const urlClientes = "http://localhost:3100/clientes";
import { HiArchiveBoxXMark, HiPencilSquare } from "react-icons/hi2";

const ListadoCli = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    mostrarClientes();
  }, []);

  const mostrarClientes = async () => {
    const res = await axios.get(urlClientes);
    setClientes(res.data);
    console.log(res.data);
  };

  const eliminarCliente = async (id) => {
    await axios.delete(`${urlClientes}/${id}`);
    mostrarClientes();
  };

  return (
    <main className="-mb-[190%] md:mb-[0%]">
      <h2 className="text-5xl text-primary text-center">
        Clientes registrados.
      </h2>

      <section className="centrar">
        <button className="boton_lista">
          <Link to={"/crear_cli"}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text"> Nuevo Cliente </span>
          </Link>
        </button>
      </section>

      <section className="tabla">
        <table className="prueba">
          <thead>
            <tr className="text-xl ">
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
                <td data-label="Documento:">{clientes.documento}</td>
                <td data-label="Nombre:">{clientes.nombre}</td>
                <td data-label="Apellido:">{clientes.apellido}</td>
                <td data-label="Telefono:">{clientes.telefono}</td>
                <td data-label="Correo:">{clientes.correo}</td>
                <td data-label="Barrio:">{clientes.barrio}</td>
                <td data-label="Dirreccion:">{clientes.direccion}</td>
                <td>
                  <img src={`${clientes.foto}`} alt="Foto" />
                </td>

                <td>
                  <button
                    onClick={() => eliminarCliente(clientes.id)}
                    className="text-orange-500 text-3xl pt-2 hover:text-yellow-400"
                  >
                    <HiArchiveBoxXMark />
                  </button>

                  <Link
                    to={`/Editar_cli/${clientes.id}`}
                    className=" text-lime-500 text-3xl justify-center
                                    float-right
                                    -ml-4 mr-2 mt-2
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

export default ListadoCli;
