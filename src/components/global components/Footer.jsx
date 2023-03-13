import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      {/* desktop view */}
      <div className='w-full hidden md:flex flex-col bg-gray-200 items-center pt-10'>
        <div className='text-md lora pb-6 w-full text-center tracking-[0.1em]' >Subscribe now to our newsletter for more news</div>
        <div className='p-4 pb-10 w-[60%] lg:w-[40%] flex justify-center'>
          <input type="text" placeholder='Email' className='px-6 py-[11px] pl-6 text-[18px] tracking-[0.02em] w-full placeholder:text-[#acacaca2] outline-none border poppins' />
          <div className='bg-black text-white poppins text-md text-[18px] font-light tracking-[0.4em] flex justify-center items-center cursor-pointer px-6 pl-8 lg:px-8 lg:pl-10'>
            SUBMIT
          </div>
        </div>
        <div>

        </div>
        {/* <div className='tracking-[0.4em] lora text-[18px] flex w-full justify-center items-center gap-14 py-5'>
          <h1 className='' >INSTAGRAM</h1>
          <h1 className='' >FACEBOOK</h1>
        </div> */}
        <div className='w-full font-golden_signature text-[130px] pt-2 pb-4 text-[#3EDCFF] flex justify-center items-center'>Find us at</div>
        <div className='tracking-[0.3em] text-[15px] lora w-full flex justify-center items-center gap-12 pb-16'>
          <Link to='/ring-size-guide'><h1 className='py-6' >RING SIZE GUIDE</h1></Link>
          <Link to='/refund-policy'><h1 className='py-6' >REFUNDS</h1></Link>
          <Link to='/return-policy'><h1 className='py-6' >RETURNS</h1></Link>
          <Link to='/delivery-policy'><h1 className='py-6' >DELIVERY POLICY</h1></Link>
          <Link to='/terms_&_conditions'><h1 className='py-6' >TERMS & CONDITIONS</h1></Link>
          <Link to='/faq'><h1 className='py-6' >FAQ's</h1></Link>
        </div>
        <div className='w-full flex justify-center items-center'><h1 className='tracking-[0.4em] lora pt-6 pb-2 text-[15px]' >@2022 Sri AAKRITI . ALL RIGHTS RESERVED | DEVELOPED BY</h1></div>
      </div>

      {/* mobile view */}
      <div className='w-[98%] mx-auto md:hidden flex flex-col items-center'>
        <div className='text-xs lora pb-4 w-full text-center tracking-[0.2em]' >Subscribe now to our newsletter for more news</div>
        <div className='p-2 w-[95%] flex justify-center'>
          <input type="text" placeholder='Email' className='p-2 pl-4 w-full placeholder:text-gray-400 outline-none border' />
          <div className='bg-black text-white poppins text-md font-extralight tracking-[0.4em] flex justify-center items-center cursor-pointer pl-4 px-2'>
            SUBMIT
          </div>
        </div>
        <div className='w-full font-golden_signature text-[70px] text-[#41C5BE] flex justify-center items-center py-3 pt-6'>Find us at</div>
        {/* <div className='flex w-full justify-center items-center gap-7 sm:gap-14 py-5 pb-10'>
          <h1 className='tracking-[0.4em] lora' >INSTAGRAM</h1>
          <h1 className='tracking-[0.4em] lora' >FACEBOOK</h1>
        </div> */}
        <div className='text-center'>
          <Link to='/ring-size-guide'><h1 className='py-6 lora' >RING SIZE GUIDE</h1></Link>
          <Link to='/refund-policy'><h1 className='py-6 lora' >REFUNDS</h1></Link>
          <Link to='/return-policy'><h1 className='py-6 lora' >RETURNS</h1></Link>
          <Link to='/delivery-policy'><h1 className='py-6 lora' >DELIVERY POLICY</h1></Link>
          <Link to='/terms_&_conditions'><h1 className='py-6 lora' >TERMS & CONDITIONS</h1></Link>
          <Link to='/faq'><h1 className='py-6' >FAQ's</h1></Link>
          <h1 className='tracking-[0.4em] lora py-4 text-[8px]' >@2022 Sri AAKRITI . ALL RIGHTS RESERVED | DEVELOPED BY</h1>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Footer