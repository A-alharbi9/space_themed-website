import React from "react";

function Footer() {
  return (
    <footer className="bg-slate-500 text-whitepx-7 py-6 lg:py-10 px-3 text-white">
      <div className="lg:flex lg:justify-center items-center lg:mx-6">
        <div className="flex justify-around items-center w-full">
          <div className="mx-0">
            <p className="text-2xl font-bold">Company</p>
            <div className="mt-2 ">
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                Privacy policy
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                careers
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                contact us
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                Privacy policy
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                careers
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                contact us
              </p>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="text-2xl font-bold">Support</p>
            <div className="mt-2">
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                Privacy policy
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                careers
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                contact us
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                Privacy policy
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                careers
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                contact us
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center p-3 w-full">
          <div className="lg:mx-10">
            <p className="text-2xl font-bold">Community</p>
            <div className="mt-2 mx-0">
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                Privacy policy
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                careers
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                contact us
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                Privacy policy
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                careers
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                contact us
              </p>
            </div>
          </div>
          <div className="mt-4 lg:mt-0">
            <p className="text-2xl font-bold">Support</p>
            <div className="mt-2">
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                Privacy policy
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                careers
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                contact us
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                Privacy policy
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                careers
              </p>
              <p className="text-lg hover:text-cyan-300 hover:font-semibold transition duration-300 cursor-pointer">
                contact us
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:mt-8">
        <p className="flex justify-center items-center">
          {`© ${new Date().getFullYear()}`}
          <p className="text-lg font-bold p-2"> Atlacore inc. </p>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
