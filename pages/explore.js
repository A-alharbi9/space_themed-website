import React from 'react';
import Head from 'next/head';
import { ImLocation } from 'react-icons/im';
import { BsCalendar3 } from 'react-icons/bs';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

/*    eslint consistent-return: "off" */
/*    eslint react/self-closing-comp: "off" */

function explore() {
    const currentDate = new Date();

    const dataSchema = Yup.object().shape({
        destination: Yup.string().required('Destination is required'),
        startDate: Yup.date().min(currentDate.toDateString()).required(),
        returnDate: Yup.date()
            .when('startDate', (sDate, schema) => {
                if (sDate && sDate !== 'Invalid Date') {
                    sDate.setHours(sDate.getHours() + 2);

                    return sDate && schema.min(sDate);
                }
            })
            .max(
                new Date(
                    currentDate.getFullYear() + 2,
                    currentDate.getMonth(),
                    currentDate.getDate() + 1
                )
            )
            .typeError('Invalid date')
            .required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(dataSchema) });

    const onSubmit = async (formData) => {
        const startDate = formData.startDate.toISOString();

        const returnDate = formData.returnDate.toISOString();

        const res = await fetch('/api/trips/add', {
            method: 'POST',
            body: JSON.stringify({
                destination: formData.destination,
                startDate,
                returnDate,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await res.json();

        return data;
    };

    return (
        <div>
            <Head>
                <title>Explore | Atlacore</title>
                <meta name="description" content="Space themed website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                style={{
                    backgroundImage:
                        'url(https://images.unsplash.com/photo-1504333638930-c8787321eee0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
                }}
                className="flex flex-col justify-around h-screen"
            >
                <div className="flex justify-center w-full lg:justify-start">
                    <div className="flex flex-col items-center justify-center py-2 lg:px-10 lg:ml-20 text-white lg:lg:rounded-md lg:bg-gradient-to-r lg:from-slate-400/50 lg:via-black/30 lg:to-slate-300/30 min-h-[13rem] max-w-[35rem]">
                        <div className="flex items-center justify-start">
                            <p className="text-4xl font-bold 2xl:text-4xl">Discover other</p>
                        </div>
                        <div className="flex items-center justify-start">
                            <p className="text-4xl font-bold text-orange-300 2xl:text-5xl animate-pulse">
                                marvelous worlds
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center w-full mt-2">
                            <p className="ml-1 font-bold 2xl:text-lg">Discover other</p>
                            <p className="mx-1 font-bold text-orange-300 2xl:text-lg">
                                marvelous worlds
                            </p>
                            <p className="ml-1 font-bold 2xl:text-lg">Discover other</p>
                            <p className="mx-1 font-bold text-orange-300 2xl:text-lg">
                                marvelous worlds
                            </p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col justify-center lg:flex-row">
                        <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center lg:w-[78vw] py-8 lg:py-4 bg-gradient-to-r from-slate-400/80 via-black/50 to-slate-300/50 p-2 lg:lg:rounded-md">
                            <div className="flex flex-col items-center justify-between lg:justify-center py-2 mr-1 lg:mr-0 mt-1.5 w-1/3 xl:w-full">
                                <div className="flex items-center justify-center ml-2 lg:ml-0">
                                    <div className="mr-3">
                                        <ImLocation size={25} className="text-white" />
                                    </div>
                                    <select
                                        className="w-[11.1rem] md:w-72 lg:w-32 py-2 text-center text-black lg:rounded-md ml-3 "
                                        {...register('destination')}
                                        name="destination"
                                    >
                                        <option value=""></option>
                                        <option value="Mercury">Mercury</option>
                                        <option value="Venus">Venus</option>
                                        <option value="Mars">Mars</option>
                                        <option value="Jupiter">Jupiter</option>
                                        <option value="Saturn">Saturn</option>
                                        <option value="Uranus">Uranus</option>
                                        <option value="Neptune">Neptune</option>
                                    </select>
                                </div>
                                <div className="flex justify-end mt-2 w-44 max-h-[2.5rem]">
                                    {errors.destination && (
                                        <p className="text-red-200">Invalid destination</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between lg:justify-center py-2 mt-1.5 w-1/3 xl:w-full">
                                <div className="flex items-center justify-center mr-5 lg:mr-0 lg:ml-0">
                                    <BsCalendar3 size={25} className="mx-6 text-white" />
                                    <input
                                        type="date"
                                        name="startDate"
                                        className="py-2 text-center text-black w-44 md:w-72 lg:w-32 lg:rounded-md"
                                        {...register('startDate')}
                                    />
                                </div>
                                <div className="flex justify-end mt-2 w-36 max-h-[2.5rem]">
                                    {errors.startDate && (
                                        <p className="text-red-200">Invalid date</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col items-center justify-between lg:justify-center py-2 mt-1.5 w-1/3 xl:w-full">
                                <div className="flex items-center justify-center px-2 mr-5 theDate form-floating lg:mr-0">
                                    <BsCalendar3 size={25} className="mx-6 text-white" />
                                    <input
                                        type="date"
                                        name="returnDate"
                                        className="py-2 text-center text-black form-control w-44 md:w-72 lg:w-32 lg:rounded-md"
                                        {...register('returnDate')}
                                    />
                                </div>
                                <div className="flex justify-end mt-2 w-36 max-h-[2.5rem]">
                                    {errors.returnDate && (
                                        <p className="text-red-200">Invalid date</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-center w-full mx-1 my-2 ml-8 lg:flex-col lg:my-0 lg:ml-0 lg:h-full">
                                <button
                                    className="px-10 py-2 transition duration-150 bg-orange-400 rounded-md hover:bg-orange-600 lg:px-10 md:px-14"
                                    type="submit"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="flex flex-col border-b-2 border-solid bg-slate-300 lg:flex-row lg:py-8 border-slate-400 lg:px-5 xl:px-0">
                <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:w-1/2">
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1597200911744-881a5fdfae5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:mt-2">
                        <img
                            className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
                            alt=""
                            src="https://images.unsplash.com/photo-1615221025584-086389c99592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-5 lg:w-1/2 lg:mt-3">
                    <div>
                        <p className="my-6 text-4xl font-bold text-center lg:my-0">Mars</p>
                        <div className="px-4 my-2 text-gray-800 lg:text-sm">
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
                                vel facilisis volutpat est velit egestas dui. Egestas pretium aenean
                                pharetra magna ac. Enim nec dui nunc mattis enim ut tellus. Egestas
                                fringilla phasellus faucibus scelerisque eleifend donec pretium
                                vulputate. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Amet
                                consectetur adipiscing elit pellentesque habitant morbi. Ultrices
                                eros in cursus turpis massa tincidunt dui. Eu scelerisque felis
                                imperdiet proin fermentum. Risus commodo viverra maecenas accumsan
                                lacus vel facilisis volutpat. Orci phasellus egestas tellus rutrum
                                tellus pellentesque eu tincidunt tortor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full py-2 my-10 lg:h-1/4 lg:my-0">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full pb-6 lg:pb-0 xl:h-1/5">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Ratings</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Price</p>
                            <div className="flex justify-center">
                                <p className="px-2">50000 per person</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-b-2 border-solid bg-slate-300 lg:flex-row lg:py-8 border-slate-400 lg:px-5 xl:px-0">
                <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:w-1/2">
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
                    />
                    <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:mt-2">
                        <img
                            className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
                            alt=""
                            src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-5 lg:w-1/2 lg:mt-3">
                    <div>
                        <p className="my-6 text-4xl font-bold text-center lg:my-0">Mercury</p>
                        <div className="px-4 my-2 text-gray-800 lg:text-sm">
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
                                vel facilisis volutpat est velit egestas dui. Egestas pretium aenean
                                pharetra magna ac. Enim nec dui nunc mattis enim ut tellus. Egestas
                                fringilla phasellus faucibus scelerisque eleifend donec pretium
                                vulputate. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Amet
                                consectetur adipiscing elit pellentesque habitant morbi. Ultrices
                                eros in cursus turpis massa tincidunt dui. Eu scelerisque felis
                                imperdiet proin fermentum. Risus commodo viverra maecenas accumsan
                                lacus vel facilisis volutpat. Orci phasellus egestas tellus rutrum
                                tellus pellentesque eu tincidunt tortor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full py-2 my-10 lg:h-1/4 lg:my-0">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full pb-6 lg:pb-0 xl:h-1/5">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Ratings</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Price</p>
                            <div className="flex justify-center">
                                <p className="px-2">50000 per person</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-b-2 border-solid bg-slate-300 lg:flex-row lg:py-8 border-slate-400 lg:px-5 xl:px-0">
                <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:w-1/2">
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1597200911744-881a5fdfae5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:mt-2">
                        <img
                            className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
                            alt=""
                            src="https://images.unsplash.com/photo-1615221025584-086389c99592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-5 lg:w-1/2 lg:mt-3">
                    <div>
                        <p className="my-6 text-4xl font-bold text-center lg:my-0">Jupiter</p>
                        <div className="px-4 my-2 text-gray-800 lg:text-sm">
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
                                vel facilisis volutpat est velit egestas dui. Egestas pretium aenean
                                pharetra magna ac. Enim nec dui nunc mattis enim ut tellus. Egestas
                                fringilla phasellus faucibus scelerisque eleifend donec pretium
                                vulputate. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Amet
                                consectetur adipiscing elit pellentesque habitant morbi. Ultrices
                                eros in cursus turpis massa tincidunt dui. Eu scelerisque felis
                                imperdiet proin fermentum. Risus commodo viverra maecenas accumsan
                                lacus vel facilisis volutpat. Orci phasellus egestas tellus rutrum
                                tellus pellentesque eu tincidunt tortor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full py-2 my-10 lg:h-1/4 lg:my-0">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full pb-6 lg:pb-0 xl:h-1/5">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Ratings</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Price</p>
                            <div className="flex justify-center">
                                <p className="px-2">50000 per person</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-b-2 border-solid bg-slate-300 lg:flex-row lg:py-8 border-slate-400 lg:px-5 xl:px-0">
                <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:w-1/2">
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
                    />
                    <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:mt-2">
                        <img
                            className="w-full lg:w-[31rem] xl:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
                            alt=""
                            src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-5 lg:w-1/2 lg:mt-3">
                    <div>
                        <p className="my-6 text-4xl font-bold text-center lg:my-0">Neptune</p>
                        <div className="px-4 my-2 text-gray-800 lg:text-sm">
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
                                vel facilisis volutpat est velit egestas dui. Egestas pretium aenean
                                pharetra magna ac. Enim nec dui nunc mattis enim ut tellus. Egestas
                                fringilla phasellus faucibus scelerisque eleifend donec pretium
                                vulputate. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Amet
                                consectetur adipiscing elit pellentesque habitant morbi. Ultrices
                                eros in cursus turpis massa tincidunt dui. Eu scelerisque felis
                                imperdiet proin fermentum. Risus commodo viverra maecenas accumsan
                                lacus vel facilisis volutpat. Orci phasellus egestas tellus rutrum
                                tellus pellentesque eu tincidunt tortor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full py-2 my-10 lg:h-1/4 lg:my-0">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full pb-6 lg:pb-0 xl:h-1/5">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Ratings</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Price</p>
                            <div className="flex justify-center">
                                <p className="px-2">50000 per person</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-b-2 border-solid bg-slate-300 lg:flex-row lg:py-8 border-slate-400 lg:px-5 xl:px-0">
                <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:w-1/2">
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
                    />
                    <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:mt-2">
                        <img
                            className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
                            alt=""
                            src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-5 lg:w-1/2 lg:mt-3">
                    <div>
                        <p className="my-6 text-4xl font-bold text-center lg:my-0">Saturn</p>
                        <div className="px-4 my-2 text-gray-800 lg:text-sm">
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
                                vel facilisis volutpat est velit egestas dui. Egestas pretium aenean
                                pharetra magna ac. Enim nec dui nunc mattis enim ut tellus. Egestas
                                fringilla phasellus faucibus scelerisque eleifend donec pretium
                                vulputate. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Amet
                                consectetur adipiscing elit pellentesque habitant morbi. Ultrices
                                eros in cursus turpis massa tincidunt dui. Eu scelerisque felis
                                imperdiet proin fermentum. Risus commodo viverra maecenas accumsan
                                lacus vel facilisis volutpat. Orci phasellus egestas tellus rutrum
                                tellus pellentesque eu tincidunt tortor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full py-2 my-10 lg:h-1/4 lg:my-0">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full pb-6 lg:pb-0 xl:h-1/5">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Ratings</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Price</p>
                            <div className="flex justify-center">
                                <p className="px-2">50000 per person</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-b-2 border-solid bg-slate-300 lg:flex-row lg:py-8 border-slate-400 lg:px-5 xl:px-0">
                <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:w-1/2">
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
                    />
                    <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:mt-2">
                        <img
                            className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
                            alt=""
                            src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-5 lg:w-1/2 lg:mt-3">
                    <div>
                        <p className="my-6 text-4xl font-bold text-center lg:my-0">Uranus</p>
                        <div className="px-4 my-2 text-gray-800 lg:text-sm">
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
                                vel facilisis volutpat est velit egestas dui. Egestas pretium aenean
                                pharetra magna ac. Enim nec dui nunc mattis enim ut tellus. Egestas
                                fringilla phasellus faucibus scelerisque eleifend donec pretium
                                vulputate. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Amet
                                consectetur adipiscing elit pellentesque habitant morbi. Ultrices
                                eros in cursus turpis massa tincidunt dui. Eu scelerisque felis
                                imperdiet proin fermentum. Risus commodo viverra maecenas accumsan
                                lacus vel facilisis volutpat. Orci phasellus egestas tellus rutrum
                                tellus pellentesque eu tincidunt tortor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full py-2 my-10 lg:h-1/4 lg:my-0">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full pb-6 lg:pb-0 xl:h-1/5">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Ratings</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Price</p>
                            <div className="flex justify-center">
                                <p className="px-2">50000 per person</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col border-b-2 border-solid bg-slate-300 lg:flex-row lg:py-8 border-slate-400 lg:px-5 xl:px-0">
                <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:w-1/2">
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    />
                    <img
                        alt=""
                        className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
                        src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
                    />
                    <div className="flex flex-col flex-wrap w-full lg:flex-row lg:justify-center lg:mt-2">
                        <img
                            className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
                            alt=""
                            src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-5 lg:w-1/2 lg:mt-3">
                    <div>
                        <p className="my-6 text-4xl font-bold text-center lg:my-0">Venus</p>
                        <div className="px-4 my-2 text-gray-800 lg:text-sm">
                            <p className="text-center">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus
                                vel facilisis volutpat est velit egestas dui. Egestas pretium aenean
                                pharetra magna ac. Enim nec dui nunc mattis enim ut tellus. Egestas
                                fringilla phasellus faucibus scelerisque eleifend donec pretium
                                vulputate. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Amet
                                consectetur adipiscing elit pellentesque habitant morbi. Ultrices
                                eros in cursus turpis massa tincidunt dui. Eu scelerisque felis
                                imperdiet proin fermentum. Risus commodo viverra maecenas accumsan
                                lacus vel facilisis volutpat. Orci phasellus egestas tellus rutrum
                                tellus pellentesque eu tincidunt tortor.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full py-2 my-10 lg:h-1/4 lg:my-0">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Dis</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                                <p>km</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-around w-full pb-6 lg:pb-0 xl:h-1/5">
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Ratings</p>
                            <div className="flex justify-center">
                                <p className="px-2">5</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center w-1/2">
                            <p className="font-bold">Price</p>
                            <div className="flex justify-center">
                                <p className="px-2">50000 per person</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default explore;
