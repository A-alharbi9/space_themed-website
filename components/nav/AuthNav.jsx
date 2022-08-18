import React, { useRef, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineAirplaneTicket } from 'react-icons/md';
import Link from 'next/link';

/*    eslint jsx-a11y/no-static-element-interactions: "off" */
/*    eslint react/self-closing-comp: "off" */
/*    eslint jsx-a11y/click-events-have-key-events: "off" */

function AuthNav() {
    const [isOpen, setIsOpen] = useState(false);

    const modalOverlay = useRef(null);

    const toggleModal = (e) => {
        if (e.target === modalOverlay.current) {
            setIsOpen(false);
        }
    };
    return (
        <div>
            <FiMenu
                size={24}
                className="z-50 cursor-pointer"
                onClick={() => setIsOpen((prev) => !prev)}
            />
            {isOpen ? (
                <div
                    className="fixed inset-0 w-screen bg-gray-800 bg-opacity-50"
                    id="overlayContainer"
                    ref={modalOverlay}
                    onClick={toggleModal}
                ></div>
            ) : (
                <div></div>
            )}
            <div className="relative">
                <div
                    className={`fixed top-16 right-0 ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    } bg-slate-700 h-screen w-full sm:w-1/2 lg:w-1/5 transition duration-300`}
                >
                    <div className="flex flex-col items-center justify-around">
                        <div className="w-full">
                            <div className="relative flex justify-center lg:justify-end w-full lg:w-[70%]">
                                <div className="absolute flex flex-col items-center justify-between h-40 lg:top-[1.6rem] lg:left-10 xl:left-[3rem] 2xl:left-[5.5rem]">
                                    <AiOutlineHome
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                    <MdOutlineAirplaneTicket
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                    <AiOutlineHome
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                    <AiOutlineHome
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center h-full mt-2">
                                    <ul>
                                        <div className="flex py-1 my-1 cursor-pointer lg:py-3 hover:text-green-200">
                                            <Link href="/" className="text-lg lg:text-sm xl:px-5">
                                                Home
                                            </Link>
                                        </div>
                                        <div className="flex w-full py-1 my-1 cursor-pointer lg:py-3 hover:text-green-200">
                                            <Link
                                                href="/myTrips"
                                                className="text-lg lg:text-sm xl:px-5 "
                                            >
                                                My trips
                                            </Link>
                                        </div>
                                        <div className="flex py-1 my-1 cursor-pointer lg:py-3 hover:text-green-200">
                                            <Link href="/" className="text-lg lg:text-sm xl:px-5">
                                                Home
                                            </Link>
                                        </div>
                                        <div className="flex py-1 my-1 lg:py-3">
                                            <Link href="/" className="text-lg lg:text-sm xl:px-5">
                                                Home
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full py-2 border-t border-solid">
                            <div className="relative flex justify-center lg:justify-end w-full lg:w-[70%]">
                                <div className="absolute flex flex-col items-center justify-between h-40 lg:top-[1.12rem] lg:left-10  xl:left-[3rem] 2xl:left-[5.5rem]">
                                    <AiOutlineHome
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                    <MdOutlineAirplaneTicket
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                    <AiOutlineHome
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                    <AiOutlineHome
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center h-full">
                                    <ul>
                                        <div className="flex my-1 cursor-pointer lg:py-3 hover:text-green-200">
                                            <Link href="/" className="text-lg lg:text-sm xl:px-5">
                                                Home
                                            </Link>
                                        </div>
                                        <div className="flex w-full py-1 my-1 cursor-pointer lg:py-3 hover:text-green-200">
                                            <Link href="/" className="text-lg lg:text-sm xl:px-5">
                                                My trips
                                            </Link>
                                        </div>
                                        <div className="flex py-1 my-1 cursor-pointer lg:py-3 hover:text-green-200">
                                            <Link href="/" className="text-lg lg:text-sm xl:px-5">
                                                Home
                                            </Link>
                                        </div>
                                        <div className="flex py-1 my-1 lg:py-3">
                                            <Link
                                                href="/"
                                                className="text-lg cursor-pointer lg:text-sm xl:px-5 hover:text-green-200"
                                            >
                                                Home
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="w-full border-t border-solid">
                            <div className="relative flex justify-center lg:justify-end w-full lg:w-[70%]">
                                <div className="absolute flex flex-col items-center justify-between h-40 lg:top-[1.12rem] lg:left-10  xl:left-[3rem] 2xl:left-[5.5rem]">
                                    <AiOutlineHome
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                    <MdOutlineAirplaneTicket
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                    <AiOutlineHome
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                    <AiOutlineHome
                                        size={18}
                                        className="hidden cursor-pointer lg:block"
                                    />
                                </div>
                                <div className="flex flex-col items-center justify-center h-full">
                                    <ul>
                                        <div className="flex my-1 cursor-pointer lg:py-3 hover:text-green-200">
                                            <Link
                                                href="/"
                                                className="text-lg cursor-pointer lg:text-sm xl:px-5 hover:text-green-200"
                                            >
                                                Home
                                            </Link>
                                        </div>
                                        <div className="flex w-full py-1 my-1 cursor-pointer lg:py-3 hover:text-green-200">
                                            <Link
                                                href="/"
                                                className="text-lg cursor-pointer lg:text-sm xl:px-5 hover:text-green-200"
                                            >
                                                My tripsa
                                            </Link>
                                        </div>
                                        <div className="flex py-1 my-1 cursor-pointer lg:py-3 hover:text-green-200">
                                            <Link
                                                href="/"
                                                className="text-lg cursor-pointer lg:text-sm xl:px-5 hover:text-green-200"
                                            >
                                                Home
                                            </Link>
                                        </div>
                                        <div className="flex py-1 my-1 lg:py-3">
                                            <Link
                                                href="/"
                                                className="text-lg cursor-pointer lg:text-sm xl:px-5 hover:text-green-200"
                                            >
                                                Home
                                            </Link>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthNav;
