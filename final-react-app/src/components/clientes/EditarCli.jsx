import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
const urlclientes = "http://localhost:3100/clientes";

export const Editar = () => {
  const [documento, setDocumento] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [barrio, setBarrio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [foto, setFoto] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const actualizarClientes = async (e) => {
    e.preventDefault();
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
    await axios.put(`${urlclientes}/${id}`, clientes);
    navigate("/clientes");
  };

  const listarClientes = async () => {
    const res = await axios.get(`${urlclientes}/${id}`);
    setDocumento(res.data.documento);
    setNombre(res.data.nombre);
    setApellido(res.data.apellido);
    setTelefono(res.data.telefono);
    setCorreo(res.data.correo);
    setBarrio(res.data.barrio);
    setDireccion(res.data.direccion);
    setFoto(res.data.foto);
  };

  useEffect(() => {
    listarClientes();
  }, []);

  return (
    <main className="-mb-[180%] md:mb-[0%]">
      <h2 className="text-5xl text-center text-primary py-5">
        Editar información de clientes.
      </h2>
      <section className="formulario">
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
            placeholder="direccion"
            type="text"
          />

          <input
            onChange={(e) => setFoto(e.target.value)}
            value={foto}
            placeholder="Ingresa tu foto"
            type="text"
          />

          <Link
            onClick={actualizarClientes}
            className="boton text-neutral-50 text-center"
          >
            Actualizar
          </Link>

          <Link to={"/clientes"} className="btnCancel">
            Cancelar
          </Link>
        </form>
      </section>
    </main>
  );
};

export default Editar;
