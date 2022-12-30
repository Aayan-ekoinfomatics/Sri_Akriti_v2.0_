import React from 'react'

const Footer = () => {
  return (
    <>
      {/* desktop view */}
      <div className='w-full hidden md:flex flex-col items-center pt-10'>
        <div className='text-md lora pb-6 w-full text-center tracking-[0.1em]' >Subscribe now to our newsletter for more news</div>
        <div className='p-4 pb-10 w-[60%] lg:w-[40%] flex justify-center'>
          <input type="text" placeholder='Email' className='px-6 py-3 pl-8 text-[21px] tracking-[0.02em] w-full placeholder:text-[#acacaca2] outline-none border poppins' />
          <div className='bg-black text-white poppins text-md lg:text-[20px] font-light tracking-[0.4em] flex justify-center items-center cursor-pointer px-6 pl-8 lg:px-8 lg:pl-10'>
            SUBMIT
          </div>
        </div>
        <div className='flex w-full justify-center items-center gap-14 py-5'>
          <h1 className='tracking-[0.4em] lora text-[19px]' >INSTAGRAM</h1>
          <h1 className='tracking-[0.4em] lora text-[19px]' >FACEBOOK</h1>
        </div>
        <div className='w-full font-golden_signature text-[130px] pt-2 pb-4 text-[#3EDCFF] flex justify-center items-center'>Find us at</div>
        <div className='w-full flex justify-center items-center gap-12 pb-16'>
          <h1 className='tracking-[0.3em] text-[15px] lora py-6' >SHIPPING</h1>
          <h1 className='tracking-[0.3em] text-[15px] lora py-6' >PAYMENT METHODS</h1>
          <h1 className='tracking-[0.3em] text-[15px] lora py-6' >RETURNS</h1>
          <h1 className='tracking-[0.3em] text-[15px] lora py-6' >TERMS & CONDITIONS</h1>
          <h1 className='tracking-[0.3em] text-[15px] lora py-6' >FAQ's</h1>
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
        <div className='flex w-full justify-center items-center gap-7 sm:gap-14 py-5 pb-10'>
          <h1 className='tracking-[0.4em] lora' >INSTAGRAM</h1>
          <h1 className='tracking-[0.4em] lora' >FACEBOOK</h1>
        </div>
        <div className='text-center'>
          <h1 className='tracking-[0.4em] lora py-6' >SHIPPING</h1>
          <h1 className='tracking-[0.4em] lora py-6' >PAYMENT METHODS</h1>
          <h1 className='tracking-[0.4em] lora py-6' >RETURNS</h1>
          <h1 className='tracking-[0.4em] lora py-6' >TERMS & CONDITIONS</h1>
          <h1 className='tracking-[0.4em] lora py-6' >FAQ's</h1>
          <h1 className='tracking-[0.4em] lora py-6 text-[8px]' >@2022 Sri AAKRITI . ALL RIGHTS RESERVED | DEVELOPED BY</h1>
        </div>
        <div></div>
      </div>
    </>
  )
}

export default Footer