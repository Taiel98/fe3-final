import React from 'react'
import { Link } from 'react-router-dom'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav>
      {<ul>
        <li><a href="/Contact">Contact</a></li>
        <li><a href="/Detail">Detail</a></li>
        <li><a href="/Favs">Favs</a></li>
        <li><a href="/Home">Home</a></li>
      </ul>
      }
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar