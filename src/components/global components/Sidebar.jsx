import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import SidebarAtom from "../../recoil/atoms/sidebar/SidebarAtom";
import arrow_left from "../../assets/icons/Arrow-left-nav.svg";
import home from "../../assets/icons/home-temp.svg";
import { NavLink } from "react-router-dom";
import nav_data from "../../mockapi/mobileNavData";
import up_arrow from "../../assets/icons/up-arrow.svg";
import down_arrow from "../../assets/icons/Arrow-sort.svg";
import navApiAtom from "../../recoil/atoms/global/navApiAtom";

const Sidebar = () => {

  const [navApiData, setNavApiData] = useRecoilState(navApiAtom);


  const [sidebarToggle, setSidebarToggle] = useRecoilState(SidebarAtom);
  const [navListToggle, setNavListToggle] = useState(null);
  const [navSubListToggle, setNavSubListToggle] = useState(null);

  // useEffect(() => {
  //   console.log(navApiData)
  // }, [navApiData])
  

  return (
    <div
      className={`h-screen bg-white transition-all overflow-y-scroll duration-300 max-w-[75vw] fixed z-[1000] right-0 pt-32 ${
        sidebarToggle ? "w-[100%] ease-in" : "w-0 ease-out bg-[#69696913]"
      }`}
    >
      {/* <div className='w-full -translate-y-[75px] pl-5'>
        <Link to='/' ><img src={home} className='w-[40px]' alt="" /></Link>
      </div> */}
      {/* <div className="w-full h-[10px]"></div> */}
      <div className="w-full">
        <ul className="w-full">
          {nav_data?.map((data, i) => {
            return localStorage.getItem("status") ? 
            <div key={i} className={`${data?.title === 'LOGIN' ? 'hidden' : ''} `}>
              <div 
                // to={data?.route}
                
              >
                <li className="poppins text-[#696969d5] border-b border-b-[#6969697c] mx-auto w-[87%] font-[300] flex justify-between items-center py-[13px] text-[18px] tracking-[1px]">
                  {" "}
                  <span className="min-w-[27px] pr-3" onClick={() => {
                  if (navListToggle === data?.title) {
                    setNavListToggle(null);
                  } else {
                    setNavListToggle(data?.title);
                  }
                }}>

                    {
                      data?.routes && data?.sub ? 
                      <img
                      src={
                        navListToggle === data?.title && data?.sub ? down_arrow : arrow_left
                      }
                      className={`${data?.title ? 'w-[10px]' : 'w-[10px]'}`}
                      alt=""
                    />
                       :
                      ''
                    }

                  </span>{" "}
                  <NavLink to={data?.routes} className="pl-3" onClick={() => setSidebarToggle(false)}>{data?.title}</NavLink>
                </li>
              </div>
              <div
                className={`transition-all duration-500 ${
                  navListToggle === data?.title ? "max-h-[250px] overflow-y-scroll h-full ease-in" : "max-h-0 h-0 ease-out p-0 overflow-y-hidden"
                }`}
              >
                {data?.sub?.map((datas, index) => (
                  <React.Fragment key={index}>
                  <ul className="text-right py-2 poppins tracking-[2px] text-[#696969d5] w-[90%] mx-auto"
                  >
                    <li className="w-full flex justify-between items-center py-1 font-[300] text-[13px]">
                      {" "}
                      <span className="ml-5" onClick={() => {
                        if (navSubListToggle === datas) {
                          setNavSubListToggle(null);
                        } else {
                          setNavSubListToggle(datas);
                        }
                      }}>
                        <img src={ navSubListToggle === datas ? down_arrow : arrow_left} className={`${data?.title ? 'w-[10px]' : 'w-[10px]'}`} alt=""/>
                      </span>{" "}
                      {datas}
                    </li>
                  </ul>
                  {}
                  <div className={`transition-all duration-300 ${navSubListToggle === datas ? 'max-h-[145px] overflow-y-hidden ease-in' : 'max-h-0 overflow-y-hidden ease-out'}`}>
                    <ul>
                      {
                        data?.sub_sub[index]?.map((data, sub_index) => (
                          <li key={sub_index} className="poppins text-[12px] text-right py-1 pr-3 text-[#696969b6]">{data?.link_name}</li>
                        ))
                      }
                    </ul>
                  </div>
                    </React.Fragment>
                      ))}
              </div>
            </div>
            :
            <div key={i} className={`${data?.title === 'ACCOUNT' ? 'hidden' : ''} `}>
              <div 
                // to={data?.route}
                
              >
                <li className="poppins text-[#696969d5] border-b border-b-[#6969697c] mx-auto w-[87%] font-[300] flex justify-between items-center py-[13px] text-[18px] tracking-[1px]">
                  {" "}
                  <span className="min-w-[27px] pr-3" onClick={() => {
                  if (navListToggle === data?.title) {
                    setNavListToggle(null);
                  } else {
                    setNavListToggle(data?.title);
                  }
                }}>

                    {
                      data?.routes && data?.sub ? 
                      <img
                      src={
                        navListToggle === data?.title && data?.sub ? down_arrow : arrow_left
                      }
                      className={`${data?.title ? 'w-[10px]' : 'w-[10px]'}`}
                      alt=""
                    />
                       :
                      ''
                    }

                  </span>{" "}
                  <NavLink to={data?.routes} className="pl-3" onClick={() => setSidebarToggle(false)}>{data?.title}</NavLink>
                </li>
              </div>
              <div
                className={`transition-all duration-500 ${
                  navListToggle === data?.title ? "max-h-[250px] overflow-y-scroll h-full ease-in" : "max-h-0 h-0 ease-out p-0 overflow-y-hidden"
                }`}
              >
                {data?.sub?.map((datas, index) => (
                  <React.Fragment key={index}>
                  <ul className="text-right py-2 poppins tracking-[2px] text-[#696969d5] w-[90%] mx-auto"
                  >
                    <li className="w-full flex justify-between items-center py-1 font-[300] text-[13px]">
                      {" "}
                      <span className="ml-5" onClick={() => {
                        if (navSubListToggle === datas) {
                          setNavSubListToggle(null);
                        } else {
                          setNavSubListToggle(datas);
                        }
                      }}>
                        <img src={ navSubListToggle === datas ? down_arrow : arrow_left} className={`${data?.title ? 'w-[10px]' : 'w-[10px]'}`} alt=""/>
                      </span>{" "}
                      {datas}
                    </li>
                  </ul>
                  {}
                  <div className={`transition-all duration-300 ${navSubListToggle === datas ? 'max-h-[145px] overflow-y-hidden ease-in' : 'max-h-0 overflow-y-hidden ease-out'}`}>
                    <ul>
                      {
                        data?.sub_sub[index]?.map((data, sub_index) => (
                          <li key={sub_index} className="poppins text-[12px] text-right py-1 pr-3 text-[#696969b6]">{data?.link_name}</li>
                        ))
                      }
                    </ul>
                  </div>
                    </React.Fragment>
                      ))}
              </div>
            </div>
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
