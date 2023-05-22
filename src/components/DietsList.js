import React from 'react';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';

const Diets = [
  { id: 1, title: 'Receta 1', calories: '435 Kcal', img: 'diets-02.jpg' },
  { id: 2, title: 'Receta 2', calories: '280 Kcal', img: 'diets-03.jpg' },
  { id: 3, title: 'Receta 3', calories: '315 Kcal', img: 'diets-06.jpg' },
  { id: 4, title: 'Receta 4', calories: '428 Kcal', img: 'diets-07.jpg' },
  { id: 5, title: 'Receta 5', calories: '170 Kcal', img: 'diets-05.jpg' },
  { id: 6, title: 'Receta 6', calories: '375 Kcal', img: 'diets-04.jpg' },
]

const DietsList = () => {
  return (
    <div className="pt-5 dark:bg-gray-900">
      <a href='/diets' className='w-full flex justify-between items-center px-5'>
        <h2 className='text-lg font-semibold dark:text-white'>Mis recetas de dieta</h2>
        <ChevronRightIcon className='h-4 w-4 mr-8 dark:text-white' aria-hidden='true' />
      </a>
      <div className='grid grid-cols-2 gap-4 pt-6 pb-8 px-5'>
          {Diets.map((item) => (
            <div key={item.id} className='rounded-xl'
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover', 
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <a href='/diets' className='relative flex flex-col h-32 rounded-xl overflow-hidden'>
                {item.id === 2 &&
                    <div className='absolute top-2 right-2 bg-white p-3 rounded-full opacity-80 dark:bg-indigo-600'>
                      <LockClosedIcon className='h-5 w-5 text-black dark:text-white' aria-hidden='true' />
                    </div>
                }
                <div className='absolute z-10 bottom-0 left-0 p-5'>
                  <p className='text-white text-sm'>{item.calories}</p>
                  <h3 className='text-white font-semibold'>{item.title}</h3>
                </div>
                <div className='absolute z-0 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-60'></div>
              </a>
            </div>
          ))}
      </div>
    </div>
  )
}

export default DietsList