import React from 'react'

const Home = () => {
  return (
    <div className='max-w-screen-xl mx-auto my-8'>
      <div className="flex gap-x-8 items-center">
        <div className='w-2/3'>
          <h1 className='font-black text-8xl'>Meet Your Daily <span className="text-emerald-500">Nutritional</span> Needs.</h1>
        </div>
        <div className='w-1/3'>
          <img src="meals.png" alt="meals" className='mx-auto' />
        </div>
      </div>
      <div className='my-24'>
        <p className='text-center text-xl italic'>"Piringku, AI-powered app for your nutritional needs! Find delicious and balanced meals according to your preferences in an instant with this app."</p>
      </div>
    </div>
  )
}

export default Home