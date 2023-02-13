import React from "react";
import logof from "/src/assets/footer.png";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiGithubFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 xl:p-10 p-8 relative m-auto md:mt-[0%] xl:mt-[0%] mt-[220%] ">
      {/* Imagen logo footer */}
      <div className="flex item-center justify-between border-b pb-20 border-secundary ">
        <img
          className=" w-0  md:w-[33%] h-[10%] md:ml-10 ml-3 xl:-mb-20"
          src={logof}
          alt="footer"
        />

        {/* Iconos Social */}

        <nav className="text-3xl flex item-center xl:gap-10 gap-2">
          <a
            className="block rounded-full text-white p-4 md:mb-20 mb-10 bg-primary hover:text-amber-600"
            href="#"
          >
            <RiInstagramFill />
          </a>
          <a
            className="block rounded-full text-white p-4 md:mb-20 mb-10 bg-primary hover:text-amber-600"
            href="#"
          >
            <RiFacebookFill />
          </a>
          <a
            className="block rounded-full text-white p-4 md:mb-20 mb-10 bg-primary hover:text-amber-600"
            href="#"
          >
            <RiTwitterFill />
          </a>
          <a
            className="block rounded-full text-white p-4 md:mb-20 mb-10 bg-primary hover:text-amber-600"
            href="https://github.com/JsMendoza13/proyect-joly"
          >
            <RiGithubFill />
          </a>
        </nav>
      </div>
      <p className="text-primary font-medium text-center mt-2">
        Copyright © 2023. Jesus Mendoza & Santiago Porras <br></br> Alianza
        Empresarial CESDE. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
