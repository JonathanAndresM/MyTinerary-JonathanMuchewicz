import { useEffect, useState } from 'react';
import CitiesCard from "../Components/CitiesCard";

const Cities = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    const fetchCities = async () => {
      let url = `http://localhost:8080/api/cities/all?city=${search}`

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('API response error')
        }
        const result = await response.json()

        if (result.response.length === 0) {
          setErrorMessage('There was a problem searching for cities')
        } else {
          setErrorMessage('')
        }
        setData(result.response)
      } catch (error) {
        setErrorMessage(`No cities were found with "${search}"`, error)
      }
    }
    fetchCities()
  }, [search]);

  const handlerSearchChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center bg-cover">
        <div className='relative'>
          <img src="https://images.unsplash.com/photo-1645036995768-bd4ea2589808?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
            className="w-full h-96 object-cover" />
          <div className='absolute top-44 left-0 right-0 mx-auto text-center w-96'>
            <h2 className="text-2xl lg:text-4xl text-blue-500 font-bold text-shadow"
            >Cities</h2>
            <p className="mt-2 text-black text-lg lg:text-1xl font-bold text-shadow-white"
            >Collection of the most beautiful cities</p>
          </div>
        </div>
        <div className="w-72 mt-5 mx-auto">
          <input className="w-full p-2 rounded-lg"
            type="search" name="search" id="search"
            placeholder="🔍︎ Search City"
            value={search} onChange={handlerSearchChange} />
        </div>
        <div className='p-3 min-h-[40vh] max-w-full'>
          <div className="flex flex-wrap justify-evenly w-full h-full">
            {errorMessage ? (
              <p className="text-center text-3xl text-red-500 font-bold py-36 px-5 bg-black bg-opacity-50 rounded-3xl">{errorMessage}</p>
            ) : (
              data.map((city, _id) => (
                <CitiesCard key={_id} city={city}></CitiesCard>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cities
