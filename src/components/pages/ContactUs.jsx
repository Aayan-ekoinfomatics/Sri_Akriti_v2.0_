import React, { useRef } from 'react'
import left_arrow from '../../assets/icons/black-arrow-left.svg'
import PageBackButton from '../global components/PageBackButton'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';

const ContactUs = () => {

    const contactForm = useRef();


    return (
        <div className='w-full '>
            <PageBackButton />

            {/* header */}
            <div className='w-full'>
                <h1 className='lora text-[20px] md:text-[30px] font-[500] italic text-center'>Contact Us</h1>
            </div>

            {/* form */}
            <div className='w-full'>
                <h1 className='lora w-[90%] mx-auto text-[10px] md:text-[12px] text-center py-2 mt-[100px]'>Leave your message here and we will reply to you shortly</h1>
                <form ref={contactForm} className='w-[90%] max-w-[500px] mx-auto pb-10 mb-20' 
                onSubmit={(e) => {
                    e.preventDefault();
                    emailjs
                        .sendForm(
                            "service_4wfbxpe",
                            "template_2xpqk9h",
                            contactForm.current,
                            "oCm5E5P2Ui9oETuAj"
                        )
                        .then(
                            (result) => {
                                console.log("form send", result);
                                // alert("Details submitted successfully!");
                                toast.success('Details submitted successfully!', {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    // draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                })
                            },
                            (error) => {
                                console.log("form error", error);
                                alert("Something went wrong, please submit again.");
                                toast.error('Something went wrong, please submit again.', {
                                    position: "top-right",
                                    autoClose: 2000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    // draggable: true,
                                    progress: undefined,
                                    theme: "light",
                                })
                            }
                        );
                }}>
                    <div className='md:flex gap-5'>
                        <div className='w-full flex flex-col py-2' >
                            <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]' htmlFor='first_name'>First Name</label>
                            <input type="text" name='first_name' className='p-1' />
                        </div>
                        <div className='w-full flex flex-col py-2' >
                            <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]' htmlFor='last_name'>Last Name</label>
                            <input type="text" name='last_name' className='p-1' />
                        </div>
                    </div>
                    <div className='w-full flex flex-col py-2' >
                        <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]' htmlFor='email'>Email ID</label>
                        <input type="text" className='p-1' name='email' />
                    </div>
                    <div className='w-full flex flex-col py-2' >
                        <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]' htmlFor='phone_number'>Phone Number</label>
                        <input type="text" name='phone_number' className='p-1' />
                    </div>
                    <div className='w-full flex flex-col py-2' >
                        <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]' htmlFor='message'>Message</label>
                        <textarea type="text" cols={20} rows={7} className='p-1' name='message'></textarea>
                    </div>
                    <div className='w-full flex justify-center items-center py-2 mt-5' >
                        <button className='bg-black w-full md:w-[55%] text-white poppins text-[15px] transition-all duration-300 active:scale-[0.95] active:bg-[#2c2c2c] tracking-[5px] font-[300] py-4 md:px-8' >SUBMIT</button>
                    </div>
                </form>
            </div>

            {/* content */}
            <div className='w-full md:mt-10 md:px-[250px]'>
                <div className='w-full flex justify-center items-center'>
                    <h1 className='text-[13px] text-center'>This website & business is operated by Sri Aakriti Jewels, Jaipur.</h1>
                </div>
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className='w-fit flex justify-start gap-3 text-center'>
                        <h1 className='text-[14px]'>Email: </h1>
                        <h1 className='text-[14px] italic underline'>sriaakritijewels@gmail.com</h1>
                    </div>
                    <div className='w-fit flex justify-start gap-3 text-center'>
                        <h1 className='text-[14px]'>Phone: </h1>
                        <h1 className='text-[14px]'>+91-9829109149 &#40;10 A.M. to 6.30 P.M., 6 days a week&#41;</h1>
                    </div>
                </div>
                <div className='md:mt-20 w-full flex flex-col justify-center items-center'>
                    <div className='w-full flex justify-center items-center mb-5'>
                        <div className='w-full text-center'>
                            <h1 className='text-[15px] text-gray-600'>Please call for a prior appointment : +91-9829109149</h1>
                            <h1 className='text-[15px] text-gray-600'>Please mention the Product SKU & your contact number in the Message</h1>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='w-fit'>
                            <h1 className='text-[15px] text-gray-800 md:py-2 text-center md:mt-10'>You can also purchase the platinum jewelry collection from our operations office at</h1>
                        </div>
                    </div>
                    <div className='w-full flex justify-center items-center'>
                        <div className='flex flex-col text-center mt-3'>
                            <h1 className='text-[14px] text-gray-800'>Sri Aakriti Jewels</h1>
                            <h1 className='text-[14px] text-gray-800'>Office No G-2, Plot No E-2,</h1>
                            <h1 className='text-[14px] text-gray-800'>Kacker Golden Enclave</h1>
                            <h1 className='text-[14px] text-gray-800'>Kanti Chandra Road, Bani Park</h1>
                            <h1 className='text-[14px] text-gray-800'>Jaipur - 302016</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs