import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const urlproveedores = "http://localhost:3100/proveedores";
import { HiArchiveBoxXMark, HiPencilSquare } from "react-icons/hi2";

const ListadoProvee = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    mostrarProveedores();
  }, []);

  const mostrarProveedores = async () => {
    const res = await axios.get(urlproveedores);
    setProveedores(res.data);
    console.log(res.data);
  };

  const eliminarProveedores = async (id) => {
    await axios.delete(`${urlproveedores}/${id}`);
    mostrarProveedores();
  };

  return (
    <main className="-mb-[190%] md:mb-[0%]">
      <h2 className="text-5xl text-primary text-center">
        Proveedores registrados.
      </h2>
      <section className="centrar">
        <button className="boton_lista">
          <Link to={"/crear_proveedores"}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front text"> Nuevo proveedor </span>
          </Link>
        </button>
      </section>

      <section className="tabla ">
        <table className="prueba">
          <thead>
            <tr className="text-xl">
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
                <td data-label="Nit:">{proveedores.nit}</td>
                <td data-label="Nombre">{proveedores.nombre}</td>
                <td data-label="Nombre Representante:">
                  {proveedores.nombreRepresentante}
                </td>
                <td data-label="Telefono:">{proveedores.telefono}</td>
                <td data-label="Correo:">{proveedores.correo}</td>
                <td data-label="Direccion:">{proveedores.direccion}</td>

                <td data-label="Logo:">
                  <img src={`${proveedores.logo}`} />
                </td>

                <td>
                  <button
                    onClick={() => eliminarProveedores(proveedores.id)}
                    className="text-orange-500 text-3xl pt-2 hover:text-yellow-400"
                  >
                    <HiArchiveBoxXMark />
                  </button>

                  <Link
                    to={`/editarProveedores/${proveedores.id}`}
                    className=" text-lime-500 text-3xl justify-center
                                    float-right
                                    -ml-5 mr-2 mt-2
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

export default ListadoProvee;
