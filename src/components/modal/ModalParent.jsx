import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Modal from "./Modal";
import AboutModal from "./aboutmodal/AboutModal";
const ModalParent = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [aboutModalOpen, setAboutModalOpen] = useState(false);
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


    const handleAboutClick = (e) => {
        e.preventDefault();
        console.log("triggered")
        setAboutModalOpen(true);
    };

    const aboutCloseModal = () => {
        setAboutModalOpen(false);
    };

    return (
        <>
            <Navbar handleLocationClick={handleLocationClick} handleAboutClick={handleAboutClick} />
            <AboutModal aboutModalOpen={aboutModalOpen} aboutCloseModal={aboutCloseModal} />
            <Modal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />

        </>
    );
};

export default ModalParent;
