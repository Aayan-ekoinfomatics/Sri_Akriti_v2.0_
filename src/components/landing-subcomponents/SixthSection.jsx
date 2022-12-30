import React from "react";
import platinum_symbol from "../../assets/images/PGI-Article-Logo.png";
import platinum_png from "../../assets/images/platinum-logo.png";
import triangle_symbol from "../../assets/images/sixth-section-triangle.png";
import logo from "../../assets/icons/logo.png";

const SixthSection = () => {
  return (
    <>
      {/* desktop view */}
      <div className="hidden md:flex w-full flex-col items-center pt-[160px]">
        <h1 className="lora text-[16px] font-[500] tracking-[1px] py-2 ">
          Association with Platinum Guild India
        </h1>
        <div className="flex flex-col py-4 justify-center items-center">
          <img src={platinum_png} className="w-[250px]" />
          <img src={triangle_symbol} className="" />
        </div>
        <div className="h-[1.3px] w-[36%] my-4 mx-auto bg-[#69696965]"></div>
        <div className="w-full text-center">
          <h1 className="lora text-[#696969] text-[25px]">
            Let our Platinum do the talking.
          </h1>
          <h1 className="lora text-[37px] text-[#231F20] text-center italic py-5 pt-10">
            Partners We Choose
          </h1>
          <div>
            <div>{/* partners  */}</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="py-5 pt-20">
              <img src={logo} alt="" />
            </div>
            <p className="lora text-[17px]">
              G-2 , Plot No: E-2,Kacker Golden Enclave
            </p>
            <p className="lora text-[17px]">
              Kanti Chandra Road, Bani Park , Jaipur-302016 ,Rajasthan{" "}
            </p>
            <div className="flex w-[80%] mx-auto justify-center items-center gap-[80px] py-4 text-[28px] italic lora pb-16">
              <p>098291 09149</p>
              <p>sriaakritijewels.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* mobile view */}
      <div className="block md:hidden">
        <p className="lora text-[16px] font-[500] tracking-[1px] py-6 text-center">
          Association with Platinum Guild India
        </p>
        <div className="flex flex-col justify-evenly items-center py-2">
          <img src={platinum_png} className="w-[220px]" />
          <div className="h-[1px] w-[90%] mx-autos bg-[#69696988] mb-2 mt-28"></div>
          <p className="text-[16px] lora text-[#696969] my-4 mb-12">
            Let our Platinum do the talking.
          </p>
          <p className="lora text-[18px] italic font-[400] my-4">
            Partners We Choose
          </p>
          <div className="">
            <img src={logo} />
          </div>
          <p className="lora text-[11px] pt-4 py-2">
            G-2 , Plot No: E-2,Kacker Golden Enclave
          </p>
          <p className="lora text-[11px] py-2">
            Kanti Chandra Road, Bani Park , Jaipur-302016 ,Rajasthan{" "}
          </p>
          <div className="text-[18px] italic my-4 pb-12 flex w-[90%] mx-auto lora justify-between">
            <p>098291 09149</p>
            <p>sriaakritijewels.com</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default SixthSection;
