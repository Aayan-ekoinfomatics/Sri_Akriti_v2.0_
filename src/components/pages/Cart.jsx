import React, { useEffect } from "react";
import card_data from "../../mockapi/cartPageApi";
import heart_outline from '../../assets/icons/heart-outline.svg'
import left_img from '../../assets/icons/black-arrow-left.svg';
import deleteIcon from '../../assets/icons/delete.svg'
import { Link, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Cart = () => {

  const navigate = useNavigate();
  const [cartData, setCartData] = useState();

  useEffect(() => {
    let formdata = new FormData();
    formdata.append("token", localStorage.getItem("token"));
    formdata.append("no_login_token", localStorage.getItem("no_login_token"));
    axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserCart', formdata).then((response) => setCartData(response?.data))
  }, [])

  useEffect(() => {
    console.log(cartData)
  }, [cartData])


  return (

    <div className="w-full pb-24">
      <span className=" w-[100px]"><img onClick={() => navigate(-1)} src={left_img} className="cursor-pointer ml-[10px] md:ml-[200px] lg::ml-[270px] mt-7 w-[30px]" /></span>
      <div className="w-[90%] mx-auto text-center lora italic text-[22px] py-8">
        <h1>My Cart</h1>
      </div>

      {
        card_data?.products?.length != 0 ?
          <div className="w-[90%] md:flex md:w-[80%] mx-auto md:h-[400px]">

            <div className="w-full mx-auto my-auto h-[400px] overflow-y-scroll mb-5 md:mb-0">
              {
                cartData?.products?.map((data, i) => (
                  <div className="flex justify-center items-center gap-2 md:gap-12 py-2 md:px-3 md:pr-10 " key={i}>
                    <div className=" flex justify-center items-center">
                      <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-[100px]" />
                    </div>
                    <div className="w-full max-w-[300px] md:max-w-none flex flex-col items-start">
                      <div className="w-full flex justify-between items-center">
                        <div className="pt-2">
                          <h1 className="lora font-[600] text-[15px] ">{data?.title}</h1>
                          <h1 className="lora font-[600] text-[15px] ">ID : {data?.id}</h1>
                          <h1 className="lora font-[600] text-[15px] ">₹ {data?.price}</h1>
                        </div>
                        <div>
                          <span onClick={() => {
                            let formdata = new FormData();
                            formdata.append("token", localStorage.getItem("token"));
                            formdata.append("no_login_token", localStorage.getItem("no_login_token"));
                            formdata.append("cart_product_id", data?.cart_product_id);
                            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'cartProductDelete', formdata).then((response) => {
                              let formdata = new FormData();
                              formdata.append("token", localStorage.getItem("token"));
                              formdata.append("no_login_token", localStorage.getItem("no_login_token"));
                              axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserCart', formdata).then((response) => setCartData(response?.data))
                            })
                          }}>
                            <img src={deleteIcon} className="w-full max-w-[20px]" alt="" />
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center w-full justify-end">
                        <button className="text-[19px] bg-[#ffffff] font-[500] px-2 flex justify-center items-center" onClick={() => {
                          let formdata = new FormData();
                          formdata.append("token", localStorage.getItem("token"));
                          formdata.append("cart_product_id", data?.cart_product_id);
                          formdata.append("update_type", '-')
                          axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'cartQuantityUpdate', formdata).then((response) => {
                            let formdata = new FormData();
                            formdata.append("token", localStorage.getItem("token"));
                            formdata.append("no_login_token", localStorage.getItem("no_login_token"));
                            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserCart', formdata).then((response) => setCartData(response?.data))
                          })
                        }} >-</button>
                        <p className="text-[17px] bg-[#3EDCFF] font-[500] px-2 flex pt-1 justify-center items-center" >{data?.qty}</p>
                        <button className="text-[19px] bg-[#ffffff] font-[500] px-2 flex justify-center items-center" onClick={() => {
                          let formdata = new FormData();
                          formdata.append("token", localStorage.getItem("token"));
                          formdata.append("cart_product_id", data?.cart_product_id);
                          formdata.append("update_type", '+')
                          axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'cartQuantityUpdate', formdata).then((response) => {
                            let formdata = new FormData();
                            formdata.append("token", localStorage.getItem("token"));
                            formdata.append("no_login_token", localStorage.getItem("no_login_token"));
                            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserCart', formdata).then((response) => setCartData(response?.data))
                          })
                        }} >+</button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            {/* <div className="w-[80%] mx-auto h-[1px] md:w-[0.6px] md:h-[400px] bg-black my-5"></div> */}

            <div className="border-t border-t-black md:border-t-0 md:border-l md:border-l-black w-[90%] md:w-full mx-auto md:px-3 md:pl-10 md:max-w-[500px] max-w-[400px]">
              <div className="w-full poppins flex justify-between items-center py-3 md:pt-10">
                <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{card_data?.checkout_data?.coupon?.title}</h1>
                <button className="text-[13px] md:text-[16px] font-[400]">{card_data?.checkout_data?.coupon?.button}</button>
              </div>
              <div className="w-full poppins flex justify-between items-center py-3">
                <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{card_data?.checkout_data?.packaging?.title}</h1>
                <button className="text-[13px] md:text-[16px] font-[400]">{card_data?.checkout_data?.packaging?.button}</button>
              </div>
              <div className="w-full poppins flex justify-between items-center py-3 text-[#696969c7]">
                <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{cartData?.checkout_data?.sub_total?.title}</h1>
                <h1 className="text-[13px] md:text-[16px] font-[400]">₹ {cartData?.checkout_data?.sub_total?.amount}</h1>
              </div>
              <div className="w-full poppins flex justify-between items-center py-3 text-[#696969c7]">
                <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{card_data?.checkout_data?.shipping?.title}</h1>
                <h1 className="text-[13px] md:text-[16px] font-[400]">₹ {card_data?.checkout_data?.shipping?.charges}</h1>
              </div>
              <div className="w-full poppins flex justify-between items-center py-3 text-[#696969c7]">
                <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{cartData?.checkout_data?.tax?.title}</h1>
                <h1 className="text-[13px] md:text-[16px] font-[400]">{cartData?.checkout_data?.tax?.amount}</h1>
              </div>
              <div className="w-full poppins flex justify-between items-center py-3">
                <h1 className="text-[13px] md:text-[16px] tracking-[2px]">{cartData?.checkout_data?.total?.title}</h1>
                <h1 className="text-[13px] md:text-[16px] font-[400]">₹ {cartData?.checkout_data?.total?.amount}</h1>
              </div>
              <div className="w-[100%] mx-auto py-3">
                <NavLink to='/checkout'><button className="w-full p-4 poppins tracking-[3px] text-[14px] bg-black text-white">{card_data?.checkout_data?.checkout_button}</button></NavLink>
              </div>
            </div>

          </div>
          :
          <div className="w-full flex justify-center items-center md:mt-20 mb-10">
            <div className="flex flex-col justify-center items-center w-full ">
              <div className="w-full text-center lora text-[20px] font-[500] my-12">
                <h1>The Cart is Empty</h1>
              </div>
              <div className="w-full flex justify-center items-center my-12">
                <button className="bg-[#3EDCFF] tracking-[3px] text-[15px] p-4">CONTINUE SHOPPING</button>
              </div>
            </div>
          </div>
      }

      <div className="w-[90%] mx-auto pt-24 text-center">
        <h1 className="lora text-[18px] md:text-[24px] font-[500]">Our recommendations for you</h1>
      </div>
      <div className="w-[90%] md:w-[80%] mx-auto grid gap-2 md:gap-14 grid-cols-2 md:grid-cols-3 pt-12">
        {card_data?.products?.map((data, i) => (
          <div className="relative w-full" key={i}>
            <div className=" absolute top-0 right-0 pt-4">
              <img src={heart_outline} className="w-[20px] mt-4 mr-5" />
            </div>
            <div className="my-2">
              <div className="w-full">
                <Link to='/product-details/product_id' className="" ><img src={data?.image} className="w-full" /></Link>
              </div>
              <button className="bg-[#3EDCFF] w-full p-2 md:p-3 text-[12px] py-1 md:text-[23px] md:font-[500] text-white tracking-[1px] md:tracking-[3px]">
                ADD TO CART
              </button>
              <p className="font-[500] poppins text-[12px] md:text-[20px] py-1 tracking-[2px] pl-1">
                ₹{data?.price}
              </p>
              <p className="font-[300] poppins text-[11px] md:text-[20px] py-1 tracking-[1.4px] pl-1">
                {data?.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
