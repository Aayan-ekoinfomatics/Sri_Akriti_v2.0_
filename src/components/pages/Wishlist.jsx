import React, { useEffect, useState } from "react";
import img from '../../assets/images/chain.png'
import img_left from "../../assets/icons/black-arrow-left.svg";
import checkout from '../../mockapi/checkoutPageApi'
import { useNavigate } from "react-router-dom";
import delete_icon from '../../assets/icons/delete.svg'
import axios from "axios";
import wishlistApiAtom from "../../recoil/atoms/wishlist/wishlistApiAtom";
import { useRecoilState } from "recoil";
import PageBackButton from "../global components/PageBackButton";

const Wishlist = () => {

    const [wishlistData, setWishlistData] = useState();
    const [wishlistToggle, setWishlistToggle] = useRecoilState(wishlistApiAtom);

    useEffect(() => {
        let formdata = new FormData();
        formdata.append("token", localStorage.getItem("token"));
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserWishlist', formdata).then((response) => {
            console.log(response?.data?.wishlist_data)
            // localStorage.setItem("wishlist_array", response?.data?.wishlist_array)
            setWishlistData(response?.data?.wishlist_data)
            // setProfileApiData(response?.data)
        })
    }, [])

    useEffect(() => {
      console.log(wishlistData)
    }, [wishlistData])
    


    const navigate = useNavigate();


    return (
        <div className="w-full mb-20 md:pb-4">
            {/* <div className="w-full mt-3 ml-3 md:ml-13">
                <img src={img_left} className="w-[25px] md:w-[30px] cursor-pointer" onClick={() => navigate(-1)} />
            </div> */}
            <PageBackButton />
            <div className="w-full text-center mt-4 py-4">
                <h1 className="lora italic text-[22px] md:text-[32px] font-[500] pb-2 md:py-4">Wishlist</h1>
                <p className="poppins text-[10px] md:text-[12px] md:tracking-[2px] pt-2 md:py-4" >This is your account wishlist. You can review or share a wishlist  </p>
            </div>
            <div className={`flex justify-center items-center w-full max-w-[300px] mx-auto`}>
                {
                    wishlistData?.length === 0 ? 
                    <div className="flex flex-col justify-center items-center py-2 text-[40px] text-[#696969a2] poppins tracking-[2px]"><span>Your wishlist</span> <span>is empty!</span></div>
                    :
                    ''
                }
            </div>
            {/* <div className="w-[90%] mx-auto flex justify-end md:justify-center py-4">
                <button className="bg-black text-white p-4 px-6 text-[11px] md:text-[13px] font-[300] tracking-[3px]">ADD ALL TO CART</button>
            </div> */}

            {/* products */}
            <div className="w-[90%] mx-auto h-[300px] md:h-[400px] overflow-y-scroll max-w-[650px] my-12">
                {
                    wishlistData?.map((data, i) => (
                        <React.Fragment key={i}>
                            <div className="w-full flex gap-2 md:gap-5 my-4 lg:p-2">
                                <div className="w-fit flex items-center">
                                    <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-[80px]" />
                                </div>
                                <div className="w-[70%] flex flex-col justify-start md:justify-center items-center">
                                    <h1 className="text-[16px] md:text-[19px] lora font-[500] w-full" >{data?.name}</h1>
                                    <h1 className="text-[11px] md:text-[14px] poppins w-full" >{data?.id}</h1>
                                    {/* <h1 className="text-[11px] md:text-[14px] poppins w-full" > <span className="line-through text-[12px]">₹ {data?.selling_price}</span> <span className="font-[600] text-[13px]">₹ {data?.actual_price}</span></h1> */}
                                </div>
                                <div className="w-[10%] flex items-center justify-end">
                                    <button className="font-[500] px-4 py-2 flex justify-center items-center" onClick={() => {
                                        let text = confirm("Confirm product delete ?")
                                        let formdata = new FormData();
                                        formdata.append("token", localStorage.getItem("token"));
                                        formdata.append("product_id", data?.id);
                                        axios.delete(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserWishlist', { data: {"product_id": data?.id, "token": localStorage.getItem("token")} }).then((response) => {
                                            // console.log(response?.data)
                                            // localStorage.setItem("wishlist_array", response?.data?.wishlist_array)
                                            setWishlistData(response?.data?.wishlist_data)
                                            setWishlistToggle(response?.data?.wishlist_array)
                                            localStorage.setItem("wishlist_array", response?.data?.wishlist_array)
                                            alert("Product removed from wishlist")
                                        })
                                    }}>
                                        <img src={delete_icon} className="w-[15px]" />
                                    </button>
                                </div>
                            </div>
                            <div className="w-[90%] mx-auto flex justify-end border-b border-b-[#0000002d] pb-2">
                                <button className="bg-[#3EDCFF] poppins tracking-[2px] text-[12px] p-2 px-4 md:p-4 md:px-6 font-[500]">View Product</button>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export default Wishlist;
