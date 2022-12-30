import React, { useEffect } from "react";
import chain from "../../assets/images/chain.png";
import bracelet from "../../assets/images/bracelet.png";
import { NavLink } from "react-router-dom";
import third_section from "../../mockapi/landingThirdSectionApi";

import landingSectionApiAtom from "../../recoil/atoms/landing-page/landingSectionApiAtom";
import { useRecoilState } from "recoil";

const ThirdSection = () => {

  const [landingApiData, setLandingApiData] = useRecoilState(landingSectionApiAtom);




  return (
    <>
      {/* desktop view */}
      <h1 className="hidden md:block lora italic text-[40px] pl-24 py-4 pb-12" >See our suggestions</h1>
      <div className="hidden md:flex w-[90%] mx-auto pb-10">
        {/* {
          !landingApiData == null ?
          <>
          {
            landingApiData?.third_section?.map((data, i) => (
              <div className="flex-1 flex overflow-hidden group justify-end" key={i} >
                <div className="w-fit translate-x-8 z-[100] group-hover:translate-x-5 text-vertical p-2 transition-all pb-8">
                  <h1 className="text-right text-[#3EDCFF] poppins text-[15px] lg:text-[21px] lg:tracking-[10px]">
                    {data?.title}
                  </h1>
                </div>
                <div className="w-full group-hover:translate-x-8 z-[200] transition-all ">
                  <NavLink to='/single-category/neckless' ><img src={ import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-full " /></NavLink>
                </div>
              </div>
            )).reverse()
          }
          </>
          :
          
          <>
          {
            third_section?.section_data?.map((data, i) => (
              <div className="flex-1 flex overflow-hidden group justify-end" key={i} >
            <div className="w-fit translate-x-8 z-[100] group-hover:translate-x-5 text-vertical p-2 transition-all pb-8">
              <h1 className="text-right text-[#3EDCFF] poppins text-[15px] lg:text-[21px] lg:tracking-[10px]">
                  {data?.title}
              </h1>
            </div>
            <div className="w-full group-hover:translate-x-8 z-[200] transition-all ">
              <NavLink to='/single-category/neckless' ><img src={data?.image} className="w-full " /></NavLink>
            </div>
          </div>
            ))
          }
          </>
        } */}
        {
          third_section?.section_data?.map((data, i) => (
            <div className="flex-1 flex overflow-hidden group justify-end" key={i} >
              <div className="w-fit translate-x-8 z-[100] group-hover:translate-x-5 text-vertical p-2 transition-all pb-8">
                <h1 className="text-right text-[#3EDCFF] poppins text-[15px] lg:text-[20px] lg:tracking-[7px]">
                  {data?.title}
                </h1>
              </div>
              <div className="w-full group-hover:translate-x-8 z-[200] transition-all ">
                <NavLink to={data?.route} ><img src={data?.image} className="w-full " /></NavLink>
              </div>
            </div>
          ))
        }
      </div>


      {/* mobile view */}
      <div className="md:hidden">
        <h1 className="lora text-[#231F20] text-[20px] py-4 pl-4 font-[500] italic">
          See our suggestions
        </h1>
        {
          third_section?.section_data?.map((data, i) => (
            <div className="px-3 py-1" key={i} >
              <img src={data?.image} className="w-full" />
            </div>
          ))
        }
        {/* {
          !landingApiData == null ?
          <>
            {
              third_section?.section_data?.map((data, i) => (
                <div className="px-3 py-1" key={i} >
                  <img src={data?.image} className="w-full" />
                </div>
              ))
            }
          </>
          :
          <>
            {
              third_section?.section_data?.map((data, i) => (
                <div className="px-3 py-1" key={i} >
                  <img src={data?.image} className="w-full" />
                </div>
              ))
            }
          </>
        } */}
      </div>
    </>
  );
};

export default ThirdSection;
