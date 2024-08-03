import  { useState } from 'react'
import { supabaseClient } from '../supabase'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    const { error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    })
    if (error) {
      
      console.error('Error logging in:', error.message)
    } else {
      
      console.log('Login successful!')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-md p-2 bg-card_background border border-shadow_purple w-full"
            />
          </label>
        </div>
        <div className="mb-6">
          <label className="block mb-2" htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="rounded-md p-2 bg-card_background border border-shadow_purple w-full"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
