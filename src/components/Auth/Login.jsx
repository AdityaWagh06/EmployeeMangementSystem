import { useState } from "react"
import React from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault
        console.log("email is",email)
        console.log("password is",password)

        setEmail= ("")
        setPassword= ("")
    }

  return (
     
    <div className=' h-screen w-screen flex items-center justify-center'>
        <div className='border-2 p-20 rounded-xl border-emerald-600'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}
            
            className='flex flex-col items-center  justify-center'>

                <input
                value={email}
                 onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                 required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-500' type="email" placeholder='Enter your email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className=' outline-none bg-transparent border-2 border-emerald-600 rounded-full mt-3 text-xl py-3 px-5 placeholder:text-gray-500' type="password" placeholder='Enter your password' />
                <button className='mt-5 text-white outline-none bg-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-white'>Login</button>
            </form>

        </div>

    </div>
  )
}

export default Login
