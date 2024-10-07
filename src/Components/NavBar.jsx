import { useState } from 'react';
import { NavLink } from 'react-router-dom'


const routes = [
    { to: "/", text: "Home" },
    { to: "/cities", text: "Cities" },
    { to: "/abaut", text: "Abaut" },
    { to: "/contact", text: "Contact" },
]

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className='flex grow justify-between items-center px-5 py-2 bg-black bg-opacity-40 w-dvw fixed top-0'>
                <div>
                    <img src="..." alt="" />
                    <p className='font-serif font-semibold text-3xl text-white'>My Tinerary</p>
                </div>
                <div className='relative'>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>
                    <div className={`${isOpen ? 'block' : 'hidden'} absolute right-0 mt-3 w-auto bg-black bg-opacity-40 text-white rounded-md shadow-lg md:hidden z-20`}>
                        <ul className="space-y-2 p-1">
                            {routes.map((r, index) => (
                                <li key={index} className='hover:underline'>
                                    <NavLink to={r.to}
                                        className={({ isActive }) => isActive ? "text-xl text-white font-bold" : "text-xl text-white"}>
                                        {r.text}
                                    </NavLink>
                                </li>
                            ))}
                            <li>
                                <button className='flex grow bg-blue-500 p-2 rounded-xl text-lg font-bold text-black hover:bg-blue-300 hover:text-white'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                    </svg>
                                    Login
                                </button>
                            </li>
                        </ul>
                    </div>
                <div className="hidden md:block pr-3">
                    <ul className="space-x-3 flex text-white items-center">
                        {routes.map((r, index) => (
                            <li key={index} className='hover:underline'>
                                <NavLink to={r.to}
                                    className={({ isActive }) => isActive ? "text-xl text-white font-bold" : "text-xl text-white"}>
                                    {r.text}
                                </NavLink>
                            </li>
                        ))}
                        <li>
                            <button className='flex grow bg-blue-500 p-3 rounded-xl text-lg font-bold text-black hover:bg-blue-300 hover:text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                                </svg>
                                Login
                            </button>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        </>
    )
}

