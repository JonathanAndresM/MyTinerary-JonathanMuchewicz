import { useState } from 'react'
import axios from 'axios'

const countries = [
    "Argentina",
    "Brazil",
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "Mexico",
    "United Kingdom",
    "United States",
]


const SignUp = () => {

    const initialState = {
        name: '',
        lastName: '',
        email: '',
        password: '',
        photo: '',
        country: '',
    }

    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [message, setMessage] = useState('')

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrors({ ...errors, [e.target.name]: "" })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8080/api/auth/signup', formData)
            setMessage("User registered successfully!", response.data.response)
            setErrors({})
            setFormData(initialState)
        } catch (error) {
            if (error.response && error.response.data.errors) {
                const backErrors = error.response.data.errors
                const fieldErrors = {}
                backErrors.forEach((error) => {
                    fieldErrors[error.field] = error.message
                });
                setErrors(fieldErrors)
            } else {
                setMessage("Error while registering user.")
            }

        }
    }

    return (
        <>
            <div className="bg-home-main bg-cover bg-center h-svh px-4 flex flex-col items-center justify-center text-white text-center">
                <div>
                    <h2 className="text-3xl lg:text-6xl text-blue-500 font-bold text-shadow"
                    >Welcome to MyTinerary Registry</h2>
                </div>
                <form onSubmit={handleSubmit} className="max-w-xl w-full mt-10 bg-black bg-opacity-25 rounded-xl p-4">
                    <div className="mb-5">
                        <label className="block sm:text-lg font-bold text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" placeholder="Name"
                            value={formData.name} onChange={handleChange} required
                            className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5"
                        />
                        {errors.name && <p className="text-red-600 text-base font-semibold text-shadow-full mt-2">{errors.name}</p>}
                    </div>
                    <div className="mb-5">
                        <label className="block sm:text-lg font-bold text-gray-900 dark:text-white">Last Name</label>
                        <input type="text" name="lastName" placeholder="Last Name"
                            value={formData.lastName} onChange={handleChange} required
                            className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5"
                        />
                        {errors.lastName && <p className="text-red-600 text-base font-semibold text-shadow-full mt-2">{errors.lastName}</p>}
                    </div>
                    <div className="mb-5">
                        <label className="block sm:text-lg font-bold text-gray-900 dark:text-white">Email</label>
                        <input type="email" name="email" placeholder="Email"
                            value={formData.email} onChange={handleChange} required
                            className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5"
                        />
                        {errors.email && <p className="text-red-600 text-base font-semibold text-shadow-full mt-2">
                            {errors.email}
                            <a href="/sign-in" className='text-black'> Login</a>
                        </p>}
                    </div>
                    <div className="mb-5">
                        <label className="block sm:text-lg font-bold text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" placeholder="Password"
                            value={formData.password} onChange={handleChange} required
                            className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5"
                        />
                        {errors.password && <p className="text-red-600 text-base font-semibold text-shadow-full mt-2">{errors.password}</p>}
                    </div>
                    <div className="mb-5">
                        <label className="block sm:text-lg font-bold text-gray-900 dark:text-white">Photo Profile</label>
                        <input type="text" name="photo" placeholder="Photo (URL)"
                            value={formData.photo} onChange={handleChange} required
                            className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5"
                        />
                        {errors.photo && <p className="text-red-600 text-base font-semibold text-shadow-full mt-2">{errors.photo}</p>}
                    </div>
                    <div className="mb-5">
                        <label className="block sm:text-lg font-bold text-gray-900 dark:text-white">Country</label>
                        <select type="text" name="country" placeholder="Country"
                            value={formData.country} onChange={handleChange} required
                            className="bg-gray-50 border border-gray-300
                        text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5"
                        >
                            <option value="" disabled>Select a country</option>
                            {countries.map((country, index) => (
                                <option className='w-20 rounded-xl' key={index} value={country}>
                                    {country}
                                </option>
                            ))}

                        </select>
                        {errors.country && <p className="text-red-600 text-base font-semibold text-shadow-full mt-2">{errors.country}</p>}
                    </div>

                    <button type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                    >Register</button>
                </form>
                {message && <p style={{ color: 'green' }}>{message}</p>}
            </div>
        </>
    )
}

export default SignUp