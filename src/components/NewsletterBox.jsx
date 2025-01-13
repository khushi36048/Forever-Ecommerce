import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
        Subscribe to our newsletter and be the first to know about exclusive deals, new arrivals, and special offers. Join now for updates straight to your inbox!
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type='email' className='w-full sm:flex-1 outline-none' placeholder='Enter your email' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4 hover:bg-gray-900 transition duration-300 ease-in-out'>SUBSCRIBE NOW</button>
        </form>

    </div>
  )
}

export default NewsletterBox