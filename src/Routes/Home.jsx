import React from 'react'
import Card from '../Components/Card'
import { useState, useEffect } from 'react';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context




const Home = () => {
  const [dentista, setDentista] = useState (null);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) =>{
      console.log(response);
      return response.json();
    })
    .then((dentista) => {
      setDentista(dentista)
    })
  }, [])
  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
          /*<ul>{dentista.map((users) => <Card key={users.id}/>)}
          </ul>*/
          }
      </div>
    </main>
  )
}

export default Home