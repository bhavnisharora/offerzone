import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "./Modal";
import './Modal.css'
const ModalParent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleLocationClick = () => {
        console.log("triggered") 
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        document.querySelector(".modal").style.animation =
            "slideUp 0.5s ease forwards";
        setTimeout(() => {
            setIsModalOpen(false);

        }, 500);
        setIsModalOpen(false);
    };

    return (
        <>
            <Navbar handleLocationClick={handleLocationClick} />
            <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
        </>
    );
};

export default ModalParent;
