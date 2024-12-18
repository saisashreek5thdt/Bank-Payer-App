import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Correct import for the icons
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        email: '',
        password: '',
        name: '',
        confirmPassword: '',
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data login", data);
    };

    return (
        <section id="signup">
            <div className="mx-auto container p-4">
                <div className="bg-white p-4 w-full max-w-sm mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="grid">
                            <label>Name:</label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type="text"
                                    placeholder="enter your name"
                                    name="name"
                                    value={data.name}
                                    onChange={handleOnChange}
                                    required
                                    className="w-full h-full outline-full bg-transparent"
                                />
                            </div>
                        </div>

                        <div className="grid">
                            <label>Email:</label>
                            <div className="bg-slate-100 p-2">
                                <input
                                    type="email"
                                    placeholder="enter email"
                                    name="email"
                                    value={data.email}
                                    onChange={handleOnChange}
                                    required
                                    className="w-full h-full outline-full bg-transparent"
                                />
                            </div>
                        </div>

                        <div>
                            <label>Password : </label>
                            <div className="bg-slate-100 p-2 flex">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="enter password"
                                    value={data.password}
                                    name="password"
                                    onChange={handleOnChange}
                                    required
                                    className="w-full h-full outline-full bg-transparent"
                                />
                                <div className="cursor-pointer text-xl" onClick={() => setShowPassword((prev) => !prev)}>
                                    <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label>Confirm Password : </label>
                            <div className="bg-slate-100 p-2 flex">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="enter confirm password"
                                    value={data.confirmPassword}
                                    name="confirmPassword"
                                    onChange={handleOnChange}
                                    required
                                    className="w-full h-full outline-full bg-transparent"
                                />
                                <div className="cursor-pointer text-xl" onClick={() => setShowPassword((prev) => !prev)}>
                                    <span>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                                </div>
                            </div>
                        </div>

                        <button className="bg-blue-400 hover:bg-blue-600 text-black px-6 py-2 w-full max-w-[100px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
                            Signup
                        </button>
                    </form>

                    <p className="my-3">
                        Already have an account?{' '}
                        <Link to="/login" className="text-blue-500 hover:text-blue-600 hover:underline">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
