import React from 'react'
import left_arrow from '../../assets/icons/black-arrow-left.svg'

const ContactUs = () => {
  return (
    <div className='w-full md:pt-28'>
        <div className='inline-block md:hidden pt-4'>
            <img src={left_arrow} className='w-[30px]' />
        </div>
        <h1 className='lora text-[20px] md:text-[30px] font-[500] italic text-center py-2 my-2'>Contact Us</h1>
        <h1 className='lora w-[90%] mx-auto text-[10px] md:text-[12px] text-center py-2 mb-10'>Leave your message here and we will reply to you shortly</h1>
        <form className='w-[90%] max-w-[500px] mx-auto pb-10 mb-20'>
            <div className='md:flex gap-5'>
                <div className='w-full flex flex-col py-2' >
                    <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]'>First Name</label>
                    <input type="text" className='p-1' />
                </div>
                <div className='w-full flex flex-col py-2' >
                    <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]'>Last Name</label>
                    <input type="text" className='p-1' />
                </div>
            </div>
            <div className='w-full flex flex-col py-2' >
                <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]'>Email ID</label>
                <input type="text" className='p-1' />
            </div>
            <div className='w-full flex flex-col py-2' >
                <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]'>Phone Number</label>
                <input type="text" className='p-1' />
            </div>
            <div className='w-full flex flex-col py-2' >
                <label className='text-[13px] poppins pl-1 my-2 tracking-[1px]'>Message</label>
                <textarea type="text" cols={20} rows={7} className=''></textarea>
            </div>
            <div className='w-full flex justify-center items-center py-2 my-5' >
                <button className='bg-black w-full md:w-[55%] text-white poppins text-[14px] tracking-[5px] font-[300] py-4 md:py-5 md:px-9' >SUBMIT</button>
            </div>
        </form>
    </div>
  )
}

export default ContactUs