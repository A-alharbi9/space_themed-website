import Image from 'next/image';
import React from 'react';

function Hero() {
    return (
        <section className="relative">
            <div className="absolute z-10 top-24 lg:top-52 left-28 lg:left-56">
                <div className="flex flex-col justify-center">
                    <h1 className="text-4xl font-semibold text-white lg:text-7xl">We empower</h1>
                    <span className="ml-2 font-mono text-lg text-white lg:text-2xl lg:ml-3">
                        Your
                        <span className="ml-2 text-3xl font-bold text-cyan-300 lg:text-5xl lg:ml-3 drop-shadow shadow-neutral-100 ">
                            Dreams
                        </span>
                    </span>
                </div>
                <div className="flex py-2 ml-2">
                    <button
                        type="button"
                        className="px-3 py-2 text-lg text-center text-white transition duration-500 bg-orange-600 rounded-lg cursor-pointer hover:bg-orange-600 hover:text-black"
                    >
                        Learn more
                    </button>
                </div>
            </div>
            <div className="relative">
                <Image
                    src="https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    placeholder="main_image"
                    layout="responsive"
                    width={750}
                    height={340}
                />
            </div>
        </section>
    );
}

export default Hero;
