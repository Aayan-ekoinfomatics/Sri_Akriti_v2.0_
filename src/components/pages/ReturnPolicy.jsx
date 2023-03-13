import React from 'react'
import returnPolicyApi from '../../mockapi/returnPolicyApi'
import PageBackButton from '../global components/PageBackButton'

const ReturnPolicy = () => {
    return (
        <div className='w-full mb-[100px]'>
            <PageBackButton />

            {/* header */}
            <div className='w-full flex justify-center items-center text-center mt-5 md:mt-0'>
                <h1 className='text-[18px] px-1 sm:px-0 md:text-[26px] font-[600]'>30 Days Online Return & Exchange Policy</h1>
            </div>


            {/* body */}
            <div className='w-[90%] md:w-[75%] mx-auto mt-10 md:mt-20'>
                <h1 className='text-[16px] '>The following return policy holds true for products ordered online at the Sri Aakriti Jewels Website only, for customers shopping from within India.</h1>
                <p className='text-[16px] '><span className='font-[500]'>Sri Aakriti</span> strives to achieve 100% customer satisfaction. We understand that it is difficult to buy Jewelry without seeing & feeling it, hence in line with our commitment to customer satisfaction, we provide a convenient return policy.</p>
                <ul className='w-full px-5 mt-10 list-disc'>
                    {
                        returnPolicyApi?.policies?.map((data, i) => (
                            <li className=' mb-5' key={i}>
                                <p className='text-[15px]'>{data?.text}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default ReturnPolicy