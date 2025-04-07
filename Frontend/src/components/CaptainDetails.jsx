import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full objct-cover' src='https://i.guim.co.uk/img/media/ac9bb8cc6b8dad151a8d0a74ef2f272271013b7f/234_638_5244_3146/master/5244.jpg?width=1200&quality=85&auto=format&fit=max&s=3aeb009050b2b7ac85f1103af4025a79' alt='' />
            <h4 className='text-lg font-medium'>Avantika Singh</h4>
          </div>
          <div className='text-right'>
            <h4 className='text-xl font-semibold'>₹295.20</h4>
            <p className='text-sm font-medium text-gray-600'>Earned</p>
          </div>
        </div>
        <div className='flex p-3 mt-6 bg-gray-100 rounded-xl p-4 flex p-1 mt-6 justify-center gap-5 items-start'>
          <div className='text-center'>
            <i className="text-2xl font-thin ri-timer-2-line"></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className='text-2xl mb-2 font-thin ri-speed-up-fill'></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'>
            <i className='text-2xl mb-2 font-thin ri-booklet-line'></i>
            <h5 className='text-lg font-medium'>10.2</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails
