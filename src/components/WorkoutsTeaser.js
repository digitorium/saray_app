import React from 'react';
//import { Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';

import WorkoutImg01 from '../assets/images/workout-01.jpg';
import WorkoutImg02 from '../assets/images/workout-02.jpg';
import WorkoutImg03 from '../assets/images/workout-03.jpg';
import WorkoutImg04 from '../assets/images/workout-04.jpg';

import 'swiper/css';
//import 'swiper/css/scrollbar';

const Workouts = [
  { id: 1, title: 'Entrenamiento 1', src: WorkoutImg01, level: 'Principiante', premium: false },
  { id: 2, title: 'Entrenamiento 2', src: WorkoutImg02, level: 'Avanzado', premium: true },
  { id: 3, title: 'Entrenamiento 3', src: WorkoutImg03, level: 'Intermedio', premium: true },
  { id: 4, title: 'Entrenamiento 4', src: WorkoutImg04, level: 'Principiante', premium: false },
]

const WorkoutsTeaser = () => {
  return (
    <div className="pt-5 border-b border-gray-500">
      <a href='/workouts' className='w-full flex justify-between items-center px-5'>
        <h2 className='text-lg font-semibold dark:text-white'>Entrenamientos nuevos</h2>
        <ChevronRightIcon className='h-4 w-4 mr-8 dark:text-white' aria-hidden='true' />
      </a>
      <div className='py-6'>
        <Swiper
          //modules={[Scrollbar]}
          spaceBetween={-15}
          slidesPerView={1.2}
          //centeredSlides={true}
          freeMode={true}
          //scrollbar={{ 
            //draggable: true,
            //hide: true 
          //}}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Workouts.map((item) => (
            <SwiperSlide key={item.id} className=''>
              <a href='/workouts' className='flex flex-col relative px-5 rounded-xl overflow-hidden drop-shadow-md'>
                {item.premium === true &&
                  <div 
                    className='absolute top-2 right-8 bg-white p-3 rounded-full opacity-80 dark:bg-indigo-600'
                  >
                    <LockClosedIcon className='h-5 w-5 text-black dark:text-white' aria-hidden='true' />
                  </div>
                }
                <div className='absolute z-10 p-3 bottom-0 left-5'>
                  <p className='text-white font-semibold text-sm'>{item.level}</p>
                  <h3 className='text-white font-semibold'>{item.title}</h3>
                </div>
                <div className='absolute z-0 top-0 bottom-0 left-5 right-5 bg-gradient-to-t from-black to-transparent opacity-60 rounded-xl'></div>
                <img src={item.src} className='rounded-xl' />
              </a>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default WorkoutsTeaser