import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="relative">
      <div className="absolute top-24 lg:top-52 left-28 lg:left-56 z-10">
        <div className="flex flex-col justify-center">
          <h1 className="text-white text-4xl lg:text-7xl font-semibold">
            We empower
          </h1>
          <span className="text-white text-lg lg:text-2xl font-mono ml-2 lg:ml-3">
            Your
            <span className="text-cyan-300 text-3xl lg:text-5xl font-bold ml-2 lg:ml-3 drop-shadow shadow-neutral-100 ">
              Dreams
            </span>
          </span>
        </div>
        <div className="flex py-2 ml-2">
          <button className="bg-orange-600 text-white text-lg rounded-lg py-2 px-3 text-center cursor-pointer hover:bg-orange-600 hover:text-black transition duration-500">
            Learn more
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={
            "https://images.unsplash.com/photo-1457364887197-9150188c107b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          }
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
