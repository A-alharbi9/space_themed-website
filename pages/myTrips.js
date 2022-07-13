import React, { useEffect, useState } from 'react';
import Head from 'next/head';

function index() {
  const [activeTab, setActiveTab] = useState('current');
  const [allTrips, setAllTrips] = useState([]);
  const [prevTrips, setPrevTrips] = useState([]);
  const [currentTrips, setCurrentTrips] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    getUserTrips();
  }, []);
  async function getUserTrips() {
    try {
      setIsloading(true);

      const res = await fetch('api/trips/get');
      const data = await res.json();

      setAllTrips(data.trips);

      setIsloading(false);

      return res;
    } catch (error) {}
  }

  useEffect(() => {}, [isLoading, allTrips]);

  return (
    <div>
      <Head>
        <title>my trips | Atlacore</title>
        <meta name="description" content="Space themed website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-around w-screen h-[91vh] py-10 bg-slate-200">
        <div className="flex justify-around w-1/2 px-2 py-2 my-5">
          <button
            onClick={() => {
              setActiveTab('previous');
            }}
          >
            <div
              className={`px-10 text-lg border-b border-green-600 border-solid cursor-pointer ${
                activeTab === 'previous'
                  ? 'text-green-500 border-green-400'
                  : 'border-green-200'
              }
               hover:text-green-500`}
            >
              <p>Previous Trips</p>
            </div>
          </button>
          <button onClick={() => setActiveTab('current')}>
            <div
              className={`px-10 text-lg border-b border-green-300 border-solid cursor-pointer ${
                activeTab === 'current'
                  ? 'text-green-500 border-green-400'
                  : 'border-green-200'
              } hover:text-green-500`}
            >
              <p>Current Trips</p>
            </div>
          </button>
        </div>

        <div className="w-1/2 text-center">
          <table className="w-full">
            <thead className="border-b border-solid border-slate-600">
              <tr>
                <th colSpan="2">Date</th>
                <th colSpan="2">Days</th>
              </tr>
            </thead>
            <tbody>
              {isLoading === false && allTrips.length ? (
                Object.values(allTrips).map((trip) => (
                  <tr className="">
                    <td>{trip._id}</td>
                    <td>{trip.startDate}</td>
                    <td>{trip.destination}</td>
                  </tr>
                ))
              ) : (
                <tr className="">
                  <td>{allTrips._id}</td>
                  <td>{allTrips.startDate}</td>
                  <td>{allTrips.destination}</td>
                </tr>
              )}
            </tbody>
          </table>
          {/* {!allTrips.length && (
            <div className="text-center ">
              <p className="text-2xl font-bold">No trips!</p>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
}

export default index;
