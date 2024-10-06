import { useState } from "react";
import Carousel from "../Components/Carrousel";

export default function Home() {

    return (
        <>
        <div className="bg-home-main bg-cover bg-center h-96 flex items-center justify-center text-white text-center">
          <div>
            <h2 className="text-3xl">Welcome to MyTinerary</h2>
            <p className="mt-2">Find your perfect trip, designed by insiders who know and love their cities!</p>
            <button className="mt-4 bg-gray-500 bg-opacity-50 text-white px-4 py-2 rounded">Explore Cities</button>
          </div>
        </div>
        <Carousel></Carousel>
        </>
    );
}