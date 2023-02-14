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
import { toast } from "react-toastify";

const Productpage = () => {

  const params = useParams();

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const [productApiData, setProductApiData] = useRecoilState(singleProductApiAtom);

  const [categoryApi, setCategoryApi] = useRecoilState(categoriesApiAtom);

  const [priceDetails, setPriceDetails] = useState({
    actual_price: '',
    selling_price: '',
  });

  const [selectedQuality, setSelectedQuality] = useState(0);
  const [selectedDiamondSize, setSelectedDiamondSize] = useState(0);
  const [selectedSize, setSelectedSize] = useState()
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(0);

  const [productDetailsToBackend, setProductDetailsToBackend] = useState({
    // diamond_quality: '',
    // diamond_size: '',
    // size: '',
    // weight: '',
  })

  useEffect(() => {
    let formdata = new FormData();
    // formdata.append("id", data?.id);
    formdata.append("product_id", params?.product_id);
    axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'productDetails', formdata).then((response) => {
      // console.log(response?.data)
      setProductApiData(response?.data)
      setProductDetailsToBackend({
        diamond_quality: response?.data?.diamond_quality[0],
        diamond_size: response?.data?.diamond_size[0],
        size: response?.data?.size[0],
        weight: response?.data?.weight[0],
      })
    })
  }, [params])

  useEffect(() => {
    console.log(categoryApi)
    // console.log(productApiData?.image_all[selectedImageIndex])
  }, [productApiData])


  // useEffect(() => {
  //   console.log(priceDetails);
  // }, [priceDetails])

  useEffect(() => {
    axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'priceCalculation', productDetailsToBackend).then((response) => {
      if (response?.data?.status) {
        setProductApiData({
          ...productApiData,
          actual_price: response?.data?.actual_price,
          selling_price: response?.data?.selling_price,
          diamond_charges: response?.data?.diamond_charges,
          metal_charges: response?.data?.metal_charges,
          making_charges: response?.data?.making_charges,
          discount_price: response?.data?.discount_price,
          total_charges: response?.data?.total_charges,

        })
      }
    })
  }, [productDetailsToBackend])


  return (
    <>
      <div className="md:flex w-[95%] mx-auto ">
        <div className=" md:w-[45%]">
          <div className="pl-6 flex gap-4 items-center md:tracking-[2px] text-[12px] md:text-[18px] mb-8 my-5 md:my-10">
            <Link to='/'>Home</Link>/
            {/* <Link className="capitalize" to={'/single-category/' + 'rings'}>rings</Link>/ */}
            <Link className="capitalize" to={'/single-category/' + productApiData?.category}>{productApiData?.category}</Link>/
            <Link>{productApiData?.name}</Link>
          </div>
          <div className="w-[95%] mx-auto object-cover mb-2 md:flex gap-1 justify-center items-center md:pb-16 lg:pb-24">
            {/* mobile slider */}
            {
              productApiData?.image?.length > 1 ?
                <Slider
                  className="w-full mx-auto z-[780] md:hidden"
                  slidesToScroll={1}
                  slidesToShow={1}
                  infinite
                  dots={true}
                  dotsClass="slick-dots"
                >
                  {productApiData?.images?.map((data, i) => (
                    <div key={i} className=" max-w-[100%] h-[100%]">
                      <img
                        src={data?.img}
                        alt=""
                        className="object-contain w-[95%] mx-auto"
                      />
                    </div>
                  ))}
                </Slider>
                :
                <div className="w-full max-w-[100%] h-[100%] md:hidden">
                  <img
                    src={import.meta.env.VITE_APP_BASE_API_LINK + productApiData?.image}
                    alt=""
                    className="object-contain w-[95%] mx-auto"
                  />
                </div>
            }

            {/* desktop pictures */}

            <div className="w-full">
              <div className="hidden md:flex w-full justify-center">
                <img src={import.meta.env.VITE_APP_BASE_API_LINK + productApiData?.image_all[selectedImageIndex]} className=" max-w-[630px] w-full shadow-md" />
                {/* <img src={import.meta.env.VITE_APP_BASE_API_LINK + productApiData?.image} className=" max-w-[630px] w-full" /> */}
              </div>
              <div className="w-full flex justify-evenly px-4 items-center mt-2">
                {
                  productApiData?.image_all.map((data, i) => (
                    <div className={`w-fit cursor-pointer ${i === selectedImageIndex ? 'border border-black' : ''}`} onClick={() => setSelectedImageIndex(i)}>
                      <img src={import.meta.env.VITE_APP_BASE_API_LINK + data} className='w-full max-w-[100px]' alt="" />
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-0 lora w-[95%] md:w-[55%] mx-auto tracking-[2px] flex flex-col md:flex-row md:justify-between md:items-center mb-10 md:mb-0">



          <div className='relative w-full md:border-r-2 md:border-r-[#D9D9D9] md:pl-16 px-4'>
            <h1 className="text-[20px] sm:text-[30px] md:text-[36px] mb-2 font-[600]">
              {productApiData?.name}
            </h1>
            <h1 className="text-[15px] md:text-[18px] lora ">{productApiData?.name}</h1>
            <h1 className="text-[18px] sm:text-[26px] md:text-[25px] my-3 md:my-[20px] lg:my-[30px]">
              ₹ {productApiData?.actual_price}
              <span className="line-through text-[20px] text-[#696969] mx-2">
                ₹{productApiData?.selling_price}
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
              <div className="flex justify-start gap-5 text-[#6969698a] ">
                {
                  productApiData?.diamond_quality?.map((data, i) => (
                    <h1 key={i} className={`text-[12px] md:text-[14px] lora cursor-pointer ${data === productDetailsToBackend?.diamond_quality ? 'text-black' : ''} `} onClick={() => {
                      setSelectedQuality(data)
                      setProductDetailsToBackend({
                        ...productDetailsToBackend,
                        diamond_quality: data
                      })

                    }} >{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Diamond Size</h1>
              <div className="flex justify-between md:w-[30%] text-[#6969698a] ">
                {
                  productApiData?.diamond_size?.map((data, i) => (
                    <h1 key={i} className={`text-[12px] md:text-[14px] lora cursor-pointer ${data === productDetailsToBackend?.diamond_size ? 'text-black' : ''} `} onClick={() => {
                      setSelectedDiamondSize(data)
                      setProductDetailsToBackend({
                        ...productDetailsToBackend,
                        diamond_size: data
                      })
                    }} >{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Size</h1>
              <div className="flex justify-between gap-2 md:w-[30%] text-[#6969698a] ">
                {
                  productApiData?.size?.map((data, i) => (
                    <h1 key={i} className={`text-[13px] md:text-[14px] lora cursor-pointer ${i === selectedSizeIndex ? 'text-black' : ''} `} onClick={() => {
                      setSelectedSizeIndex(i)
                      setSelectedSize(data)
                      // setSelectedWeight(productApiData?.weight[i])
                      setProductDetailsToBackend({
                        ...productDetailsToBackend,
                        size: data,
                        weight: productApiData?.weight[i]
                      })
                    }} >{data}</h1>
                  ))
                }
              </div>
            </div>
            <div className="w-full mx-auto md:my-8">
              <h1 className="lora text-[15px] font-[500] md:text-[20px] my-4">Weight</h1>
              <div className="grid grid-cols-3 gap-2 text-[#6969698a]">
                {
                  productApiData?.weight?.map((data, i) => (
                    <h1 key={i} className={`text-[13px] md:text-[14px] lora cursor-pointer mx-2 ${i === selectedSizeIndex ? 'text-black' : ''} `} onClick={() => {
                      setSelectedSizeIndex(i)
                      setSelectedWeight(data)
                      // setSelectedSize(productApiData?.size[i])
                      setProductDetailsToBackend({
                        ...productDetailsToBackend,
                        weight: data,
                        size: productApiData?.size[i]
                      })
                    }}>{data}<span className="text-[10px] md:text-[12px]">gms</span></h1>
                  ))
                }
              </div>
            </div>
          </div>

          <div className="w-full md:w-[70%] flex flex-col justify-end items-center text-black">
            <div className="w-full flex flex-col md:translate-y-[100px] pt-10 md:pt-0">
              <div className="py-3 px-3 flex justify-between items-center">
                <h1 className="lora text-[12px] md:text-[18px]">Diamond Charges</h1>
                <h1 className="lora text-[12px] md:text-[18px]">₹ {productApiData?.diamond_charges}</h1>
              </div>
              <div className="py-3 px-3 flex justify-between items-center">
                <h1 className="lora text-[12px] md:text-[18px]">Metal Charges</h1>
                <h1 className="lora text-[12px] md:text-[18px]">₹ {productApiData?.metal_charges}</h1>
              </div>
              <div className="py-3 px-3 flex justify-between items-center">
                <h1 className="lora text-[12px] md:text-[18px]">Making Charges</h1>
                <h1 className="lora text-[12px] md:text-[18px]">₹ {productApiData?.making_charges}</h1>
              </div>
              <div className="py-3 px-3 flex justify-between items-center">
                <h1 className="lora text-[12px] md:text-[18px]">Discount<span className="poppins text-[11px] pl-2">&#40;10%&#41;</span></h1>
                <h1 className="lora text-[12px] md:text-[18px]">- ₹ {productApiData?.discount_price}</h1>
              </div>
            </div>

            <div className="w-full flex flex-col border-t-2 border-t-[#D9D9D9] md:translate-y-[100px] ">

              <div className="py-3 px-3 flex justify-between items-center">
                <h1 className="lora text-[15px] md:text-[18px]">Total</h1>
                <h1 className="lora text-[15px] md:text-[18px]">₹ {productApiData?.total_charges}</h1>
              </div>
              <button onClick={() => {
                let formdata = new FormData();
                formdata.append("token", localStorage.getItem("token"));
                formdata.append("product_id", productApiData?.product_id);
                formdata.append("size", productDetailsToBackend?.size);
                formdata.append("weight", productDetailsToBackend?.weight);
                formdata.append("diamond_size", productDetailsToBackend?.diamond_size);
                formdata.append("diamond_quality", productDetailsToBackend?.diamond_quality);
                axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'addToCart', formdata).then((response) => {
                  if (response?.data?.status === true) {
                    // alert(response?.data?.message)
                    toast.info(`${response?.data?.message}`, {
                      position: "top-right",
                      autoClose: 2000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      // draggable: true,
                      progress: undefined,
                      theme: "light",
                    })
                  } else {
                    alert("Please login first")
                  }
                })
              }} className="bg-[#3EDCFF] text-black w-[80%] mt-10 mx-auto py-4 poppins md:translate-y-[80px] text-[15px] md:text-[18px] lg:text-[22px] px-2 tracking-[2px] md:tracking-[3px] active:scale-[0.97] active:bg-[#202020]">ADD TO CART</button>
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
                {/* <div className="flex items-center gap-3">
                  <h1 className="text-[14px] py-2 md:text-[23px] font-[500] tracking-[2px] ">
                    ₹ {data?.selling_price}
                  </h1>
                  <span className="text-[20px] line-through text-[#696969] tracking-[2px]">₹ {data?.actual_price}</span>
                </div> */}
                <h1 className="text-[12px] md:text-[19px] font-[400] tracking-[3px]">
                  {data?.name}
                </h1>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Productpage;
