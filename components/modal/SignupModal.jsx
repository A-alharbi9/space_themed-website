import React, { useState } from 'react';

/*    eslint jsx-a11y/click-events-have-key-events: "off" */
/*    eslint jsx-a11y/no-static-element-interactions: "off" */

function SignupModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleModal = (e) => {
        const modalOverlay = document.getElementById('overlayContainer');

        if (e.target === modalOverlay) {
            setIsOpen(false);
        }
    };

    const handleSubmit = async (e) => {
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
            console.error('err: ', error.message);
        }
    };

    return (
        <div>
            <div className="flex-col items-center justify-center hidden mr-2 lg:flex">
                <button
                    type="button"
                    className="w-20 px-1 py-1 font-bold transition duration-150 rounded-md lg:bg-green-500 lg:hover:bg-green-600 hover:text-black lg:hover:text-white lg:text-sm xl:text-base"
                    onClick={() => setIsOpen(true)}
                >
                    Sign up
                </button>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 flex flex-col items-center justify-center w-screen bg-gray-800 bg-opacity-80"
                    id="overlayContainer"
                    onClick={toggleModal}
                >
                    <div className="flex flex-col justify-center text-black bg-white rounded-md lg:w-2/6">
                        <form className="py-6" onSubmit={handleSubmit}>
                            <div className="px-5 py-1">
                                <label htmlFor="Name">Name:</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="Name"
                                        placeholder="Your name"
                                        className="w-full px-2 py-1"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
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
