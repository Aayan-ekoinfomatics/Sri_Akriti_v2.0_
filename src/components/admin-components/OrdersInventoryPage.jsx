import React, { useEffect, useState } from 'react'
import logo from '../../assets/icons/sri-aakriti-logo.svg'
import order_logo from '../../assets/icons/admin-order-logo.svg'
import products_logo from '../../assets/icons/admin-products-logo.svg'
import admiProductsApi from '../../mockapi/admiProductsApi'
import adminOrdersApi from '../../mockapi/adminOrdersApi'
import left_arrow from '../../assets/icons/admin-left-pointer.svg'
import right_arrow from '../../assets/icons/admin-right-pointer.svg'
import search from '../../assets/icons/admin-search-icon.svg'
import img from '../../assets/icons/no-data-found.svg'
import { Link, NavLink, useParams } from 'react-router-dom'
import ReactPaginate from 'react-paginate'
import AdminSidebar from '../global components/AdminSidebar'
import axios from 'axios'
import edit_icon from '../../assets/icons/admit-edit.svg'
import delete_icon from '../../assets/icons/admin-delete.svg'
import see from '../../assets/icons/eyes_open.svg'
import dont_see from '../../assets/icons/eyes_closed.svg'


const OrdersInventoryPage = () => {

    const [searchData, setSearchData] = useState('');
    const [filterValue, setFilteredValue] = useState();

    const params = useParams()

    const [allOrders, setAllOrders] = useState()

    useEffect(() => {
        // let formdata = new FormData();
        // formdata.append("token", localStorage.getItem("token"));
        axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders').then((response) => {
            // console.log(response?.data)
            setAllOrders(response?.data)
        })
    }, [])

    // useEffect(() => {
    //     console.log(allOrders)
    // }, [allOrders])

    useEffect(() => {
        setFilteredValue(adminOrdersApi?.products?.filter((filterValue) => {
            if (searchData === '') {
                return filterValue
            } else if (filterValue?.order_name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.order_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.order_category?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                return filterValue
            }
        }).length)
    }, [searchData])


    // useEffect(() => {
    //   console.log(allOrders)
    // }, [allOrders])


    return (
        <div className='w-full bg-[#F5F5F5] flex justify-center items-center'>
            <div className='w-full pt-10'>

                {/* mani flex - 1 */}
                <div className='w-full pl-[250px] xl:pl-[340px]  pt-10'>

                    {/* sub-flex - 1 */}
                    <div className='w-full flex gap-3'>
                        <div className='w-full pr-20 flex justify-between items-center'>
                            <div className='w-full'>
                                <h1 className='roboto text-[50px] font-[900]'>Orders</h1>
                            </div>
                            <Link to='/admin-add-order' className='w-fit mr-4'>
                                <button className='w-[120px] bg-white p-1 rounded-[5px] shadow-md active:scale-[0.98] active:bg-[#f0f0f0]'>Add Orders</button>
                            </Link>
                        </div>
                    </div>

                    {/* sub-flex - 2 */}
                    <div className='w-full flex gap-3'>

                        {/* content-flex - 1 */}
                        <AdminSidebar />

                        {/* content-flex - 1 */}
                        <div className='w-full pr-10 xl:pr-20 px-3'>
                            <div className='w-full my-2 mb-4'>
                                <div className='w-full shadow-md rounded-[14px] bg-white flex items-center pl-3 gap-3'>
                                    <span><img src={search} className="w-[15px]" /></span><input type="text" className='w-[95%] py-[8px] px-2 rounded-[14px] outline-none' placeholder='Filter Orders' onChange={(e) => setSearchData(e.target.value)} />
                                </div>
                            </div>
                            <div className='w-full mt-8  min-h-[70vh]'>
                                <div className='w-full grid grid-cols-5 pr-[70px] gap-4 justify-center items-center px-[12px]'>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>User ID</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Email</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Order Amount</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Pincode</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Actions</h1>
                                    </div>
                                </div>
                                <div className='w-full max-h-[700px] overflow-y-scroll'>
                                    {
                                        filterValue > 0 ?
                                            <div>
                                                {
                                                    allOrders?.orders?.filter((filterValue) => {
                                                        if (searchData === '') {
                                                            return filterValue
                                                        } else if (filterValue?.user_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.email?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.order_amount?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.pincode?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                                                            return filterValue
                                                        }
                                                    }).map((data, i) => (
                                                        <div key={i} className='relative flex justify-between items-center w-full my-7 h-full'>
                                                            <div className='w-full bg-[#FFFFFF] shadow-md rounded-[14px] py-[8px] px-[11px] grid grid-cols-5 gap-4 justify-center items-center'>
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>{data?.user_id}</h1>
                                                                </div>
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>{data?.email}</h1>
                                                                </div>
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>₹ {data?.order_amount}</h1>
                                                                </div>
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>{data?.pincode}</h1>
                                                                </div>
                                                                <div className='flex justify-center items-center'>
                                                                    {
                                                                        data?.admin_accept_status === 'p' ?
                                                                            <div className='flex gap-1 w-fit items-center'>
                                                                                <div><button className='bg-[#30b18434] py-[2px] rounded-[6px] border border-[#30b183] px-[8px] text-[14px] text-[#30b183]' onClick={async () => {
                                                                                    let call_1 = await axios.patch(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders', { id: data?.id, type: 'a' }).then((response) => {
                                                                                        console.log(response?.data)
                                                                                    })
                                                                                    let call_2 = await axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders').then((response) => {
                                                                                        // console.log(response?.data)
                                                                                        setAllOrders(response?.data)
                                                                                    })
                                                                                }}>Accept</button></div>
                                                                                <div><button className='bg-[#de496c48] py-[2px] rounded-[6px] border border-[#de496c] text-[#de496c] px-[8px] text-[14px]' onClick={async () => {
                                                                                    let call_1 = await axios.patch(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders', { id: data?.id, type: 'd' }).then((response) => {
                                                                                        console.log(response?.data)
                                                                                    })
                                                                                    let call_2 = await axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders').then((response) => {
                                                                                        // console.log(response?.data)
                                                                                        setAllOrders(response?.data)
                                                                                    })
                                                                                }}>Decline</button></div>
                                                                            </div>
                                                                            :
                                                                            data?.admin_accept_status === 'a' ?
                                                                                <div><button className='bg-[#30b18434] py-[2px] rounded-[6px] border border-[#30b183]  px-[8px] text-[14px] text-[#30b183]'>Accepted</button></div>
                                                                                :
                                                                                <div><button className='bg-[#de496c48] py-[2px] rounded-[6px] border border-[#de496c] text-[#de496c] px-[8px] text-[14px]'>Declined</button></div>
                                                                    }
                                                                </div>
                                                            </div>
                                                            <Link to={'' + data?.id}>
                                                                <div className='w-fit max-w-[120px] ml-5 shadow-md p-2 rounded-[10px] active:scale-[0.96] bg-white'>
                                                                    <span className='cursor-pointer flex justify-between items-center w-full'>
                                                                        <img src={see} className="w-[18px]" />
                                                                    </span>
                                                                </div>
                                                            </Link>
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
                <div className='w-full flex justify-center items-center pt-10 relative'>
                    {/* <div className='flex items-center gap-3'>
                        <span className='mr-3' ><img src={left_arrow} className="w-[11px]" /></span>
                        {
                            admiProductsApi?.page_number_data?.map((num_data, num_index) => (
                                <p key={num_index} className='mx-1 text-[#718096] text-[12px]'>{num_data}</p>
                            ))
                        }
                        <span className='ml-3' ><img src={right_arrow} className="w-[11px]" /></span>
                    </div>
                    <div className='absolute right-[13%]'>
                        <p className='text-[#718096] text-[14px]'>Showing 11- 20 of 64 results</p>
                    </div> */}
                    {/* <ReactPaginate
                        previousLabel={<img src={left_arrow} />}
                        nextLabel={<img src={right_arrow} />}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={'paginationButtons'}
                        previousLinkClassName={'previousBtn'}
                        nextLinkClassName={'nextBtn'}
                        disabledClassName={'paginationDisabled'}
                        activeClassName={'paginationActive'}
                    /> */}
                    {/* <div className='absolute right-[13%]'>
                        <p className='text-[#718096] text-[14px]'>Showing 11- 20 of 64 results</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default OrdersInventoryPage