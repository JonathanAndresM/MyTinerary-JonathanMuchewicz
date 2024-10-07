import { useState, useEffect } from "react";

const cities = [
    { name: 'New York', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3HD8k5jdk657Q4Rezv7ITvw2VSnXoBvGfxQ&s' },
    { name: 'Los Angeles', img: 'https://www.clarin.com/2018/12/26/srvVCcUrc_1256x620__1.jpg' },
    { name: 'London', img: 'https://media.istockphoto.com/id/1347665170/photo/london-at-sunset.jpg?s=612x612&w=0&k=20&c=MdiIzSNKvP8Ct6fdgdV3J4FVcfsfzQjMb6swe2ybY6I=' },
    { name: 'Tokyo', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW6BbqoQN0i7Ek0WuxwPrbdMOWFyywkuc70A&s' },
    { name: 'Paris', img: 'https://media.staticontent.com/media/pictures/01512cb2-8e58-47ca-addf-c8aadbfcde82' },
    { name: 'Berlin', img: 'https://viajes.nationalgeographic.com.es/medio/2017/02/09/shutterstock-302415089_6b607cdb.jpg' },
    { name: 'Madrid', img: 'https://www.civitatis.com/f/pseo/espana/madrid/gran-via-noche-madrid-1200.jpg' },
    { name: 'Barcelona', img: 'https://static.independent.co.uk/2023/03/10/14/iStock-1320014700.jpg?width=1200' },
    { name: 'Rome', img: 'https://content.r9cdn.net/rimg/dimg/7f/2e/d82165ea-city-25465-16e7e859ccc.jpg?width=1366&height=768&xhint=1183&yhint=1022&crop=true' },
    { name: 'Sydney', img: 'https://as2.ftcdn.net/v2/jpg/06/27/51/59/1000_F_627515933_PChkBWmUKzJECq7rJgP2iBpnMZnX2aOD.jpg' },
    { name: 'Rio de Janeiro', img: 'https://cdn.theatlantic.com/thumbor/kzauaVv-5x3ofreM-n9XaOYnoMg=/0x154:1553x1028/960x540/media/img/mt/2015/02/5468623992_df1e3df9a5_o_copy/original.jpg' },
    { name: 'Dubai', img: 'https://media.staticontent.com/media/pictures/08223d5a-e691-4b1b-9e90-5d3008b09335' },
];

export default function Carousel() {
    const [currentSlider, setCurrentSlider] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false)

    const slides = [];
    for (let i = 0; i < cities.length; i += 4) {
        slides.push(cities.slice(i, i + 4));
    }


    const buttonNext = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlider((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
        }, 1000);
    };

    const buttonPrev = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlider((currentSlider - 1 + slides.length) % slides.length);
            setIsTransitioning(false);
        }, 1000);
        
    };

    useEffect(() => {
        const interval = setInterval(() => {
            buttonNext();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlider]);

    return (
        <div className="relative w-full px-5 py-5 h-96">
            <h3 className="text-2xl text-center my-5 font-serif font-bold">Popular cities on MyTinerary</h3>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 w-full  transition-transform duration-1000 ease-in-out transform">
                {slides[currentSlider].map((city, index) => (
                    <div key={index} className={`flex justify-center items-center relative rounded-md
                ${isTransitioning ? "opacity-50" : "opacity-100"}`}>
                        <img src={city.img} alt={`City ${city.name}`}
                            className="w-48 h-36 sm:w-60 sm:h-36 md:w-96 md:h-36 lg:w-full lg:h-72
                            object-cover rounded-md" />
                        <div className="absolute inset-50 rounded-md 
                        flex items-center justify-center 
                        w-40 h-20 sm:w-60 sm:h-40 md:w-96 lg:w-full md:h-36 lg:h-56 
                        opacity-0 hover:opacity-100">
                            <h2 className="text-white text-2xl font-bold"
                                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 10)' }}
                            >{city.name}</h2>
                        </div>
                    </div>
                ))
                }
            </div>
            <button
                onClick={buttonPrev}
                className="absolute top-1/2 left-0 bg-opacity-50 transform -translate-y-1/2 
                bg-gray-500 text-black p-2 rounded-full font-black"
            >
                {"<<"}
            </button>
            <button
                onClick={buttonNext}
                className="absolute top-1/2 right-0 bg-opacity-50 transform -translate-y-1/2 
                bg-gray-500 text-black p-2 rounded-full font-black"
            >
                {">>"}
            </button>
        </div>
    )
}


