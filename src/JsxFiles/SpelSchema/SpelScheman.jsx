import React, { useState } from 'react';
import Modal from './SpelSchemaModal'; // Make sure this path is correct
import spelschemaKnockout from '../../images/1.jpg'; // Replace with your image paths
import spelschemaMainRound from '../../images/1.jpg'; // Replace with your image paths

function Spelschema() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded mb-4"
          onClick={() => openModal(spelschemaKnockout)}
        >
          Slutspel
        </button>
        <button
          className="bg-green-500 text-white py-2 px-4 rounded"
          onClick={() => openModal(spelschemaMainRound)}
        >
          Huvudrundan
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={modalImage}
        altText="Spelschema"
      />
    </>
  );
}

export default Spelschema;

