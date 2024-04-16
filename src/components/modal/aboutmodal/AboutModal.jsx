import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import abPic from '../../../assets/about/1.png'
import abPic2 from '../../../assets/about/2.png'
import abPic3 from '../../../assets/about/3.png'
import Logo from '../../../assets/images/logo.png'
const AboutModal = ({ aboutModalOpen, aboutCloseModal }) => {

    return (
        <div>
            {aboutModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button onClick={aboutCloseModal} className="esc_btn">
                            <IoClose className="close" />
                            <span>Esc</span>
                        </button>
                        <div className="box">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 place-items-center">
                                <div>
                                    <div className='flex flex-col gap-5 font-serif text-center'>
                                        <img src={abPic} alt="" />
                                        <span className='font-bold text-2xl mt-10'>Explore </span>
                                        <span className='text-md font-sans'>Explore the offer around you. </span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-5 font-serif text-center'>
                                        <img src={abPic2} alt="" />
                                        <span className='font-bold text-2xl mt-10'>Visit</span>
                                        <span className='text-md font-sans'>Visit the shop.</span>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex flex-col gap-5 font-serif text-center'>
                                        <img src={abPic3} alt="" />
                                        <span className='font-bold text-2xl mt-10'>Enjoy</span>
                                        <span className='text-md font-sans'>Enjoy the product. </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            )}
        </div>
    )
}

export default AboutModal
