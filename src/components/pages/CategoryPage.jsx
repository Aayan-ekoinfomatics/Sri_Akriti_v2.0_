import React, { useState, useEffect } from "react";
import search from "../../assets/icons/search.svg";
import collection_data from "../../mockapi/apiData.js";
import sort_data from "../../mockapi/allCollectionSortData.js";
import heart_outline from "../../assets/icons/heart-outline.svg";
import heart_filled from "../../assets/icons/heart-filled.svg";
import down_arrow from "../../assets/icons/Arrow-sort.svg";
import up_arrow from "../../assets/icons/up-arrow.svg";
import filter from "../../assets/icons/filter.svg";
import { Link, NavLink, useParams } from "react-router-dom";
import categoriesApiAtom from "../../recoil/atoms/products/categoriesApiAtom";
import { useRecoilState } from "recoil";
import singleProductApiAtom from "../../recoil/atoms/products/singleProductApiAtom";
import axios from "axios";
import wishlistApiAtom from "../../recoil/atoms/wishlist/wishlistApiAtom";
import { toast } from "react-toastify";


const CategoryPage = () => {

  const [searchItem, setSearchItem] = useState("");

  const [categoryApiData, setCategoryApiData] = useRecoilState(categoriesApiAtom);

  const [productApi, setProductApi] = useRecoilState(singleProductApiAtom)

  const [sortToggle, setSortToggle] = useState(false);
  const [wishlistToggle, setWishlistToggle] = useRecoilState(wishlistApiAtom);
  const [filterToggle, setFilterToggle] = useState(false);
  const [desktopSort, setDesktopSort] = useState(false);

  const [filterSubCategory, setFilterSubCategory] = useState(null);

  const params = useParams();

  // useEffect(() => {
  //   console.log(categoryApiData)
  // }, [categoryApiData])

  window.addEventListener("click", (event) => {
    const sort = document?.getElementById("sort");

    if (sort) {
      if (!sort?.contains(event?.target)) {
        setSortToggle(false);
      }
    }
  });

  useEffect(() => {
    console.log(categoryApiData)
  }, [categoryApiData])

  useEffect(() => {
    let formdata = new FormData();
    // formdata.append("id", data?.id);
    formdata.append("category_name", params?.category_id);
    formdata.append("token", localStorage.getItem("token"));
    axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'categoryPageNew', formdata).then((response) => {
      // console.log(response?.data)
      setCategoryApiData(response?.data)
      setWishlistToggle(response?.data?.wishlist_array)
      localStorage.setItem("wishlist_array", response?.data?.wishlist_array)
    })
    // console.log(response)
  }, [params])

  // useEffect(() => {
  //  console.log( "wishlist toggle",wishlistToggle)
  // }, [wishlistToggle])



  const handleClick = () => {
    setFilterToggle(false);
    setFilterSubCategory(null);
  };

  return (
    <div>
      <div className="w-full pb-[100px]">

        {
          categoryApiData?.category === "collection" ? (
            <>
              <h1 className="text-center text-[30px] md:text-[3.438rem] lora font-semibold py-8 pt-16 uppercase">
                {/* {params.category_id} */}
                {categoryApiData?.category}
              </h1>
              <div className="w-full hidden md:block md:w-[43%] lg:w-[33%] mx-auto pt-10 pb-20">
                <div className=" border mt-5 flex w-[90%]  border-[#69696959] mx-auto ">
                  <input
                    type="text"
                    className="w-full outline-none px-5 py-3 text-[15px] lg:text-[18px] font-[300] poppins tracking-[2px] bg-[#b0b0b00a]"
                    placeholder="Seach your type of Platinum"
                    onChange={(e) => setSearchItem(e.target.value)}
                    value={searchItem}
                  />
                  <img src={search} className="w-[35px] mx-2 px-1" />
                </div>
              </div>
            </>
          ) : (
            <div className={`w-full bg-white bg-cover bg-no-repeat bg-center`}
              style={{ backgroundImage: `url(${import.meta.env.VITE_APP_BASE_API_LINK + categoryApiData?.data?.category_image})` }}
            >
              <div className="w-full text-center py-8 md:text-left sm:p-3 mb-10 md:p-6 md:py-32 bg-black bg-opacity-60 md:bg-opacity-20">
                <h1 className="lora text-[28px] md:text-[45px] tracking-[1px] font-[600] my-5 md:my-16 pl-10 w-full uppercase">
                  {categoryApiData?.category}
                </h1>
                {/* <p className="poppins text-[12px] md:text-[14px] tracking-[2px] my-5 md:my-16 w-full pl-10">
                    {categoryApiData?.category_details}
                  </p> */}
              </div>
              {/* <div className='hidden md:block w-[40%] bg-cover bg-no-repeat bg-top4'  ></div> */}

            </div>
          )
        }

        {/* filter mobile */}
        {/* <div
          className={`w-full sm:w-[80%] mx-auto px-2 sm:px-6 text-[#696969] text-[18px] sm:text-[20px] poppins lg:hidden flex justify-between`}
        >
          <div
            className={`border border-[#69696996] flex flex-col tracking-[4px] sm:tracking-[6px] p-2 sm:p-4 over cursor-pointer ${sortToggle ? "bg-white" : "bg-[#b0b0b00a]"
              }`}
            id="sort"
          >
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  onClick={() => setSortToggle(!sortToggle)}
                  className=""
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                >

                  <span className="">
                    <img src={down_arrow} className="w-full max-w-[18px]" />
                  </span>
                </button>
              </div>

              {sortToggle ? (
                <>
                  <div
                    className="absolute left-0 z-10 mt-2 w-56 origin-top-right bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1" role="none">
                      {sort_data?.sort?.map((data, i) => (
                        <a
                          key={i}
                          className="text-gray-700 w-[80%] my-2 bg-white mx-auto hover:bg-blue-200 flex justify-between items-center tracking-[2px] poppins px-4 py-2 text-[14px] md:text-[16px] active:scale-[1.1] transition-all"
                          role="menuitem"
                          tabIndex="-1"
                          id="menu-item-0"
                        >
                          {data?.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          </div>

          <div
            id="filter"
            className={`border cursor-pointer border-[#69696996] flex justify-between gap-5 items-center tracking-[4px] sm:tracking-[6px] p-2 text-[14px] md:text-[16px] sm:p-4 over ${filterToggle ? "bg-white" : "bg-[#b0b0b00a]"
              }`}
            onClick={() => setFilterToggle(!filterToggle)}
          >
            <span>
              <img src={filter} className="w-[80%]" />
            </span>
            FILTER
          </div>
        </div> */}

        {/* mobile filter pop up */}

        {/* overlay */}
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 bg-[#00000071] z-[1004] transition-all ${filterToggle
            ? "h-full ease-in  duration-500"
            : "h-0 ease-out  duration-500"
            }`}
          onClick={() => handleClick()}
        ></div>

        {/* pop up */}
        <div
          className={`fixed lg:hidden flex flex-col justify-end bottom-0 overflow-scroll w-full bg-white z-[1005] transition-all duration-500 ${filterToggle ? "h-fit ease-in overflow-scroll" : "h-0 ease-out"
            }`}
        >
          <h1 className="text-center py-4 pt-5 tracking-[6px] text-[#00000088] poppins text-[20px]">
            FILTERS
          </h1>
          {sort_data?.filter.map((datas, index) => (
            <React.Fragment key={index}>
              <div
                className="flex justify-between list-none py-4 tracking-[3px] text-[#00000088] poppins mx-auto w-[90%]"
                key={index}
                onClick={() => {
                  if (filterSubCategory === datas?.name) {
                    setFilterSubCategory(null);
                  } else {
                    setFilterSubCategory(datas?.name);
                  }
                }}
              >
                <button>{datas?.name}</button>
                <li className="flex gap-4 justify-between items-center">
                  {" "}
                  <span>
                    <img
                      src={
                        filterSubCategory === datas?.name
                          ? up_arrow
                          : down_arrow
                      }
                      className="w-[19px] cursor-pointer"
                    />
                  </span>{" "}
                  <p className="w-[20px] text-left">{datas?.total_number}</p>
                </li>
              </div>
              <div
                className={`w-full overflow-hidden pl-2 bg-[#69696911] ${filterSubCategory === datas?.name
                  ? "max-h-[200px] overflow-y-scroll transition-all duration-500 ease-in py-2"
                  : "max-h-0 transition-all duration-500 ease-out"
                  } flex  flex-col justify-center items-start`}
              >
                {datas?.sub_filter.map((sub_data, sub_index) => (
                  <ul
                    className="py-2 cursor-pointer pl-4 poppins text-[15px] tracking-[2px] text-[#00000088]"
                    key={sub_index}
                  >
                    {" "}
                    <input type="checkbox" className="" name="" id="" />{" "}
                    {sub_data}
                  </ul>
                ))}
              </div>
            </React.Fragment>
          ))}
          <div className="flex justify-evenly w-full bg-[#b0b0b03f] py-[40px] ">
            <button className="border-2 p-4 bg-white tracking-[2px] px-6 text-[14px] ">
              CLEAR ALL
            </button>
            <button className="border-2 p-4 bg-[#3EDCFF] tracking-[2px] px-6 text-[14px] ">
              APPLY FILTER
            </button>
          </div>
        </div>

        <div className="flex self-start w-full md:w-[95%] gap-5 mx-auto mt-16 pt-5 h-full">
          {/* filter desktop*/}
          {/* <div className="sticky top-0 w-[20%] hidden lg:flex flex-col">

            sort desktop
            <label className="poppins text-[10px] pb-1 tracking-[1px]">Sort</label>
            <div className=" border w-full flex justify-between items-center p-2 relative">
              <h1 className="lora tracking-[1px] text-[15px] font-[500]">Featured</h1>
              <div className="flex justify-center items-center cursor-pointer w-fit p-3" onClick={() => setDesktopSort(!desktopSort)}>
                <img src={down_arrow} className="w-[20px] cursor-pointer" />
              </div>
              <div className={` absolute top-[105%] left-0 shadow-lg z-[1000] bg-white w-full transition-all duration-200 overflow-y-hidden ${desktopSort ? 'h-[230px] ease-in' : 'h-0 ease-out'}`}>
                {
                  collection_data?.sort?.map((data, i) => (
                    <h1 className="py-[5px] pl-4 lora text-[15px] font-[500] hover:bg-[#D9D9D9] cursor-pointer" key={i}>{data?.title}</h1>
                  ))
                }
              </div>
            </div>

            {collection_data?.filters?.map((data, i) => (
              <div
                key={i}
                className="py-6"
                style={{
                  borderBottom:
                    collection_data?.filters.length === i + 1
                      ? ""
                      : "1px solid #C0C0C0",
                }}
              >
                <h1 className="py-4 poppins text-[1.563rem] tracking-[2px] text-[#000000f3]">
                  {data?.title}
                </h1>
                <div>
                  {data?.checkbox?.map((datas, index) => (
                    <div key={index} className="py-2 flex gap-4">
                      <input type="checkbox" value={datas} name={datas} />
                      <label
                        htmlFor={datas}
                        className="text-[1rem] tracking-[1px] poppins font-[300]"
                      >
                        {datas}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div> */}

          {/* products */}

          <div className="flex-1 grid gap-[8px] md:gap-8 grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-2">
            {categoryApiData?.data
                  ?.filter((filterValue) => {
                    if (searchItem === "") {
                      return filterValue;
                    } else if (
                      filterValue?.name
                        ?.toLowerCase()
                        ?.includes(searchItem?.toLowerCase()) ||
                      filterValue?.category
                        ?.toLowerCase()
                        ?.includes(searchItem?.toLowerCase())
                    ) {
                      return filterValue;
                    }
                  })
                  ?.map((data, i) => (
              <div className="relative my-2 " key={i}>
                <div className=" absolute top-0 right-0 cursor-pointer mt-4 mr-5" onClick={() => {

                  let formdata = new FormData();
                  // formdata.append("id", data?.id);
                  formdata.append("token", localStorage.getItem("token"));
                  formdata.append("product_id", data?.id);
                  axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'userWishlist', formdata).then((response) => {
                    console.log(response?.data)
                    if (response?.data?.status) {
                      localStorage.setItem("wishlist_array", response?.data?.wishlist_array)
                      setWishlistToggle(response?.data?.wishlist_array)
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
                      alert("Please log in to add to wishlist")
                    }
                    // setProfileApiData(response?.data)
                  })
                }}>
                  <img src={localStorage.getItem("wishlist_array")?.includes(data?.id) ? heart_filled : heart_outline} className="w-[25px]" />
                </div>
                <div className="">
                  <div>
                    <NavLink
                      to={'/product-details' + '/' + data?.id}
                    ><img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} alt="" /></NavLink>
                  </div>
                  {/* <div className="pl-1 flex gap-2 items-center w-[70%]">
                    <p className="font-[400] poppins text-[0.9rem] md:text-[19px] tracking-[1.4px] pl-1">
                      ₹{data?.actual_price}
                    </p>
                    <p className="font-[300] poppins text-[0.95rem] md:text-[15px] tracking-[2px] pl-1 line-through">
                      ₹{data?.selling_price}
                    </p>
                  </div> */}
                  <p className="pl-2 font-[300] poppins text-[0.9rem] md:text-[19px] tracking-[1.4px]">
                    {data?.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
