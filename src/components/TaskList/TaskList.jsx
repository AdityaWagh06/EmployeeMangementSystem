import React from 'react'

const TaskList = () => {
  return (
    <div  id='tasklist' className='h-[55%] overflow-x-auto w-full items-center justify-start flex-nowrap  py-5  mt-10 flex gap-5'>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded'>
         <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded-md'>High</h3>
            <h4 className='text-sm'>28 Dec 2024</h4>
         </div>
         <h2 className='mt-5 text-2xl font-semibold'> exercise daily</h2>
         <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium neque doloribus inventore, veniam deleniti nostrum?</p>
      </div>

    </div>
    
  )
}

export default TaskList
