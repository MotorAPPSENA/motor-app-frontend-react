import React from "react";
import imgjeysson from "../imagenes/Testimonio-Jeysson.jpg";
import imgfredy from "../imagenes/Testimonio-Fredy.jpg";
import imgedison from "../imagenes/Testimonio-Edison.jpg";
import "../hojas-de-estilo/Testimonio.css";

const imagenes = {
  imgjeysson,
  imgfredy, 
  imgedison 
};

function Testimonio(props) {  
  return(
    <div className="contenedor-testimonio">
      <img 
        className="imagen-testimonio" 
        src={imagenes[props.imagen]} //  prop 'imagen' para acceder a la imagen correspondiente en el objeto 'imagenes'
        alt="foto"/>
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}</p> {/* prop 'nombre' para poner nuestro nombre */} 
        <p className="cargo-testimonio">{props.cargo}</p>  {/* prop 'cargo' para poner nuestro rol  'estudiante' */}
        <p className="texto-testimonio">{props.testimonio}</p> {/*  prop 'nombre' para poner nuestro testimonio  */}
      </div>
    </div>
  );
}

export default Testimonio;