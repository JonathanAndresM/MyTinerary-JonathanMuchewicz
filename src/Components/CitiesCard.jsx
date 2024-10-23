import { Link } from "react-router-dom"

export default function CitiesCard({ city, _id }) {
  return (
    <>
      <div key={city._id} className="w-full sm:w-60 lg:w-80 rounded-lg hover:shadow-2xl relative my-2">
        <img className="w-full sm:w-60 lg:w-80 h-60 rounded-lg object-cover" src={city.image} alt={city.city} />
        <div className="p-5 absolute bottom-0 left-0">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-shadow-full">{city.city}</h5>
          <p className="mb-3 text-white text-shadow-full font-bold">{city.country}</p>
          <Link to={`/city/${city._id}`} className="inline-flex items-center px-3 py-2
           text-sm font-medium text-center text-white bg-blue-700 rounded-lg
            hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            {"View more >>"}
          </Link>
        </div>
      </div>
    </>
  )
}