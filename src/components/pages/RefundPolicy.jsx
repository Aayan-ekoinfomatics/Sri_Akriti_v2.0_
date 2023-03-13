import React from 'react'
import refundPolicyApi from '../../mockapi/refundPolicyApi'
import PageBackButton from '../global components/PageBackButton'

const RefundPolicy = () => {
    return (
        <div className='w-full pb-[100px]'>
            <PageBackButton />

            <div className='w-full'>
                {/* header */}
                <div className='w-full flex justify-center items-center text-center mt-5 md:mt-0'>
                    <h1 className='text-[20px] md:text-[26px] font-[600]'>Refund Policy</h1>
                </div>

                {/* body */}
                <div className='mt-16 w-[90%] md:w-[75%] mx-auto'>
                    {/* <div className='w-full flex justify-center items-center'>
                        <h1 className='text-[16px]'>These terms and conditions apply to the Sri Aakriti Jewels Web site located at www.---------, </h1>
                    </div>
                    <div className='w-full flex justify-center items-center mt-8'>
                        <h1 className='text-[14px]'>Please read these terms and conditions (the 'Terms and Conditions') carefully. <span className='font-[500]'>BY USING THE SITE OR PLACING AN ORDER ON THE PHONE/EMAIL/ONLINE YOU AGREE TO BE BOUND BY THESE TERMS AND CONDITIONS.</span></h1>
                    </div>
                    <div className='w-full flex justify-center items-center mt-5'>
                        <h1 className='text-[14px]'>These Terms and Conditions govern your use of, and any purchase from, the Sri Aakriti Jewels Site, and constitute an agreement between you and Sri Aakriti Jewels reserves the right to change or modify any of these Terms and Conditions or any policy or guideline of the Site at any time, and in its sole discretion. Any change or modification will be effective immediately upon posting of the revisions on the Site. Your continued use of the Site following the posting of its changes or modifications will constitute your acceptance of such changes or modifications. Therefore, you should frequently review these Terms and Conditions and any other applicable policies from time-to-time to understand the terms and conditions that apply to your use of the Site. If you do not agree to the amended terms, you must stop using the Site.</h1>
                    </div> */}
                    <div className='w-full mt-10'>
                        {
                            refundPolicyApi?.policies?.map((data, i) => (
                                <div className='w-full mb-4'>
                                    <div className='w-full'>
                                        <div className='w-full flex justify-start gap-2 items-start'>
                                        <span>●</span> <p className='text-[13px] pt-1'>{data?.title}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className='w-full mt-16'>
                        <p className='text-[13px]'>If you have any questions, please do not hesitate to contact Sri Aakriti Jewels at sriaakritijewels@gmail.com, +91-9829109149. These Terms and Conditions do not apply to content not covered in User Content provided by other companies, 3rd party services or individuals, to Sri Aakriti Jewels. Terms and Conditions updated on January 1, 2023.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RefundPolicy