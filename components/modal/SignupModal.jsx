import React, { useState } from 'react';

function SignupModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const toggleModal = (e) => {
    const modalOverlay = document.getElementById('overlayContainer');

    if (e.target == modalOverlay) {
      setIsOpen(false);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 200) {
        setIsOpen(false);
      }
    } catch (error) {
      console.log('err: ', error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-2 mr-2">
        <button
          className="lg:bg-green-500 lg:hover:bg-green-600 hover:text-black lg:hover:text-white w-20 py-1 px-1 font-bold lg:text-sm xl:text-base rounded-md transition duration-150"
          onClick={() => setIsOpen(true)}
        >
          Sign up
        </button>
      </div>
      {isOpen && (
        <div
          className="fixed flex flex-col justify-center items-center w-screen bg-gray-800 inset-0 bg-opacity-80 z-40"
          id="overlayContainer"
          onClick={toggleModal}
        >
          <div className="bg-white w-1/5 text-black rounded-md">
            <form className="py-6" onSubmit={handleClick}>
              <div className="py-1 px-5">
                <label htmlFor="Name">Name:</label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="Name"
                    placeholder="Your name"
                    className="py-1 px-2 w-full"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
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
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupModal;
