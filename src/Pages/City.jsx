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
        return (
            <>
                <div>
                    <svg className="animate-spin h-20 w-20 m-5 ..." viewBox="0 0 24 24">
                        {/* ... */}
                    </svg>
                    Loading...
                </div>
            </>
        )
    }

    return (
        <>
            <div className="w-full flex flex-col justify-center bg-cover relative">
                <img src={city.image} alt={city.city} className="w-full h-svh object-cover" />
                <div className="absolute top-80 left-0 right-0 text-center px-5">
                    <h2 className="text-5xl text-white font-bold text-shadow-full">{city.city}</h2>
                    <p className="text-xl text-white font-bold text-shadow-full my-5">{city.description}</p>
                    <Link to={`/cities`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {"<<< Return to Cities"}
                    </Link>
                    <p className="w-96 bg-red-600 text-3xl text-white font-semibold p-5 rounded-lg mt-4 mx-auto">{"Under construction"}</p>
                </div>
            </div>
        </>
    )
}

export default City
