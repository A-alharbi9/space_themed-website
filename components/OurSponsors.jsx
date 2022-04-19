import React from 'react';
import { GiOpenBook, GiChart } from 'react-icons/gi';
import { ImRocket } from 'react-icons/im';
import { BsBarChartFill } from 'react-icons/bs';
import { AiFillDatabase } from 'react-icons/ai';

function OurSponsors() {
  return (
    <section className="relative">
      <div className="flex flex-col justify-center ">
        <div className="flex justify-center w-screen mt-10 text-center">
          <p className="text-3xl lg:text-4xl">Sponsored by</p>
        </div>

        <div className="flex flex-col justify-center lg:flex-row mt-28 lg:mt-20 mx-14 lg:mx-56">
          <div className="flex flex-col items-center justify-center lg:mt-14 lg:w-1/2 lg:mr-24">
            <div className="w-[17.5rem]">
              <img src="https://2.bp.blogspot.com/-O-KD4TE_mUM/XFsuTVBfOWI/AAAAAAAAH38/RpbJ9IGRIzQC1HcA7sUoJb4p4TSrbU5vgCK4BGAYYCw/s1600/logo%2Bnasa.png" />
            </div>
            <div className="mt-10">
              <p className="text-xl font-semibold text-center">
                The National Aeronautics and Space Administration (NASA)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-20 lg:mt-0 lg:w-1/2 lg:ml-24">
            <div className=" w-[18rem]">
              <img src="https://logodownload.org/wp-content/uploads/2021/02/spacex-logo-0-1536x1536.png" />
            </div>
            <div>
              <p className="text-xl font-semibold text-center">SpaceX</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center mt-24 lg:flex-row lg:mt-32 lg:mb-14 mx-14 lg:mx-56">
          <div className="flex flex-col items-center justify-center lg:w-1/2 mb-14 lg:mb-0 lg:mr-24">
            <div className=" w-80">
              <img src="http://logok.org/wp-content/uploads/2014/10/ESA-logo-and-wordmark.png" />
            </div>

            <div className="mt-10">
              <p className="text-xl font-semibold text-center">
                Europen Space Agency (ESA)
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center mt-16 lg:mt-0 lg:w-1/2 lg:ml-24">
            <div className="w-[16.5rem]">
              <img src="https://www.nasa.gov/sites/default/files/thumbnails/image/sservi_badgelogo.png" />
            </div>
            <div className="mt-12">
              <p className="text-xl font-semibold text-center">
                Solar System Exploration Research Virtual Institute (SSERVI)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurSponsors;
