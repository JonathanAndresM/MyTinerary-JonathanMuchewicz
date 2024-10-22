
import { Link } from "react-router-dom"
/*export default function CitiesCard({city, index}) {
  return (
    <>
    <div key={index}
    className='flex flex-col items-center bg-black bg-opacity-20 p-3 rounded-xl w-full min-h-60 hover:shadow-xl'>
        <img src={city.image} alt={city.city}
        className='w-full h-60 object-cover m-auto rounded-lg' />
        <h2 className='text-center text-lg text-white text-shadow my-2 font-semibold w-full'>{city.city}</h2>
        <h2 className='text-center text-lg text-white text-shadow my-2 font-semibold w-full'>{city.country}</h2>
        <button className='bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-300'>Details</button>
    </div>
    </>
  )
}*/

export default function CitiesCard({city, index}) {
  return (
    <>
<div key={index} className="w-full sm:w-60 lg:w-80 rounded-lg hover:shadow-2xl relative my-2">
        <img className="w-full sm:w-60 lg:w-80 h-60 rounded-lg object-cover" src={city.image} alt={city.city} />
    <div className="p-5 absolute bottom-0 left-0">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white text-shadow-full">{city.city}</h5>
        <p className="mb-3 text-white text-shadow-full font-bold">{city.country}</p>
        <Link to={`/city/${city._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor"
                //stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>
   </>
  )
}