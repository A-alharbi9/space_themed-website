import React, { useState, useEffect } from 'react';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputError from '../input/InputError';
import InputSuccess from '../input/InputSuccess';

/*    eslint consistent-return: "off" */
/*    eslint react/self-closing-comp: "off" */
/*    eslint no-unneeded-ternary: "off" */
/*    eslint jsx-a11y/anchor-is-valid: "off" */
/*    eslint jsx-a11y/click-events-have-key-events: "off" */
/*    eslint jsx-a11y/no-static-element-interactions: "off" */

function SignupModal() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successResMessage, setSuccessResMessage] = useState('');
    const [errorResMessage, setErrorResMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const signupSchema = Yup.object().shape({
        name: Yup.string().required('Name is required!'),
        email: Yup.string().email().required('Email is required!'),
        password: Yup.string()
            .matches(
                /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
                'Incorrect password format!'
            )
            .required('Password is required!'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful },
        formState: { errors },
    } = useForm({ resolver: yupResolver(signupSchema) });

    useEffect(() => {
        reset({ name: '', email: '', password: '' });
    }, [isSubmitSuccessful]);

    const toggleModal = (e) => {
        const modalOverlay = document.getElementById('overlayContainer');

        if (e.target === modalOverlay) {
            setIsOpen(false);
        }
    };

    const submitData = async (formData) => {
        try {
            setIsSubmitting(true);

            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.name.toLowerCase(),
                    email: formData.email.toLowerCase(),
                    password: formData.password,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            switch (res.status) {
                case 200:
                    setSuccessResMessage('Signed up successfully!');

                    setTimeout(() => {
                        setIsSubmitting(false);
                        setSuccessResMessage('');
                        setErrorResMessage('');
                        setIsOpen(false);
                    }, 1500);
                    break;
                case 400:
                    setErrorResMessage('Account already exist!');
                    break;

                default:
                    setErrorResMessage('Something went wrong!');
                    break;
            }

            const data = await res.json();

            setTimeout(() => {
                setIsSubmitting(false);
                setSuccessResMessage('');
                setErrorResMessage('');
            }, 2500);

            setName('');
            setEmail('');
            setPassword('');

            return data;
        } catch (error) {
            console.log(error);
            setErrorResMessage('Something went wrong!');
        }
    };

    return (
        <div>
            <div className="flex-col items-center justify-center hidden mr-2 lg:flex">
                <button
                    type="button"
                    className="w-20 px-1 py-1 font-bold transition duration-150 rounded-md lg:bg-green-500 lg:hover:bg-green-600 hover:text-black lg:hover:text-white lg:text-sm xl:text-base"
                    onClick={() => setIsOpen(true)}
                >
                    Sign up
                </button>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 flex flex-col items-center justify-center w-screen bg-gray-800 bg-opacity-80"
                    id="overlayContainer"
                    onClick={toggleModal}
                >
                    <div className="w-full rounded-md md:w-3/5 lg:w-[40%] xl:w-[30%] bg-slate-200 text-black">
                        <div className="py-4 text-center ">
                            <h1 className="text-xl font-bold ">Create your Atlacore account</h1>
                        </div>
                        <div className="flex justify-center w-full max-h-[1.5rem]">
                            {successResMessage && (
                                <InputSuccess successMessage={successResMessage} />
                            )}
                        </div>
                        <div className="flex justify-center w-full max-h-[1.5rem]">
                            {errorResMessage && <InputError errorMessage={errorResMessage} />}
                        </div>
                        <form
                            className="px-3 py-3 "
                            onSubmit={handleSubmit(submitData)}
                            method="post"
                        >
                            <div className="px-5 py-1">
                                <label htmlFor="Name">Name:</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        name="Name"
                                        placeholder="Your name"
                                        className="w-full px-2 py-1 bg-white rounded-md"
                                        value={name}
                                        {...register('name', {
                                            onChange: (e) => setName(e.target.value),
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center w-full max-h-[2rem] lg:max-h-[1.5rem]">
                                {errors.name && <InputError errorMessage={errors.name.message} />}
                            </div>
                            <div className="px-5 py-1">
                                <label htmlFor="userEmail">Email:</label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        name="userEmail"
                                        placeholder="Your email"
                                        className="w-full px-2 py-1.5 bg-white rounded-md"
                                        value={email}
                                        {...register('email', {
                                            onChange: (e) => setEmail(e.target.value),
                                        })}
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center w-full max-h-[2rem] lg:max-h-[1.5rem]">
                                {errors.email && <InputError errorMessage={errors.email.message} />}
                            </div>
                            <div className="px-5 py-1.5">
                                <label htmlFor="userPassword">Password:</label>
                                <div className="flex justify-center mt-1 ">
                                    <input
                                        type="password"
                                        name="userPassword"
                                        placeholder="Your password"
                                        className="w-full px-2 py-1.5 bg-white rounded-md"
                                        value={password}
                                        {...register('password', {
                                            onChange: (e) => setPassword(e.target.value),
                                        })}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center w-full max-h-[2rem] lg:max-h-[1.5rem]">
                                {errors.password && (
                                    <InputError errorMessage={errors.password.message} />
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-center w-full mt-2">
                                Password must at least contain:
                                <ul className="list-disc">
                                    <li
                                        className={`${
                                            /(?=.*?[A-Z])/.test(password)
                                                ? 'marker:text-green-500'
                                                : 'marker:text-black'
                                        } transition duration-200`}
                                    >
                                        One uppercase letter.
                                    </li>
                                    <li
                                        className={`${
                                            /(?=.*?[a-z])/.test(password)
                                                ? 'marker:text-green-500'
                                                : 'marker:text-black'
                                        } transition duration-200`}
                                    >
                                        One lowercase letter.
                                    </li>
                                    <li
                                        className={`${
                                            /(?=.*?[0-9])/.test(password)
                                                ? 'marker:text-green-500'
                                                : 'marker:text-black'
                                        } transition duration-200`}
                                    >
                                        One number.
                                    </li>
                                    <li
                                        className={`${
                                            /(?=.*?[#?!@$%^&*-])/.test(password)
                                                ? 'marker:text-green-500'
                                                : 'marker:text-black'
                                        } transition duration-200`}
                                    >
                                        One special character.
                                    </li>
                                    <li
                                        className={`${
                                            /.{8,}/.test(password)
                                                ? 'marker:text-green-500'
                                                : 'marker:text-black'
                                        } transition duration-700`}
                                    >
                                        Eight characters or more.
                                    </li>
                                </ul>
                            </div>

                            <div className="flex justify-center px-5 mt-5 mb-4">
                                <button
                                    type="submit"
                                    className="w-5/6 px-2 py-2 text-white bg-gray-800 rounded-md disabled:cursor-not-allowed disabled:opacity-60"
                                    disabled={isSubmitting ? true : false}
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SignupModal;
