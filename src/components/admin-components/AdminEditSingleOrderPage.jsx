import React, { useEffect, useState } from 'react'
import AdminSidebar from '../global components/AdminSidebar'
import add from '../../assets/icons/add.svg'
import editOrderData from '../../mockapi/adminEditOrderApi'
import imgs from '../../assets/images/ring-1.png'
import delete_icon from '../../assets/icons/admin-delete.svg'
import axios from 'axios'
import { useParams } from 'react-router-dom'


const AdminEditSingleOrderPage = () => {

    const [editData, setEditData] = useState()

    const params = useParams()

    useEffect(() => {
        // let formdata = new FormData();
        // formdata.append("token", localStorage.getItem("token"));
        axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminSingleOrder?order_id=' + params?.order_id).then((response) => {
            console.log(response?.data)
            // console.log(params)
            setEditData(response?.data)
        })
    }, [])


    return (
        <div className='w-full'>
            {/* <PageBackButton /> */}
            <div className='w-full pt-20'>

                {/* mani flex - 1 */}
                <div className='w-full pl-[380px] pt-24'>

                    {/* sub-flex - 1 */}
                    <div className='w-full flex gap-3'>
                        <div className='w-[82%] flex justify-between items-center'>
                            <div className='w-full'>
                            </div>
                        </div>
                    </div>

                    {/* sub-flex - 2 */}
                    <div className='w-full flex gap-3'>

                        {/* content-flex - 1 */}
                        <AdminSidebar />

                        {/* content-flex - 1 */}
                        <div className='w-[90%] px-3'>

                            <div className='w-full flex'>

                                {/* flex-1 */}
                                <div className='w-full pr-6'>
                                    <div className='w-full'>
                                        <h1 className='text-[18px] font-[600]'>Add Customer Details</h1>
                                    </div>
                                    <div className='w-full px-2 flex justify-between gap-5 items-start my-2'>
                                        <div className='w-full flex flex-col gap-1'>
                                            <label className='text-[12px] font-[500]'>Customer Name</label>
                                            <input type="text" value={editData?.customer_name} onChange={(e) => {
                                                setEditData({
                                                    ...editData,
                                                    customer_name: e?.target?.value
                                                })
                                            }} placeholder='Type Name here...' className='p-2 rounded-[13px] outline-none text-[14px] w-full' />
                                        </div>
                                        <div className='w-full flex flex-col gap-1'>
                                            <label className='text-[12px] font-[500]'>Customer Contact</label>
                                            <input type="text" min={0} value={editData?.customer_phone} onChange={(e) => {
                                                setEditData({
                                                    ...editData,
                                                    customer_phone: e?.target?.value
                                                })
                                            }} placeholder='Type Number here...' className='p-2 rounded-[13px] outline-none text-[14px] w-full' />
                                        </div>
                                    </div>
                                    <div className='w-full px-2 flex justify-between gap-5 items-start my-2'>
                                        <div className='w-full flex flex-col gap-1'>
                                            <label className='text-[12px] font-[500]'>Delivery Address</label>
                                            <textarea type="" value={editData?.customer_address} onChange={(e) => {
                                                setEditData({
                                                    ...editData,
                                                    customer_address: e?.target?.value
                                                })
                                            }} placeholder='Type Address here...' rows={3} cols={2} className='p-2 rounded-[13px] outline-none text-[14px] w-full' />
                                        </div>
                                        <div className='w-full flex flex-col gap-1'>
                                            <label className='text-[12px] font-[500]'>Customer Email</label>
                                            <input type="text" value={editData?.customer_email} onChange={(e) => {
                                                setEditData({
                                                    ...editData,
                                                    customer_email: e?.target?.value
                                                })
                                            }} placeholder='Type Email here...' className='p-2 rounded-[13px] outline-none text-[14px] w-full' />
                                        </div>
                                    </div>

                                    {/* final items */}
                                    <div className='w-full px-2 mt-5'>
                                        <h1 className='text-[18px] font-[600]'>Final Items</h1>
                                        <div className='max-h-[200px] overflow-y-scroll'>
                                            {
                                                editData?.items?.map((data, i) => (
                                                    <div className='w-full flex gap-2 my-5 py-1 bg-white shadow-md rounded-[15px] '>
                                                        <div className='flex justify-center items-center pl-3'>
                                                            <img src={imgs} className='w-full max-w-[50px]' alt="" />
                                                        </div>
                                                        <div className='flex w-full pr-3 flex-col justify-center gap-5'>
                                                            <div className='w-full flex justify-between items-start'>
                                                                <h1 className='text-[16px] font-[500]'>{data?.title}</h1>
                                                                <img src={delete_icon} className='w-[13px] pt-1' alt="" />
                                                            </div>
                                                            <div className='flex w-full border border-white'>
                                                                <div className='flex justify-center w-full items-end gap-2 mx-1'>
                                                                    <h1 className='text-[10px] font-[400] w-full min-w-[75px]'>Diamond Quality</h1>
                                                                    <h1 className='text-[11px] font-[700] w-full'>{data?.diamond_quality}</h1>
                                                                </div>
                                                                <div className='flex justify-center w-full items-end gap-2 mx-1'>
                                                                    <h1 className='text-[10px] font-[400] w-'>Metal Size</h1>
                                                                    <h1 className='text-[11px] font-[700] w-fit'>{data?.metal_size}cm</h1>
                                                                </div>
                                                                <div className='flex justify-center w-full items-end gap-2 mx-1'>
                                                                    <h1 className='text-[10px] font-[400] w-full min-w-[80px]'>Diamond Weight</h1>
                                                                    <h1 className='text-[11px] font-[700] w-fit'>{data?.diamond_weight}gms</h1>
                                                                </div>
                                                                <div className='flex justify-center w-full items-end gap-2 mx-1'>
                                                                    <h1 className='text-[10px] font-[400] w- '>Metal Weight</h1>
                                                                    <h1 className='text-[11px] font-[700] w-fit'>{data?.metal_weight}gms</h1>
                                                                </div>
                                                                <div className='flex justify-center w-full items-end gap-2 mx-1'>
                                                                    <h1 className='text-[10px] font-[400] w- '>Sub Total</h1>
                                                                    <h1 className='text-[11px] font-[700] w-fit'>₹ {data?.sub_total}</h1>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>


                                {/* flex-2 */}
                                <div className='w-[60%] pb-4 pl-2 flex flex-col justify-end border-l-2 border-[#696969]'>
                                    <h1 className='text-[18px] font-[600] px-4 pb-4'>Price Breakdown</h1>
                                    <h1 className='text-[13px] font-[500] px-4 pt-4'>Items</h1>
                                    <div className='w-[90%] mx-auto px-1 max-h-[300px] overflow-y-scroll mb-4'>
                                        {
                                            editData?.items?.map((data, i) => (
                                                <div key={i} className='w-full my-6'>
                                                    <h1 className='text-[14px] pb-2 font-[500]'>{data?.title}</h1>
                                                    <div className='w-full flex justify-between items-center'>
                                                        <h1 className='text-[12px] font-[400]'>Diamond Charges :</h1>
                                                        <h1 className='text-[13px]'>₹ {data?.diamond_charges}</h1>
                                                    </div>
                                                    <div className='w-full flex justify-between items-center'>
                                                        <h1 className='text-[12px] font-[400]'>Metal Charges :</h1>
                                                        <h1 className='text-[13px]'>₹ {data?.metal_charges}</h1>
                                                    </div>
                                                    <div className='w-full flex justify-between items-center'>
                                                        <h1 className='text-[12px] font-[400]'>Making Charges :</h1>
                                                        <h1 className='text-[13px]'>₹ {data?.making_charges_1}</h1>
                                                    </div>
                                                    <div className='w-full flex justify-between items-center'>
                                                        <h1 className='text-[12px] font-[400]'>Add Discount :</h1>
                                                        <h1 className='text-[13px]'>- ₹ {data?.discount}</h1>
                                                    </div>
                                                    <div className='w-full flex justify-end items-center'>
                                                        <div className='flex gap-3'>
                                                            <h1 className='text-[12px] font-[500]'>Sub Total :</h1>
                                                            <h1 className='text-[13px]'>₹ {data?.sub_total}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                    <div className='w-[90%] mx-auto flex justify-between items-center pt-4 border-t-2 border-t-[#6969695b]'>
                                        <h1 className='text-[16px]'>Grand Total</h1>
                                        <h1 className='text-[18px] font-[500]'>₹ {editData?.grand_total}</h1>
                                    </div>
                                    <div className='w-[95%] flex justify-end items-center mt-5'>
                                        <button className='bg-[#3EDCFF] py-2 px-2 text-[14px] font-[500] rounded-[8px]'>+ Create Order</button>
                                    </div>
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
                </div>
            </div>
        </div>
    )
}

export default AdminEditSingleOrderPage