import React, { useEffect, useState, useMemo } from 'react';
import parse from 'html-react-parser';
import Modal from 'react-modal';
import DataDiets from '../DB_diets.json';

import { XMarkIcon, HeartIcon,Bars3BottomLeftIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOnIcon } from '@heroicons/react/24/solid';

const Diets = () => {

  //select modal to show
  
  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleShow = (id) => setIsOpen(id);
  
  const ModalStyles = {
    content: {
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      border: 'none',
    },
    overlay: {
      zIndex: 1000,
    }
  };

  Modal.setAppElement('#root');

  //function 'load more'

  const itemsAtOnce = 3;
  const [next, setNext] = useState(itemsAtOnce);
  const handleMoreItems = () => {
    setNext(next + itemsAtOnce);
  };

  //function 'add to favorites'
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(DataDiets);
  }, []);

  function handleFavorite(id) {
    const newFavorites = favorites.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
    //console.log(newFavorites);
  }

  return (
    
    <section className='px-5 py-8 dark:bg-gray-900'>
      <button 
        className='flex flex-row justify-center items-center w-full px-5 py-2 rounded-xl drop-shadow-md bg-black dark:bg-indigo-900 mb-4 text-white text-lg font-semibold' 
        value='' 
        key='All'
        onClick=''
      >
        <Bars3BottomLeftIcon className='h-5 w-5 text-white me-3' aria-hidden='true' /> Categorias
      </button>


         {favorites.slice(0, next).map((item, index) => {
            return (
              <div
                key={index}
                className="block py-2.5"
              >
                <button 
                  onClick={() => handleShow(item.id)} 
                  className='w-full relative h-48 rounded-xl'
                  style={{
                    backgroundImage: `url(${item.image_url})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  {item.premium === true &&
                    <div 
                      className='absolute top-2 right-2 bg-white p-3 rounded-full opacity-80 dark:bg-indigo-600'
                    >
                      <LockClosedIcon className='h-5 w-5 text-black dark:text-white' aria-hidden='true' />
                    </div>
                  }
                  <div className='absolute text-left z-10 bottom-0 left-0 p-5'>
                    <p className='text-gray-200'>{item.category}</p>
                    <h3 className='text-white font-semibold text-xl leading-snug mb-3'>{item.title}</h3>
                    <p className='text-white'>{item.calories} calorias | {item.servings} porciones </p>
                  </div>
                  <div className='absolute z-0 top-0 bottom-0 left-0 right-0 rounded-xl bg-gradient-to-t from-black to-transparent opacity-60'></div>

                </button>
                <Modal
                  isOpen={modalIsOpen === item.id}
                  onRequestClose={handleClose}
                  contentLabel={item.title}
                  style={ModalStyles}
                  id={item.id}
                  className='h-full bg-white bg-opacity-100 dark:bg-gray-900 overflow-scroll'
                >
                  <div className='flex justify-between p-5 sticky z-10 top-0 bg-transparent'>
                    <button
                      type='button'
                      onClick={handleClose}
                    >
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                    <button
                      type='button'
                      onClick={() => {
                        handleFavorite(item.id);
                      }}
                    >
                      {item.favorite === true ? <HeartOnIcon className="h-6 w-6 text-pink-500" aria-hidden="true" /> : <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />}
                    </button>
                  </div>
                  <div className='relative h-80 -mt-16' 
                    style={{
                    backgroundImage: `url(${item.image_url})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}>
                    <div className='absolute z-10 bottom-0 left-0 p-5'>
                      <p className='text-gray-200'>{item.category}</p>
                      <h3 className='text-white font-semibold text-xl leading-snug mb-3'>{item.title}</h3>
                      <p className='text-white'>{item.calories} calorias | {item.servings} porciones </p>
                    </div>
                    <div className='absolute z-0 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent via-50% to-black to-90% opacity-60'></div>
                  </div>

                  <div className=''>
                    <div className='flex flex-row justify-between py-6 bg-black text-white px-5'>
                      <div className='flex flex-col text-center dark:text-indigo-300'>Calorias <br /><span className='text-xl font-semibold'>{item.calories}</span></div>
                      <div className='flex flex-col text-center dark:text-indigo-300'>Proteína <br /><span className='text-xl font-semibold'>{item.protein}</span></div>
                      <div className='flex flex-col text-center dark:text-indigo-300'>Grasa <br /><span className='text-xl font-semibold'>{item.fat}</span></div>
                      <div className='flex flex-col text-center dark:text-indigo-300'>Carbs <br /><span className='text-xl font-semibold'>{item.carbs}</span></div>
                    </div>
                  </div>

                  <div className='dark:text-white p-5'>
                    <div className='py-3'>
                      <h4 className='font-semibold text-xl mb-3'>Ingredientes</h4>
                      <div className='mb-5'>
                        {parse(item.ingredients)}
                      </div>
                      <h4 className='font-semibold text-xl mb-3'>Como preparar</h4>
                      <div className='mb-2'>
                        {parse(item.content)}
                      </div>
                      <span className='font-semibold text-xl'>¡Que aproveche!</span>
                    </div>
                  </div>
                </Modal>
              </div>
            );
          })}
          <div className='text-center pt-6'>
            {next < DataDiets.length && (
              <a
                type='button'
                onClick={handleMoreItems}
                className='rounded-full border-2 border-gray-600 py-2 px-6 font-semibold dark:text-white dark:border-white'
              >
                Cargar más
              </a>
            )}
          </div>

    </section>
  )
}

export default Diets