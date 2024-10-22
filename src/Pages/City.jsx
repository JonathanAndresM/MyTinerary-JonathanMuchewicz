import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const City = () => {
    const { id } = useParams()
    const [city, setCity] = useState({});
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchCity = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/cities/city/${id}`) // Ajusta la URL según tu endpoint
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la API');
                }
                const result = await response.json()
                setCity(result.response)
            } catch (err) {
                setError(err.message)
            }
        }
        fetchCity()
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>
    }
    if (!city) {
        return <div>Loading...</div>
    }

    return (
        <>
            <div className="w-full flex flex-col justify-center bg-cover relative">
                <img src={city.image} alt={city.city} className="w-full h-svh object-cover" />
                <div className="fixed top-96 left-0 right-0 text-center">
                    <h2 className="text-3xl text-white font-bold text-shadow-full">{city.city}</h2>
                    <p className="text-xl text-white font-bold text-shadow-full">{city.description}</p>
                    <Link to={`/cities`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor"
                                //stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                                Return to Cities
                    </Link>
                </div>
            </div>
        </>
    )
}

export default City
