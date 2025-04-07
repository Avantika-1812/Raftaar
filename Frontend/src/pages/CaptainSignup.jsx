import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainSignup = () => {
    const navigate = useNavigate();

    // State variables for form inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [vehicleColor, setVehicleColor] = useState('');
    const [vehiclePlate, setVehiclePlate] = useState('');
    const [vehicleCapacity, setVehicleCapacity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Context for managing captain data
    const { setCaptain } = useContext(CaptainDataContext);

    // Submit handler for the form
    const submitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        // Prepare the data to send to the backend
        const captainData = {
            fullname: {
                firstname: firstName,
                lastname: lastName,
            },
            email: email,
            password: password,
            vehicle: {
                color: vehicleColor,
                plate: vehiclePlate,
                capacity: Number(vehicleCapacity),
                vehicleType: vehicleType,
            },
        };

        console.log('Request Data:', captainData); // Log the request data for debugging

        try {
            // Send the POST request to the backend
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

            if (response.status === 201) {
                const data = response.data;
                setCaptain(data.captain);
                localStorage.setItem('token', data.token);
                navigate('/captain-home');
            }
        } catch (error) {
            console.error('Error during registration:', error.response?.data || error.message);
            alert(error.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }

        // Reset form fields
        setEmail('');
        setFirstName('');
        setLastName('');
        setPassword('');
        setVehicleColor('');
        setVehiclePlate('');
        setVehicleCapacity('');
        setVehicleType('');
    };

    return (
        <div className="p-4 h-screen flex flex-col justify-between">
            <div>
                <img
                    className="w-16 mb-2"
                    src="https://img.freepik.com/premium-vector/racing-team-logo_717549-504.jpg?w=360"
                    alt="Racing Team Logo"
                />
                <form onSubmit={submitHandler}>
                    <h3 className="text-base font-medium mb-2">What's your Name?</h3>
                    <div className="flex gap-4 mb-4">
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <h3 className="text-base font-medium mb-2">What's your Email?</h3>
                    <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        type="email"
                        placeholder="email@example.com"
                    />
                    <h3 className="text-base font-medium mb-2">Enter Password</h3>
                    <input
                        className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        placeholder="password"
                    />
                    <h3 className="text-lg font-medium mb-2">Vehicle Information</h3>
                    <div className="flex gap-4 mb-7">
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="Vehicle Color"
                            value={vehicleColor}
                            onChange={(e) => setVehicleColor(e.target.value)}
                        />
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            type="text"
                            placeholder="Vehicle Plate"
                            value={vehiclePlate}
                            onChange={(e) => setVehiclePlate(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-4 mb-7">
                        <input
                            required
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            type="number"
                            placeholder="Vehicle Capacity"
                            value={vehicleCapacity}
                            onChange={(e) => setVehicleCapacity(Number(e.target.value))}
                        />
                        <select
                            required
                            className="bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base"
                            value={vehicleType}
                            onChange={(e) => setVehicleType(e.target.value)}
                        >
                            <option value="" disabled>
                                Select Vehicle Type
                            </option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                        </select>
                    </div>
                    <button
                        className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Creating Account...' : 'Create Captain Account'}
                    </button>
                </form>
                <p className="text-center">
                    Already have an account?{' '}
                    <Link to="/captain-login" className="text-blue-600">
                        Login here!
                    </Link>
                </p>
            </div>
            <div>
                <p className="text-[10px] leading-tight">
                    This site is protected by reCAPTCHA and the{' '}
                    <span className="underline">Google Privacy Policy</span> and{' '}
                    <span className="underline">Terms of Service apply</span>.
                </p>
            </div>
        </div>
    );
};

export default CaptainSignup; 