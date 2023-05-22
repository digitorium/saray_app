import React from 'react';
import { Tab } from '@headlessui/react';

const Favorites = () => {
  return (
    <Tab.Group>
      <Tab.List className='shadow-lg pt-3 px-5 dark:text-white dark:shadow-indigo-500/40'>
        <Tab className='w-1/2 border-b-4 border-transparent aria-selected:border-black aria-selected:font-semibold px-5 pb-3 dark:aria-selected:border-indigo-500 dark:aria-selected:text-indigo-300'>
          Entrenamientos
        </Tab>
        <Tab className='w-1/2 border-b-4 border-transparent aria-selected:border-black aria-selected:font-semibold px-5 pb-3 dark:aria-selected:border-indigo-500 dark:aria-selected:text-indigo-300'>
          Dietas
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <div className='p-5 dark:text-white'>
        <Tab.Panel>Lista de los <strong>entrenamientos favoritos</strong></Tab.Panel>
        <Tab.Panel>Lista de las <strong>dietas favoritas</strong></Tab.Panel>
        </div>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default Favorites