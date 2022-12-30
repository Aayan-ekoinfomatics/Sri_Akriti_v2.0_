import React, { useEffect, useState } from 'react'
import logo from '../../assets/icons/sri-aakriti-logo.svg'
import order_logo from '../../assets/icons/admin-order-logo.svg'
import products_logo from '../../assets/icons/admin-products-logo.svg'
import admiProductsApi from '../../mockapi/admiProductsApi'
import left_arrow from '../../assets/icons/admin-left-pointer.svg'
import right_arrow from '../../assets/icons/admin-right-pointer.svg'
import search from '../../assets/icons/admin-search-icon.svg'
import { Link, NavLink, useParams } from 'react-router-dom'
import img from '../../assets/icons/no-data-found.svg'
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import edit_icon from '../../assets/icons/admit-edit.svg'
import cross from '../../assets/icons/cross.svg'
import delete_icon from '../../assets/icons/admin-delete.svg'

const ProductsInventoryPage = () => {

    const [searchData, setSearchData] = useState('');

    const [popUpToggle, setPopUpToggle] = useState(null);

    const [filterValue, setFilteredValue] = useState();

    const [singleProduct, setSingleProducts] = useState();
    const [allProducts, setAllProducts] = useState();
    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 10;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = allProducts?.slice(pagesVisited, pagesVisited + usersPerPage)

    const pageCount = Math.ceil(allProducts?.length / usersPerPage);

    const params = useParams()

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    useEffect(() => {
        // let formdata = new FormData();
        // formdata.append("token", localStorage.getItem("token"));
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllProducts').then((response) => {
            // console.log(response?.data)
            setAllProducts(response?.data?.data)
            console.log(Math.ceil(allProducts?.length / usersPerPage))
        })
    }, [])

    // useEffect(() => {
    //     console.log(Math.ceil(allProducts?.length / usersPerPage))
    // }, [])


    useEffect(() => {
        setFilteredValue(admiProductsApi?.products?.filter((filterValue) => {
            if (searchData === '') {
                return filterValue
            } else if (filterValue?.name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.category?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                return filterValue
            }
        }).length)
    }, [searchData])


    return (
        <div className='w-full bg-[#F5F5F5] flex justify-center items-center'>
            <div className='w-full pt-10'>

                {/* mani flex - 1 */}
                <div className='w-[80%] mx-auto'>

                    {/* sub-flex - 1 */}
                    <div className='w-full flex gap-3'>
                        <div className='w-[18%] pb-4'>
                            <div className='w-full flex flex-col justify-end items-center'>
                                <img src={logo} className="w-[85px]" />
                            </div>
                        </div>
                        <div className='w-[82%] flex justify-between items-center'>
                            <div className='w-full'>
                                <h1 className='roboto text-[50px] font-[900]'>Products</h1>
                            </div>
                            <div className='w-fit mr-4'>
                                <Link to='/admin-add-product'><button className='w-[120px] active:scale-[0.98] active:bg-[#e7e7e7] transition-all duration-100 bg-white p-1 rounded-[5px] shadow-md'>Add Products</button></Link>
                            </div>
                        </div>
                    </div>

                    {/* sub-flex - 2 */}
                    <div className='w-full flex gap-3'>

                        {/* content-flex - 1 */}
                        <div className='w-[18%] px-3'>
                            <div className='w-full flex flex-col justify-start items-center pt-[110px] bg-[#3EDCFF] h-[97%] shadow-xl rounded-[14px] my-2'>
                                <NavLink to='/admin-orders' className='w-full block'>
                                    <div className='w-full hover:bg-[#19C7EE] lg:pl-5 py-2 cursor-pointer flex justify-start gap-4 my-2'>
                                        <div>
                                            <img src={order_logo} className="w-[20px]" />
                                        </div>
                                        <div>
                                            <h1 className='roboto text-[17px] font-[500]'>Order</h1>
                                        </div>
                                    </div>
                                </NavLink>
                                <div className='w-full bg-[#19C7EE] lg:pl-5 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                                    <div>
                                        <img src={products_logo} className="w-[20px]" />
                                    </div>
                                    <div>
                                        <h1 className='roboto text-[17px] font-[500]'>Products</h1>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* content-flex - 1 */}
                        <div className='w-[82%]  px-3'>
                            <div className='w-full my-2 mb-4'>
                                <div className='w-full shadow-md rounded-[14px] bg-white flex items-center pl-3 gap-3'>
                                    <span><img src={search} className="w-[15px]" /></span><input type="text" className='w-[95%] py-[8px] px-2rounded-[14px] outline-none' placeholder='Filter Products' onChange={(e) => setSearchData(e.target.value)} />
                                </div>
                            </div>
                            <div className='w-full mt-8'>
                                <div className='w-full grid grid-cols-4 gap-4 justify-center items-center px-[12px]'>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>#</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Name</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Category</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Action</h1>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    {
                                        filterValue > 0 ?
                                            <div>
                                                {
                                                    displayUsers?.filter((filterValue) => {
                                                        if (searchData === '') {
                                                            return filterValue
                                                        } else if (filterValue?.name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.category?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                                                            return filterValue
                                                        }
                                                    }).map((data, i) => (
                                                        <div key={i} className='w-full bg-[#FFFFFF] shadow-md rounded-[14px] py-[8px] px-[11px] my-7'>
                                                            <div className='grid grid-cols-4 gap-4 justify-center items-center'>
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>{data?.id}</h1>
                                                                </div>
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>{data?.name}</h1>
                                                                </div>
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>{data?.category}</h1>
                                                                </div>
                                                                {/* <div className='inline-block flex'>{data?.product_action?.map((sub_data, sub_index) => (
                                                                    <div key={sub_index} className='flex items-center border border-red-500'>
                                                                        <span className='border border-red-500'><img src={sub_data?.img} className="w-[20px]" /></span>
                                                                    </div>
                                                                ))}</div> */}
                                                                <div className='flex justify-center items-center'>
                                                                    <div className='flex gap-5 w-fit items-center'>
                                                                        <Link to={'' + data?.id}>
                                                                            <span className='cursor-pointer'>
                                                                                <img src={edit_icon} className="w-[16px]" />
                                                                            </span>
                                                                        </Link>
                                                                        <span className='cursor-pointer' onClick={() => {
                                                                            let formdata = new FormData();
                                                                            formdata.append("id", data?.id);
                                                                            formdata.append("token", localStorage.getItem("token"));
                                                                            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'profileView', formdata).then((response) => {
                                                                                // console.log(response?.data)
                                                                                // setAllProducts(response?.data?.data)
                                                                            })
                                                                        }}><img src={delete_icon} className="w-[14px]" /></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                            :
                                            <div className='w-full h-[65vh] flex flex-col gap-8 justify-center items-center'>
                                                <div className='w-fit grayscale-[50%]'>
                                                    <img src={img} className="w-[180px]" />
                                                </div>
                                                <div className='text-center text-[#7C7A7A]'>
                                                    <p className='roboto text-[14px]'>No results found</p>
                                                </div>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* mani flex - 2 */}
                <div className='w-full flex justify-center items-center pt-4 relative'>
                    {/* <div className='flex items-center gap-3'>
                        <span className='mr-3' ><img src={left_arrow} className="w-[11px]" /></span>
                        {
                            admiProductsApi?.page_number_data?.map((num_data, num_index) => (
                                <p key={num_index} className='mx-1 text-[#718096] text-[12px]'>{num_data}</p>
                            ))
                        }
                        <span className='ml-3' ><img src={right_arrow} className="w-[11px]" /></span>
                    </div> */}
                    <ReactPaginate
                        // previousLabel={'←'}
                        previousLabel={<img src={left_arrow} />}
                        // nextLabel={'→'}
                        nextLabel={<img src={right_arrow} />}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationButtons'}
                        previousLinkClassName={'previousBtn'}
                        nextLinkClassName={'nextBtn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    />
                    <div className='absolute right-[13%]'>
                        <p className='text-[#718096] text-[14px]'>Showing 11- 20 of 64 results</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsInventoryPage