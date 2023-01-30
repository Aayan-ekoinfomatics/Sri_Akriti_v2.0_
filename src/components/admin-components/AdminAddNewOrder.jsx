import React, { useEffect, useState } from 'react'
import AdminSidebar from '../global components/AdminSidebar'
import add from '../../assets/icons/add.svg'
import editOrderData from '../../mockapi/adminEditOrderApi'
import imgs from '../../assets/images/ring-1.png'
import delete_icon from '../../assets/icons/admin-delete.svg'
import axios from 'axios'
import arrow from '../../assets/icons/down-arrow-admin.svg'
import { toast } from 'react-toastify'


const AdminAddNewOrder = () => {

    const [defaultData, setDefaultData] = useState();

    const [productNames, setProductNames] = useState();

    const [selectedProduct, setSelectedProduct] = useState();
    const [selectedProductDetails, setSelectedProductDetails] = useState();

    const [selectedProductReturn, setSelectedProductReturn] = useState({})

    const [finalPricing, setFinalPricing] = useState({

    })

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminAddNewOrder').then((response) => {
            // console.log(response?.data)
            setDefaultData(response?.data?.data)
        })
    }, [])

    useEffect(() => {
        if(defaultData?.items?.length > 0) {
            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'adminCreateOrderFinalPriceCalculation', defaultData?.items).then((response) => {
                // console.log(response?.data)
                setFinalPricing(response?.data)
                setDefaultData({
                    ...defaultData,
                    grand_total: response?.data?.grand_total
                })
            })
        }
    }, [defaultData?.items])

    useEffect(() => {
        console.log(defaultData)
    }, [defaultData])
    


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
                                <div className='w-full pr-6 overflow-y-scroll max-h-[76vh]'>
                                    <div className='w-full'>
                                        <h1 className='text-[18px] font-[600]'>Add Customer Details</h1>
                                    </div>
                                    <div className='w-full px-2 flex justify-between gap-5 items-start my-2'>
                                        <div className='w-full flex flex-col gap-1'>
                                            <label className='text-[12px] font-[500]'>Customer Name</label>
                                            <input type="text" value={defaultData?.name} placeholder='Type Name here...' onChange={(e) => {
                                                setDefaultData({
                                                    ...defaultData,
                                                    customer_name: e?.target?.value
                                                })
                                            }} className='p-2 rounded-[13px] outline-none text-[14px] w-full' />
                                        </div>
                                        <div className='w-full flex flex-col gap-1'>
                                            <label className='text-[12px] font-[500]'>Customer Contact</label>
                                            <input type="text" value={defaultData?.phone} onChange={(e) => {
                                                setDefaultData({
                                                    ...defaultData,
                                                    customer_phone: e?.target?.value
                                                })
                                            }} placeholder='Type Number here...' className='p-2 rounded-[13px] outline-none text-[14px] w-full' />
                                        </div>
                                    </div>
                                    <div className='w-full px-2 flex justify-between gap-5 items-start my-2'>
                                        <div className='w-full flex flex-col gap-1'>
                                            <label className='text-[12px] font-[500]'>Delivery Address</label>
                                            <textarea type="" value={defaultData?.address} onChange={(e) => {
                                                setDefaultData({
                                                    ...defaultData,
                                                    customer_address: e?.target?.value
                                                })
                                            }} placeholder='Type Address here...' rows={3} cols={2} className='p-2 rounded-[13px] outline-none text-[14px] w-full' />
                                        </div>
                                        <div className='w-full flex flex-col gap-1'>
                                            <label className='text-[12px] font-[500]'>Customer Email</label>
                                            <input type="text" value={defaultData?.email} onChange={(e) => {
                                                setDefaultData({
                                                    ...defaultData,
                                                    customer_email: e?.target?.value
                                                })
                                            }} placeholder='Type Email here...' className='p-2 rounded-[13px] outline-none text-[14px] w-full' />
                                        </div>
                                    </div>
                                    <div className='w-full'>
                                        <h1 className='text-[18px] font-[600]'>Search for product</h1>
                                    </div>
                                    <div className='w-full relative px-2 flex justify-between gap-5 items-end my-1 pb-1'>
                                        <div className='w-full'>
                                            <label className='text-[12px] font-[500]'>Item Name</label>
                                            <div onClick={() => setProductNames(!productNames)} className='cursor-pointer flex pr-3 bg-white text-[#696969b6] rounded-[13px]'><input type="text" placeholder='Type Name here' value={selectedProduct ? selectedProduct : 'Select a product'} className='p-2 cursor-pointer rounded-[13px] outline-none text-[14px] w-full' /> <img src={arrow} className='w-[15px]' alt="" /></div>
                                        </div>
                                        <div className='w-full flex justify-center gap-5 items-center'>
                                            <div className='text-[14px]'>
                                                Quantity :
                                            </div>
                                            <div className='w-full max-w-[40px] flex justify-center gap-3 items-center'>
                                                <input type="number" className='border rounded-[10px] outline-none text-[14px] px-2 py-1' value={selectedProductReturn?.quantity} min={1} max={20} onChange={(e) => {
                                                    setSelectedProductReturn({
                                                        ...selectedProductReturn,
                                                        quantity: e?.target?.value
                                                    })
                                                }} />
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <button className='text-[13px] font-[500] shadow-md rounded-[14px] flex gap-4 py-2 px-2 bg-[#fff]' onClick={() => { 
                                                axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'adminCreateOrderGetProductInfo', {data: selectedProductReturn}).then((response) => {
                                                    if (response?.data?.status) {
                                                        // console.log(response?.data)
                                                    setDefaultData({
                                                        ...defaultData,
                                                        items: [...defaultData?.items, response?.data?.items]
                                                    })
                                                    setSelectedProductReturn({

                                                    })
                                                    
                                                    // setSelectedProductDetails(response?.data?.data)
                                                    }else {
                                                        toast.warn(response?.data?.message, {
                                                            position: "top-right",
                                                            autoClose: 5000,
                                                            hideProgressBar: false,
                                                            closeOnClick: true,
                                                            pauseOnHover: true,
                                                            // draggable: true,
                                                            progress: undefined,
                                                            theme: "light",
                                                        })
                                                    }
                                                })
                                            }}>Add <span className=''><img src={add} className='' alt="" /></span></button>
                                        </div>
                                        <div className={`w-full max-w-[295px] bg-white shadow-md absolute top-[65px] ml-1 transition-all duration-300 overflow-hidden ${productNames ? 'h-[200px] overflow-y-scroll px-2 ease-in mr-2' : 'h-0 p-0 ease-out'}`}>
                                            {
                                                defaultData?.product_names?.map((data, i) => (
                                                    <div key={i} className='w-full py-2 my-2 border-b hover:bg-[#69696925] ' onClick={() => {
                                                        setProductNames(false)
                                                        setSelectedProduct(data?.name)
                                                        let formdata = new FormData()
                                                        formdata.append("product_id", data?.id)
                                                        setSelectedProductReturn({
                                                            ...selectedProductReturn,
                                                            id: data?.id,
                                                            quantity: 1,
                                                        })
                                                        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'adminCreateOrderSelectProduct', formdata).then((response) => {
                                                            // console.log(response?.data)
                                                            setSelectedProductDetails(response?.data?.data)
                                                        })
                                                    }}>
                                                        <h1 className='text-[14px]'>{data?.name}</h1>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-full mt-1'>
                                        <div className='w-full max-w-[300px]'>
                                            <h1><label className='text-[12px] font-[500]'>Diamond Quality</label></h1>
                                            <div className='w-full px-2 flex justify-between gap-2 items-end my-2'>
                                                {
                                                    selectedProductDetails?.diamond_quality?.map((data, i) => (
                                                        <div key={i} className={`w-full max-w-[80px] flex justify-center items-center py-1 gap-1 rounded-[13px] text-[14px] bg-white active:scale-[0.96] ${selectedProductReturn?.diamond_quality === data ? 'bg-[#6969694f] shadow-md' : ''}`} onClick={() => {
                                                            setSelectedProductReturn({
                                                                ...selectedProductReturn,
                                                                diamond_quality: data
                                                            })
                                                        }}>
                                                            <h1>{data}</h1>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <div className='w-full'>
                                                <label className='text-[12px] font-[500]'>Diamond Size</label>
                                                <div className='w-full grid grid-cols-10 px-2 justify-center gap-2 items-end my-2 rounded-[13px] outline-none text-[14px]'>
                                                    {
                                                        selectedProductDetails?.diamond_size?.map((data, i) => (
                                                            <div key={i} className={`w-full max-w-[80px] flex justify-center items-center py-1 gap-1 rounded-[13px] text-[14px] bg-white active:scale-[0.96] ${selectedProductReturn?.diamond_size === data ? 'bg-[#6969694f] shadow-md' : ''}`} onClick={() => {
                                                                setSelectedProductReturn({
                                                                    ...selectedProductReturn,
                                                                    diamond_size: data
                                                                })
                                                            }}>
                                                                <h1>{data}</h1>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col w-full mb-3'>
                                        <div className='w-full'>
                                            <label className='text-[12px] font-[500]'>Size</label>
                                            <div className='w-full px-2 grid grid-cols-10 justify-center gap-2 items-end my-2'>
                                                {
                                                    selectedProductDetails?.size?.map((data, i) => (
                                                        <div key={i} className={`w-full max-w-[80px] flex justify-center items-center py-1 gap-1 rounded-[13px] text-[14px] bg-white active:scale-[0.96] ${selectedProductReturn?.size === data ? 'bg-[#6969694f] shadow-md' : ''}`} onClick={() => {
                                                            setSelectedProductReturn({
                                                                ...selectedProductReturn,
                                                                size: data,
                                                                weight: selectedProductDetails?.weight[i]
                                                            })
                                                        }}>
                                                            <h1>{data}</h1>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <label className='text-[12px] font-[500]'>Weight</label>
                                            <div className='w-full px-2 grid grid-cols-10 justify-center gap-2 items-end my-2'>
                                                {
                                                    selectedProductDetails?.weight?.map((data, i) => (
                                                        <div key={i} className={`w-fit px-2 max-w-[100px] flex justify-center items-center py-1 gap-1 rounded-[13px] text-[14px] bg-white active:scale-[0.96] ${selectedProductReturn?.weight === data ? 'bg-[#6969694f] shadow-md' : ''}`} onClick={() => {
                                                            setSelectedProductReturn({
                                                                ...selectedProductReturn,
                                                                weight: data,
                                                                size: selectedProductDetails?.size[i]
                                                            })
                                                        }}>
                                                            <h1>{data}</h1>
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    {/* final items */}
                                    <div className='w-full px-2 mt-5'>
                                        <h1 className='text-[18px] font-[600]'>Final Items</h1>
                                        <div className='max-h-[200px] overflow-y-scroll'>
                                            {
                                                defaultData?.items?.length === 0 ?
                                                    <div className='w-full py-20 border rounded-[15px] bg-[#69696921] flex justify-center items-center text-[15px] font-[400]'>
                                                        No items added
                                                    </div>
                                                    :
                                                    <>
                                                        {
                                                            defaultData?.items?.map((data, i) => (
                                                                <div key={i} className='w-full flex gap-2 my-5 py-1 bg-white shadow-md rounded-[15px] '>
                                                                    <div className='flex justify-center items-center pl-3'>
                                                                        <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className='w-full max-w-[50px]' alt="" />
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
                                                    </>
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
                                            defaultData?.items?.length === 0 ?
                                                <div className='w-full py-20 border rounded-[15px] bg-[#69696921] flex justify-center items-center text-[14px] font-[400]'>
                                                    No items selected for breakdown
                                                </div>
                                                :
                                                <>
                                                    {
                                                        defaultData?.items?.map((data, i) => (
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
                                                                {/* <div className='w-full flex justify-between items-center'>
                                                                    <h1 className='text-[12px] font-[400]'>Add Discount :</h1>
                                                                    <h1 className='text-[13px]'>- ₹ {data?.discount}</h1>
                                                                </div> */}
                                                                <div className='w-full flex justify-end items-center'>
                                                                    <div className='flex gap-3'>
                                                                        <h1 className='text-[12px] font-[500]'>Sub Total :</h1>
                                                                        <h1 className='text-[13px]'>₹ {data?.sub_total}</h1>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </>
                                        }
                                    </div>
                                    <div className='w-[90%] mx-auto flex justify-between items-center pt-4 border-t-2 border-t-[#6969695b]'>
                                        <h1 className='text-[13px] font-[400]'>Shipping charges</h1>
                                        <h1 className='text-[15px] font-[500]'>₹ {finalPricing?.shipping}</h1>
                                    </div>
                                    <div className='w-[90%] mx-auto flex justify-between items-center pt-4'>
                                        <h1 className='text-[13px] font-[400]'>Tax</h1>
                                        <h1 className='text-[15px] font-[500]'>₹ {finalPricing?.tax}</h1>
                                    </div>
                                    <div className='w-[90%] mx-auto flex justify-between items-center pt-4'>
                                        <h1 className='text-[16px]'>Grand Total</h1>
                                        <h1 className='text-[18px] font-[500]'>₹ {finalPricing?.grand_total}</h1>
                                    </div>
                                    <div className='w-[95%] flex justify-end items-center mt-5'>
                                        <button className='bg-[#3EDCFF] py-2 px-2 text-[14px] font-[500] rounded-[8px]' onClick={() => {
                                            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'adminAddNewOrder', defaultData).then((response) => {
                                                console.log(response?.data)
                                                if ( response?.data?.status === true) {
                                                    toast.info(response?.data?.message, {
                                                        position: "top-right",
                                                        autoClose: 2000,
                                                        hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        // draggable: true,
                                                        progress: undefined,
                                                        theme: "light",
                                                    })
                                                }else {
                                                    toast.error(response?.data?.message, {
                                                        position: "top-right",
                                                        autoClose: 2000,
                                                        hideProgressBar: false,
                                                        closeOnClick: true,
                                                        pauseOnHover: true,
                                                        // draggable: true,
                                                        progress: undefined,
                                                        theme: "light",
                                                    })
                                                }
                                            })
                                        }}>+ Add Order</button>
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

export default AdminAddNewOrder 