import React, { useRef, useState } from 'react';
import { FiMenu } from 'react-icons/fi';

function AuthNav() {
  const [isOpen, setIsOpen] = useState(false);

  const modalOverlay = useRef(null);

  const toggleModal = (e) => {
    if (e.target == modalOverlay.current) {
      setIsOpen(false);
    }
  };
  return (
    <>
      <div>
        <FiMenu
          size={25}
          className="z-50 cursor-pointer lg:mt-2 xl:mt-1 2xl:mt-0"
          onClick={() => setIsOpen((prev) => !prev)}
        />
        {isOpen && (
          <div
            className="fixed inset-0 w-screen bg-gray-800 bg-opacity-50"
            id="overlayContainer"
            ref={modalOverlay}
            onClick={toggleModal}
          ></div>
        )}
        <div className="relative">
          <div
            className={`fixed top-16 right-0 ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } bg-slate-700 h-screen w-full sm:w-1/2 lg:w-1/4 transition duration-300`}
          >
            <div>
              <ul>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AuthNav;
