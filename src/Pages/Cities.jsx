import CitiesCard from "../Components/CitiesCard"
import { useEffect} from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getCities, setSearch } from "../store/actions/citiesAction"

const Cities = () => {
  const { allCities, cities, search, loading, error } = useSelector(state => state.citieReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCities())
  }, [dispatch])

  const handleInputChange = (e) => {
    const searchTerm = e.target.value
    dispatch(setSearch(searchTerm))

    const filteredCities = allCities.filter(city =>
      city.city.toLowerCase().startsWith(searchTerm.toLowerCase())
    )
    dispatch({ type: 'SET_FILTERED_CITIES', payload: filteredCities })
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center bg-cover">
        <div className='relative'>
          <img src="https://images.unsplash.com/photo-1645036995768-bd4ea2589808?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
            className="w-full h-96 object-cover" />
          <div className='absolute top-44 left-0 right-0 mx-auto text-center w-full'>
            <h2 className="text-3xl lg:text-5xl text-blue-500 font-bold text-shadow"
            >Cities</h2>
            <p className="mt-2 text-center text-black text-lg lg:text-3xl font-bold text-shadow-white px-5"
            >Collection of the most beautiful cities</p>
          </div>
        </div>
        <div className="w-72 mt-5 mx-auto">
          <input
          className="w-full p-2 rounded-lg"
            type="search" name="search" id="search"
            placeholder="🔍︎ Search City"
            value={search}
            onChange={handleInputChange} />
        </div>
        <div className='p-3 min-h-[40vh] max-w-full'>
          <div className="flex flex-wrap justify-evenly w-full h-full">
          {error ? (
              <p className="text-center text-3xl text-red-500 font-bold py-36 px-5 bg-black bg-opacity-50 rounded-3xl">
                 Error loading cities
              </p>
            ) : cities.length > 0 ? (
              cities.map(city => (
                <CitiesCard key={city._id} city={city} />
              ))
            ) : (
              <p className="text-center text-3xl text-gray-500 font-bold py-36 px-5 bg-black bg-opacity-50 rounded-3xl">
                No cities found.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cities