import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { ImLocation } from 'react-icons/im';
import { BsCalendar3 } from 'react-icons/bs';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

function explore() {
  let schema = Yup.object().shape({
    destination: Yup.string().required('Destination is required'),
    startDate: Yup.date()
      .min(new Date().toDateString())
      .required('Start date is required!'),
    returnDate: Yup.date()
      .min(Yup.ref('startDate'))
      .when('startDate', (st, schema) => {
        console.log('SSO: ', st);
        if (st != null) {
          console.log('SS: ', st);
          console.log('SS: ', st.getDate() + 1);
          st.setDate(st.getDate() + 1);
          console.log('SS in i: ', st.toISOString());
          console.log('SS in: ', st);
          console.log('............');
          console.log('SS in i: ', st.toISOString());
          console.log('SS in: ', st.toDateString());
          console.log('SS in: ', st.toISOString().slice(0, 10));
          return st && schema.min(st.toISOString());

          //this else prevents your page from crashing if there's any other input
        } else return schema.min('2022-05-08');
      })
      .transform(function (value) {
        this.isType(value) ? undefined : value;
      })
      .typeError('Enter a date')
      .required('Return date is required!'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (formData) => {
    const currentDate = new Date();

    const startDate = formData.startDate.toDateString();
    const startYear = formData.startDate.toDateString().slice(11);

    const returnDate = formData.returnDate.toDateString();
    const returnYear = formData.returnDate.toDateString().slice(11);

    const maxYear = currentDate.getFullYear() + 3;

    console.log(formData);
    console.log(maxYear);
    console.log(startDate);
    console.log(returnDate);
    console.log(startYear > maxYear);
    console.log(returnYear > maxYear);
    console.log(formData.startDate.toDateString().slice(11));
    console.log(startYear > maxYear);
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
        <div className="flex justify-center lg:justify-start w-full">
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
          <div className="flex flex-col lg:flex-row justify-center">
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
                    <option value={''}></option>
                    <option value={'Mercury'}>Mercury</option>
                    <option value={'Venus'}>Venus</option>
                    <option value={'Mars'}>Mars</option>
                    <option value={'Jupiter'}>Jupiter</option>
                    <option value={'Saturn'}>Saturn</option>
                    <option value={'Uranus'}>Uranus</option>
                    <option value={'Neptune'}>Neptune</option>
                  </select>
                </div>
                <div className="flex justify-end mt-2 w-52 lg:w-56 max-h-[2.5rem]">
                  {errors.destination && (
                    <p className="text-red-200 ">
                      {errors.destination?.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex flex-col items-center justify-between lg:justify-center py-2 mt-1.5 w-1/3 xl:w-full">
                <div className="flex items-center justify-center mr-5 lg:mr-0 lg:ml-0">
                  <BsCalendar3 size={25} className="text-white mx-6" />
                  <input
                    type={'date'}
                    name="startDate"
                    className="w-44 md:w-72 lg:w-32 py-2 text-center text-black lg:rounded-md"
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
                <div className="theDate form-floating flex items-center justify-center mr-5 lg:mr-0 px-2">
                  <BsCalendar3 size={25} className="text-white mx-6" />
                  <input
                    type={'date'}
                    name="returnDate"
                    className="form-control w-44 md:w-72 lg:w-32 py-2 text-center text-black lg:rounded-md"
                    {...register('returnDate')}
                  />
                </div>
                <div className="flex justify-end mt-2 w-36 max-h-[2.5rem]">
                  {errors.returnDate && (
                    <p className="text-red-200">Invalid date</p>
                  )}
                </div>
              </div>
              <div className="flex flex-row lg:flex-col justify-center items-center my-2 lg:my-0 mx-1 ml-8 lg:ml-0 w-full lg:h-full">
                <button
                  className="bg-orange-400 hover:bg-orange-600 lg:px-10 py-2 px-10 md:px-14 rounded-md transition duration-150"
                  type="submit"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="bg-slate-300 flex flex-col lg:flex-row lg:py-8 border-solid border-slate-400 border-b-2 lg:px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-center w-full lg:w-1/2">
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
            src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
            src="https://images.unsplash.com/photo-1597200911744-881a5fdfae5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full lg:mt-2">
            <img
              className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
              src="https://images.unsplash.com/photo-1615221025584-086389c99592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 px-5 lg:mt-3">
          <div>
            <p className="text-4xl font-bold text-center my-6 lg:my-0">Mars</p>
            <div className="text-gray-800 lg:text-sm px-4 my-2">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui. Egestas
                pretium aenean pharetra magna ac. Enim nec dui nunc mattis enim
                ut tellus. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Id eu nisl nunc mi ipsum
                faucibus vitae aliquet nec. Amet consectetur adipiscing elit
                pellentesque habitant morbi. Ultrices eros in cursus turpis
                massa tincidunt dui. Eu scelerisque felis imperdiet proin
                fermentum. Risus commodo viverra maecenas accumsan lacus vel
                facilisis volutpat. Orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor.
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center w-full lg:h-1/4 py-2 my-10 lg:my-0">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center pb-6 lg:pb-0 xl:h-1/5 w-full">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Ratings</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Price</p>
              <div className="flex justify-center">
                <p className="px-2">50000 per person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 flex flex-col lg:flex-row lg:py-8 border-solid border-slate-400 border-b-2 lg:px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-center w-full lg:w-1/2">
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
            src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
            src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
          />
          <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full lg:mt-2">
            <img
              className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
              src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 px-5 lg:mt-3">
          <div>
            <p className="text-4xl font-bold text-center my-6 lg:my-0">
              Mercury
            </p>
            <div className="text-gray-800 lg:text-sm px-4 my-2">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui. Egestas
                pretium aenean pharetra magna ac. Enim nec dui nunc mattis enim
                ut tellus. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Id eu nisl nunc mi ipsum
                faucibus vitae aliquet nec. Amet consectetur adipiscing elit
                pellentesque habitant morbi. Ultrices eros in cursus turpis
                massa tincidunt dui. Eu scelerisque felis imperdiet proin
                fermentum. Risus commodo viverra maecenas accumsan lacus vel
                facilisis volutpat. Orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor.
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center w-full lg:h-1/4 py-2 my-10 lg:my-0">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center pb-6 lg:pb-0 xl:h-1/5 w-full">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Ratings</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Price</p>
              <div className="flex justify-center">
                <p className="px-2">50000 per person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 flex flex-col lg:flex-row lg:py-8 border-solid border-slate-400 border-b-2 lg:px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-center w-full lg:w-1/2">
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
            src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
            src="https://images.unsplash.com/photo-1597200911744-881a5fdfae5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full lg:mt-2">
            <img
              className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
              src="https://images.unsplash.com/photo-1615221025584-086389c99592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 px-5 lg:mt-3">
          <div>
            <p className="text-4xl font-bold text-center my-6 lg:my-0">
              Jupiter
            </p>
            <div className="text-gray-800 lg:text-sm px-4 my-2">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui. Egestas
                pretium aenean pharetra magna ac. Enim nec dui nunc mattis enim
                ut tellus. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Id eu nisl nunc mi ipsum
                faucibus vitae aliquet nec. Amet consectetur adipiscing elit
                pellentesque habitant morbi. Ultrices eros in cursus turpis
                massa tincidunt dui. Eu scelerisque felis imperdiet proin
                fermentum. Risus commodo viverra maecenas accumsan lacus vel
                facilisis volutpat. Orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor.
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center w-full lg:h-1/4 py-2 my-10 lg:my-0">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center pb-6 lg:pb-0 xl:h-1/5 w-full">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Ratings</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Price</p>
              <div className="flex justify-center">
                <p className="px-2">50000 per person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 flex flex-col lg:flex-row lg:py-8 border-solid border-slate-400 border-b-2 lg:px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-center w-full lg:w-1/2">
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
            src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
            src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
          />
          <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full lg:mt-2">
            <img
              className="w-full lg:w-[31rem] xl:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
              src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 px-5 lg:mt-3">
          <div>
            <p className="text-4xl font-bold text-center my-6 lg:my-0">
              Neptune
            </p>
            <div className="text-gray-800 lg:text-sm px-4 my-2">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui. Egestas
                pretium aenean pharetra magna ac. Enim nec dui nunc mattis enim
                ut tellus. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Id eu nisl nunc mi ipsum
                faucibus vitae aliquet nec. Amet consectetur adipiscing elit
                pellentesque habitant morbi. Ultrices eros in cursus turpis
                massa tincidunt dui. Eu scelerisque felis imperdiet proin
                fermentum. Risus commodo viverra maecenas accumsan lacus vel
                facilisis volutpat. Orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor.
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center w-full lg:h-1/4 py-2 my-10 lg:my-0">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center pb-6 lg:pb-0 xl:h-1/5 w-full">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Ratings</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Price</p>
              <div className="flex justify-center">
                <p className="px-2">50000 per person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 flex flex-col lg:flex-row lg:py-8 border-solid border-slate-400 border-b-2 lg:px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-center w-full lg:w-1/2">
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
            src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
            src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
          />
          <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full lg:mt-2">
            <img
              className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
              src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 px-5 lg:mt-3">
          <div>
            <p className="text-4xl font-bold text-center my-6 lg:my-0">
              Saturn
            </p>
            <div className="text-gray-800 lg:text-sm px-4 my-2">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui. Egestas
                pretium aenean pharetra magna ac. Enim nec dui nunc mattis enim
                ut tellus. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Id eu nisl nunc mi ipsum
                faucibus vitae aliquet nec. Amet consectetur adipiscing elit
                pellentesque habitant morbi. Ultrices eros in cursus turpis
                massa tincidunt dui. Eu scelerisque felis imperdiet proin
                fermentum. Risus commodo viverra maecenas accumsan lacus vel
                facilisis volutpat. Orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor.
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center w-full lg:h-1/4 py-2 my-10 lg:my-0">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center pb-6 lg:pb-0 xl:h-1/5 w-full">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Ratings</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Price</p>
              <div className="flex justify-center">
                <p className="px-2">50000 per person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 flex flex-col lg:flex-row lg:py-8 border-solid border-slate-400 border-b-2 lg:px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-center w-full lg:w-1/2">
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
            src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
            src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
          />
          <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full lg:mt-2">
            <img
              className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
              src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 px-5 lg:mt-3">
          <div>
            <p className="text-4xl font-bold text-center my-6 lg:my-0">
              Uranus
            </p>
            <div className="text-gray-800 lg:text-sm px-4 my-2">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui. Egestas
                pretium aenean pharetra magna ac. Enim nec dui nunc mattis enim
                ut tellus. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Id eu nisl nunc mi ipsum
                faucibus vitae aliquet nec. Amet consectetur adipiscing elit
                pellentesque habitant morbi. Ultrices eros in cursus turpis
                massa tincidunt dui. Eu scelerisque felis imperdiet proin
                fermentum. Risus commodo viverra maecenas accumsan lacus vel
                facilisis volutpat. Orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor.
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center w-full lg:h-1/4 py-2 my-10 lg:my-0">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center pb-6 lg:pb-0 xl:h-1/5 w-full">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Ratings</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Price</p>
              <div className="flex justify-center">
                <p className="px-2">50000 per person</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-300 flex flex-col lg:flex-row lg:py-8 border-solid border-slate-400 border-b-2 lg:px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-center w-full lg:w-1/2">
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:mr-3 lg:rounded-md"
            src="https://images.unsplash.com/photo-1649929888678-83aefa565ac6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
          <img
            className="w-full lg:w-[15rem] h-64 lg:h-48 lg:rounded-md"
            src="https://images.unsplash.com/photo-1598968693552-39a64f9e24f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1301&q=80"
          />
          <div className="flex flex-col lg:flex-row lg:justify-center flex-wrap w-full lg:mt-2">
            <img
              className="w-full lg:w-[31rem] h-64 lg:h-56 object-center lg:rounded-md"
              src="https://images.unsplash.com/photo-1444090695923-48e08781a76a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center lg:w-1/2 px-5 lg:mt-3">
          <div>
            <p className="text-4xl font-bold text-center my-6 lg:my-0">Venus</p>
            <div className="text-gray-800 lg:text-sm px-4 my-2">
              <p className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lacus vel facilisis volutpat est velit egestas dui. Egestas
                pretium aenean pharetra magna ac. Enim nec dui nunc mattis enim
                ut tellus. Egestas fringilla phasellus faucibus scelerisque
                eleifend donec pretium vulputate. Id eu nisl nunc mi ipsum
                faucibus vitae aliquet nec. Amet consectetur adipiscing elit
                pellentesque habitant morbi. Ultrices eros in cursus turpis
                massa tincidunt dui. Eu scelerisque felis imperdiet proin
                fermentum. Risus commodo viverra maecenas accumsan lacus vel
                facilisis volutpat. Orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor.
              </p>
            </div>
          </div>
          <div className="flex justify-around items-center w-full lg:h-1/4 py-2 my-10 lg:my-0">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Dis</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
                <p>km</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center pb-6 lg:pb-0 xl:h-1/5 w-full">
            <div className="flex flex-col justify-center items-center w-1/2">
              <p className="font-bold">Ratings</p>
              <div className="flex justify-center">
                <p className="px-2">5</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2">
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
