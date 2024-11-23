import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../store/actions/authAction'


const routes = [
    { to: "/", text: "Home", requireAuth: false, unrequireAuth: false },
    { to: "/cities", text: "Cities", requireAuth: true, unrequireAuth: false },
    { to: "/about", text: "About", requireAuth: true, unrequireAuth: false },
    { to: "/contact", text: "Contact", requireAuth: true, unrequireAuth: false },
]


function LinkMenu() {
    const token = useSelector((state) => state.authReducer.token)
    return (
        routes.map((r, index) => (
            (!r.requireAuth || token) &&
            (!r.unrequireAuth || !token) &&
            (
                <li key={index} className='hover:underline'>
                    <NavLink to={r.to}
                        className={({ isActive }) => isActive ? "text-xl text-white font-bold" : "text-xl text-white"}>
                        {r.text}
                    </NavLink>
                </li>
            )
        ))
    )
}

const BtnLogin = () => {
    const token = useSelector((state) => state.authReducer.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function handleClickSignIn(rut) {
        navigate(rut)
    }
    return (
        <>
            {token ? (
                <li className='flex grow items-center'>
                    <button onClick={() => dispatch(logout())}
                        className='flex grow items-center bg-transparent px-2 py-1 rounded-xl text-sm font-bold text-red-500 hover:text-red-800'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        Logout
                    </button>
                    <PhotoUser></PhotoUser>
                </li>
            ) : (
                <li>
                    <button onClick={() => handleClickSignIn("/sign-in")}
                        className='flex grow items-center bg-transparent px-2 py-1 rounded-xl text-sm font-bold text-white hover:text-blue-500'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                        Login
                    </button>
                </li>
            )}
        </>
    )
}

const PhotoUser = () => {
    const user = useSelector((state) => state.authReducer?.user)

    return (
            <div>
                <img className="w-10 rounded-full" src={user.photo || 'https://via.placeholder.com/40'} alt={user.name || 'User'} />
            </div>
    )
}

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <nav className='flex grow justify-between items-center px-8 pt-4 pb-2 bg-gradient-to-b from-black w-dvw fixed top-0 z-10'>
                <div className='flex'>
                    <img src="https://cdn-icons-png.flaticon.com/512/826/826070.png" className='w-10 h-10' alt="" />
                    <p className='font-serif font-semibold text-3xl text-white ml-3'>My Tinerary</p>
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
                        <ul className="space-y-2 py-2 px-3">
                            <LinkMenu routes={routes}></LinkMenu>
                            <BtnLogin></BtnLogin>
                        </ul>
                    </div>
                    <div className="hidden md:block pr-3">
                        <ul className="space-x-3 flex text-white items-center">
                            <LinkMenu routes={routes}></LinkMenu>
                            <BtnLogin></BtnLogin>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { LinkMenu }