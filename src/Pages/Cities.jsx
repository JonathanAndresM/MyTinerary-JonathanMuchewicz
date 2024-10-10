import CitiesCard from "../Components/CitiesCard";
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

export default function Cities() {
  return (
    <>
      <div className="w-full flex flex-col justify-center bg-home-main bg-cover">
        <img src="./src/assets/savvas-kalimeris-hO3do8FKJkQ-unsplash.jpg" alt=""
          className="w-full h-96 object-cover" />
        <div className='w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-3'>
          {cities.map((city, index) => (
            <CitiesCard key={index} city={city}></CitiesCard>
          ))}
        </div>
      </div>
    </>
  )
}
