import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Riding = () => {
  const handlePayment = async () => {
    try {
      // Step 1: Create an order on the backend
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/payments/create-order`, {
        amount: 193.20, // Replace with dynamic fare amount
      });

      const { orderId } = response.data;

      // Step 2: Configure Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY, // Add Razorpay key in .env
        amount: 19320, // Amount in paise
        currency: 'INR',
        name: 'Raftaar',
        description: 'Ride Payment',
        order_id: orderId,
        handler: function (response) {
          alert('Payment Successful!');
          console.log(response);
        },
        prefill: {
          name: 'Ramesh Singh', // Replace with dynamic user name
          email: 'ramesh@example.com', // Replace with dynamic user email
        },
      };

      // Step 3: Open Razorpay payment modal
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error('Payment Error:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return (
    <div className='h-screen'>
      <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="txt-lg font-medium ri-home-5-line"></i>
      </Link>
      <div className='h-1/2'>
        <img className='h-full w-full object-cover' src="https://i.redd.it/g2r5ewz4tqk11.jpg" alt="" />
      </div>
      <div className='h-1/2 p-4'>
        <div className='flex justify-between items-center'>
          <img className='h-12' src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png" alt="" />
          <div className='text-right'>
            <h2 className='text-lg font-medium'>Ramesh Singh</h2>
            <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 9307</h4>
            <p className='text-sm text-gray-600'>Maruti Wagnar</p>
          </div>
        </div>
        <div className="flex-col flex gap-2 justify-between items-center">
          <div className='w-full mt-5'>
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
                <p className='text-sm -mt-1 text-gray-600'>Fare</p>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={handlePayment}
          className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'
        >
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;