import { useNavigate } from "react-router-dom"

export default function Cities() {
  const navigate = useNavigate();

  function navigateBack() {
    navigate(-1)
  }
    return (
      <div className='h-screen flex flex-col justify-center items-center'>
        <h2 className="text-red-600 text-8xl font-extrabold">ERROR</h2>
        <h3 className="text-red-600 text-9xl font-extrabold">404</h3>
        <p className="text-black text-4xl font-bold">PAGE NOT FOUND</p>
        <button onClick={() => navigateBack()}
        className="mt-4 bg-red-600 bg-opacity-70 text-white px-4 py-2 rounded
        hover:shadow hover:shadow-black hover:bg-opacity-100 font-bold">
            {'<< Back'}
        </button>
      </div>
    )
}
