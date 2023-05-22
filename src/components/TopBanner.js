import React from 'react'

const TopBanner = () => {
  return (
    <section className="p-5 border-b border-gray-500">
      <div className="flex flex-wrap items-center gap-y-2">
        <p className="w-full text-sm leading-6 text-center dark:text-white">
          Hi chic@s, estaré en Madrid este fin de semana!
        </p>
        <a
          href="/blog"
          className="mx-auto rounded-full bg-gray-900 dark:bg-indigo-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Únete a mi <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </section>
  )
}

export default TopBanner