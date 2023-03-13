import React from "react";
import { useState } from "react";
import aboutus_img from "../../assets/images/about-us.png";
import about_us from "../../mockapi/aboutUsApiData";

const AboutUs = () => {

  const [searchFilter, setSearchFilter] = useState('');


  return (
    <div className="">

      {/* header */}
      <div className="hidden md:block w-full text-center lora text-[32px] tracking-[2px] my-14">
        <h1>About Us</h1>
      </div>

      {/* content */}
      <div className="mt-5 md:mt-0 mb-32 flex flex-col md:flex-row justify-evenly md:justify-start gap-10 items-start w-[95%] mx-auto">

        {/* image */}
        <div className="w-[90%] mx-auto md:w-full md:max-w-[550px]">
          <img src={aboutus_img} className="w-full md:max-w-[550px]" />
        </div>

        {/* bullet points */}
        <ul className="w-full max-w-[800px] px-4 flex flex-col items-start list-disc">
          {about_us?.about?.map((data, i) => (
            <div key={i} className='flex justify-start items-start gap-2'>
              <div className="w-[6px] h-[6px] rounded-full bg-gray-500 mt-2">

              </div>
              <li className="flex justify-start items-start gap-2 w-full mb-2">
                <p className="poppins text-[11px] md:text-[12px] lg:text-[14px] tracking-[2px]">
                  {data?.text}
                </p>
              </li>
            </div>
          ))}
        </ul>
      </div>

      {/* the team */}
      <div className="w-full mb-[200px]">
        <div className="w-[90%] md:w-[55%] mx-auto my-5 mb-[60px] pt-10 border-t-2 border-gray-200">
          <h1 className="text-[22px] font-[500]">Meeet our team</h1>
        </div>
        <div className="w-[90%] md:w-[55%] mx-auto mt-5">
          {
            about_us?.team?.map((data, i) => (
              <div key={i} className='w-full flex flex-col justify-start items-start gap-3 mb-10'>
                <div className="w-fit border border-gray-500">
                  <img src={data?.image} className='w-full max-w-[200px]' alt="" />
                </div>
                <div className="w-full">
                  <p className="text-[14px]">{data?.description}</p>
                </div>
              </div>
            ))
          }
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
