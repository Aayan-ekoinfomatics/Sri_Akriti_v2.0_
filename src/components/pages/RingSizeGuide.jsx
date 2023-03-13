import React from 'react'
import { useNavigate } from 'react-router-dom'
import ring_size_guide from '../../mockapi/ringSizeGuideApi'
import PageBackButton from '../global components/PageBackButton'

const RingSizeGuide = () => {



    return (
        <div className='w-full mb-[20px]'>

            {/* back */}
            <PageBackButton />

            {/* header */}
            <div className='w-full flex justify-center items-center mt-[60px]'>
                <div className='w-full max-w-[250px] flex flex-col justify-center items-center'>
                    <h1 className='text-[20px] font-[300] '>International Ring Size Guide</h1>
                    <h1 className='text-[26px] font-[500] '>Sri Aakriti Jewels</h1>
                </div>
            </div>

            {/* table */}
            <div className='w-[60%] mx-auto mt-[60px] mb-[80px]'>

                {/* table data */}
                <div className='w-full'>
                    {/* table headers */}
                    <div className='w-full flex justify-start items-center  border-[#acacac] bg-gray-200'>
                        {
                            ring_size_guide?.headers?.map((data, i) => (
                                <div key={i} className='w-full py-5 flex justify-center items-center'>
                                    <h1 className='text-[15px] text-gray-500 font-[500]'>{data?.title}</h1>
                                </div>
                            ))
                        }
                    </div>

                    {/* table body */}
                    <div className='w-full border-b border-l border-r border-[#dfdfdf]'>
                        {
                            ring_size_guide?.sizes?.map((data, i) => (
                                <div key={i} className='w-full flex justify-start items-center border-b border-[#dfdfdf]'>
                                    <div className='w-full py-3 flex justify-center items-center'>
                                        <h1 className='text-[16px] text-gray-700'>{data?.circumference}</h1>
                                    </div>
                                    <div className='w-full py-3 flex justify-center items-center'>
                                        <h1 className='text-[16px] text-gray-700'>{data?.indian_size}</h1>
                                    </div>
                                    <div className='w-full py-3 flex justify-center items-center'>
                                        <h1 className='text-[16px] text-gray-700'>{data?.us_canada_size}</h1>
                                    </div>
                                    <div className='w-full py-3 flex justify-center items-center'>
                                        <h1 className='text-[16px] text-gray-700'>{data?.uk_australia_size}</h1>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center items-center'>
                <h1 className='text-[14px]'>For assistance, please email us at <span className='italic underline cursor-pointer' href="#">sriaakritijewels@gmail.com</span> or call +91 9829109149 </h1>
            </div>
        </div>
    )
}

export default RingSizeGuide