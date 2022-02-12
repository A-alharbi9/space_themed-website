import React from "react";
import { GiOpenBook, GiChart } from "react-icons/gi";
import { ImRocket } from "react-icons/im";
import { BsBarChartFill } from "react-icons/bs";
import { AiFillDatabase } from "react-icons/ai";

function OurMission() {
  return (
    <section className="my-8 py-8">
      <div className="flex justify-center text-center w-screen">
        <p className="font-extrabold text-3xl lg:text-4xl">Our Mission</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between  lg:mt-20 mx-14 lg:mx-56">
        <div className="flex flex-col justify-center items-center lg:mt-0 lg:w-1/2 lg:mr-24">
          <ImRocket size={30} color="black" />
          <div>
            <p className="text-xl font-semibold text-center">
              Raise a generation of space explorers
            </p>
            <p className="text-sm text-stone-500 mt-4 text-center">
              We have collaborated with local and international organaistions to
              promote and sponser space eductional content. These organaistions
              include, but not limited to, the UN.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center lg:mt-0 lg:w-1/2 lg:ml-24">
          <GiOpenBook size={30} color="black" />
          <div>
            <p className="text-xl font-semibold text-center">
              Support space eduction
            </p>
            <p className="text-sm text-stone-500 mt-4 text-center">
              In this digital age, institutions are faced with the growing need
              of catering content to a wide variety of audience.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:justify-between mt-20 lg:mt-20 lg:mb-14 mx-14 lg:mx-56">
        <div className="flex flex-col justify-center items-center lg:w-1/2 mb-14 lg:mb-0 lg:mr-24">
          <AiFillDatabase size={30} color="black" />
          <div>
            <p className="text-xl font-semibold text-center">
              Build data centers world wide
            </p>
            <p className="text-sm text-stone-500 mt-4 text-center">
              Data is significant resource. With security in mind, we are
              working on creating reigonal and continental data centers.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5 lg:mt-0 lg:w-1/2 lg:ml-24">
          <BsBarChartFill size={30} color="black" />
          <div>
            <p className="text-xl font-semibold text-center">
              Expediate the development of space technology
            </p>
            <p className="text-sm text-stone-500 mt-4 text-center">
              Our ambitions will not be fully realised without aiming to push
              current technological boundaries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurMission;
