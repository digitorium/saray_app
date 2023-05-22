import React from 'react';
import { 
  ArrowRightOnRectangleIcon,
  DocumentTextIcon,
  ChevronRightIcon,
  Bars3BottomLeftIcon
} from '@heroicons/react/24/outline'

const profileCategories = [
  { name: 'Mis entrenamientos', href: '/workouts', icon: Bars3BottomLeftIcon },
  { name: 'Mis dietas', href: '/diets', icon: DocumentTextIcon },
  { name: 'Cerrar sesión', href: '#', icon: ArrowRightOnRectangleIcon },
]

const Profile = () => {
  return (
    <>
      <div className='flex flex-col place-items-center py-10'>
        <img
          className='h-28 w-28 rounded-full ring-2 ring-white'
          src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
          alt=''
        />
        <h2 className='font-semibold text-xl pt-4 pb-0 dark:text-white'>Sabrina</h2>
        <p className='dark:text-white'>Miembro <span className='font-semibold text-indigo-600 dark:text-indigo-300'>premium</span> hace 21 días</p>
      </div>
      <div className='p-6 dark:text-white'>
        <ul className="py-2 font-medium text-gray-900 dark:text-white rounded-lg shadow-md dark:bg-indigo-900">
          {profileCategories.map((category) => (
            <li key={category.name} className='border-b border-gray-300 last-of-type:border-none'>
              <a href={category.href} className="flex px-2 py-3 text-lg items-center justify-between">
                <div className='flex flex-row items-center'>
                  <category.icon className='h-5 w-5 mr-2' aria-hidden='true' />
                  {category.name}
                </div>
                <ChevronRightIcon className='h-4 w-4 dark:text-white' aria-hidden='true' />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Profile