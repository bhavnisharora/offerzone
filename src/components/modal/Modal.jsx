import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import React, { useState } from 'react';
import './Modal.css'
const Modal = ({ isModalOpen, handleCloseModal }) => {
    const [isChange, setIsChange] = useState();

    return (
        <div>
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button onClick={handleCloseModal} className="esc_btn">
                            <IoClose className="close" />
                            <span>Esc</span>
                        </button>
                        <div className="box">
                            <h1>
                                Tell Us Your <span>Home Town</span>
                            </h1>
                            <p>Explore the offers nearby you</p>
                            <form action="/jalandhar" onSubmit="" className="city_input">
                                <MdLocationPin className="text-2xl" />
                                <input
                                    type="text"
                                    value={isChange}
                                    onChange={(e) => setIsChange(e.target.value)}
                                    placeholder="Enter your city"
                                />
                                <button type="button" className="bg-primary leading-4">
                                    Use my location
                                </button>
                            </form>
                            <h2>Top Cities</h2>
                            <div className="top_cities">
                                <Link to="/">Jalandhar</Link>
                                <Link to="/">Hyderabad</Link>
                                <Link to="/">New Dehli</Link>
                                <Link to="/">Mumbai</Link>
                                <Link to="/">Chandigarh</Link>
                                <Link to="/">Chennai</Link>
                                <Link to="/">Pune</Link>
                                <Link to="/">Maharashtra</Link>
                                <Link to="/">Gujrat</Link>
                                <Link to="/">Ahmedabad</Link>
                                <Link to="/">Goa</Link>
                            </div>
                            <div className="app_logo">
                                <img src="" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Modal
