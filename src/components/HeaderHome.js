import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { 
  XMarkIcon,
  UserCircleIcon,
  Cog8ToothIcon,
  MusicalNoteIcon,
  CalendarDaysIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  HeartIcon,
  Bars3Icon,
  DocumentTextIcon,
  FireIcon
} from '@heroicons/react/24/outline'


const subCategories = [
  { name: 'Entrenamientos', href: '/workouts', icon: CalendarDaysIcon },
  { name: 'Ejercicios', href: '/exercises', icon: FireIcon },
  { name: 'Dietas', href: '/diets', icon: DocumentTextIcon },
  { name: 'Listas de reproducción', href: '/playlists', icon: MusicalNoteIcon },
  { name: 'Favoritos', href: '/favorites', icon: HeartIcon },
  { name: 'Blog', href: '/blog', icon: ChatBubbleOvalLeftEllipsisIcon },
  { name: 'Perfil', href: '/profile', icon: UserCircleIcon },
  { name: 'Configuración', href: '/settings', icon: Cog8ToothIcon },
]

const Header = () => {

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-900">
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white dark:bg-gray-900 py-4 pb-12 shadow-xl">
                  <div className="flex px-4">
                    <button
                      type="button"
                      className="flex h-10 w-10 p-1"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6 dark:text-white" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900 dark:text-white">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="flex px-2 py-3 text-lg">
                            <category.icon className='h-8 w-8 mr-2' aria-hidden='true' />
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>


          <div className="flex items-center justify-between border-b border-gray-600 dark:border-white p-5">
              <button
                type="button"
                className="md:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <Bars3Icon className="h-6 w-6 dark:text-white" aria-hidden="true" />
              </button>
              <div className='logo font-semibold dark:text-white'>Saray Fit App</div>
              <div className='h-6 w-6'></div>
          </div>
          
    </header>
  )
}

export default Header