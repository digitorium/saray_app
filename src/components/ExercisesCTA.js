import React from 'react';

import Saray from '../assets/images/workout-03.jpg';

const ExercisesCTA = () => {
  return (
    <div className='relative flex justify-center'>
      <a
        className='absolute block bottom-5 mx-auto py-3 px-6 text-xl font-semibold bg-black rounded-full text-white hover:bg-white hover:text-black transition'
        href='/exercises'
      >
          Mi biblioteca de ejercicios
      </a>
      <img src={Saray} className='w-full' />
    </div>
  )
}

export default ExercisesCTA