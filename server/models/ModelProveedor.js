import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Proveedor = dataBase.define('proveedores', {
  nit: {
    type: Sequelize.INTEGER
  },
  nombre: {
    type: Sequelize.STRING
  },
  nombreRepresentante: {
    type: Sequelize.STRING
  },
  telefono: {
    type: Sequelize.INTEGER
  },
  correo: {
    type: Sequelize.STRING
  },
  direccion: {
    type: Sequelize.STRING
  },
  logo: {
    type: Sequelize.STRING
  }
})

export default Proveedor