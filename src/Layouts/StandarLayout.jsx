import React from 'react'
import NavBar from '../Components/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer'

export default function StandarLayout() {
    return (
        <>
            <div className='h-screen'>
                <NavBar></NavBar>
                <div><Outlet></Outlet></div>
                <Footer></Footer>
            </div>
        </>
    )
}
