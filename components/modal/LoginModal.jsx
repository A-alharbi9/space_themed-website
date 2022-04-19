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
      <div className="flex flex-col items-center justify-center mt-2 ml-2">
        <button
          className="w-20 px-1 py-1 font-bold transition duration-150 rounded-md lg:bg-slate-700 lg:hover:bg-slate-900 hover:text-black lg:hover:text-white lg:text-sm xl:text-base"
          onClick={() => setIsOpen(true)}
        >
          Login
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center w-screen bg-gray-800 bg-opacity-80"
          id="overlayContainer"
          onClick={toggleModal}
        >
          <div className="flex flex-col justify-center w-1/5 text-black bg-white rounded-md lg:w-2/6 lg: h-1/3">
            <form className="py-6" onSubmit={handleSubmit}>
              <div className="px-5 py-1">
                <label htmlFor="userEmail">Email:</label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="userEmail"
                    placeholder="Your email"
                    className="w-full px-2 py-1"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="px-5 py-1">
                <label htmlFor="userPassword">Password:</label>
                <div className="flex justify-center mt-1 ">
                  <input
                    type="password"
                    name="userPassword"
                    placeholder="Your password"
                    className="w-full px-2 py-1"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center px-5 mt-6">
                <button
                  type="submit"
                  className="w-5/6 px-2 py-2 text-white bg-gray-800 rounded-md"
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
