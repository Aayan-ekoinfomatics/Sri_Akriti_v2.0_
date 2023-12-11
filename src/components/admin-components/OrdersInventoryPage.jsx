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
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import edit from '../../assets/icons/admit-edit.svg'
import deleteIcn from '../../assets/icons/delete.svg'


const OrdersInventoryPage = () => {


    const [searchData, setSearchData] = useState('');
    const [filterValue, setFilteredValue] = useState();

    const [adminStatusToggle, setAdminStatusToggle] = useState(false);

    const [ordersData, setOrdersData] = useState();

    const [orderActiveId, setOrderActiveId] = useState(null);

    useEffect(() => {
        setFilteredValue(adminOrdersApi?.products?.filter((filterValue) => {
            if (searchData === '') {
                return filterValue
            } else if (filterValue?.order_name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.order_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.order_category?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                return filterValue
            }
        }).length)
    }, [searchData])


    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders').then((response) => {
            console.log(response?.data)
            setOrdersData(response?.data?.orders)
        })
    }, [])

    useEffect(() => {
        console.log(orderActiveId);
    }, [orderActiveId])


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
                                <h1 className='roboto text-[50px] font-[900]'>Orders</h1>
                            </div>
                            {/* <div className='w-fit mr-4'>
                                <button className='w-[120px] bg-white p-1 rounded-[5px] shadow-md'>Add Orders</button>
                            </div> */}
                        </div>
                    </div>

                    {/* sub-flex - 2 */}
                    <div className='w-full flex gap-3'>

                        {/* content-flex - 1 */}
                        <div className='w-[18%] px-3'>
                            <div className='w-full flex flex-col justify-start items-center pt-[110px] bg-[#3EDCFF] h-[97%] shadow-xl rounded-[14px] my-2'>
                                <div className='w-full bg-[#19C7EE] pl-5 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                                    <div>
                                        <img src={order_logo} className="w-[20px]" />
                                    </div>
                                    <div>
                                        <h1 className='roboto text-[17px] font-[500]'>Order</h1>
                                    </div>
                                </div>
                                <NavLink to='/admin-products' className='w-full block'>
                                    <div className='w-full hover:bg-[#19C7EE] pl-5 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                                        <div>
                                            <img src={products_logo} className="w-[20px]" />
                                        </div>
                                        <div>
                                            <h1 className='roboto text-[17px] font-[500]'>Products</h1>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>

                        {/* content-flex - 1 */}
                        <div className='w-[82%]  px-3'>
                            <div className='w-full my-2 mb-4'>
                                <div className='w-full shadow-md rounded-[14px] bg-white flex items-center pl-3 gap-3'>
                                    <span><img src={search} className="w-[15px]" /></span><input type="text" className='w-[95%] py-[8px] px-2 rounded-[14px] outline-none' placeholder='Filter Products' onChange={(e) => setSearchData(e.target.value)} />
                                </div>
                            </div>
                            <div className='w-full mt-8  min-h-[70vh]'>
                                <div className='w-full grid grid-cols-4 gap-4 justify-center items-center px-[12px]'>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>#</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Staus</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Amount</h1>
                                    </div>
                                    <div className='flex justify-center items-center'>
                                        <h1 className='text-[#718096]'>Delivery Status</h1>
                                    </div>
                                </div>
                                <div className='w-full'>
                                    {
                                        filterValue > 0 ?
                                            <div>
                                                {
                                                    ordersData?.filter((filterValue) => {
                                                        if (searchData === '') {
                                                            return filterValue
                                                        } else if (filterValue?.order_name?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.order_id?.toLowerCase()?.includes(searchData?.toLowerCase()) || filterValue?.order_category?.toLowerCase()?.includes(searchData?.toLowerCase())) {
                                                            return filterValue
                                                        }
                                                    }).map((data, i) => (
                                                        <div key={i} className='w-full bg-[#FFFFFF] shadow-md rounded-[14px] py-[8px] px-[11px] my-7 h-full'>
                                                            <div className='grid grid-cols-4 gap-4 justify-center items-center'>
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>{data?.id}</h1>
                                                                </div>
                                                                <div className='flex justify-center items-center relative'>
                                                                    <h1 onClick={() => {
                                                                        setAdminStatusToggle(!adminStatusToggle)
                                                                        if (orderActiveId !== data?.id) {
                                                                            setOrderActiveId(data?.id)
                                                                        } else {
                                                                            setOrderActiveId(null)
                                                                        }
                                                                    }} className='text-[#718096] cursor-pointer'>{data?.admin_accept_status == 'a' ? 'Accepted' : data?.admin_accept_status == 'p' ? 'Pending' : 'Declined'}  <span className='ml-2'>⋮</span></h1>
                                                                    <div className={` ${orderActiveId == data?.id ? 'h-[96px]' : 'h-0 overflow-hidden'} z-[200] transition-all duration-200 ease-in-out w-full bg-white absolute top-[140%] rounded-[8px] cursor-pointer`}>
                                                                        <div className='relative flex flex-col border'>
                                                                            <span className='text-center py-3 hover:bg-gray-200 active:scale-95 active:bg-gray-100 transition-all duration-100 ease-in-out w-full' onClick={() => {
                                                                                // if (orderActiveId !== data?.id) {
                                                                                //     setOrderActiveId(data?.id)
                                                                                // } else {
                                                                                //     setOrderActiveId(data?.id)
                                                                                // }
                                                                                let formdata = new FormData();
                                                                                formdata.append('id', data?.id)
                                                                                formdata.append('type', 'a')
                                                                                axios.patch(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders', formdata).then((res) => {
                                                                                    console.log(res);
                                                                                    if (res) {
                                                                                        axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders').then((response) => {
                                                                                            console.log(response?.data)
                                                                                            setOrdersData(response?.data?.orders)
                                                                                        })
                                                                                    }
                                                                                })
                                                                            }}>Accept</span>
                                                                            <span className='text-center py-3 hover:bg-gray-200 active:scale-95 active:bg-gray-100 transition-all duration-100 ease-in-out w-full' onClick={() => {
                                                                                // if (orderActiveId !== data?.id) {
                                                                                //     setOrderActiveId(data?.id)
                                                                                // } else {
                                                                                //     setOrderActiveId(data?.id)
                                                                                // }
                                                                                let formdata = new FormData();
                                                                                formdata.append('id', data?.id)
                                                                                formdata.append('type', 'd')
                                                                                axios.patch(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders', formdata).then((res) => {
                                                                                    console.log(res);
                                                                                    if (res) {
                                                                                        axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminViewAllOrders').then((response) => {
                                                                                            console.log(response?.data)
                                                                                            setOrdersData(response?.data?.orders)
                                                                                        })
                                                                                    }
                                                                                })
                                                                            }}>Decline</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>Rs {data?.order_amount}</h1>
                                                                </div>
                                                                {/* <div className='inline-block flex'>{data?.product_action?.map((sub_data, sub_index) => (
                                                                    <div key={sub_index} className='flex items-center border border-red-500'>
                                                                        <span className='border border-red-500'><img src={sub_data?.img} className="w-[20px]" /></span>
                                                                    </div>
                                                                ))}</div> */}
                                                                <div className='flex justify-center items-center'>
                                                                    <h1 className='text-[#718096]'>{data?.order_status == 'a' ? 'Accepted' : data?.order_status == 'p' ? 'Pending' : 'Declined'}</h1>
                                                                </div>
                                                                {/* <div className='flex justify-center items-center'>
                                                                    <div className='flex gap-5 w-fit items-center'>
                                                                        <span className='cursor-pointer'><img src={edit} className="w-[16px]" /></span>
                                                                        <span className='cursor-pointer'><img src={deleteIcn} className="w-[14px]" /></span>
                                                                    </div>
                                                                </div> */}
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
                <div className='w-full flex justify-center items-center pt-10 relative'>
                    <div className='flex items-center gap-3'>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrdersInventoryPage