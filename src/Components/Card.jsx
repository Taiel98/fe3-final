import { response } from "msw";
import React from "react";
import { useState, useEffect } from 'react';



const Card = ({ name, username, id }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */
        <li>
        <p>{name}</p>
        <p>{username}</p>
        <p>{id}</p>

        </li>}

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */
          <a href="/Detail">detalles</a>}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
