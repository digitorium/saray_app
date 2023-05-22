import React from 'react';
import Switcher from '../components/Switcher';

const Settings = () => {
  return (
    <>
      <h3 className='font-semibold text-lg border-b border-gray-500 p-5 pb-3 dark:text-white'>Tema</h3>
      <div className='flex justify-between px-5 py-3 dark:text-white'>
        <p>Modo oscuro</p>
        <Switcher />
      </div>
    </>
  )
}

export default Settings