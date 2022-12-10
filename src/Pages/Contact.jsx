import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();

        emailjs.sendForm('service_cd5ut2e', 'template_4ycc5qa', form.current, 'kkw98G7NNsCgiMD92')
            .then((result) => {
                form.current.reset();
                setLoading(false);
                toast.success("Message had been sent!");
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div id='contact' className='py-20'>
            <div className='ml-16'>
                <div className='w-20 h-1 bg-white mb-5 rounded-full'></div>
                <h1 className='text-5xl font-medium'>Contact Me</h1>
                <p className='text-2xl mt-5'>I would love to hear from you!</p>
            </div>
            <div className='w-10/12 mx-auto '>
                <form ref={form} onSubmit={sendEmail} className='md:w-8/12 lg:w-6/12 mx-auto mt-12'>
                    <div className="mb-6">
                        <input type="text" name='name' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Name' required />
                    </div>
                    <div className="mb-6">
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                    </div>
                    <div className="mb-6">
                        <textarea name="message" id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex items-center gap-2 justify-center" disabled={loading ? true : false}>{loading ? <>Loading...<Spinner /></> : 'Submit'}</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;