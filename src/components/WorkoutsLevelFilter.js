import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

import 'swiper/css';

const Levels = [
  { id: 1, title: 'Principiante' },
  { id: 2, title: 'Intermedio' },
  { id: 3, title: 'Avanzado' },
  { id: 4, title: 'VIP' },
]

const WorkoutsLevelFilter = () => {
  return (
    <div className="pt-5">
      <a href='/workouts' className='w-full flex justify-between items-center px-5'>
        <h2 className='text-lg font-semibold dark:text-white'>Entrenamientos por experiencia</h2>
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
          {Levels.map((item) => (
            <SwiperSlide key={item.id} className=''>
              <a href='/workouts' className='flex flex-col relative px-5 rounded-full h-8'>
                <div className='absolute z-10 p-1 bottom-0 left-5 right-5 top-0 text-center'>
                  <h3 className='leading-5 dark:text-white'>{item.title}</h3>
                </div>
                <div className='absolute z-0 top-0 bottom-0 left-5 right-5 bg-gray-100 border border-gray-200 dark:bg-gray-700 dark:border-gray-800 rounded-full'></div>
              </a>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default WorkoutsLevelFilter