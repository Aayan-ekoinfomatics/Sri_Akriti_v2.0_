import React, { useEffect, useState } from "react";
import chain from "../../assets/images/chain-1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import arrow from "../../assets/icons/arrow.svg";
// import { data } from "autoprefixer";
import product_details from "../../mockapi/singleProductPageApi";
import collection_data from "../../mockapi/apiData";
import { Link, NavLink, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import singleProductApiAtom from "../../recoil/atoms/products/singleProductApiAtom";
import axios from "axios";
import categoriesApiAtom from "../../recoil/atoms/products/categoriesApiAtom";
import { cartDataAtom } from "../../recoil/atoms/cart/cartDataAtom";
import arrowCart from '../../assets/icons/arrow_cart.svg'

const Productpage = () => {

  const params = useParams();

  const [addToCartToast, setAddToCartToast] = useState(false);

  const [productApiData, setProductApiData] = useRecoilState(singleProductApiAtom);

  const [categoryApi, setCategoryApi] = useRecoilState(categoriesApiAtom);

  const [cartDataList, setCartDataList] = useRecoilState(cartDataAtom);

  const [selectedQuality, setSelectedQuality] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);


  const handleAddToCartToast = () => {
    setAddToCartToast(true);
    setTimeout(() => {
      setAddToCartToast(false);
    }, 2000);
  }



  useEffect(() => {
    let formdata = new FormData();
    // formdata.append("id", data?.id);
    formdata.append("product_id", params?.product_id);
    axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'productDetails', formdata).then((response) => setProductApiData(response?.data))
    // console.log(response?.data)
  }, [params])

  useEffect(() => {
    console.log(cartDataList);
  }, [cartDataList])


  return (
    <div className="overflow-x-hidden">
      <div className="md:flex gap-5 w-[95%] mx-auto relative">
        <div className=" md:w-[50%]">
          <div className="pl-3 flex gap-4 items-center md:tracking-[2px] text-[11px] md:text-[18px] my-5 md:my-10">
            {/* Home / Necklace / Type 1 Necklace Platinum */}
            {
              product_details?.product[0]?.breadcrumbs?.map((data, i) => (
                <h1 className="poppins leading-[1px] cursor-pointer" key={i}>{data?.link_name} {product_details?.product[0]?.breadcrumbs?.length === i + 1 ? '' : <span>/</span>} </h1>
              ))
            }
            {/* {params?.product_id} */}
          </div>
          <div className="w-[95%] mx-auto object-cover mb-2 md:flex gap-1 justify-center items-center md:pb-16 md:pr-12 lg:pb-24 lg:pr-24">
            {/* mobile slider */}
            <Slider
              className="w-full mx-auto z-[780] md:hidden"
              slidesToScroll={1}
              slidesToShow={1}
              infinite
              dots={true}
              dotsClass="slick-dots"
            >
              {product_details?.images?.map((data, i) => (
                <div key={i} className=" max-w-[100%] h-[100%]">
                  <img
                    src={data?.img}
                    alt=""
                    className="object-contain w-[95%] mx-auto"
                  />
                </div>
              ))}
            </Slider>

            {/* desktop pictures */}

            {/* {product_details?.product?.map((datas, index) => (
              <React.Fragment key={index}>
                <div className="hidden md:block w-[75%]">
                  <img src={datas?.images[0]} className="w-[95%]" />
                </div>
              </React.Fragment>
            ))} */}

            <div>
              <div className="hidden md:block w-full">
                <img src={import.meta.env.VITE_APP_BASE_API_LINK + productApiData?.image} className=" min-w-[300px] w-[90%]" />
              </div>
            </div>
          </div>
        </div>
        <div className="lora w-[95%] md:w-[50%] pt-12 mx-auto tracking-[2px] mt-6">
          <div className='relative'>
            <h1 className="text-[20px] sm:text-[30px] md:text-[36px] mb-2 font-[600]">
              {productApiData?.name}
            </h1>
            <h1 className="text-[15px] md:text-[18px] lora ">{productApiData?.name}</h1>
            <h1 className="text-[18px] sm:text-[26px] md:text-[25px] my-3 md:my-[20px] lg:my-[30px]">
              ₹ {productApiData?.selling_price[selectedSize]}
              <span className="line-through text-[20px] text-[#696969] mx-2">₹
                {productApiData?.actual_price[selectedSize]}
                {/* {productApiData?.actual_price} */}
              </span>
              <span className="text-[18px]">{productApiData?.discount}% Off</span>
            </h1>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Gender</h1>
              <div className="flex justify-between md:w-[58%] text-[#6969698a]">
                <h1 className="text-[12px] md:text-[14px] lora text-black" >{productApiData?.gender}</h1>
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Diamond Quality</h1>
              <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                {
                  productApiData?.diamond_quality?.map((data, i) => (
                    <h1 key={i} className={`text-[12px] md:text-[14px] lora cursor-pointer ${i === selectedQuality ? 'text-black' : ''} `} onClick={() => setSelectedQuality(i)} >{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Diamond Size</h1>
              <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                {
                  productApiData?.diamond_quality?.map((data, i) => (
                    <h1 key={i} className={`text-[12px] md:text-[14px] lora cursor-pointer ${i === selectedQuality ? 'text-black' : ''} `} onClick={() => setSelectedQuality(i)} >{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Size</h1>
              <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                {
                  productApiData?.size?.map((data, i) => (
                    <h1 key={i} className={`text-[12px] md:text-[14px] lora cursor-pointer ${i === selectedSize ? 'text-black' : ''} `} onClick={() => setSelectedSize(i)} >{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Weight</h1>
              <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                {
                  productApiData?.weight?.map((data, i) => (
                    <h1 key={i} className={`text-[12px] md:text-[14px] lora cursor-pointer mx-2 ${i === selectedSize ? 'text-black' : ''} `} onClick={() => setSelectedSize(i)}>{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full md:w-[80%] flex gap-2 justify-between sticky botton-0 right-0 text-black py-4 ">
              <button onClick={() => {
                const formdata = new FormData();
                formdata.append("token", localStorage.getItem("token"));
                formdata.append("no_login_token", localStorage.getItem("no_login_token"));
                formdata.append("product_id", productApiData?.product_id);
                formdata.append("size", productApiData?.size[selectedSize]);
                formdata.append("weight", productApiData?.weight[selectedSize]);
                formdata.append("diamond_quality", productApiData?.diamond_quality[selectedQuality]);
                formdata.append("diamond_size", productApiData?.diamond_size[selectedQuality]);
                axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'addToCart', formdata).then((response) => {
                  // setCartDataList([
                  //   ...cartDataList,
                  //   {
                  //     id: productApiData?.product_id,
                  //     size: productApiData?.size[selectedSize],
                  //     weight: productApiData?.weight[selectedSize],
                  //     diamond_quality: productApiData?.diamond_quality[selectedQuality],
                  //     diamond_size: productApiData?.diamond_size[selectedQuality],
                  //   }
                  // ])
                  // alert(response?.data?.message)
                  handleAddToCartToast();
                  console.log(response?.data)
                  localStorage.setItem("no_login_token", response?.data?.no_login_token)
                })
              }} className="bg-black text-white min-w-[150px] lg:min-w-[250px] py-4 poppins text-[15px] md:text-[18px] lg:text-[22px] px-2 tracking-[2px] md:tracking-[3px]">ADD TO CART</button>
              <button onClick={() => setCartDataList([])} className="bg-[#3EDCFF] min-w-[150px] lg:min-w-[250px] py-4 poppins text-[15px] md:text-[18px] lg:text-[22px] px-2 tracking-[2px] md:tracking-[3px]">BUY NOW</button>
            </div>
          </div>
        </div>
        <div className={`w-full max-w-[400px] border bg-gray-100 shadow-lg absolute top-8 right-0 pt-6 py-4 px-4 transition-all duration-300 ease-in-out ${addToCartToast ? 'translate-x-0' : 'translate-x-[440px]'}`}>
          <h1 className="font-[600]">Item added to Cart</h1>
          <div className="border-t pt-2 flex items-center gap-2 mt-1">
            <div>
              <p>Go to cart!</p>
              <span>
                <img src={arrowCart} className="w-full max-w-[25px]" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* products */}

      <div className="w-[93%] mx-auto flex justify-start items-center gap-2 md:gap-4 my-4 mb-10">
        <div className="w-[8px] md:w-[18px]">
          <img src={arrow} className="w-full" />
        </div>
        <h1 className="lora text-[22px] md:text-[36px] font-[600] tracking-[2px]">
          Similar
        </h1>
        <h1 className="lora text-[14px] md:text-[22px] font-[400] ml-4 md:ml-8 tracking-[2px]">
          to this one
        </h1>
      </div>
      <div>
        <div className="w-[95%] mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-4 mb-10">
          {
            categoryApi?.data?.map((data, i) => (
              <div className="p-1" key={i}>
                <div>
                  <NavLink to='/product-details/:product_id'> <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="" /></NavLink>
                </div>
                <button className="w-full text-white tracking-[1px] md:tracking-[3px] text-[15px] md:text-[20px] bg-[#3EDCFF] px-4 md:px-7 py-2">
                  ADD TO CART
                </button>
                <div className="flex items-center gap-3">
                  <h1 className="text-[14px] py-2 md:text-[23px] font-[500] tracking-[2px] ">
                    ₹ {data?.selling_price}
                  </h1>
                  <span className="text-[20px] line-through text-[#696969] tracking-[2px]">₹ {data?.actual_price}</span>
                </div>
                <h1 className="text-[12px] md:text-[19px] font-[400] tracking-[3px]">
                  {data?.name}
                </h1>
              </div>
            ))
          }
        </div>
      </div>

    </div>
  );
};

export default Productpage;
