import { useEffect, useState } from 'react';
import CitiesCard from "../Components/CitiesCard";  

const Cities = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/cities/all') // Ajusta la URL según tu endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        return response.json();
      })
      .then((data) => setData(data.response))
      .catch((error) => console.error('Error:', error));
  }, []);


  return (
    <>
      <div className="w-full flex flex-col justify-center bg-cover">
        <img src="./src/assets/savvas-kalimeris-hO3do8FKJkQ-unsplash.jpg" alt=""
          className="w-full h-96 object-cover" />
          <div className="w-72 mt-3 mx-auto">
            <input className="w-full p-2 rounded-lg" type="search" name="search" id="search" placeholder="Search City" />
          </div>
        <div className='p-3'>
          <div className="flex flex-wrap justify-evenly w-full h-full">
            {data.map((city, index) => (
              <CitiesCard key={index} city={city}></CitiesCard>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cities
