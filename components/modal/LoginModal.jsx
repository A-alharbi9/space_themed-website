import React, { useState } from 'react';
import Cookies from 'js-cookie';

function LoginModal() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    const modalOverlay = document.getElementById('overlayContainer');

    if (e.target == modalOverlay) {
      setIsOpen(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Cookies.get('token') !== undefined) {
        setIsOpen(false);
        return;
      }

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();

      if (res.status === 200) {
        Cookies.set('token', data.token);
        setIsOpen(false);
      }
    } catch (error) {
      console.log('err: ', error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-2  ml-2">
        <button
          className="lg:bg-slate-700 lg:hover:bg-slate-900 hover:text-black lg:hover:text-white w-20 py-1 px-1 font-bold lg:text-sm xl:text-base rounded-md transition duration-150"
          onClick={() => setIsOpen(true)}
        >
          Login
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed flex flex-col justify-center items-center w-screen bg-gray-800 inset-0 bg-opacity-80 z-40"
          id="overlayContainer"
          onClick={toggleModal}
        >
          <div className="bg-white w-1/5 text-black rounded-md">
            <form className="py-6" onSubmit={handleSubmit}>
              <div className="py-1 px-5">
                <label htmlFor="userEmail">Email:</label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="Your email"
                    className="py-1 px-2 w-full"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="py-1 px-5">
                <label htmlFor="userPassword">Password:</label>
                <div className=" flex justify-center mt-1">
                  <input
                    type="password"
                    name="userPassword"
                    placeholder="Your password"
                    className="py-1 px-2 w-full"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center px-5 mt-4">
                <button
                  type="submit"
                  className="text-white bg-gray-800 py-2 px-2 w-5/6 rounded-md"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginModal;
