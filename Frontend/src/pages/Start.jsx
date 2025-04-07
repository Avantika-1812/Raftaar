import React from 'react';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div>
      {/* Background Section */}
      <div
        className="bg-center h-screen pt-8 flex justify-between flex-col w-full"
        style={{
          backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/project_modules/hd/301cdb68939617.5ba7309e6d9f7.gif')",
          backgroundSize: "contain", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", 
          backgroundColor: "#FFE17F", 
        }}
      >
        {/* Logo */}
        <div className="flex justify-center pt-8">
          <img
            className="w-16 h-16 rounded-full shadow-lg"
            src="https://img.freepik.com/premium-vector/racing-team-logo_717549-504.jpg?w=360"
            alt="Raftaar Logo"
          />
        </div>

        {/* Content */}
        <div className="text-center text-white px-6">
          <h2 className="text-2xl font-bold mb-1 text-black">Ready to Travel with Raftaar</h2>
          <p className="text-lg mb-6 text-black font-semibold">
            Experience the speed and comfort of Raftaar. Your journey starts here!
          </p>
          <Link
            to="/login"
            className="inline-block bg-black text-white py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 hover:scale-105 transition-transform duration-300"
          >
            Continue
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div
        className="h-32 w-full flex items-center justify-center text-white"
        style={{
          backgroundColor: "#FFA500",
        }}
      >
        <p className="text-lg font-semibold">© 2025 Raftaar. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Start;