import React, { useState } from 'react'
import logo from '../../assets/icons/sri-aakriti-logo.svg'
import order_logo from '../../assets/icons/admin-order-logo.svg'
import products_logo from '../../assets/icons/admin-products-logo.svg'
import admiProductsApi from '../../mockapi/admiProductsApi'
import left_arrow from '../../assets/icons/admin-left-pointer.svg'
import right_arrow from '../../assets/icons/admin-right-pointer.svg'
import search from '../../assets/icons/admin-search-icon.svg'
import addProductsAdminApi from '../../mockapi/addProductsAdminApi'
import { NavLink } from 'react-router-dom'


const AddNewProductInventoryPage = () => {

    const [searchData, setSearchData] = useState('');
    return (
        <div className='w-full bg-[#F5F5F5] flex justify-center items-center'>
            <div className='w-full pt-10 flex justify-center items-center'>

                {/* mani flex - 1 */}
                <div className='w-[80%] mx-auto'>

                    {/* sub-flex - 1 */}
                    <div className='w-full flex gap-3'>
                        <div className='w-[15%] pb-4'>
                            <div className='w-full flex flex-col justify-end items-center'>
                                <img src={logo} className="w-[85px]" />
                            </div>
                        </div>
                        <div className='w-[85%] flex justify-between items-center'>
                            {/* <div className='w-full'>
                                <h1 className='roboto text-[50px] font-[900]'>Products</h1>
                            </div>
                            <div className='w-fit mr-4'>
                                <button className='w-[120px] bg-white p-1 rounded-[5px] shadow-md'>Add Products</button>
                            </div> */}
                        </div>
                    </div>

                    {/* sub-flex - 2 */}
                    <div className='w-full flex gap-3'>

                        {/* content-flex - 1 */}
                        <div className='w-[15%] px-3'>
                            <div className='w-full flex flex-col justify-start items-center pt-[110px] bg-[#3EDCFF] h-[97%] shadow-xl rounded-[14px] my-2'>
                                <NavLink to='/admin-orders' className='w-full block'>
                                    <div className='w-full hover:bg-[#19C7EE] lg:pl-3 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                                        <div>
                                            <img src={order_logo} className="w-[20px]" />
                                        </div>
                                        <div>
                                            <h1 className='roboto text-[17px] font-[500]'>Order</h1>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to='/admin-products' className='w-full block'>
                                    <div className='w-full hover:bg-[#19C7EE] pl-5 py-2 lg:pl-3 cursor-pointer flex justify-start gap-4 my-2'>
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
                        <div className='w-[85%] px-3'>
                            <div className='w-full mb-3'>
                                <h1 className='text-[30px] font-[] roboto'>Add new product</h1>
                                <h1 className='text-[13px] font-[] roboto'>Enter the product details</h1>
                            </div>
                            <div className='flex gap-5 mt-3'>
                                <div className='border-r border-r-[#D9D9D9] pr-9'>
                                    <div><img src={addProductsAdminApi?.add_product?.main_img} className="w-[550px]" /></div>
                                    <div className='w-full flex gap-2 justify-center items-center mt-3'>
                                        {
                                            addProductsAdminApi?.add_product?.images?.map((data, i) => (
                                                <img src={data} className="w-[80px]" />
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className='flex-1 pl-4'>
                                    <div className='w-full rounded-[14px] mt-3 mb-6'>
                                        <label className='text-[11px] text-[#7C7A7A]'>Products Name</label>
                                        <input type="text" className='w-full shadow-md rounded-[14px] py-2 outline-none text-[15px] px-4' />
                                    </div>
                                    <div className='w-full rounded-[14px] mt-3 mb-6'>
                                        <label className='text-[11px] text-[#7C7A7A]'>Products Code</label>
                                        <input type="text" className='w-full shadow-md rounded-[14px] py-2 outline-none text-[15px] px-4' />
                                    </div>
                                    <div className='w-full rounded-[14px] mt-3 mb-6'>
                                        <label className='text-[11px] text-[#7C7A7A]'>Diamond Quality</label>
                                        <input type="text" className='w-full shadow-md rounded-[14px] py-2 outline-none text-[15px] px-4' />
                                    </div>
                                    <div className='w-full flex gap-4 rounded-[14px] mt-3 mb-6'>
                                        <div className='w-full'>
                                            <label className='text-[11px] text-[#7C7A7A]'>Products Size</label>
                                            <input type="text" className='w-full rounded-[14px] py-2 outline-none text-[15px] px-4 shadow-md' />
                                        </div>
                                        <div className='w-full'>
                                            <label className='text-[11px] text-[#7C7A7A]'>Products Weight</label>
                                            <input type="text" className='w-full rounded-[14px] py-2 outline-none text-[15px] px-4 shadow-md' />
                                        </div>
                                    </div>
                                    <div className='w-full flex gap-4 rounded-[14px] mt-3 mb-6'>
                                        <div className='w-full'>
                                            <label className='text-[11px] text-[#7C7A7A]'>Products Size</label>
                                            <input type="text" className='w-full rounded-[14px] py-2 outline-none text-[15px] px-4 shadow-md' />
                                        </div>
                                        <div className='w-full'>
                                            <label className='text-[11px] text-[#7C7A7A]'>Products Size</label>
                                            <input type="text" className='w-full rounded-[14px] py-2 outline-none text-[15px] px-4 shadow-md' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

                {/* mani flex - 2 */}
                {/* <div className='w-full flex justify-center items-center pt-4 relative'>
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
                        <p>
                            {
                                admiProductsApi?.products?.map((data, i) => {
                                    return (
                                        <div className='border border-red-500'>
                                            <p>{data?.product_id}</p>
                                            <p>{data?.product_name}</p>
                                            <p>{data?.product_category}</p>
                                        </div>
                                    )
                                })
                            }
                        </p>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default AddNewProductInventoryPage