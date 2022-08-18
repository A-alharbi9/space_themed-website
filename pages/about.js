import React from 'react';
import Head from 'next/head';

/*    eslint react/self-closing-comp: "off" */

function About() {
    return (
        <div>
            <Head>
                <title>About | Atlacore</title>
                <meta name="description" content="Space themed website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="relative">
                <div className="absolute bg-slate-300 top-0 h-[10rem] w-screen"></div>
                <div className="bg-gradient-to-t from-slate-300 via-slate-100 to-slate-300 h-[46rem] lg:h-[40rem] -skew-y-6  overflow-hidden"></div>
                <div className="absolute text-white top-24 md:top-32 lg:top-20 xl:top-40">
                    <div className="flex flex-col items-center justify-center w-screen text-center md:mt-10">
                        <div className="w-full md:w-3/4 ">
                            <p className="mb-8 text-4xl font-normal text-black lg:text-5xl">
                                About Us
                            </p>
                            <div className="px-3 md:px-4">
                                <p className="text-lg font-light text-black md:text-xl 2xl:text-xl lg:text-2xl">
                                    Despite this agreement, there is still a lot of difference of
                                    opinion concerning what the exact nature of mind is and various
                                    competing definitions have been proposed. Philosophical
                                    definitions of mind usually proceed not just by listing various
                                    types of phenomena belonging to the mind but by searching the
                                    mark of the mental: a feature that is shared by all mental
                                    states and only by mental states. Epistemic approaches define
                                    mental states in terms of the privileged epistemic access the
                                    subject has to these states. This is often combined with a
                                    consciousness-based approach, which emphasizes the primacy of
                                    consciousness in relation to mind.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="absolute top-[75rem] lg:top-[50rem] h-[10rem] w-screen bg-slate-800"></div> */}
            </section>

            <div className="flex flex-col items-center justify-center pt-40 pb-40">
                <div className="flex justify-center w-screen">
                    <p className="text-3xl font-bold lg:text-4xl">At a glance</p>
                </div>
                <div className="flex flex-col justify-center w-3/5 mt-20 lg:flex-row lg:mt-40 mx-14">
                    <div className="flex flex-col items-center justify-center my-4 lg:my-5 lg:w-1/3">
                        <div className="flex flex-col items-center justify-center h-32 rounded-lg shadow-xl w-36 lg:w-28 lg:h-24 bg-slate-200">
                            <p className="text-4xl pointer-events-none lg:text-3xl lg:px-2">
                                6000+
                            </p>
                        </div>
                        <div className="py-6">
                            <p className="text-2xl text-center lg:text-xl">Trips Taken</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center my-4 lg:my-5 lg:w-1/3">
                        <div className="flex flex-col items-center justify-center h-32 rounded-lg shadow-xl w-36 lg:w-28 lg:h-24 bg-slate-200">
                            <p className="text-4xl lg:text-3xl">1st</p>
                        </div>
                        <div className="py-6">
                            <p className="text-2xl text-center lg:text-xl">Safety Index</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center my-4 lg:my-5 lg:w-1/3">
                        <div className="flex flex-col items-center justify-center h-32 rounded-lg shadow-xl w-36 lg:w-28 lg:h-24 bg-slate-200">
                            <p className="text-4xl lg:text-3xl">53</p>
                        </div>
                        <div className="py-6">
                            <p className="text-2xl text-center lg:text-xl">Team Members</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-end lg:justify-center bg-slate-300 lg:min-h-[80vh]">
                <div className="flex flex-col justify-center px-4 my-14 md:my-16 lg:items-start lg:px-2 lg:w-1/2 lg:mr-3 xl:mr-0 lg:my-12">
                    <p className="text-2xl font-extrabold md:text-3xl 2xl:text-4xl">
                        Innovate, grow and learn
                    </p>
                    <div>
                        <p className="mt-2 text-base lg:text-lg 2xl:text-base lg:mt-3 2xl:mt-5">
                            Despite this agreement, there is still a lot of difference of opinion
                            concerning what the exact nature of mind is and various competing
                            definitions have been proposed. Philosophical definitions of mind
                            usually proceed not just by listing various types of phenomena belonging
                            to the mind but by searching the mark of the mental: a feature that is
                            shared by all mental states and only by mental states. Epistemic
                            approaches define mental states in terms of the privileged epistemic
                            access the subject has to these states.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center w-full lg:w-2/5">
                    <img
                        src="https://images.unsplash.com/photo-1504607798333-52a30db54a5d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                        alt="about_main_image"
                        className="w-full 2xl:w-[35rem] h-[20rem] md:h-[25rem] lg:h-80 2xl:h-72 lg:rounded-md"
                    />
                </div>
            </div>

            <div className="flex flex-col items-center justify-center bg-slate-200 min-h-[30rem] md:min-h-[25rem] lg:min-h-[30rem] ">
                <div className="my-10 text-center lg:w-3/5 lg:my-16">
                    <p className="text-2xl font-extrabold lg:text-3xl">
                        Join our extraordinary team
                    </p>
                    <p className="px-5 text-base md:px-10 lg:text-xl lg:px-0">
                        Despite this agreement, there is still a lot of difference of opinion
                        concerning what the exact nature of mind is and various competing
                        definitions have been proposed.
                    </p>
                </div>
                <div>
                    <button
                        type="button"
                        className="px-4 py-1 text-white transition duration-150 bg-red-400 rounded-md lg:px-4 lg:py-2 lg:font-bold hover:bg-red-500"
                    >
                        Browse jobs
                    </button>
                </div>
            </div>
        </div>
    );
}

export default About;
