import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

import 'swiper/css';

const Goals = [
  { id: 1, title: 'Perder grasa' },
  { id: 2, title: 'Ganar masa muscular' },
  { id: 3, title: 'Definir la musculatura' },
  { id: 4, title: 'Fitness' },
]

const GoalTeaser = () => {
  return (
    <div className="pt-5 border-b border-gray-500">
      <a href='/workouts' className='w-full flex justify-between items-center px-5'>
        <h2 className='text-lg font-semibold dark:text-white'>Entrenamientos por objetivos</h2>
        <ChevronRightIcon className='h-4 w-4 mr-8 dark:text-white' aria-hidden='true' />
      </a>
      <div className='py-6'>
        <Swiper
          spaceBetween={-20}
          slidesPerView={2.4}
          freeMode={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {Goals.map((item) => (
            <SwiperSlide key={item.id} className=''>
              <a href='/workouts' className='flex flex-col relative px-5 rounded-xl overflow-hidden drop-shadow-md h-24'>
                <div className='absolute z-10 p-3 bottom-0 left-5'>
                  <h3 className='text-white font-semibold leading-5'>{item.title}</h3>
                </div>
                <div className='absolute z-0 top-0 bottom-0 left-5 right-5 bg-black dark:bg-indigo-900 rounded-xl'></div>
              </a>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default GoalTeaser