import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import parse from 'html-react-parser';
import useDarkSide from "../hooks/useDarkSide";
import { styled } from '@mui/material/styles';
import { FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { XMarkIcon, CheckBadgeIcon } from '@heroicons/react/24/outline';
import Saray from '../assets/images/workout-01.jpg';

const Advantages = [
  'Sin límites',
  'Todos entrenamientos',
  'Cosas exclusivas',
  'Todo desbloqueado'
]

const Prices = [
  { value: '1-month', label: '<p className="text-center">1 mes <span className="block text-xl font-semibold">2,99 €</span></p>' },
  { value: '6-month', label: '<p className="text-center">6 meses <span className="block text-xl font-semibold">15,99 €</span></p>' },
  { value: '1-year', label: '<p className="text-center">1 año <span className="block text-xl font-semibold">29,99 €</span></p>' },
]

const PremiumCTA = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

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

  Modal.setAppElement('#root') 

  const [colorTheme, setTheme] = useDarkSide();
	const [darkSide, setDarkSide] = useState(
		colorTheme === "light" ? true : false
	);

  const BpIcon = styled('span')(({ theme }) => ({
    borderRadius: '50%',
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: 
      colorTheme === "light" ? '#fff' : '#000',
  }));
  
  const BpCheckedIcon = styled(BpIcon)({
    width: 24,
    height: 24,
    backgroundColor: 
      colorTheme === "light" ? '#fff' : '#000',
  });
  
  function BpRadio(props) {
    return (
      <Radio
        icon={<BpIcon />}
        checkedIcon={<BpCheckedIcon />}
        {...props}
      />
    );
  }

  return (
    <div className='relative flex justify-center'>
      <button 
        onClick={() => handleShow()} 
        className='absolute block leading-6 bottom-24 mx-auto py-3 px-6 text-lg font-semibold bg-black rounded-full text-white hover:bg-white hover:text-black transition'
      >
          ¡Conviértete en <br />un miembro premium!
      </button>
      <img src={Saray} className='w-full' alt='' />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleClose}
        style={ModalStyles}
        className='h-full bg-white bg-opacity-100 dark:bg-gray-900 overflow-scroll'
      >
        <div className='flex items-center justify-start p-5 bg-white dark:bg-gray-900'>
          <button
            type='button'
            onClick={handleClose}
          >
            <XMarkIcon className="h-6 w-6 dark:text-white" aria-hidden="true" />
          </button>
        </div>
        <div className='text-center dark:text-white p-5 mb-5'>
          <h2 className='font-semibold text-3xl mb-12'>Saray Fit (logo)</h2>
          <p className='uppercase font-semibold text-xl pb-3'>Únete a la familia premium!</p>
          <p className=''>Acceso ilimitado al contenido y funciones premium</p>
        </div>
        <div className='w-full justify-center place-content-center'>
          <ul className='p-5 w-5/6 mx-auto'>
            {Advantages.map((item) => (
              <li key={item} className='flex flex-row pb-3 last-of-type:pb-0'>
                <CheckBadgeIcon className='h-8 w-8 mr-4 dark:text-white' aria-hidden='true' />
                <span className='text-lg dark:text-white'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='px-5'>
          <FormControl id='subscription' className='w-full'>
          <h3 className='text-md font-semibold text-center w-full p-5 dark:text-white'>Elige la suscripción que más te interesa:</h3>
            <RadioGroup
              aria-labelledby='prices'
              name='radio-buttons-group'
              className='!grid !gap-3 !grid-cols-3'
            >
              {Prices.map((price, index) => (
                <FormControlLabel 
                  key={index}
                  value={price.value}
                  control={<BpRadio />} 
                  label={parse(price.label)} 
                  className='flex flex-col justify-center border-2 border-gray-600 rounded-lg !mx-0 mb-3 px-2 py-5 dark:text-white dark:border-white'
                />
              ))}
            </RadioGroup>
          </FormControl>
          <button className='bg-gray-900 dark:bg-white w-full my-6 rounded-full p-5 text-center font-semibold text-xl text-white dark:text-gray-900'>
            Suscribirse
          </button>
          <div className='pt-6 pb-12'>
            <p className='pb-6 dark:text-white opacity-70'>
              El pago se cobrará a tu cuenta de Google Play cuando confirmes la compra. Las renovaciones de las suscripciones son automaticas a no ser que se cancelen al menos 24 horas antes del fin del periodo actual.
              Puedes gestionar y cancelar tu suscripción en los ajustes de tu cuenta de Google Play. Al completar tu suscripción estaras confirmando haber leido y comprendido los terminos de uso y la politica de privacidad.
            </p>
            <div className='flex flex-row justify-between'>
              <button className='border border-1 border-gray-500 rounded-full py-1 px-3 text-sm dark:text-white'>Terminos de uso</button>
              <button className='border border-1 border-gray-500 rounded-full py-1 px-3 text-sm dark:text-white'>Politica de privacidad</button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PremiumCTA