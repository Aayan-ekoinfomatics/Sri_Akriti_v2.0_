import React from 'react'
import fifth_section_mobile from '../../assets/images/fifth-section-mobile.png'
import fifth_section_desktop from '../../assets/images/fifth-section-desktop.png'
import fifth_section from '../../mockapi/landingFifthSectionApi'

const FifthSection = () => {
  return (
    <>
    {/* desktop view */}
    <div className='hidden md:flex h-[90vh]'>
        <div className={`w-[55%] bg-no-repeat bg-cover`} style={{backgroundImage: `url(${fifth_section?.section_data?.section_image})`}}>
        </div>
        <div className='w-[45%] bg-[#3edcff5d] flex justify-center items-center' >
            <div className=' flex flex-col items-end pt-16 lg:pt-24 pr-5 pl-10 lg:pl-14'>
                <h1 className='py-1 poppins font-semibold text-[45px] lg:text-[65px] text-[#313131] tracking-wide'>Lorem ipsum dolor</h1>
                <p className='py-1 poppins text-[200] text-[#313131] text-[40px] tracking-wide font-[400]'>Lorem ipsum.</p>
                <p className='py-1 poppins font-extralight text-[35px] leading-wide text-[#302f2f93] pb-14'>Lorem .</p>
                {/* <button className='bg-black text-white p-8 px-24 poppins font-[300] text-[18px] tracking-[6px]'>
                    READ MORE
                </button> */}
            </div>
        </div>
    </div>

    {/* mobile view */}
    <div className='block w-full md:hidden py-8'>
        <img src={fifth_section?.section_data?.section_image} className="w-full" />
        {/* <div className='w-full text-center bg-[#3edcff5d] pt-4'>
            <h1 className='py-4 poppins font-semibold text-[30px] text-[#313131]'>Highly Skilled Labour</h1>
            <p className='py-3 poppins text-[200] text-[#313131] text-[24px]'>Higher Density</p>
            <p className='py-2 poppins font-extralight text-[15px]'>PURITY</p>
            <div className='py-4'>
                <button className='bg-black text-white poppins font-[300] text-[13px] tracking-[5px] p-5 px-7'>
                    READ MORE
                </button>
            </div>
        </div> */}
    </div>
    </>
  )
}

export default FifthSection