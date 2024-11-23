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

const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
};

function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(1); 

    useEffect(() => {
        const updateSlidesPerView = () => {
            if (window.innerWidth >= 1024) {
                setSlidesPerView(4);
            } else if (window.innerWidth >= 640) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };

        updateSlidesPerView();
        window.addEventListener('resize', updateSlidesPerView);

        return () => {
            window.removeEventListener('resize', updateSlidesPerView);
        };
    }, []);

   
    const slides = chunkArray(cities, slidesPerView);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide]);

    return (
        <div className="w-full relative overflow-hidden pt-5 h-full">
            <h3 className="text-2xl text-center text-white my-5 font-serif font-bold">Popular cities on MyTinerary</h3>
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div 
                        key={index} 
                        className={`w-full flex-shrink-0 flex gap-2 px-5 h-full my-2 ${slidesPerView === 1 ? "flex-col" : "flex-row"}`}
                    >
                        {slide.map((item, idx) => (
                            <div key={idx} className="w-full flex justify-center items-center relative rounded-lg">
                                <img src={item.img} alt={item.name} className="w-full h-48 md:w-96 md:h-56 lg:w-full lg:h-72 object-cover rounded-md" />
                                <div className="absolute inset-50 rounded-md flex items-center justify-center w-40 h-20 sm:w-60 sm:h-40 md:w-96 lg:w-full md:h-36 lg:h-56 opacity-0 hover:opacity-100">
                                    <h2 className="text-white text-2xl font-bold text-shadow-full">
                                        {item.name}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <button className="absolute left-0 top-60 transform -translate-y-1/2 rounded-full sm:bg-slate-50 sm:text-black px-4 py-2 font-black sm:bg-opacity-40 mx-2 bg-transparent text-transparent" onClick={prevSlide}>
                {"<"}
            </button>
            <button className="absolute right-0 top-60 transform -translate-y-1/2 rounded-full sm:bg-slate-50 sm:text-black px-4 py-2 font-black sm:bg-opacity-40 mx-2 bg-transparent text-transparent" onClick={nextSlide}>
                {">"}
            </button>
        </div>
    );
};

export default Carousel;