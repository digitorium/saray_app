import React, { useEffect, useState, useMemo } from 'react';
import parse from 'html-react-parser';
import Modal from 'react-modal';
import DataBlog from '../DB_blog.json';

import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import SarayBlogImg1 from '../assets/images/blog-01.jpg';
import SarayBlogImg2 from '../assets/images/blog-02.jpg';

const Blog = () => {

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

  return (
    <section className='pt-0 pb-8 dark:bg-gray-900'>
        <div className='py-4 px-5 border-b border-gray-600 dark:border-white'>
          <h2 className='text-lg font-semibold dark:text-white mb-5'>¡Hot News!</h2>
          <div className='relative h-60 rounded-xl' 
            style={{
            backgroundImage: `url(${SarayBlogImg1})`,
            backgroundSize: 'cover', 
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
          }}>
            <div className='absolute top-2 right-2 bg-white p-3 rounded-full opacity-80 dark:bg-indigo-600'>
              <LockClosedIcon className='h-5 w-5 text-black dark:text-white' aria-hidden='true' />
            </div>
            <div className='absolute z-10 bottom-0 left-0 p-5'>
              <p className='text-white font-semibold text-sm mb-1'>hoy</p>
              <h3 className='text-white font-semibold text-lg leading-snug'>Me voy a Madrid el fin de semana, ¡nos vemos en la capital!</h3>
            </div>
            <div className='absolute z-0 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-xl'></div>
          </div>
        </div>
        <div className='py-4 px-5'>
         {DataBlog.slice(0, next).map((item, index) => {
            return (
              <div
                key={index}
                className="block border-b border-gray-600 dark:border-white py-4"
              >
                <button 
                  onClick={() => handleShow(item.id)} 
                  className='w-full flex justify-between'
                >
                  <div className='flex flex-col justify-start'>
                    <h3 className="text-lg font-semibold dark:text-indigo-300 text-start leading-snug pe-3 mb-2">{item.title}</h3>
                    <p className='text-start text-sm dark:text-white'>{item.timestamp}</p>
                  </div>
                  
                  <ChevronRightIcon className='mt-2 h-5 w-5 dark:text-white shrink-0' aria-hidden='true' />
                </button>
                <Modal
                  isOpen={modalIsOpen === item.id}
                  onRequestClose={handleClose}
                  contentLabel={item.title}
                  style={ModalStyles}
                  id={item.id}
                  className='h-full bg-white bg-opacity-100 dark:bg-gray-900 overflow-scroll'
                >
                  <div className='flex items-start p-5 sticky z-10 top-0 bg-transparent'>
                    <button
                      type='button'
                      onClick={handleClose}
                    >
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                  <div className='relative h-80 -mt-16' 
                    style={{
                    backgroundImage: `url(${SarayBlogImg2})`,
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}>
                    <div className='absolute z-10 bottom-0 left-0 p-5'>
                      <p className='text-white font-semibold text-sm mb-1'>{item.timestamp}</p>
                      <h3 className='text-white font-semibold text-xl leading-snug mb-3'>{item.title}</h3>
                      <div className='inline-flex rounded-full bg-gray-900 dark:bg-indigo-900 px-3.5 py-1 text-sm text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900'>
                        <p>{item.category}</p>
                      </div>
                    </div>
                    <div className='absolute z-0 top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent via-50% to-black to-96% opacity-60'></div>
                  </div>

                  <div className='dark:text-white p-5'>
                    <div className='py-3'>
                      {parse(item.content)}
                    </div>
                  </div>
                </Modal>
              </div>
            );
          })}
          <div className='text-center pt-6'>
            {next < DataBlog.length && (
              <a
                type='button'
                onClick={handleMoreItems}
                className='rounded-full border-2 border-gray-600 py-2 px-6 font-semibold dark:text-white dark:border-white'
              >
                Cargar más
              </a>
            )}
          </div>
        </div>
    </section>
  )
}

export default Blog