import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputError from '../components/input/InputError';
import SuccessToast from '../components/toast/SuccessToast';
import ErrorToast from '../components/toast/ErrorToast';

/*    eslint react/jsx-curly-brace-presence: "off" */
/*    eslint no-unneeded-ternary: "off" */

function contact() {
    const [userEmail, setUserEmail] = useState('');
    const [userMessage, setUserMessage] = useState('');
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const schema = Yup.object().shape({
        userEmail: Yup.string()
            .email()
            .trim()
            .typeError('Invalid email')
            .required('Email is required'),
        userMessage: Yup.string().trim().required('Message is required'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful },
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    useEffect(() => {
        reset({ userEmail: '', userMessage: '' });
    }, [isSubmitSuccessful]);

    const submittedData = async (formData) => {
        try {
            setIsSubmitting(true);

            const res = await fetch('/api/email/send', {
                method: 'POST',
                body: JSON.stringify({
                    userEmail: formData.userEmail,
                    userMessage: formData.userMessage,
                }),
                headers: {
                    'Content-type': 'application/json',
                },
            });

            if (res.status === 200) {
                setShowSuccessToast(true);

                setTimeout(() => {
                    setShowSuccessToast(false);
                    setIsSubmitting(false);
                }, 5500);
            } else {
                setShowErrorToast(true);

                setTimeout(() => {
                    setShowErrorToast(false);
                    setIsSubmitting(false);
                }, 5500);
            }

            setUserEmail('');
            setUserMessage('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="relative ">
            <Head>
                <title>Contact us | Atlacore</title>
                <meta name="description" content="Space themed website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex flex-col items-center justify-center w-screen h-screen ">
                <div className="flex flex-col items-center justify-between w-full pt-12 bg-gray-100 md:w-11/12 mb-9">
                    <p className="text-2xl font-bold">Contact us</p>
                    <form
                        method="post"
                        className="py-5 mb-1"
                        onSubmit={handleSubmit(submittedData)}
                    >
                        <div className="flex flex-col items-center justify-between py-3 mb-5">
                            <div className="flex flex-col items-center justify-between">
                                <label htmlFor="userEmail" className="mb-2">
                                    Your email:
                                </label>
                                <input
                                    type="email"
                                    name="userEmail"
                                    id="userEmail"
                                    className={`px-2 py-1 text-center transition duration-200 bg-gray-200 ${
                                        errors.email && 'focus:outline-red-500'
                                    } rounded-md focus:bg-white`}
                                    value={userEmail}
                                    {...register('userEmail', {
                                        onChange: (e) => setUserEmail(e.target.value),
                                    })}
                                />
                            </div>
                            <div className="px-3 mt-3.5 bg-orange-200 rounded-lg">
                                {errors.userEmail && (
                                    <InputError errorMessage={errors.userEmail.message} />
                                )}
                            </div>
                            <div className="flex flex-col items-center justify-between py-2 mt-2">
                                <label htmlFor="userMessage" className="mb-1">
                                    Your message:
                                </label>
                                <textarea
                                    rows="5"
                                    id="userMessage"
                                    className={`px-2.5 py-1 transition duration-200 my-2 bg-gray-200 ${
                                        errors.userMessage && 'focus:outline-red-500'
                                    } rounded-md resize-none focus:bg-white w-64 sm:w-72 md:w-80 lg:w-[22rem]`}
                                    name="userMessage"
                                    maxLength={350}
                                    value={userMessage}
                                    {...register('userMessage', {
                                        onChange: (e) => setUserMessage(e.target.value),
                                    })}
                                />
                            </div>
                            <div className="px-3 bg-orange-200 rounded-lg">
                                {errors.userMessage && (
                                    <InputError errorMessage={errors.userMessage.message} />
                                )}
                            </div>
                            <button
                                type="submit"
                                className="px-10 py-1 mt-5 text-white bg-green-300 rounded-md cursor-pointer hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-60"
                                disabled={isSubmitting ? true : false}
                            >
                                Send
                            </button>
                        </div>
                    </form>
                    {showSuccessToast && (
                        <SuccessToast successMessage={'Your message has been successfully sent!'} />
                    )}
                    {showErrorToast && (
                        <ErrorToast errorMessage={'An error occured, please try again later!'} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default contact;
