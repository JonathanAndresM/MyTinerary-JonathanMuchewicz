
export default function CitiesCard({city, index}) {
  return (
    <>
    <div key={index}
    className='flex flex-col items-center bg-black bg-opacity-20 p-3 rounded-xl w-full min-h-60 hover:shadow hover:shadow-xl'>
        <img src={city.img} alt={city.name}
        className='w-full h-48 object-cover m-auto rounded-lg' />
        <h2 className='text-center text-lg text-white text-shadow my-2 font-semibold w-40'>{city.name}</h2>
        <button className='bg-blue-600 px-2 py-1 rounded-lg hover:bg-blue-300'>Details</button>
    </div>
    </>
  )
}
