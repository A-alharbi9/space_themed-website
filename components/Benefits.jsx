import React from 'react';
import { MdHighQuality, MdDomainVerification } from 'react-icons/md';
import { CgArrowTopRightR } from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';

function Benefits() {
  return (
    <section className="relative mt-44">
      {/* <div className="bg-slate-800 transform -skew-y-6 h-[80rem] lg:h-[55rem] overflow-hidden my-10"></div> */}
      <div className="bg-slate-200 dark:bg-gray-400 transform -skew-y-6 h-[72rem] md:h-[57rem] lg:h-[55rem] overflow-hidden my-10"></div>
      <div className="absolute text-white top-20 md:top-32 lg:top-32">
        <div className="flex justify-center w-screen mt-10 text-center">
          <p className="text-3xl font-extrabold text-black lg:text-4xl">
            Why us?
          </p>
        </div>
        <div className="grid grid-cols-1 py-24 mt-5 md:grid-cols-2 lg:grid-cols-4 md:py-32 lg:py-52">
          <div className="flex flex-col items-center justify-center ml-10 text-black">
            <MdDomainVerification size={30} color="black" />
            <p className="px-6 text-xl font-semibold text-center border-l border-cyan-400">
              45+ years of experience
            </p>
            <p className="mt-4 text-sm text-center text-stone-800">
              We have collaborated with local and international organaistions to
              promote and sponser space eductional content. These organaistions
              include, but not limited to, the UN.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center mt-16 md:mt-0">
            <MdHighQuality size={30} color="black" />
            <p className="px-6 text-xl font-semibold text-center text-black border-l border-cyan-400">
              Higher quality courses
            </p>
            <p className="px-4 mt-4 text-sm text-center text-stone-800">
              We have collaborated with local and international organaistions to
              promote and sponser space eductional content. These organaistions
              include, but not limited to, the UN.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center pt-16 lg:pt-0 md:mt-0">
            <CgArrowTopRightR
              size={28}
              color="#000"
              style={{
                backgroundColor: 'transparent',
                padding: '0 2px',
              }}
            />
            <p className="px-6 text-xl font-semibold text-center text-black border-l border-cyan-400">
              Higher employment
            </p>
            <p className="px-4 mt-4 text-sm text-center text-stone-800">
              We have collaborated with local and international organaistions to
              promote and sponser space eductional content. These organaistions
              include, but not limited to, the UN.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center pt-16 mr-10 lg:pt-0 md:mt-0">
            <FaChalkboardTeacher
              size={24}
              color="#fff"
              style={{
                backgroundColor: '#000',
                border: '2px solid black',
                borderRadius: '4px',
                padding: '0 2px',
              }}
            />
            <p className="px-6 text-xl font-semibold text-center text-black border-l border-cyan-400">
              Prestigious staff
            </p>
            <p className="mt-4 text-sm text-center text-stone-800">
              We have collaborated with local and international organaistions to
              promote and sponser space eductional content. These organaistions
              include, but not limited to, the UN.
            </p>
          </div>
        </div>
      </div>
      {/* <div className="absolute top-[75rem] lg:top-[50rem] h-[10rem] w-screen bg-slate-800"></div> */}
    </section>
  );
}

export default Benefits;
