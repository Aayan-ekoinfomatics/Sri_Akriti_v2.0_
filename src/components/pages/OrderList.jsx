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

const OrderList = () => {
  const [currValue, setCurrValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
//   const [reviewModal, setReviewModal] = useState(false);
  const [ activeItem, setActiveItem ] = useState(null);
  const [ filterToggle, setFilterToggle ] = useState(false);

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

  useEffect(() => {
    console.log(activeItem)
  }, [activeItem])

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
        <PageBackButton  />
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
            <div className="pb-[100px] mt-10">
                {
                    orders?.order_list?.map((data, i) => (
                        <div key={i}>
                            <div onMouseEnter={() => setActiveItem(i)} onMouseLeave={() => setActiveItem(null)} className="border-b border-b-[#696969] flex flex-col items-center max-w-[900px] mx-auto pb-2 my-4 md:pt-4 relative" >
                            <div className="w-full flex justify-between poppins tracking-[1px]">
                                <h1 className={`text-[12px] md:text-[16px] ${ data?.status == 'Delivered' ? 'text-[#1E9923]' : 'text-[#FE9D00]'} font-[500]`} >{data?.status}</h1>
                                <h1 className="text-[10px] md:text-[14px] text-[#00000085] md:text-[black] md:font-[500]">{data?.date}</h1>
                            </div>
                            <NavLink to='/order-details' className="w-full flex gap-2 items-center md:gap-3">
                                <div >
                                    <img src={data?.product_img} className="w-[100px] md:w-[130px]" />
                                </div>
                                <div className="flex flex-col w-full poppins">
                                    <div>
                                        <h1 className="text-[13px] md:text-[18px] font-[500] leading-0" >{data?.product_name}</h1>
                                        <h1 className="text-[13px] md:text-[18px] font-[400]" >{data?.product_code}</h1>
                                    </div>
                                    <h1 className="text-right font-[500] text-[12px] md:text-[17px]">₹{data?.product_price}</h1>
                                </div>
                            </NavLink>
                            <div className="w-full flex justify-between py-2 md:py-6 md:px-3 my-4 bg-[#E6E6E6]" >
                                <div className="w-[50%] pl-2">
                                    <h1 className="poppins text-[12px] md:text-[16px] font-[500]">Rate the Product</h1>
                                    <div className="flex w-full">
                                        {stars.map((data, index) => (
                                            <img
                                            src={(currValue > index  || hoverValue > index) && (activeItem === i) ? black_star : white_star}
                                            onMouseEnter={() => handleMouseOver(index + 1)}
                                            onMouseLeave={() => handleMouseLeave()}
                                            className="w-[20px] cursor-pointer"
                                            key={index}
                                            onClick={() => handleClick(index + 1)}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="w-[50%] flex justify-end items-center pr-2">
                                    <h1 className="poppins tracking-[1px] text-[12px] md:text-[16px] cursor-pointer" 
                                    // onClick={() => setReviewModal(!reviewModal)}
                                    >Write a review</h1>
                                </div>
                            </div>
                            {/* <div className={`${ reviewModal ? 'h-[250px]' : 'h-0 overflow-hidden' } transition-all duration-300 bg-[#dadadaf3] w-full absolute flex flex-col justify-center items-center`}>
                                <div className="w-full pl-2 pt-2">
                                    <img src={close} className="w-[20px] cursor-pointer" onClick={() => setReviewModal(false)}/>
                                </div>
                                <h1 className="my-2 poppins text-[15px] tracking-[2px] uppercase">Review</h1>
                                <textarea name="" id="" cols="70" rows="8" className="my-2 "></textarea>
                            </div> */}
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
