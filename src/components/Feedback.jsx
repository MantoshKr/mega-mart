import React from 'react'

const Feedback = () => {
  return (
    <div>
        <div className='w-full bg-lightBlue'>
        <div className='py-10 flex flex-col gap-4 justify-center items-center'>
            <p className='font-medium'>We’d love to hear what you think!</p>
            <button className='w-36 h-9 border-[1px] border-black bg-white rounded-full hover:text-white hover:bg-black transition-all duration-200'>
                Give feedback
            </button>
        </div>
        </div>
    </div>
  )
}

export default Feedback;