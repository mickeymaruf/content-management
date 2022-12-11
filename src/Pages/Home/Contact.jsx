import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import Spinner from '../../components/Spinner';

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
        <div id='contact' className='w-10/12 mx-auto py-20'>
            <div className='w-20 h-1 bg-white mb-5 rounded-full'></div>
            <h1 className='text-5xl font-medium'>Contact Me</h1>
            <p className='text-2xl mt-5'>I would love to hear from you!</p>
            <form ref={form} onSubmit={sendEmail} className='md:w-8/12 lg:w-6/12 mx-auto mt-12'>
                <div className="mb-6">
                    <input type="text" name='name' id="password" className="border outline-none text-sm block w-full p-2.5 bg-gray-700 border-gray-600" placeholder='Name' required />
                </div>
                <div className="mb-6">
                    <input type="email" name="email" id="email" className="border outline-none text-sm block w-full p-2.5 bg-gray-700 border-gray-600" placeholder="Email" required />
                </div>
                <div className="mb-6">
                    <textarea name="message" id="message" rows="4" className="block outline-none p-2.5 w-full border text-sm bg-gray-700 border-gray-600" placeholder="Leave a message..."></textarea>
                </div>
                <button type="submit" className="btn bg-gray-600 flex items-center gap-2 justify-center" disabled={loading ? true : false}>{loading ? <>Loading...<Spinner /></> : 'Submit'}</button>
            </form>
        </div>
    );
};

export default Contact;