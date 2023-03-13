import React from 'react'
import PageBackButton from '../global components/PageBackButton'

const DeliveryPolicy = () => {
    return (
        <div className='w-full mb-[100px]'>
            <PageBackButton />
            <div className='w-full flex justify-center items-center text-center mt-5 md:mt-0'>
                <h1 className='text-[18px] md:text-[26px] font-[600]'>Delivering Your Jewelry Safely</h1>
            </div>
            <div className='w-[90%] md:w-[75%] mx-auto mt-10 md:mt-16 text-gray-900'>
                <h1 className='text-[15px] font-[500]'>Your Jewelry is valuable, it is cared for well!</h1>
                <div className='w-full mt-5'>
                    <p className='text-[13px]'>We ship your gems or Jewelry only via insured valuable shipping services. The default shipping methods are based on value & where you are located in India Sri Aakriti ships using 100% insured trade logistics services for customer located in India. Please refer below for default shipping methods. You can upgrade the shipping method while purchase if you feel that is required. Please note, we do not charge extra for default shipping methods.</p>
                    <p className='text-[13px] font-[500]'>Please note, we only ship Jewelry that you order from us. We do not offer courier services.</p>
                </div>
                <div className='w-full mt-5'>
                    <h1 className='text-[15px] font-[500]'>All products are insured against loss while shipping.</h1>
                    <div className='w-full mt-5'>
                        <p className='text-[13px]'>The default shipping methods are :</p>
                        <ul className='list-disc px-5'>
                            <div>
                                <li className='text-[14px] font-[500]'>Domestic Shipping (Within India)</li>
                                <p className='text-[14px]'>All products with delivery address within India are sent via 100% insured trade parcel or Registered Post or insured Jewelry logistics services. They may take upto 2-3 working days to reach you after dispatch.</p>
                            </div>
                            <div>
                                <li className='text-[14px] font-[500]'>In-store pickup</li>
                                <p className='text-[14px]'>o	You can also choose to pickup the gems/Jewelry from our office in Jaipur. Please call us at +91-9829109149 to schedule a pick-up. Click here to view our boutique location.</p>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryPolicy