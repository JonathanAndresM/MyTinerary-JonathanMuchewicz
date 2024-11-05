
const Itinerary = (itinerary) => {
    return (
        <>
            <div key={itinerary._id} className="flex flex-col items-center md:max-h-56 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 m-3">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-full md:w-48 md:rounded-none md:rounded-s-lg" src={itinerary.photo} alt={itinerary.title} />
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
                </div>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24" fill="currentColor"
                    className="w-12 h-12 text-red-500 relative">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                    <text
                        x="50%" y="50%" dominantBaseline="middle"
                        textAnchor="middle" fill="white" fontSize="8"
                        fontWeight="bold">
                        {itinerary.like}
                    </text>
                </svg>
            </div>
        </>
    )
}

export default Itinerary