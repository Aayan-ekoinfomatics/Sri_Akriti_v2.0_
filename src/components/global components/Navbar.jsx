import React, { useEffect, useState } from "react";
import logo from "../../assets/icons/logo.png";
import cart from "../../assets/icons/cart.svg";
import search from "../../assets/icons/search.svg";
import mobile_menu from "../../assets/icons/menu-mobile.svg";
import cross from "../../assets/icons/cross.svg";
import transparent_logo from "../../assets/icons/transparent-logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import nav_data from "../../mockapi/mobileNavData";
import heart from '../../assets/icons/heart-outline.svg'
import SidebarAtom from "../../recoil/atoms/sidebar/SidebarAtom";
import navApiAtom from "../../recoil/atoms/global/navApiAtom";
import { useRecoilState } from "recoil";
import profile from '../../assets/icons/profile.svg'
import cart_out from '../../assets/icons/my_orders.svg'
import logout from '../../assets/icons/logout.svg'
import categoriesApiAtom from "../../recoil/atoms/products/categoriesApiAtom";
// import PersonIcon from '@material-ui/icons/Person';
import axios from "axios";
import cartAtom from "../../recoil/atoms/cart/cartAtom";

const Navbar = () => {

  const navigate = useNavigate();

  const [navToggle, setNavToggle] = useRecoilState(SidebarAtom);

  const [navApiData, setNavApiData] = useRecoilState(navApiAtom);

  const [categoryApiData, setCategoryApiData] = useRecoilState(categoriesApiAtom);

  const [searchToggle, setSearchToggle] = useState(false);

  const [cartData, setCartData] = useRecoilState(cartAtom);

  // const [navID, setNavID] = useState({id : null, title: null});

  const [searchItem, setSearchItem] = useState("");
  const [navHoverShow, setNavHoverShow] = useState(null);

  // const handleIDSend = () => {
  //   setNavID({id: data?.id, title: data?.title})
  //   axios.get( + navID).then((response) => response?.data)
  // }

  // var formdata = new FormData();
  // formdata.append("id", navID?.id);
  // formdata.append("title", navID?.title);

  // useEffect(() => {
  //   let formdata = new FormData();
  //   formdata.append("token", localStorage.getItem("token"));
  //   formdata.append("no_login_token", localStorage.getItem("no_login_token"));
  //   axios.get(import.meta.env.VITE_APP_BASE_API_LINK + "getUserCart").then((response) => {
  //     setCartData(response?.data)
  //   }).catch(function (error) {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    let formdata = new FormData();
    formdata.append("token", localStorage.getItem("token"));
    formdata.append("no_login_token", localStorage.getItem("no_login_token"));
    axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getUserCart', formdata).then((response) => {
      console.log(response?.data)
      setCartData(response?.data)
    })
  }, [])

  // useEffect(() => {
  //   console.log(cartData, 'cart');
  // }, [cartData])                                                                                


  return (
    <div className="relative">
      <header className="w-full flex justify-end items-end z-[999]">
        {/* desktop menu */}
        <nav className="hidden md:flex justify-evenly pb-0 w-[95%] mx-auto">
          <div className="pr-6 lg:pr-0 flex justify-center items-center pb-7 lg:pb-4">
            <Link to="/">
              <img src={logo} className="w-[80px] lg:w-[140px]" />
            </Link>
          </div>

          <ul className="w-full flex justify-between lg:justify-evenly items-center pr-2">
            {
              nav_data?.slice(0, 8)?.map((data, i) => {
                return localStorage.getItem("status") ?
                  <div className={`${data?.title === 'LOGIN' ? 'hidden' : ''}`} onMouseLeave={() => setNavHoverShow(null)} key={i}>
                    <NavLink to={data?.routes} onMouseEnter={() => { setNavHoverShow(data?.title) }}>
                      <li className={`cursor-pointer group flex flex-col w-full pb-8`}>
                        <p className="uppercase poppins font-[300] text-[15px] lg:text-[18px]">{data?.title}</p>
                        <span className={`h-[1px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-black ${navHoverShow === data?.title ? 'max-w-full' : 'max-w-0'}`}></span>
                      </li>
                    </NavLink>
                    <div className={`absolute flex flex-col gap-2 top-[80%] right-[14%] w-[280px] bg-white shadow-sm overflow-hidden transition-all duration-100 ${navHoverShow === "ACCOUNT" ? 'h-[150px] pt-3 py-2' : 'h-0'}`}>
                      <NavLink to='/account' className="py-2 w-[90%] px-4 mx-auto flex justify-between items-center hover:bg-[#69696950]" onClick={() => {
                        setNavHoverShow(null)
                      }}>
                        <p className="poppins text-[14px]">My Profile</p>
                        <div><img src={profile} className="w-[14px]" /></div>
                      </NavLink>
                      <NavLink to='/orders' className="py-2 w-[90%] px-4 mx-auto flex justify-between items-center hover:bg-[#69696950]" onClick={() => {
                        setNavHoverShow(null)
                      }}>
                        <p className="poppins text-[14px]">My Orders</p>
                        <div><img src={cart_out} className="w-[14px]" /></div>
                      </NavLink>
                      <button className="py-2 w-[90%] px-4 mx-auto flex justify-between items-center hover:bg-[#69696950]" onClick={() => {
                        localStorage.clear()
                        navigate('/')
                      }}>
                        <p className="poppins text-[14px]">Logout</p>
                        <div><img src={logout} className="w-[14px]" /></div>
                      </button>
                    </div>
                  </div>
                  :
                  <div className={`${data?.title === 'ACCOUNT' ? 'hidden' : ''}`} onMouseLeave={() => setNavHoverShow(null)} key={i}>
                    <NavLink to={data?.routes} onMouseEnter={() => { setNavHoverShow(data?.title) }}>
                      <li className={`cursor-pointer group flex flex-col w-full pb-5`}>
                        <p className="uppercase poppins font-[300] text-[15px] lg:text-[20px]">{data?.title}</p>
                        <span className={`h-[1px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-black ${navHoverShow === data?.title ? 'max-w-full' : 'max-w-0'}`}></span>
                      </li>
                    </NavLink>
                  </div>
              })
            }
          </ul>

          <div className="pl-5 lg:pl-0 w-[10%] gap-3 lg:gap-8 hidden md:flex justify-end md:justify-start items-center pb-7">
            {
              localStorage.getItem("status") === 'true' ?
                <NavLink className={`min-w-[16px]`} to='/wishlist'><img src={heart} className="w-[16px] lg:w-[22px]" /></NavLink>
                :
                null
            }
            {
              cartData?.products?.length > 0 ?
                <div className="relative">
                  <div className="absolute bottom-[60%] flex justify-center items-center left-[60%] w-[20px] h-[20px] rounded-full bg-red-500 border border-white">
                    <h1 className="text-white text-[12px]">{cartData?.products?.length}</h1>
                  </div>
                  <NavLink className={`min-w-[16px]`} to='/cart' ><img src={cart} className="w-[16px] lg:w-[24px]" /></NavLink>
                </div>
                :
                <NavLink className={`min-w-[16px]`} to='/cart' ><img src={cart} className="w-[16px] lg:w-[24px]" /></NavLink>
            }

            {/* <img src={search} className={`min-w-[16px] w-[16px] lg:w-[22px] cursor-pointer ${localStorage.getItem("status") === 'true' ? 'ml-0' : 'ml-8'}`} onClick={() => setSearchToggle(!searchToggle)} />
            <div className={`absolute transition-all bg-white ${searchToggle ? 'w-[390px] border border-[#696969b6] ease-in' : 'w-0 ease-out overflow-hidden'} top-[19%] right-[6%]`}>
              <input type="search" className="w-full p-2 outline-none" />
            </div> */}
          </div>
        </nav>


        {/* mobile menu */}
        <div className="sticky w-full flex flex-col items-center md:hidden pb-5">
          <div className="sticky top-0 bg-white z-[999] flex w-[95%] justify-between items-center pt-2">
            <div className="flex-1 flex justify-start items-end">
              <Link to="/account">
                <img src={profile} className='w-full min-w-[30px]' alt="" />
              </Link>
            </div>
            <div className="flex-1">
              <Link to="/">
                <img src={logo} className="w-[100px] mx-auto" />
              </Link>
            </div>
            <div className="flex-1 flex md:hidden justify-end gap-4 sm:gap-8 pr-2">
              <Link to="/cart">
                <img src={cart} className="w-[27px] mr-12" />
              </Link>
            </div>
          </div>
          {/* <div className="sticky top-[73px] bg-white z-[999] border mt-5 flex w-[93%] p-2 border-[#696969] mx-auto ">
            <input
              type="text"
              className="w-full outline-none"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
            <img src={search} className="w-[35px] p-1" />
          </div> */}
        </div>
      </header>

    </div>
  );
};

export default Navbar;
