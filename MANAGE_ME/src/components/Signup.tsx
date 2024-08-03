import  { useState } from 'react'
import { supabaseClient } from '../supabase'
import { createUserEntry } from '../backend' 

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNo, setPhoneNo] = useState('')
  const [dob, setDob] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !password) {
      console.error('Email and password are required.');
      return;
    }
  
    try {
      
      const { data: { user, session }, error: signUpError } = await supabaseClient.auth.signUp({
        email,
        password,
      });
  
      if (signUpError) {
        if (signUpError.message.includes('rate limit')) {
          console.error('Sign up rate limit exceeded. Please try again later.');
        } else {
          console.error('Error signing up:', signUpError.message);
        }
        return;
      }
  
      if (user) {
  
        // Create user entry in the users table
        await createUserEntry({
          name,
          email,
          phone_no: phoneNo,
          dob,
        });
  
        console.log('User created and mapped successfully!');
      } else {
        console.error('No user data received from Supabase');
      }
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              required
              className="rounded-md p-2 bg-card_background border border-shadow_purple w-full"
            />
          </label>
        </div>
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
        <div className="mb-4">
          <label className="block mb-2" htmlFor="phoneNo">
            Phone Number:
            <input
              id="phoneNo"
              type="text"
              value={phoneNo}
              placeholder="Enter your phone number"
              onChange={(e) => setPhoneNo(e.target.value)}
              required
              className="rounded-md p-2 bg-card_background border border-shadow_purple w-full"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="dob">
            Date of Birth:
            <input
              id="dob"
              type="text"
              value={dob}
              placeholder="Enter your date of birth (YYYY-MM-DD)"
              onChange={(e) => setDob(e.target.value)}
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
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Signup
