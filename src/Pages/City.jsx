import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityById } from "../store/actions/cityAction";
import { getItineraries } from "../store/actions/itinerariesAction";
import Modal from "../Components/Modal";


const City = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { city, loading, error } = useSelector((state) => state.cityReducer)
    const { itineraries } = useSelector((state) => state.itinerariesReducer)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedActivities, setSelectedActivities] = useState(null);
    useEffect(() => {
        dispatch(getCityById(id))
        dispatch(getItineraries(id))
    }, [id, dispatch]);

    const openModal = () => {
        setSelectedActivities()
        setIsModalOpen(true)
    }
    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedActivities(null)
    }

    if (error) {
        return <div>Error: {error}</div>
    }
    if (loading) {
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
                </div>
            </div>
            <div>
                <p className="text-2xl text-center font-semibold text-white p-4">{city.description}</p>
                <div className="flex flex-wrap justify-center">
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-32 text-white">
                            <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 0 1 1.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0 1 21.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 0 1-1.676 0l-4.994-2.497a.375.375 0 0 0-.336 0l-3.868 1.935A1.875 1.875 0 0 1 2.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437ZM9 6a.75.75 0 0 1 .75.75V15a.75.75 0 0 1-1.5 0V6.75A.75.75 0 0 1 9 6Zm6.75 3a.75.75 0 0 0-1.5 0v8.25a.75.75 0 0 0 1.5 0V9Z" clipRule="evenodd" />
                        </svg>
                        <span className="text-2xl text-center font-semibold text-white p-1">{city.country}</span>
                    </div>
                    <div className="flex flex-col items-center mx-7">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-32 text-white">
                            <path fillRule="evenodd" d="M9 2.25a.75.75 0 0 1 .75.75v1.506a49.384 49.384 0 0 1 5.343.371.75.75 0 1 1-.186 1.489c-.66-.083-1.323-.151-1.99-.206a18.67 18.67 0 0 1-2.97 6.323c.318.384.65.753 1 1.107a.75.75 0 0 1-1.07 1.052A18.902 18.902 0 0 1 9 13.687a18.823 18.823 0 0 1-5.656 4.482.75.75 0 0 1-.688-1.333 17.323 17.323 0 0 0 5.396-4.353A18.72 18.72 0 0 1 5.89 8.598a.75.75 0 0 1 1.388-.568A17.21 17.21 0 0 0 9 11.224a17.168 17.168 0 0 0 2.391-5.165 48.04 48.04 0 0 0-8.298.307.75.75 0 0 1-.186-1.489 49.159 49.159 0 0 1 5.343-.371V3A.75.75 0 0 1 9 2.25ZM15.75 9a.75.75 0 0 1 .68.433l5.25 11.25a.75.75 0 1 1-1.36.634l-1.198-2.567h-6.744l-1.198 2.567a.75.75 0 0 1-1.36-.634l5.25-11.25A.75.75 0 0 1 15.75 9Zm-2.672 8.25h5.344l-2.672-5.726-2.672 5.726Z" clipRule="evenodd" />
                        </svg>
                        <p className="text-2xl text-center font-semibold text-white p-1">{city.lenguage}</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-32 text-white">
                            <path d="M12 7.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                            <path fillRule="evenodd" d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 14.625v-9.75ZM8.25 9.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.75 9a.75.75 0 0 0-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V9.75a.75.75 0 0 0-.75-.75h-.008ZM4.5 9.75A.75.75 0 0 1 5.25 9h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H5.25a.75.75 0 0 1-.75-.75V9.75Z" clipRule="evenodd" />
                            <path d="M2.25 18a.75.75 0 0 0 0 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 0 0-.75-.75H2.25Z" />
                        </svg>
                        <p className="text-2xl text-center font-semibold text-white p-1">{city.currency}</p>
                    </div>
                </div>
                <div className="w-full px-5 bg-black bg-opacity-30 my-5">
                    <p className="text-2xl text-center font-semibold text-white p-4">More information</p>
                    <div className="flex flex-wrap justify-around pb-4">
                        <p className="text-lg text-white text-center"><span className="font-bold">Time Zone: </span>{city.timeZone}</p>
                        <p className="text-lg text-white text-center"><span className="font-bold">Airport: </span>{city.airport}</p>
                        <p className="text-lg text-white text-center"><span className="font-bold">Popular Local Festival: </span>{city.localFestival}</p>
                        <p className="text-lg text-white text-center"><span className="font-bold">Famous Food: </span>{city.famousFood}</p>
                        <p className="text-lg text-white text-center"><span className="font-bold">Public Transport:</span>
                            {city.publicTransport && city.publicTransport.length > 0 ? (
                                city.publicTransport.map((transport, index) => (
                                    <span key={index}> {transport}</span>
                                ))
                            ) : (
                                <span> No public transport information available</span>
                            )}
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-around">
                {itineraries.length > 0 ? (
                    itineraries.map((itinerary) => (
                        <div key={itinerary._id} className="flex flex-col items-center sm:max-h-72 lg:max-h-64 bg-white border border-gray-200 rounded-lg shadow md:flex-row sm:max-w-lg md:max-w-6xl hover:bg-gray-100 m-3 relative">
                            <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:max-w-48 md:rounded-none md:rounded-s-lg" src={itinerary.photo} alt={itinerary.title} />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h5 className="w-full mb-2 text-center text-2xl font-bold tracking-tight text-gray-900">{itinerary.title}</h5>
                                <div className="w-full flex flex-grow justify-center">
                                    <div className="flex items-center p-4">
                                        <img className="w-20 h-20 object-cover rounded-full" src={itinerary.authorPhoto} alt={itinerary.author} />
                                        <p className="font-semibold ml-2">{itinerary.author}</p>
                                    </div>
                                    <div className="flex flex-col items-center p-4">
                                        <p className="mb-3 font-normal text-gray-700">Price: {itinerary.price} USD</p>
                                        <p className="mb-3 font-normal text-gray-700">Duration: {itinerary.duration}hs</p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap gap-2 mb-2">
                                    {itinerary.hashtags.map((hashtag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold"
                                        >
                                            {hashtag}
                                        </span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => openModal()}
                                    className="inline-flex items-center px-3 py-2 w-32 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    {"View more >>>"}
                                </button>
                            </div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24" fill="currentColor"
                                className="w-12 h-12 text-red-500 absolute left-3 top-3">
                                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                <text
                                    x="50%" y="50%" dominantBaseline="middle"
                                    textAnchor="middle" fill="white" fontSize="8"
                                    fontWeight="bold">
                                    {itinerary.like}
                                </text>
                            </svg>

                        </div>
                    ))
                ) : (
                    <p className="text-center text-3xl text-gray-500 font-bold py-36 px-5 w-full mx-5 bg-black bg-opacity-50 rounded-3xl">
                        {"No itineraries yet for this city"}
                    </p>
                )}
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal} activities={selectedActivities}></Modal>
        </>
    )
}

export default City
