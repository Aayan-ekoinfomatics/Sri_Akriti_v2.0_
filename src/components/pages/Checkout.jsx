import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import checkout from '../../mockapi/checkoutPageApi'


const Checkout = () => {

    const [checkoutData, setCheckoutData] = useState();

    useEffect(() => {
        let formData = new FormData
        formData?.append("token", localStorage.getItem("token"))
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'checkout', formData).then((response) => {
            // console.log(response?.data)
            setCheckoutData(response?.data)
        })
    }, []);

    // useEffect(() => {
    //   console.log(checkoutData)
    // }, [checkoutData])



    return (
        <div className='w-full pt-8 pb-10 bg-[#eeeeee]'>

            {/* main flex */}
            <div className='w-[80%] mx-auto md:flex pt-14 mb-10'>
                {/* flex child 1 */}
                <div className='my-2 w-full md:w-[65%] md:border-r md:border-r-black md:pr-3'>
                    {/* flex child 1.1 */}
                    <div className=' my-2 flex flex-col items-center max-w-[700px] mx-auto'>

                        {/* address form */}
                        <div className='w-full py-3 mb-6'>
                            <div className='w-full flex justify-between my-2 mb-5'>
                                <h1 className='lora text-[15px] font-[500]'>{checkoutData?.form?.header?.heading}</h1>
                                {/* <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.form?.header?.sub_heading}</p> */}
                            </div>
                            <div className='w-full  gap-2'>
                                {/* {
                                    checkoutData?.form?.content?.map((data, i) => (
                                        <div className='w-full flex flex-col justify-start' key={i}>
                                            <label className='poppins text-[12px]' >{data?.label}</label>
                                            <input type='text' defaultValue={data?.value} className='px-2 outline-none py-1 text-[14px]' />
                                        </div>
                                    ))
                                } */}

                                {
                                    checkoutData?.form?.content?.map((data, i) => (
                                        <div className={`flex items-center justify-start my-1 ${data?.label === 'Phone Code' ? 'w-fit ' : 'w-full'}`} key={i}>
                                            <h1 className='poppins text-[12px]' >{data?.label}</h1>
                                            <p className='px-2 outline-none text-[15px]'>{data?.value}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>

                        {/* address card */}
                        <div className='w-full py-3 mb-6'>
                            <div className='w-full flex justify-between my-2'>
                                <h1 className='lora text-[15px] font-[500]'>{checkout?.address?.header?.heading}</h1>
                                <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.address?.header?.sub_heading}</p>
                            </div>
                            <div className=' w-full max-h-[150px] overflow-y-scroll'>
                                {
                                    checkoutData?.address?.content?.map((data, i) => {
                                        return (
                                            <div key={i} className='flex w-full justify-between border-b border-b-[#69696927] pt-1 px-2 pb-3 my-3'>
                                                <div className='flex flex-col justify-start text-[12px]' key={i}>
                                                    <p className='poppins text-[11px] tracking-[2px]' >{data?.locality}</p>
                                                    <p className='poppins text-[11px] tracking-[2px]' >{data?.city}</p>
                                                    <p className='poppins text-[11px] tracking-[2px]' >{data?.pincode}</p>
                                                </div>
                                                {/* <div className='flex justify-between items-center gap-3'>
                                                    <div className={`inline w-[12px] h-[12px] rounded-[50%] border-2 border-[#69696975] bg-white `} ></div>
                                                    <p className='poppins text-[11px] tracking-[2px] cursor-pointer'>{data?.select}select</p>
                                                </div> */}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        {/* card */}
                        {/* <div className='w-full py-3 mb-6'>
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
                    </div> */}
                    </div>

                    {/* flex child 1.2 */}
                    <div className=' my-2 flex justify-center items-center max-w-[700px] mx-auto'>

                        {/* item details */}
                        <div className='w-full py-3 mb-6 '>
                            <div className='w-full flex justify-between my-2'>
                                <h1 className='lora text-[15px] font-[500]'>{checkout?.item?.header?.heading}</h1>
                                <Link to='/cart'><p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.item?.header?.sub_heading}</p></Link>
                            </div>
                            <div className='max-h-[180px] overflow-y-scroll'>
                                {
                                    checkoutData?.item?.content?.map((data, i) => (
                                        <div className='w-[98%] mx-auto flex justify-between text-[12px] py-2 gap-3 border-b border-b-[#69696927]' key={i}>
                                            <div className='w-[90px]'>
                                                <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-full" />
                                            </div>
                                            <div className='w-full flex flex-col justify-start'>
                                                <h1 className='lora text-[14px] font-[500]'>{data?.title}</h1>
                                                <p className='poppins text-[11px] tracking-[2px]'>ID: {data?.id}</p>
                                                <p className='poppins text-[11px] tracking-[2px]'>x{data?.qty}</p>
                                                <div className='w-full flex justify-end'>
                                                    <p className='poppins text-[14px] tracking-[2px]'>₹ {data?.price}</p>
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
                <div className='my-2 w-full md:w-[45%] border-t border-t-black md:border-t-0 flex justify-center items-center'>
                    {/* address card */}
                    <div className='md:mt-16 w-full md:w-[70%] md:ml-auto '>
                        <div className='w-full flex justify-between my-3 md:my-5'>
                            <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.sub_total?.title}</h1>
                            <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >₹ {checkoutData?.checkout_data?.sub_total?.amount}</p>
                        </div>
                        <div className='w-full flex justify-between my-3 md:my-5'>
                            <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.shipping?.title}</h1>
                            <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >₹ {checkoutData?.checkout_data?.shipping?.amount}</p>
                        </div>
                        <div className='w-full flex justify-between my-3 md:my-5'>
                            <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.tax?.title}</h1>
                            <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.tax?.amount}</p>
                        </div>
                        <div className='w-full flex justify-between my-3 md:my-5'>
                            <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkoutData?.checkout_data?.total?.title}</h1>
                            <p className='poppins text-[12px] md:text-[14px] tracking-[3px]' >₹ {checkoutData?.checkout_data?.total?.amount}</p>
                        </div>
                        <div className='w-full flex justify-center items-center pt-10 md:my-5'>
                            <button className='bg-black text-white p-4 px-14 text-[12px] md:text-[15px] font-[300] tracking-[3px] md:w-full'>{checkout?.checkout_data?.checkout_button}</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout