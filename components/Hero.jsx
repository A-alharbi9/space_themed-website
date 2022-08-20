import React from 'react';

function Hero() {
    return (
        <section>
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                    alt="main_image"
                    className="w-screen h-96 md:h-[30rem] lg:h-[48rem]"
                />
                <div className="absolute z-10 top-[30%] left-[20%] sm:left-[33%] md:top-[28%] md:left-[32%] 2xl:top-[28%] lg:left-[25%] xl:left-[30%]">
                    <div className="flex flex-col justify-center md:h-[17vh] lg:h-[21vh] xl:h-[30vh]">
                        <h1 className="text-4xl font-semibold text-white md:text-5xl lg:text-8xl ">
                            We empower
                        </h1>
                        <span className="ml-4 font-mono text-lg text-center text-white md:text-3xl lg:text-5xl md:mr-9 md:pt-6 lg:pt-8 lg:ml-3">
                            Your
                            <span className="ml-2 text-3xl font-bold text-cyan-300 lg:text-5xl lg:ml-3 drop-shadow shadow-neutral-100 ">
                                Dreams
                            </span>
                        </span>
                    </div>
                    <div className="flex justify-center w-full py-2 lg:justify-center mt-9 ">
                        <button
                            type="button"
                            className="w-2/3 px-3 py-2 text-lg text-center text-white transition duration-500 bg-orange-600 rounded-lg cursor-pointer xl:w-1/2 hover:bg-orange-600 hover:text-black"
                        >
                            Learn more
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
