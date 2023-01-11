import React from "react";
import line from "../../assets/icons/delivery-line.svg";
import arrow from "../../assets/icons/black-arrow-left.svg";
import square from "../../assets/images/about-us.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import PageBackButton from "../global components/PageBackButton";

const OrderDetails = () => {

    const [viewBreakUp, setViewBreakUp] = useState(false);

    const navigate = useNavigate();


    return (
        <div className="w-full">
            <PageBackButton />
            <div className="w-[90%] md:w-[80%] mx-auto">
                {/* <NavLink to='' onClick={() => navigate(-1)}><img src={arrow} className="w-[30px] pt-4" /></NavLink> */}

                <h1 className="lora italic text-[28px] font-[500] text-center pt-5 pb-10">
                    Order Details
                </h1>
                <div className="w-full max-w-[1000px] mx-auto my-5 mt-8 md:mt-14 flex flex-col md:flex-row justify-evenly items-center gap-10 md:gap-5">
                    <h1 className="poppins font-[500] text-[12px] md:text-[18px]" >Order Recieved</h1>
                    <img src={line} className="w-[70px] rotate-90 md:rotate-0" />
                    <h1 className="poppins font-[500] text-[12px] md:text-[18px]" >Order Processed</h1>
                    <img src={line} className="w-[70px] rotate-90 md:rotate-0" />
                    <h1 className="poppins font-[500] text-[12px] md:text-[18px]" >Order Dispatched</h1>
                    <img src={line} className="w-[70px] rotate-90 md:rotate-0" />
                    <h1 className="poppins font-[500] text-[12px] md:text-[18px]" >Order Delivered</h1>
                </div>
                <div className="w-full max-w-[1000px] mx-auto md:pt-16">
                    <div className="w-full flex justify-between poppins text-[14px]">
                        <h1 className="text-[#1E9923] font-[500]">Delivered</h1>
                        <h1 className="text-[#]">20/11/22</h1>
                    </div>
                    <div className="w-full flex justify-center">
                        <div className="w-full">
                            <img src={square} className="w-[100px] md:w-[200px] my-2" />
                            <h1 className="poppins text-[14px] md:text-[18px] font-[500] my-2">
                                A Quiet Dawn Necklace in Platinum
                            </h1>
                            <h1 className="poppins text-[12px] md:text-[16px] my-2">
                                SJ PTB 307
                            </h1>
                        </div>
                        <div className="w-[45%] flex flex-col justify-end items-end my-2 relative">
                            <h1 className="poppins text-[13px] font-[500] md:text-[18px] tracking-[2px] my-2">
                                ₹ 18000
                            </h1>
                            <h1 className="poppins text-[12px] md:text-[15px] border-b border-b-black pb-1 tracking-[0.5px] md:tracking-[2px] my-2 cursor-pointer" onClick={() => setViewBreakUp(!viewBreakUp)}>
                                View Breakup
                            </h1>
                            <div className={`absolute top-[100%] md:top-[265px] w-full min-w-[290px] md:min-w-[350px] bg-white overflow-y-hidden transition-all duration-300 shadow-md ${viewBreakUp ? 'h-[250px] md:h-[280px] ease-in' : 'h-0 ease-out'}`}>
                                <div className="w-[85%] text-[12px] md:text-[14px] mx-auto flex justify-between poppins my-4 pt-5">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]" >Original Price</h1>
                                    <h1 className="font-[500]" >Rs 15,000</h1>
                                </div>
                                <div className="w-[85%] text-[12px] md:text-[14px] mx-auto flex justify-between poppins my-4">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]" >Tax</h1>
                                    <h1 className="font-[500]" >Rs 2,000</h1>
                                </div>
                                <div className="w-[85%] text-[12px] md:text-[14px] mx-auto flex justify-between poppins my-4">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]" >Discount Price</h1>
                                    <h1 className="font-[500]" >Rs 1,000</h1>
                                </div>
                                <div className="w-[85%] text-[12px] md:text-[14px] mx-auto flex justify-between poppins my-4">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]" >Cupon Discount</h1>
                                    <h1 className="font-[500]" >Rs 18,000</h1>
                                </div>
                                <div className="w-[85%] mx-auto text-[13px] md:text-[14px] flex justify-between poppins my-6 border-t border-t-[#696969c4] pt-6">
                                    <h1 className="tracking-[2px] font-[500] text-[#000000ab]">Paid by</h1>
                                    <h1 className="font-[500] text-[#00000062]">Cash On Delivery</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h1 className="poppins text-[11px] md:text-[14px] my-3 mt-6">Return within 14 days of Delivery applicable</h1>
                    <h1 className="poppins text-[11px] md:text-[13px] my-3 mb-6 font-[600]">Person Name, 123-456-789</h1>


                    <div className="bg-[#E6E6E6] p-4 my-4 mb-6 tracking-[1px] ">
                        <h1 className="poppins text-[12px] md:text-[14px] mb-4 font-[300]" >Order ID #1234565789qwerty</h1>
                        <h1 className="poppins text-[12px] md:text-[13px] font-[600] mt-4 md:mt-0" >Order Payment Details</h1>
                        <h1 className="poppins text-[10px] md:text-[11px] font-[300] mt-1 md:mt-0" >Cash on Delivery</h1>
                        <h1 className="poppins text-[12px] md:text-[14px] mt-4 md:mb-0 font-[500]" >Recieved by</h1>
                        <h1 className="poppins text-[10px] md:text-[12px] mt-1 md:mb-0 font-[300]" >Person Name</h1>
                        <h1 className="poppins text-[11px] md:text-[13px] my-1 md:mb-0 font-[300]" >123-456-789</h1>
                        <h1 className="poppins text-[11px] md:text-[13px] my-1 md:mb-0 font-[300]" >abcd123@gmail.com</h1>
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
