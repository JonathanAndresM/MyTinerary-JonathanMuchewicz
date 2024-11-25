import { useSelector } from "react-redux"

const User = () => {
    const user = useSelector((state) => state.authReducer?.user)

    return (
        <div className="flex flex-col sm:flex-row justify-center items-center w-full mx-auto h-64 my-2 py-5">
            <img className="sm:w-44 rounded-full" src={user.photo || 'https://via.placeholder.com/40'} alt={user.name || 'User'} />
            <div className="flex flex-col justify-center items-center mt-2 text-center sm:text-left">
                <p className="w-full sm:ml-5 sm:text-2xl font-bold">{user.name} {user.lastName}</p>
                <p className="w-full sm:ml-5 sm:text-2xl">{user.email}</p>
                <p className="w-full sm:ml-5 sm:text-2xl">{user.country}</p>
            </div>
        </div>
    )
}

export default function Profile() {
    return (
        <>
            <div className="bg-home-main bg-cover bg-center h-96 flex items-center justify-center text-white text-center shadow-2xl">
                <div>
                    <h2 className="text-3xl lg:text-6xl text-blue-500 font-bold text-shadow"
                    >Welcome to your profile on MyTinerary</h2>
                </div>
            </div>
            <div className="xl:my-28 ">
                <User></User>
            </div>
        </>
    )
}