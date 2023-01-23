import React from "react";
import line from "../../assets/icons/delivery-line.svg";
import arrow from "../../assets/icons/black-arrow-left.svg";
import square from "../../assets/images/about-us.png";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import PageBackButton from "../global components/PageBackButton";
import { useEffect } from "react";
import axios from "axios";

const OrderDetails = () => {

    const [viewBreakUp, setViewBreakUp] = useState(false);

    const [orderData, setOrderData] = useState();

    const params = useParams()

    const navigate = useNavigate();

    window.addEventListener("click", (event) => {
        const break_up = document?.getElementById("break_up");

        if (break_up) {
            if (!break_up?.contains(event?.target)) {
                setViewBreakUp(false);
            }
        }
    });

    useEffect(() => {
        let formData = new FormData
        formData?.append("token", localStorage.getItem("token"))
        formData?.append("order_id", params?.order_id)
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'orderDetails', formData).then((response) => {
            console.log(response?.data)
            setOrderData(response?.data)
        })
        // console.log(params?.order_id)
    }, [])


    return (
        <div className="w-full">
            <PageBackButton />
            <div className="w-[90%] md:w-[80%] mx-auto">
                {/* <NavLink to='' onClick={() => navigate(-1)}><img src={arrow} className="w-[30px] pt-4" /></NavLink> */}

                <h1 className="lora italic text-[28px] font-[500] text-center pt-5 pb-10">
                    Order Details
                </h1>
                <div className="w-full max-w-[1000px] mx-auto my-5 mt-8 md:mt-14 flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-5">
                    <h1 className={`poppins font-[500] ${orderData?.status_bar?.a ? 'opacity-100' : 'opacity-40'} text-[12px] md:text-[18px]`} >Order Recieved</h1>

                    <img src={line} className={`w-[70px] ${orderData?.status_bar?.b ? 'grayscale-0' : 'grayscale opacity-40'} rotate-90 md:rotate-0`} />

                    <h1 className={`poppins font-[500] ${orderData?.status_bar?.c ? 'opacity-100' : 'opacity-40'} text-[12px] md:text-[18px]`} >Order Processed</h1>

                    <img src={line} className={`w-[70px] ${orderData?.status_bar?.d ? 'grayscale-0' : 'grayscale opacity-40'} rotate-90 md:rotate-0`}/>

                    <h1 className={`poppins font-[500] ${orderData?.status_bar?.e ? 'opacity-100' : 'opacity-40'} text-[12px] md:text-[18px]`} >Order Dispatched</h1>

                    <img src={line} className={`w-[70px] ${orderData?.status_bar?.f ? 'grayscale-0' : 'grayscale opacity-40'} rotate-90 md:rotate-0`}/>

                    <h1 className={`poppins font-[500] ${orderData?.status_bar?.g ? 'opacity-100' : 'opacity-40'} text-[12px] md:text-[18px]`} >Order Delivered</h1>
                </div>
                <div className="w-full max-w-[1000px] mx-auto md:pt-16">
                    <div className="w-full flex justify-between poppins text-[14px]">
                        <h1 className={`${orderData?.delivery_status === 'Delivered' ? 'text-[#1E9923]' : orderData?.delivery_status === 'Placed'? 'text-[#FE9D00]' : orderData?.delivery_status === 'On the way' ? 'text-[#4d6eff]' : orderData?.delivery_status === 'Cancelled' ? 'text-red-600' : ''} font-[500]`}>{orderData?.delivery_status}</h1>
                        <h1 className="text-[#]">{orderData?.order_date}</h1>
                    </div>
                    <div className="w-full flex flex-col md:flex-row justify-center">
                        <div className="w-full flex flex-col items-center max-h-[200px] overflow-y-scroll">
                            {
                                orderData?.products?.map((data, i) => (
                                    <div key={i} className="w-full flex gap-3 my-1">
                                        <Link to={'/product-details' + '/' + data?.id}><img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-full max-w-[80px] my-2" /></Link>
                                        <Link to={'/product-details' + '/' + data?.id} className="w-fit">
                                            <h1 className="poppins text-[14px] md:text-[18px] font-[500] my-1">
                                                {data?.name}
                                            </h1>
                                            <h1 className="poppins text-[12px] md:text-[13px] my-1">
                                                <span className="font-[400] text-[12px]">product code:</span> <span className="font-[500] text-[13px]">{data?.id}</span>
                                            </h1>
                                            <h1 className="poppins text-[12px] md:text-[15px] font-[500] my-1">
                                                ₹ {data?.price}
                                            </h1>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="md:w-[45%] flex md:flex-col min-h-[180px] max-h-[200px] justify-between md:justify-end md:items-end my-2 relative">
                            <h1 className="poppins text-[13px] font-[500] md:text-[18px] tracking-[2px] my-2">
                                ₹ {orderData?.total_price}
                            </h1>
                            <h1 id="break_up" className="poppins text-[12px] md:text-[15px] border-b border-b-black pb-1 tracking-[0.5px] md:tracking-[2px] my-2 cursor-pointer" onClick={() => setViewBreakUp(!viewBreakUp)}>
                                View Breakup
                            </h1>
                            <div className={`absolute top-[100%] right-0 md:top-[180px] w-full min-w-[290px] md:min-w-[350px] max-w-[350px] bg-white overflow-y-hidden transition-all duration-300 shadow-md ${viewBreakUp ? 'h-[230px] ease-in' : 'h-0 ease-out'}`}>
                                <div className="w-[85%] text-[12px] md:text-[14px] mx-auto flex justify-between poppins my-4 pt-5">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]" >Original Price</h1>
                                    <h1 className="font-[500]" >₹ {orderData?.original_price}</h1>
                                </div>
                                <div className="w-[85%] text-[12px] md:text-[14px] mx-auto flex justify-between poppins my-4">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]" >Tax</h1>
                                    <h1 className="font-[500]" >{orderData?.tax}%</h1>
                                </div>
                                <div className="w-[85%] text-[12px] md:text-[14px] mx-auto flex justify-between poppins my-4">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]" >Shipping Charges</h1>
                                    <h1 className="font-[500]" >₹ {orderData?.shipping}</h1>
                                </div>
                                {/* <div className="w-[85%] text-[12px] md:text-[14px] mx-auto flex justify-between poppins my-4">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]" >Cupon Discount</h1>
                                    <h1 className="font-[500]" >Rs 18,000</h1>
                                </div> */}
                                <div className="w-[85%] mx-auto text-[13px] md:text-[14px] flex justify-between poppins my-6 border-t border-t-[#696969c4] pt-6">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]">Payment method</h1>
                                    <h1 className="font-[500] text-[#00000062]">{orderData?.payment_method}</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="poppins text-[11px] md:text-[14px] my-3 mt-6">Return within 14 days of Delivery applicable</h1>
                    <h1 className="poppins text-[11px] md:text-[13px] my-3 mb-6 font-[600]">{orderData?.customer_name}, {orderData?.customer_phone}</h1>


                    <div className="bg-[#E6E6E6] p-4 my-4 mb-6 tracking-[1px] ">
                        <h1 className="poppins text-[12px] md:text-[14px] mb-4 font-[300]" >Order ID: #{orderData?.order_id}</h1>
                        <h1 className="poppins text-[12px] md:text-[13px] font-[600] mt-4 md:mt-0" >Order Payment Details</h1>
                        <h1 className="poppins text-[10px] md:text-[11px] font-[300] mt-1 md:mt-0" >{orderData?.payment_method}</h1>
                        <h1 className="poppins text-[12px] md:text-[14px] mt-4 md:mb-0 font-[500]" >Details</h1>
                        <h1 className="poppins text-[10px] md:text-[12px] mt-1 md:mb-0 font-[300]" >{orderData?.customer_name}</h1>
                        <h1 className="poppins text-[11px] md:text-[13px] my-1 md:mb-0 font-[300]" >{orderData?.customer_phone}</h1>
                        <h1 className="poppins text-[11px] md:text-[13px] my-1 md:mb-0 font-[300]" >{orderData?.customer_email}</h1>
                        <div className="w-full justify-end hidden md:flex">
                            <button className="bg-[#D9D9D9] px-4 py-2 poppins tracking-[1px] text-[15px] font-[500]">GENERATE INVOICE</button>
                        </div>
                    </div>
                    <div className="w-full justify-center flex md:hidden mb-10">
                        <button className="bg-[#D9D9D9] px-4 py-2 poppins tracking-[1px] text-[14px] font-[500]">GENERATE INVOICE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
