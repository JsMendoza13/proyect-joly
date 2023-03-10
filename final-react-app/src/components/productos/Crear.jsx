import React from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const urlProductos = "http://localhost:3100/productos";

const Crear = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [valor, setValor] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [fechaVencimiento, setFechaVencimiento] = useState("");
  const navigate = useNavigate();

  const crearProducto = async (e) => {
    e.preventDefault();
    const productos = {
      nombre,
      descripcion,
      valor,
      cantidad,
      fechaVencimiento,
    };
    await axios.post(urlProductos, productos);
    navigate("/productos");
  };

  return (
    <section className="-mb-[180%] md:mb-[0%]">
      <h2 className="text-5xl text-center text-primary pt-5">
        Registra productos de tu elección.{" "}
      </h2>
      <section className="formulario my-10">
        <form className="py-5">
          <input
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
            placeholder="Nombre"
            type="text"
          />

          <input
            onChange={(e) => setDescripcion(e.target.value)}
            value={descripcion}
            placeholder="descripcion"
            type="text"
          />

          <input
            onChange={(e) => setValor(e.target.value)}
            value={valor}
            placeholder="valor"
            type="text"
          />

          <input
            onChange={(e) => setCantidad(e.target.value)}
            value={cantidad}
            placeholder="Cantidad"
            type="text"
          />

          <input
            onChange={(e) => setFechaVencimiento(e.target.value)}
            value={fechaVencimiento}
            placeholder="FechaVencimiento"
            type="date"
          />

          <Link onClick={crearProducto} className="boton text-center">
            {" "}
            <span> Guardar </span>
          </Link>

          <Link to={"/productos"} className="btnCancel">
            Cancelar
          </Link>
        </form>
      </section>
    </section>
  );
};

export default Crear;
