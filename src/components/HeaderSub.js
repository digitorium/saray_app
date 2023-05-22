import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const HeaderSub = () => {

  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  };

  const [pageTitle, setPageTitle] = useState('Home');
  const titleMap = [
    {path: '/', title:'Home'},
    {path: '/workouts', title:'Entrenamientos'},
    {path: '/exercises', title:'Ejercicios'},
    {path: '/exercises/bodypart', title:'BodyPart Title'},
    {path: '/diets', title:'Dietas'},
    {path: '/playlists', title:'Listas de reproducción'},
    {path: '/favorites', title:'Favoritos'},
    {path: '/blog', title:'Blog'},
    {path: '/profile', title:'Perfil'},
    {path: '/settings', title:'Configuración'}
  ]

  let curLoc = useLocation();
  useEffect(() => {
    const curTitle = titleMap.find(item => item.path === curLoc.pathname)
    if(curTitle && curTitle.title){
      setPageTitle(curTitle.title)
      document.title = curTitle.title
    }
  }, [curLoc])
  
  return (
    <header className='bg-white dark:bg-gray-900 sticky top-0 z-10'>
        <div className="flex items-center justify-between border-b border-gray-600 dark:border-white p-5">
            <button
                type="button"
                onClick={navigateHome}
            >
                <ArrowLeftIcon className="h-6 w-6 dark:text-white" aria-hidden="true" />
            </button>
            <div className='font-semibold dark:text-white'>{pageTitle}</div>
            <div className='h-6 w-6'></div>
        </div>
    </header>
  )
}

export default HeaderSub