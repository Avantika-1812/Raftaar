import React, { use, useRef, useState } from 'react'
import { useEffect } from 'react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {
  const [pickup, setPickup]= useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const confirmRidePanelRef = useRef(null)
  const vehicleFoundRef = useRef(null)
  const waitingForDriverRef = useRef(null)

  const panelRef = useRef(null)
  const panelClosedRef = useRef(null)
  const [vehiclePanel, setVehiclePanel] = useState(false)
  const [confirmRidePanel, setConfirmRidePanel] = useState(false)
  const [vehicleFound, setVehicleFound] = useState(false)
  const [waitingForDriver, setWaitingForDriver] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
  }

useEffect(() => {
  if (panelOpen) {
    gsap.to(panelRef.current, {
      height: '70%',
      padding:20
    });
    gsap.to(panelClosedRef.current, {
      opacity: 1,
    });
  } else {
    gsap.to(panelRef.current, {
      height: '0%',
      padding:0
    });
    gsap.to(panelClosedRef.current, {
      opacity: 0,
    });
  }
}, [panelOpen]);


useEffect(function () {
  if (vehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(vehiclePanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ vehiclePanel ]);

useEffect(function () {
  if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(confirmRidePanelRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ confirmRidePanel ]);

useEffect(function () {
  if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(vehicleFoundRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ vehicleFound ]);

useEffect(function () {
  if (waitingForDriver) {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(0)'
      })
  } else {
      gsap.to(waitingForDriverRef.current, {
          transform: 'translateY(100%)'
      })
  }
}, [ waitingForDriver ]);


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://img.freepik.com/premium-vector/racing-team-logo_717549-504.jpg?w=360" alt=""></img>
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative' >
          <h5 ref={panelClosedRef} onClick={()=>{
            setPanelOpen(false)
          }} className='absolute opacity-0 right-6 top-6 text-2xl'>
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-black rounded-full"></div>
            <input
            onClick={() => {
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e) => {
              setPickup(e.target.value)
            }} 
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
            type="text" 
            placeholder='Add a pick up location' 
            />
            <input
            onClick={() => {
              setPanelOpen(true)
            }}
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value)
            }}
            className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' 
            type="text" 
            placeholder='Add a drop off location' />
          </form>
        </div>
        <div ref={panelRef} className='bg-white h-0'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}/>
        </div>
      </div>
      <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
            <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel}/>
      </div>
      <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
            <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
            <LookingForDriver setPickup={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8'>
            <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
    </div>
  )
}

export default Home
