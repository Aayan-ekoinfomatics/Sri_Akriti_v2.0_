import React from "react";
import { useState } from "react";
import aboutus_img from "../../assets/images/about-us.png";
import about_us from "../../mockapi/aboutUsApiData";

const AboutUs = () => {

  const [searchFilter, setSearchFilter] = useState('');


  return (
    <div className="">
      <div className="hidden md:block w-full text-center lora text-[32px] tracking-[2px] mt-14 mb-12">
        <h1>About Us</h1>
      </div>
      <div className="mt-5 md:mt-0 mb-32 flex flex-col md:flex-row justify-evenly md:justify-start gap-12 md:gap-2 items-center w-[95%] mx-auto">
        <div className="w-[95%] md:w-full md:max-w-[550px] mx-auto">
          <img src={aboutus_img} className="w-full md:max-w-[550px]" />
        </div>
        <div className="w-full max-w-[700px] px-4 mx-auto flex flex-col items-start gap-14 md:gap-7">
          {about_us?.about?.map((data, i) => (
            <React.Fragment key={i}>
              <p className="poppins text-[12px] md:text-[14px] tracking-[2px]">
                {data?.text_1}
              </p>
              <p className="poppins text-[12px] md:text-[14px] tracking-[2px]">
                {data?.text_2}
              </p>
            </React.Fragment>
          ))}
        </div>
      </div>
      {/* <div className="w-full flex justify-center items-center h-[70vh]">
        <div className="w-full max-w-[400px]">
          <div className="w-full px-3">
            <input type="text" placeholder="search" className="w-full px-3 py-1 rounded-[10px]" onChange={(e) => setSearchFilter(e.target.value)}/>
          </div>
          <div className="w-full">
            <div className="w-full text-center">
              <h1 className="poppins">All products</h1>
            </div>
            <div className="w-full h-[400px] overflow-y-scroll">
              {
                about_us?.veggies?.filter((filter_value, filter_index) => {
                  if(searchFilter === '') {
                    return filter_value
                  }else if(filter_value?.name?.toLowerCase()?.includes(searchFilter?.toLowerCase())) {
                    return filter_value
                  } 
                })?.map((veggie, index) => {
                  return (
                    <div className="w-full px-3 my-4 rounded-[10px] flex justify-between shadow-md" key={index}>
                      <div className="flex flex-col justify-evenly">
                        <h1 className="poppins text-[15px]">{veggie?.name}</h1>
                        <h1 className="poppins text-[13px]">v-id: {veggie?.id}</h1>
                        <h1 className="poppins text-[14px]">Rs {veggie?.price}</h1>
                      </div>
                      <div className="w-[50%]">
                        <img src={veggie?.photo_url} className="w-[120px]" />
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
