import { useNavigate } from "react-router-dom";
import Carousel from "../Components/Carrousel";

function ButtonCities({ rutes }) {
    const navegate = useNavigate();

    function handleClickCities(rut) {
        navegate(rut)
    }
    return (
        <button onClick={() => handleClickCities(rutes)}
        className="mt-4 bg-red-600 bg-opacity-70 text-white px-4 py-2 rounded
        hover:shadow hover:shadow-black hover:bg-opacity-100 font-bold">
            Explore Cities
        </button>
    )
}

export default function Home() {

    return (
        <>
            <div className="bg-home-main bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
                <div>
                    <h2 className="text-3xl text-blue-500 font-bold"
                    style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 10)' }}
                    >Welcome to MyTinerary</h2>
                    <p className="mt-2 text-black font-bold"
                    style={{ textShadow: '1px 1px 4px rgba(255, 255, 255, 10)' }}
                    >Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <ButtonCities rutes={"/Cities"}></ButtonCities>
                </div>
            </div>
            <Carousel></Carousel>
        </>
    );
}