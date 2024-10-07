import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function StandarLayout() {
    return (
        <>
            <div className='min-h-lvh bg-gray-400 relative w-full'>
                <NavBar></NavBar>
                <div><Outlet></Outlet></div>
                <Footer></Footer>
            </div>
        </>
    )
}
