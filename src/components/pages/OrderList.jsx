import React, { useEffect, useState } from "react";
import search from '../../assets/icons/search-2.svg'
import black_star from '../../assets/icons/black-star.svg'
import white_star from '../../assets/icons/white-star.svg'
import close from '../../assets/icons/cross.svg'
import filter from "../../assets/icons/filter.svg";
import img_left from "../../assets/icons/black-arrow-left.svg";
import aboutus_img from "../../assets/images/about-us.png";
import orders from "../../mockapi/orderListApi";
import { NavLink, useNavigate } from "react-router-dom";
import PageBackButton from "../global components/PageBackButton";
import axios from "axios";

const OrderList = () => {
    const [currValue, setCurrValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);
    //   const [reviewModal, setReviewModal] = useState(false);
    const [activeItem, setActiveItem] = useState(null);
    const [filterToggle, setFilterToggle] = useState(false);

    const [orderListData, setOrderListData] = useState();

    const navigate = useNavigate();

    const handleClick = (value) => {
        setCurrValue(value);
    };

    const handleMouseOver = (value) => {
        setHoverValue(value);
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined);
    };

    const stars = Array(5).fill(0);

    // useEffect(() => {
    //     console.log(activeItem)
    // }, [activeItem])

    useEffect(() => {
        let formData = new FormData
        formData?.append("token", localStorage.getItem("token"))
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'order_view', formData).then((response) => {
            // console.log(response?.data)
            setOrderListData(response?.data)
        })
    }, [])

    useEffect(() => {
      console.log(orderListData)
    }, [orderListData])
    
    

    // window.addEventListener("click", (event) => {
    //     const sort = document?.getElementById("sort");
    //     const filter = document?.getElementById("filter");

    //     if (sort) {
    //         if (!sort?.contains(event?.target)) {
    //             setFilterToggle(false);
    //         }
    //     }
    // });



    return (
        <div className="w-full">
            <PageBackButton />
            <div className="w-[90%] mx-auto md:w-full px-0 md:px-4">
                {/* <div className="inline-block">
                <img src={img_left} className="w-[30px] mt-5 md:ml-[180px] md:mt-5 cursor-pointer" onClick={() => navigate(-1)} />
            </div> */}

                <div className="w-full my-4 md:mb-24">
                    <h1 className="text-[25px] md:text-[30px] lora italic font-[500] text-center">My Orders</h1>
                </div>
                <div className="w-full md:w-[60%] mx-auto md:flex flex-row-reverse gap-2 justify-between mb-10 relative">

                    {/* searchbar */}
                    <div className="w-full flex border border-[#696969b6] bg-[#69696911] my-2 md:my-0 max-w-[500px]">
                        <img src={search} className="bg-transparent pl-2 md:pl-4 w-[35px]" />
                        <input type="text" className="p-3 bg-transparent w-full poppins text-[14px] font-[300] placeholder:text-black md:text-[15px] tracking-[2px] pl-4" placeholder="SEARCH FOR ORDERS" />
                    </div>

                    {/* filter */}
                    <div className="bg-[#69696900] cursor-pointer flex justify-between my-2 md:my-0 items-center w-[150px] md:w-[180px] p-2 px-2 border border-[#696969b6] " onClick={() => setFilterToggle(!filterToggle)}>
                        <img src={filter} className="w-[14px] md:w-[16px] ml-2" />
                        <h1 className="text-[13px] md:text-[16px] tracking-[2px] text-[#696969]">FILTERS</h1>
                    </div>
                    <div className={`absolute md:top-[50px] left-0 bg-[white] min-w-[240px] md:min-w-[370px] pl-10 z-[10] border shadow-md transition-all duration-[400ms] overflow-hidden ${filterToggle ? 'h-[470px] ease-in' : 'h-0 border-none ease-out'}`}>
                        <h1 className="border-b border-b-[#6969692c] w-[70%] my-2 poppins text-[18px] font-[500] tracking-[2px] py-2 pt-4">Status</h1>
                        <ul className="lora text-[12px]">
                            <li className="my-4 flex justify-start gap-4 items-center" ><input type="checkbox" name="" id="" /> All</li>
                            <li className="my-4 flex justify-start gap-4 items-center" ><input type="checkbox" name="" id="" /> On the way</li>
                            <li className="my-4 flex justify-start gap-4 items-center" ><input type="checkbox" name="" id="" /> Delivered</li>
                            <li className="my-4 flex justify-start gap-4 items-center" ><input type="checkbox" name="" id="" /> Canceled</li>
                            <li className="my-4 flex justify-start gap-4 items-center" ><input type="checkbox" name="" id="" /> Returned</li>
                        </ul>
                        <h1 className="border-b border-b-[#6969692c] w-[70%] my-2 poppins text-[18px] font-[500] tracking-[2px] py-2 pt-4">Time</h1>
                        <ul className="lora text-[12px]">
                            <li className="my-4 flex justify-start gap-4 items-center" ><input type="checkbox" name="" id="" /> Anytime</li>
                            <li className="my-4 flex justify-start gap-4 items-center" ><input type="checkbox" name="" id="" /> Last 30 days</li>
                            <li className="my-4 flex justify-start gap-4 items-center" ><input type="checkbox" name="" id="" /> Last 6 months</li>
                            <li className="my-4 flex justify-start gap-4 items-center" ><input type="checkbox" name="" id="" /> Last Year</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full max-w-[800px] mx-auto mt-10 h-fit max-h-[250px] md:max-h-[400px] overflow-y-scroll px-2">
                    {
                        orderListData?.order_list?.map((data, i) => (
                            <div key={i} className='my-4'>
                                <div onMouseEnter={() => setActiveItem(i)} onMouseLeave={() => setActiveItem(null)} className="border-b flex flex-col items-cente mx-auto pb-2 relative" >
                                    <div className="w-full flex justify-between poppins tracking-[1px]">
                                        <div className="flex items-center gap-3"><h1 className="text-[14px]">Order status: </h1> <h1 className={`text-[12px] md:text-[16px] ${data?.delivery_status === 'Delivered' ? 'text-[#1E9923]' : data?.delivery_status === 'Placed'? 'text-[#FE9D00]' : data?.delivery_status === 'On the way' ? 'text-[#4d6eff]' : data?.delivery_status === 'Cancelled' ? 'text-red-600' : ''} font-[500]`} >{data?.delivery_status}</h1></div>
                                        <h1 className="text-[10px] md:text-[13px] text-[#00000085] md:text-[black] md:font-[400]">{data?.date}</h1>
                                    </div>
                                    <NavLink to='/order-details' className="w-full flex gap-2 items-center md:gap-3">
                                        {/* <div >
                                            <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.product_img} className="w-[100px] md:w-[130px]" />
                                        </div> */}
                                        <div className="flex flex-col gap-4 w-full poppins">
                                            <div className="flex flex-col justify-evenly items-start">
                                                <h1 className="text-[13px] md:text-[18px] font-[500] leading-0" >{data?.order_name}</h1>
                                                <h1 className="text- font-[500] text-[12px] md:text-[17px]">₹{data?.order_price}</h1>
                                            </div>
                                            <h1 className="text mt-1 text-[12px]">order id: <span className="poppins font-[500] text-[13px]">{data?.order_id}</span></h1>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderList;
