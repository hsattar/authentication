import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { useDispatch } from 'react-redux'
// import { userLogsInAction } from '../redux/actions/actionCreators'
// import useAxios from '../hooks/useAxios'

export default function Login() {

    const router = useRouter()
    // const dispatch = useDispatch()
    // const axiosRequest = useAxios()

    const [loginError, setLoginError] = useState(false)
    const [userError, setUserError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })

    const handleChange = (field: string, value: string) => {
        setUserDetails(details => ({
            ...details,
            [field]: value
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        // e.preventDefault()
        // setLoginError(false)
        // setUserError(false)
        // if (!userDetails.email || !userDetails.password) return setUserError(true)
        
        // try {
        //     const response = await axiosRequest('users/login', 'POST', userDetails)
        //     if (response.status === 200) {
        //         dispatch(userLogsInAction())
        //         router.push('/')
        //     } else if (response.status === 401) {
        //         setLoginError(true)
        //         console.log('here')
        //     } else if (response.status === 400) {
        //         setUserError(true)
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <>
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:min-w-xl md:max-w-2xl">
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                <div className="px-5 py-7">
                <h1 className="font-bold text-center text-2xl mb-5">User Login</h1>  
                    <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                    <div className="relative z-0 mb-6 w-full group">
                        <input 
                            type="email" 
                            name="floating_email" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            required 
                            value={userDetails.email}
                            onChange={e => handleChange('email', e.target.value)}
                        />
                        <label htmlFor="floating_email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                        <input 
                            type="password" 
                            name="floating_password" 
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" 
                            required 
                            value={userDetails.password}
                            onChange={e => handleChange('password', e.target.value)}
                        />
                        <label htmlFor="floating_password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                        <span className="inline-block mr-2">Login</span>
                    </button>
                    </form>
                </div>
                <div className="p-5">
                    <Link href="/register"><a className="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Register</a></Link>
                    <div className="text-center sm:text-center whitespace-nowrap pt-5">
                        <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                            <span className="inline-block ml-1">Forgot Password</span>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}