import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Cookies from 'js-cookie';

/*    eslint consistent-return: "off" */

function index() {
    const [activeTab, setActiveTab] = useState('current');
    const [prevTrips, setPrevTrips] = useState([]);
    const [currentTrips, setCurrentTrips] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [errorOccured, setErrorOccured] = useState({
        error: true,
        statusCode: 500,
    });

    async function getUserTrips() {
        try {
            setIsloading(true);

            const res = await fetch('api/trips/get', {
                headers: {
                    Authorization: Cookies.get('token'),
                },
            });
            const data = await res.json();

            if (res.status === 200) {
                Object.values(data.trips)
                    .filter((ele) => {
                        if (new Date().getTime() < new Date(ele.returnDate.toString()).getTime()) {
                            return ele;
                        }
                        return false;
                    })
                    .map((trip) => {
                        setCurrentTrips((prev) => [...prev, trip]);

                        return currentTrips;
                    });
                Object.values(data.trips)
                    .filter((ele) => {
                        if (new Date().getTime() > new Date(ele.returnDate.toString()).getTime()) {
                            return ele;
                        }
                        return false;
                    })
                    .map((trip) => {
                        setPrevTrips((prev) => [...prev, trip]);
                        return prevTrips;
                    });

                setErrorOccured({ error: false });
            } else {
                setErrorOccured({ error: true, statusCode: res.status || 500 });
            }

            setIsloading(false);

            return res;
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getUserTrips();
    }, []);

    if (activeTab === 'current' && !currentTrips.length) {
        return (
            <div className="w-screen h-[91vh] bg-slate-200">
                <div className="flex flex-col items-center justify-around py-10 h-4/5 ">
                    {isLoading === false && errorOccured.error && errorOccured.statusCode === 404 && (
                        <div className="text-center ">
                            <p className="text-2xl font-bold">No trips!</p>
                        </div>
                    )}
                    <div className="flex justify-around w-1/2 px-2 py-2 my-5">
                        <button
                            type="button"
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
                        <button type="button" onClick={() => setActiveTab('current')}>
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
                    <div className="text-center ">
                        <p className="text-2xl font-bold">No Current Trips!</p>
                    </div>
                </div>
            </div>
        );
    }
    if (activeTab === 'previous' && !prevTrips.length) {
        return (
            <div className="w-screen h-[91vh] bg-slate-200">
                <div className="flex flex-col items-center justify-around py-10 h-4/5 ">
                    {isLoading === false && errorOccured.error && errorOccured.statusCode === 404 && (
                        <div className="text-center ">
                            <p className="text-2xl font-bold">No trips!</p>
                        </div>
                    )}
                    <div className="flex justify-around w-1/2 px-2 py-2 my-5">
                        <button
                            type="button"
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
                        <button type="button" onClick={() => setActiveTab('current')}>
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
                    <div className="text-center ">
                        <p className="text-2xl font-bold">No Previous Trips!</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Head>
                <title>my trips | Atlacore</title>
                <meta name="description" content="Space themed website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="w-screen h-[91vh] bg-slate-200">
                <div className="flex flex-col items-center justify-around py-10 h-4/5 ">
                    {isLoading === false && errorOccured.error && errorOccured.statusCode === 404 && (
                        <div className="text-center ">
                            <p className="text-2xl font-bold">No trips!</p>
                        </div>
                    )}
                    <div className="flex justify-around w-1/2 px-2 py-2 my-5">
                        <button
                            type="button"
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
                        <button type="button" onClick={() => setActiveTab('current')}>
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
                            <thead className="text-center border-b border-solid border-slate-600">
                                <tr>
                                    <th>Destination</th>
                                    <th>Start date</th>
                                    <th>Return date</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                {isLoading === false &&
                                    activeTab === 'current' &&
                                    Object.values(currentTrips).map((trip) => (
                                        <tr className="py-4 my-10 h-9 odd:bg-slate-600 odd:text-white odd:border-black">
                                            <td>{trip.destination}</td>
                                            <td>
                                                {new Date(trip.startDate.toString()).toDateString()}
                                            </td>
                                            <td>
                                                {new Date(
                                                    trip.returnDate.toString()
                                                ).toDateString()}
                                            </td>
                                            <td>In progress</td>
                                        </tr>
                                    ))}
                            </tbody>

                            {activeTab === 'previous' &&
                                Object.values(prevTrips).map((trip) => (
                                    <tr className="py-4 h-9 odd:bg-slate-600 odd:text-white odd:border-black">
                                        <td>{trip.destination}</td>
                                        <td>
                                            {new Date(trip.startDate.toString()).toDateString()}
                                        </td>
                                        <td>
                                            {new Date(trip.returnDate.toString()).toDateString()}
                                        </td>
                                        <td>Completed</td>
                                    </tr>
                                ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;
