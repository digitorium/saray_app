import React, { useEffect, useState, useMemo } from 'react';

import ReactPlayer from 'react-player';
import parse from 'html-react-parser';
import Modal from 'react-modal';
import DataExercises from '../DB_exercises.json';

import VideoExample from '../assets/images/video_example.mp4';
import { ChevronRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

//select body parts names from data + new array creation

let bodyPartName = new Set()
DataExercises.map(entry => {
  entry.body_parts.map(bp => {
    bodyPartName.add(bp) 
  })
})
const bp_array = Array.from(bodyPartName);

const Exercises = () => {

  //sorting all exercises by body parts

  const [bodyPart, setBodyPart] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const bodyPartExercises = useMemo(() => {
    if (bodyPart === '') {
      return DataExercises;
    }
    return DataExercises.filter((item) => {
      const filteredExercises = item.body_parts.map((val) => val);
      return filteredExercises.includes(bodyPart);
    });
  }, [bodyPart]);

  useEffect(() => {
    if (searchTerm !== '') {
      setBodyPart('');
    }
  }, [searchTerm]);

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
    <section className='px-5 py-8 dark:bg-gray-900'>
          <div className=''>
            <button 
              className='grid content-end text-left w-full px-5 pb-3 rounded-xl drop-shadow-md h-16 bg-black dark:bg-indigo-900 mb-4 text-white text-lg font-semibold' 
              value='' 
              key='All'
              onClick={(e) => setBodyPart(e.target.value)}
            >
              Todos
            </button>
          </div>
          <div
            className='grid gap-4 grid-cols-2'
            value={bodyPart}
          >
            {bp_array.map((option) => {
              return (
                <button 
                  className='grid content-end text-left px-5 pb-3 rounded-xl drop-shadow-md h-20 bg-black dark:bg-indigo-900 text-white text-lg font-semibold' 
                  value={option} 
                  key={option}
                  onClick={(e) => setBodyPart(e.target.value)}
                >
                  {option}
                </button>
              );
            })}
          </div>

        <div className='py-4'>
          {bodyPartExercises.slice(0, next).map((item, index) => {
            return (
              <div
                key={index}
                className="block border-b border-gray-600 dark:border-white py-4"
              >
                <button 
                  onClick={() => handleShow(item.id)} 
                  className='w-full flex justify-between items-center'
                >
                  <h3 className="text-lg font-semibold dark:text-indigo-300">{item.title}</h3>
                  <ChevronRightIcon className='mt-2 h-5 w-5 dark:text-white' aria-hidden='true' />
                </button>
                <Modal
                  isOpen={modalIsOpen === item.id}
                  onRequestClose={handleClose}
                  contentLabel={item.title}
                  style={ModalStyles}
                  id={item.id}
                  className='h-full bg-white bg-opacity-100 dark:bg-gray-900 overflow-scroll'
                >
                  <div className='flex items-center justify-between p-5 sticky top-0 bg-white dark:bg-gray-900'>
                    <button
                      type='button'
                      onClick={handleClose}
                    >
                      <XMarkIcon className="h-6 w-6 dark:text-white" aria-hidden="true" />
                    </button>
                    <div className='font-semibold dark:text-white'>Detalles</div>
                    <div className='h-6 w-6'></div>
                  </div>
                  <ReactPlayer 
                    url={VideoExample} 
                    width='100%'
                    height='auto'
                    playing
                    loop
                    controls
                  />
                  <div className='dark:text-white p-5'>
                    <h3 className="text-lg font-semibold dark:text-white text-center bg-gray-100 dark:bg-indigo-600 py-2">{item.title}</h3>
                    <div className='flex flex-row justify-between py-6 border-b border-gray-600'>
                      <div className='flex flex-col text-center dark:text-indigo-300'>Reps: <br /><span className='text-xl font-semibold'>{item.reps}</span></div>
                      <div className='flex flex-col text-center dark:text-indigo-300'>Series: <br /><span className='text-xl font-semibold'>{item.sets}</span></div>
                      <div className='flex flex-col text-center dark:text-indigo-300'>Descanso: <br /><span className='text-xl font-semibold'>{item.pause}</span></div>
                    </div>
                    <div className='py-8'>
                      <h3 className='font-semibold mb-3'>Ejecución</h3>
                      <p>{parse(item.description)}</p>
                    </div>
                  </div>
                </Modal>
                <span className="block text-sm mt-0 dark:text-white">
                  {item.level}
                </span>
                {/*<span className="block text-sm mt-0 dark:text-white">
                  {item.body_parts.join(", ")}
                </span>*/}
              </div>
            );
          })}
          <div className='text-center pt-6'>
            {next < bodyPartExercises.length && (
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

export default Exercises