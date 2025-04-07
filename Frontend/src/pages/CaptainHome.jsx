import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import gsap from 'gsap';
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

  useEffect(function () {
    if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(ridePopupPanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
  }, [ ridePopupPanel ])

  useEffect(function () {
    if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
            transform: 'translateY(0)'
        })
    } else {
        gsap.to(confirmRidePopupPanelRef.current, {
            transform: 'translateY(100%)'
        })
    }
  }, [ confirmRidePopupPanel ])

  return (
    <div className='h-screen'>
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
          <img className='w-16' src="https://img.freepik.com/premium-vector/racing-team-logo_717549-504.jpg?w=360" alt="" />
          <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="txt-lg font-medium ri-logout-box-line"></i>
        </Link>
        </div>
      <div className='h-3/5'>
      <img className='h-full w-full object-cover' src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="" />

      </div>
      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed w-full z-10 h-screen bottom-0 translate-y-full bg-white px-3 py-8'>
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel}/>
      </div>
    </div>
  )
}

export default CaptainHome
