import React from "react";
import rings from "../../assets/images/rings.png";
import second_img_mobile from '../../assets/images/second-section-mobile.png'
import arrow from '../../assets/icons/arrow.svg'

const SecondSection = () => {
  return (
    <>
      {/* desktop view */}
      <div className=" hidden md:flex flex-col p-4 relative">
        {/* 1 */}
        <div className="flex-1 flex w-full justify-center">
          <div className=" w-full"></div>
          <div className="w-full flex p-2">
            <div className="flex-[0.7] flex items-start translate-y-[70px]">
              <div className="border-l-2 border-t-2 border-[#69696975] h-[80%] translate-y-[2px] flex-1"></div>
              <div className="w-[7px] aspect-square rounded-full bg-[#6969697c] ml-[1px]"></div>
            </div>
            <div className="flex-[1.3]">
              <h1 className="text-[80px] leading-[1.2] pb-5 tracking-wide pl-6 poppins font-extralight">
                pure
              </h1>
              <ul className="flex flex-col list-disc pl-8 text-wrap break-words">
                <li className="text-[#595959] poppins text-[18px]">
                  Platinum Jewellery:{" "}
                  <span className="text-[18px] text-[#] font-semibold">
                    95% Pure
                  </span>
                </li>
                <li className="text-[#595959] poppins text-[18px]">
                  Platinum{" "}
                  <span className="text-[18px] text-[#] font-semibold">
                    is naturally white
                  </span>
                  , so will not cast any colour into a diamond, enhances natural
                  brilliance of diamonds
                </li>
                <li className="text-[#595959] poppins text-[18px]">
                  Platinum is{" "}
                  <span className="text-[18px] text-[#] font-semibold">
                    Hypo-Allergenic/Skin Safe
                  </span>
                </li>
                <li className="text-[#595959] poppins text-[18px]">
                  <span className="text-[18px] text-[#] font-semibold">
                    Purity Assurance Card: Pt 950 mark
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="flex-1 flex w-full">
          <div className="w-[32%] flex flex-col pl-[360px]">
            {/* <div className="flex-[0.6]">2.1.1</div>
          <div className="flex-[1.4] flex items-end bg-pink-300">
            <div className="w-[7px] aspect-square rounded-full bg-[#696969] ml-[1px]"></div>
            <div className="border-l-2 border-t-2 border-[#696969] h-full translate-y-[2px] flex-1"></div>
          </div> */}
          </div>
          <div className="w-[68%]">
            <div className="">
              <img src={rings} className="w-[650px]" />
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="flex-1 p-2 flex">
          <div className="w-[50%]"></div>
          <div className="w-[50%]  flex items-start">
            <div className=" flex items-end min-w-[200px] flex-1 h-[40%]">
              <div className="border-l-2 border-b-2 border-[#69696975] h-[90%] translate-y-[2px] -translate-x-[1px] flex-1"></div>
              <div className="w-[7px] aspect-square rounded-full bg-[#6969697c] ml-[1px] translate-y-[4px]"></div>
            </div>
            <div className="translate-y-[40px] flex-1">
              <h1 className="text-[80px] leading-[1.2] pb-5 tracking-wide pl-6 poppins font-extralight">
                rare
              </h1>
              <ul className="list-disc flex flex-col pl-8 -translate-x-[100px] w-full">
                <li className="text-[#595959] poppins text-[18px]">
                  Platinum being{" "}
                  <span className="text-[18px] text-[#] font-semibold">
                    30 times
                  </span>{" "}
                  rarer than gold, is an exclusive offering.
                </li>
                <li className="text-[#595959] poppins text-[18px]">
                  Only a few will have this{" "}
                  <span className="text-[18px] text-[#] font-semibold">
                    precious metal
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div className="flex-1 flex">
          <div className="flex flex-col flex-1">
            <div className="flex flex-col items-center">
              <div className=" absolute top-[380px] w-[40%] mr-16">
                <div className="flex">
                  <div className="flex-1">
                    {/* <div className="border-l-2 border-t-2 h-[160px] w-[100%] bg-pink-500"></div>
              <div className="w-[3px] aspect-square rounded-full bg-black"></div> */}
                  </div>
                  <div className="flex-1">
                    <div className="border-l-2 border-t-2 h-[160px] w-[40%] border-[#69696975] mb-[1px]"></div>
                    <div className="w-[7px] -translate-x-[2px] aspect-square rounded-full bg-[#69696975]"></div>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <h1 className="text-[80px] leading-[1.2] pb-5 tracking-wide pl-6 poppins font-extralight" >eternal</h1>
                  <ul className="list-disc flex flex-col" >
                    <li className="text-[#595959] poppins text-[18px]" >
                      Thanks to its <span className="text-[18px] text-[#] font-semibold" >density</span> , Platinum is the perfect
                      choice for a lifetime of <span className="text-[18px] text-[#] font-semibold" >everyday wear</span>{" "}
                    </li>
                    <li className="text-[#595959] poppins text-[18px]" >
                      When scratched, <span className="text-[18px] text-[#] font-semibold" >negligible metal loss</span>{" "}
                    </li>
                    <li className="text-[#595959] poppins text-[18px]" >
                      It also offers an extremely{" "}
                      <span className="text-[18px] text-[#] font-semibold" >secure setting for diamonds</span> and otherprecious
                      gem stones making your jewellery{" "}
                      <span className="text-[18px] text-[#] font-semibold" >truly everlasting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="flex-1"></div>
        </div>
        {/* 5 */}
        <div className="flex-1 pt-16">
          <p className="text-[150px] font-golden_signature text-[#3EDCFF]">
            A history made of Platinum
          </p>
        </div>
      </div>

      {/* mobile view */}
      <div className="md:hidden">
        <div className="w-full flex justify-end">
          <div className="" ><img src={second_img_mobile} className="" /></div>
        </div>
        <h1 className="lora pt-8 text-[20px] text-[#262626c2] italic pl-4">Sri Aakriti The Store</h1>
        <div className="flex px-10 pt-5 gap-3 justify-end items-end">
          <div className="pb-4">
            <p className="text-md poppins text-[14px] text-[#262626c2]">We specialize in Pt950 and Pt/K18 men's chains, bracelets and kada's. We use your Diamonds to create your dream designs into to live piece. A PGI authorized manufacturer. </p>
          </div>
          <div>
            <img src={arrow} className="w-[25px]" />
          </div>
        </div>
        <h1 className="py-4 font-golden_signature text-[#41C5BE] text-[70px] text-center">A history made of Platinum</h1>
      </div>
    </>
  );
};

export default SecondSection;
