import React from 'react'
import checkout from '../../mockapi/checkoutPageApi'

const Checkout = () => {
  return (
    <div className='w-full pt-8 pb-16 bg-[#eeeeee]'>
        <div className='w-[90%] mx-auto text-center poppins flex gap-2 text-[11px] md:text-[12px] md:pb-10'>
        <h1 className='tracking-[2px] font-[500]'>{checkout?.path?.first}</h1>
        <h1 className='tracking-[2px] font-[300]'>{checkout?.path?.second}</h1>
        <h1 className='tracking-[2px] font-[300]'>{checkout?.path?.third}</h1>
        </div>

        {/* main flex */}
        <div className='w-[90%] mx-auto md:flex md:gap-2 '>
            {/* flex child 1 */}
            <div className='my-2 w-full md:w-[65%] md:border-r md:border-r-black md:pr-3'>
                {/* flex child 1.1 */}
                <div className=' my-2 flex flex-col items-center max-w-[700px] mx-auto'>

                    {/* address form */}
                    <div className='w-full py-3 mb-6'>
                        <div className='w-full flex justify-between my-2'>
                            <h1 className='lora text-[15px] font-[500]'>{checkout?.form?.header?.heading}</h1>
                            <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.form?.header?.sub_heading}</p>
                        </div>
                        <form className='w-full md:grid grid-cols-2 gap-2'>
                            {
                                checkout?.form?.content?.map((data, i) => (
                                <div className='w-full flex flex-col justify-start' key={i}>
                                    <label className='poppins text-[12px]' >{data?.label}</label>
                                    <input type={data?.input} />
                                </div>
                                ))
                            }
                        </form>
                    </div>

                    {/* address card */}
                    <div className='w-full py-3 mb-6'>
                        <div className='w-full flex justify-between my-2'>
                            <h1 className='lora text-[15px] font-[500]'>{checkout?.address?.header?.heading}</h1>
                            <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.address?.header?.sub_heading}</p>
                        </div>
                        {
                            checkout?.address?.content?.map((data, i) => (
                                <div className='flex flex-col justify-start text-[12px]' key={i}>
                                    <p className='poppins text-[11px] tracking-[2px]' >{data?.locality}</p>
                                    <p className='poppins text-[11px] tracking-[2px]' >{data?.city}</p>
                                    <p className='poppins text-[11px] tracking-[2px]' >{data?.pincode}</p>
                                </div>
                            ))
                        }
                    </div>

                    {/* card */}
                    <div className='w-full py-3 mb-6'>
                        <div className='w-full flex justify-between my-2'>
                            <h1 className='lora text-[15px] font-[500]'>{checkout?.card?.header?.heading}</h1>
                            <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.card?.header?.sub_heading}</p>
                        </div>
                        {
                            checkout?.card?.content?.map((data, i) => (
                                <div className='flex justify-between text-[12px]' key={i}>
                                    <div>
                                        <p className='poppins text-[11px] tracking-[2px]' >{data?.number}</p>
                                        <p className='poppins text-[11px] tracking-[2px]' >{data?.name}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='poppins text-[11px] tracking-[2px]' >{data?.cvv}</p>
                                        <p className='poppins text-[11px] tracking-[2px]' >{data?.expiry}</p>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                </div>

                {/* flex child 1.2 */}
                <div className=' my-2 flex justify-center items-center max-w-[700px] mx-auto'>

                    {/* item details */}
                    <div className='w-full py-3 mb-6 '>
                        <div className='w-full flex justify-between my-2'>
                            <h1 className='lora text-[15px] font-[500]'>{checkout?.item?.header?.heading}</h1>
                            <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.item?.header?.sub_heading}</p>
                        </div>
                        <div className='max-h-[150px] overflow-y-scroll'>
                        {
                            checkout?.item?.content?.map((data, i) => (
                                <div className='w-[98%] mx-auto flex justify-between text-[12px] py-2 gap-3 border-b border-b-[#69696927]' key={i}>
                                    <div className='w-[90px]'>
                                        <img src={data?.image} className="w-full" />
                                    </div>
                                    <div className='w-full flex flex-col justify-start'>
                                        <h1 className='lora text-[14px] font-[500]'>{data?.title}</h1>
                                        <p className='poppins text-[11px] tracking-[2px]'>ID: {data?.id}</p>
                                        <div className='w-full flex justify-end'>
                                            <p className='poppins text-[11px] tracking-[2px]'>Rs {data?.price}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            </div>

            {/* flex child 2 */}
            <div className='my-2 w-full md:w-[45%] border-t border-t-black md:border-t-0'>
                {/* address card */}
                <div className='md:mt-16 w-full md:w-[60%] md:ml-auto mr-10'>
                    <div className='w-full flex justify-between my-3 md:my-5'>
                        <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkout?.checkout_data?.coupon?.title}</h1>
                        <p className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkout?.checkout_data?.coupon?.button}</p>
                    </div>
                    <div className='w-full flex justify-between my-3 md:my-5'>
                        <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkout?.checkout_data?.packaging?.title}</h1>
                        <p className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkout?.checkout_data?.packaging?.button}</p>
                    </div>
                    <div className='w-full flex justify-between my-3 md:my-5'>
                        <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkout?.checkout_data?.sub_total?.title}</h1>
                        <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkout?.checkout_data?.sub_total?.amount}</p>
                    </div>
                    <div className='w-full flex justify-between my-3 md:my-5'>
                        <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkout?.checkout_data?.shipping?.title}</h1>
                        <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkout?.checkout_data?.shipping?.charges}</p>
                    </div>
                    <div className='w-full flex justify-between my-3 md:my-5'>
                        <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkout?.checkout_data?.tax?.title}</h1>
                        <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkout?.checkout_data?.tax?.amount}</p>
                    </div>
                    <div className='w-full flex justify-between my-3 md:my-5'>
                        <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkout?.checkout_data?.total?.title}</h1>
                        <p className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkout?.checkout_data?.total?.amount}</p>
                    </div>
                    <div className='w-full flex justify-center items-center my-3 md:my-5'>
                        <button className='bg-black text-white p-4 px-14 text-[13px] font-[300] tracking-[3px] md:w-full'>{checkout?.checkout_data?.checkout_button}</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout