import React from 'react'

function Footer() {
  return (
    <div className='fixed bottom-[-1px] bg-base-300 w-full'>
      <ul className='mx-auto flex justify-between px-4 py-3'>
        <li className='text-xl'><i className="fa-solid fa-house"></i></li>
        <li className='text-xl'><i className="fa-solid fa-fire-flame-curved"></i></li>
        <li className='text-xl border-[1px] rounded-full w-8 h-8 flex justify-center items-center'><i className="fa-solid fa-plus"></i></li>
        <li className='text-xl'><i className="fa-solid fa-shop-lock"></i></li>
        <li className='text-xl'><i className="fa-solid fa-book-bookmark"></i></li>
      </ul>
    </div>
  )
}

export default Footer