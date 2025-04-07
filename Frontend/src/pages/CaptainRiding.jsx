import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';

const CaptainRiding = (props) => {

    const [finishRidePanel, setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)
    

    useEffect(function () {
        if (finishRidePanel) {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
      }, [ finishRidePanel ])

  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://img.freepik.com/premium-vector/racing-team-logo_717549-504.jpg?w=360" alt="" />
          <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="txt-lg font-medium ri-logout-box-line"></i>
        </Link>
        </div>
      <div className='h-4/5'>
      <img className='h-full w-full object-cover' src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="" />

      </div>
      <div className='h-1/5 p-6 flex items-center relative justify-between' onClick={()=>{
        setFinishRidePanel(true)
      }}>
      <h5 className='p-1 text-center w-[92%] absolute top-0' onClick={() => { 

            }}><i className="text-3xl text-gray-200 ri-arrow-up-wide-line"></i></h5>
        <h4 className='text-xl font-semibold'>4 Km away</h4>
        <button className='bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef} className='fixed w-full z-10 h-screen bottom-0 translate-y-full bg-white px-3 py-8'>
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
      
    </div>
  )
}

export default CaptainRiding
