import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import leftArrow from "../../assets/icons/leftArrow.svg";
import rightArrow from "../../assets/icons/rightArrow.svg";
import ring_1 from "../../assets/images/ring-1.png";
import ring_2 from "../../assets/images/ring-2.png";
import chain_1 from "../../assets/images/chain-1.png";
import chain_2 from "../../assets/images/chain-2.png";
import right_arrow from '../../assets/images/rightarrow.png'
import fourth_section from "../../mockapi/landingFourthSectionApi";
import { NavLink } from "react-router-dom";
import landingSectionApiAtom from "../../recoil/atoms/landing-page/landingSectionApiAtom";
import { useRecoilState } from "recoil";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={` ${className} w-fit z-[800]`} onClick={onClick}>
      <img src={leftArrow} alt="previous" className=" w-[40px] md:w-[100px] lg:-translate-x-6" />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className} w-fit`} onClick={onClick}>
      <img src={rightArrow} alt="next" className=" w-[40px] md:w-[100px] lg:translate-x-7" />
    </div>
  );
};

const FourthSection = () => {

  const [landingFourthSectionApiData, setLandingFourthSectionApiData] = useRecoilState(landingSectionApiAtom);

  // useEffect(() => {
  //   console.log(landingFourthSectionApiData?.fourth_section?.carousal_images)
  // }, [landingFourthSectionApiData])



  return (
    <>
      {/* desktop view */}
      {/* <div className="hidden md:block mb-20">
        <div className="flex w-[90%] mx-auto pb-5 pt-16 items-center justify-between">
          <h1 className="lora italic text-[30px]">
            {fourth_section?.section_data?.section_title}
            {landingFourthSectionApiData?.fourth_section?.section_title}
          </h1>
          <p className="tracking-[8px] poppins text-[20px] leading-10">
            SEE FULL COLLECTION
          </p>
        </div>
        <div className="px-2">
        <Slider
          className="w-[92%] mx-auto pt-5 pb-10 z-[780]"
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToScroll={1}
          slidesToShow={4}
          infinite
        >
          {
            landingFourthSectionApiData?.fourth_section?.carousal_images?.map((data, i) => (
              <div className="max-w-[100%] h-[100%]" key={i}>
                <NavLink to={data?.route}><img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="object-contain" /></NavLink>
              </div>
            ))
          }
        </Slider>
        </div>
      </div> */}
      
      {
        !landingFourthSectionApiData == null ?
        <>
        <div className="hidden md:block mb-20">
        <div className="flex w-[90%] mx-auto pb-5 pt-16 items-center justify-between">
          <h1 className="lora italic text-[30px]">
            {/* {fourth_section?.section_data?.section_title} */}
            {landingFourthSectionApiData?.fourth_section?.section_title}
          </h1>
          <p className="tracking-[8px] poppins text-[20px] leading-10">
            SEE FULL COLLECTION
          </p>
        </div>
        <div className="px-2">
        <Slider
          className="w-[92%] mx-auto pt-5 pb-10 z-[780]"
          prevArrow={<PreviousBtn />}
          nextArrow={<NextBtn />}
          slidesToScroll={1}
          slidesToShow={4}
          infinite
        >
          {
            landingFourthSectionApiData?.fourth_section?.carousal_images?.map((data, i) => (
              <div className="max-w-[100%] h-[100%]" key={i}>
                <NavLink to={data?.route}><img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="object-contain" /></NavLink>
              </div>
            ))
          }
        </Slider>
        </div>
      </div>
        </>
        :
        <>
        <div className="hidden md:block mb-20">
          <div className="flex w-[90%] mx-auto pb-5 pt-16 items-center justify-between">
            <h1 className="lora italic text-[30px]">
              {fourth_section?.section_data?.section_title}
              {/* {landingFourthSectionApiData?.fourth_section?.section_title} */}
            </h1>
            <p className="tracking-[8px] poppins text-[20px] leading-10">
              SEE FULL COLLECTION
            </p>
          </div>
          <div className="px-2">
            <Slider
              className="w-[92%] mx-auto pt-5 pb-10 z-[780]"
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              slidesToScroll={1}
              slidesToShow={4}
              infinite
            >
              {
                fourth_section?.section_data?.carousal_images?.map((data, i) => (
                  <div className="max-w-[100%] h-[100%]" key={i}>
                    <NavLink to={data?.route}><img src={data?.image} className="object-contain" /></NavLink>
                  </div>
                ))
              }
            </Slider>
          </div>
        </div>
        </>
      }


      {/* mobile view */}
      <div className="block md:hidden py-14 ">
        {/* {
          !landingSectionApiAtom == null ?
          <div className="w-[90%] mx-auto ">
            <h1 className="lora italic text-[20px]">
              {landingFourthSectionApiData?.fourth_section?.section_title}
            </h1>
            <Slider
              className="w-[95%] mx-auto pt-5 pb-10"
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              slidesToScroll={1}
              slidesToShow={2}
              infinite
            >
              {
                landingFourthSectionApiData?.fourth_section?.carousal_images?.map((data, i) => (
                  <div className="max-w-[100%] h-[100%]" key={i}>
                    <img src={data?.image} className="object-contain" />
                  </div>
                ))
              }
            </Slider>
            <p className="tracking-[8px] poppins text-[12px] leading-10">
              SEE FULL COLLECTION
            </p>
          </div>
        :
          <div className="w-[90%] mx-auto ">
            <h1 className="lora italic text-[20px]">
              {fourth_section?.section_data?.section_title}
            </h1>
            <Slider
              className="w-[95%] mx-auto pt-5 pb-10"
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              slidesToScroll={1}
              slidesToShow={2}
              infinite
            >
              {
              fourth_section?.section_data?.carousal_images?.map((data, i) => (
                <div className="max-w-[100%] h-[100%]" key={i}>
                  <img src={data} className="object-contain" />
                </div>
              ))
            }
            </Slider>
            <p className="tracking-[8px] poppins text-[12px] leading-10">
              SEE FULL COLLECTION
            </p>
          </div>
        } */}
        <div className="w-[90%] mx-auto ">
            <h1 className="lora italic text-[20px]">
              {fourth_section?.section_data?.section_title}
            </h1>
            <Slider
              className="w-[95%] mx-auto pt-5 pb-10"
              prevArrow={<PreviousBtn />}
              nextArrow={<NextBtn />}
              slidesToScroll={1}
              slidesToShow={2}
              infinite
            >
              {
              fourth_section?.section_data?.carousal_images?.map((data, i) => (
                <div className="max-w-[100%] h-[100%]" key={i}>
                  <NavLink to={data?.route + '/:product_id'}><img src={data?.image} className="object-contain" /></NavLink>
                </div>
              ))
            }
            </Slider>
            <p className="tracking-[8px] poppins text-[12px] leading-10">
              SEE FULL COLLECTION
            </p>
          </div>
      </div>
    </>
  );
};

export default FourthSection;
