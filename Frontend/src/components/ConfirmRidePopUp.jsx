import React, { useState } from 'react';
import { Link } from 'react-router-dom'


const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
    }
  return (
    <div>
        <h5 className='p-1 text-center w-full fixed top-0 bg-white z-10' onClick={() => {
                props.setConfirmRidePopupPanel(false)
          }}><i className="text-xl text-gray-200 ri-arrow-down-wide-line"></i></h5>
          <h3 className='text-2xl font-semibold mb-5'>Confirm this ride to start</h3>
          <div className='flex items-center justify-between mt-4 bg-gray-50 rounded-lg p-3'>
            <div className='flex items-center gap-3'>
                <img className='h-10 rounded-full object-cover w-10' src="https://i.guim.co.uk/img/media/ac9bb8cc6b8dad151a8d0a74ef2f272271013b7f/234_638_5244_3146/master/5244.jpg?width=1200&quality=85&auto=format&fit=max&s=3aeb009050b2b7ac85f1103af4025a79" alt=""/>
                <h2 className='text-lg font-semibold'>Avantika Singh</h2>
            </div>
            <h5 className='text-lg font-semibold'>2.2 Km</h5>
          </div>
        <div className="flex flex-col gap-2 justify-between items-center">
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
          <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹193.20</h3>
              <p className='text-sm -mt-1 text-gray-600'>Kankariya Talab, Bhopal</p>
            </div>
          </div>
        </div>
        <div className='mt-6 w-full'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }}>
            <input value={otp} onChange={(e)=>setOtp(e.target.value)} type="text" className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' placeholder='Enter OTP'/>
        <Link to='/captain-riding' className='w-full mt-5 flex justify-center bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</Link>
        <button onClick={()=>{
            props.setConfirmRidePopupPanel(false)
            props.setRidePopupPanel(false)
        }} className='w-full mt-1 bg-red-600 text-white font-semibold p-2 rounded-lg'>Cancel</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default ConfirmRidePopUp
