import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import AdminSidebar from '../global components/AdminSidebar'

const AdminPricesPage = () => {

    const [activeTab, setActiveTab] = useState('metal');

    const [metalData, setMetalData] = useState();
    const [metalDataIndex, setMetalDataIndex] = useState(null);

    const [diamondData, setDiamondData] = useState();
    const [diamondDataIndex, setDiamondDataIndex] = useState(null);

    useEffect(() => {

        // setMetalData([
        //     { id: 1, title: 'Gold', value: '23', },
        //     { id: 2, title: 'Platinum', value: '53', },
        //     { id: 3, title: 'Making Charges', value: '234', },
        // ])
        
        // setDiamondData([
        //     { id: 1, title: 'D1', value: '23', },
        //     { id: 2, title: 'D2', value: '53', },
        // ])

        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getMetalPrice').then((response) => {
            console.log(response?.data?.metal_data)
            setMetalData(response?.data?.metal_data);
        })
        
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getDiamondPrice').then((response) => {
            console.log(response?.data?.diamond_data)
            setDiamondData(response?.data?.diamond_data);
        })

    }, [])

    // useEffect(() => {
    //   console.log(diamondData, 'data')
    //   console.log(diamondDataIndex, 'index')
    // }, [diamondData, diamondDataIndex])
    



    return (
        <div className='w-full bg-[#F5F5F5] flex justify-center items-center'>
            <div className='w-full pt-10'>

                {/* content */}
                <div className='w-full px-5 md:px-0 md:pl-[250px] xl:pl-[340px]  pt-10'>

                    {/* header */}
                    <div className='w-full flex gap-3'>
                        <div className='w-full pr-20 flex justify-between items-center'>
                            <div className='w-full'>
                                <h1 className='roboto text-[50px] font-[900]'>Prices</h1>
                            </div>
                        </div>
                    </div>

                    {/* body content */}
                    <div className='w-full flex gap-3'>

                        {/* content-flex - 1 */}
                        <AdminSidebar />

                        {/* content-flex - 2 */}
                        <div className='w-full md:pr-10 xl:pr-20 px-3'>
                            <div className='w-full mt-12'>

                                {/* tabs */}
                                <div className='w-full flex justify-between items-center max-w-[190px]'>

                                    <div className={`max-w-[250px] bg-[#fff] rounded-[10px] py-1 px-4 cursor-pointer transition-all duration-300 ${activeTab === 'metal' ? 'bg-[#dfdfdf] shadow-none' : ' shadow-md'}`} onClick={() => setActiveTab('metal')}>
                                        <h1 className='text-[15px] font-[500] text-gray-600'>Metal</h1>
                                    </div>

                                    <div className={`max-w-[250px] bg-[#fff] rounded-[10px] py-1 px-4 cursor-pointer transition-all duration-300 ${activeTab === 'diamond' ? 'bg-[#dfdfdf] shadow-none' : ' shadow-md'}`} onClick={() => setActiveTab('diamond')}>
                                        <h1 className='text-[15px] font-[500] text-gray-600'>Diamond</h1>
                                    </div>

                                </div>

                                {/* body */}
                                <div className='w-full mt-4'>

                                    {/* metal */}
                                    <div className={`w-full md:w-fit md:min-w-[500px] flex flex-col justify-center items-center bg-white rounded-[13px] p-2 lg:p-4 shadow-md ${activeTab === 'metal' ? 'block' : 'hidden'}`}>
                                        <div className='w-full flex flex-col items-start gap-4 py-1 px-4'>
                                            <div className='w-full border-b pb-3'>
                                                <h1 className='text-[16px] font-[500] text-gray-800'>Metal Prices</h1>
                                            </div>
                                            {
                                                metalData?.map((data, i) => (
                                                    <div key={i} className='w-full' onClick={() => metalDataIndex === i ? setMetalDataIndex(null) : setMetalDataIndex(i)}>
                                                        <div className='w-full'>
                                                            <label htmlFor="metal" className='text-[12px] pl-1'>{data?.title}</label>
                                                            <div className='w-full'>
                                                                <input type="text" name='metal' className='w-full px-2 py-1 rounded-[10px] outline-none text-[14px] border bg-[#ececec]' value={data?.value} onChange={(e) => {
                                                                    setMetalData(
                                                                        () => metalData?.map((m_data, m_i) => {
                                                                            if (m_i === metalDataIndex) {
                                                                                return {
                                                                                    ...m_data,
                                                                                    value: e?.target?.value
                                                                                }
                                                                            }else {
                                                                                return m_data
                                                                            }
                                                                        })
                                                                    )
                                                                }}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className='w-full flex justify-end items-center mt-5 px-4'>
                                            <button className='px-5 py-1 text-[15px] bg-[#3EDCFF] shadow-md active:scale-95 transition-all duration-300 rounded-[10px] font-[500]' onClick={ async () => {
                                                await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'setMetalPrice', metalData).then((response) => {
                                                    console.log(response?.data)
                                                    if (response?.data?.status) {
                                                        toast.success(response?.data?.message, {
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
                                                await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getMetalPrice').then((response) => {
                                                    console.log(response?.data?.metal_data)
                                                    setMetalData(response?.data?.metal_data);
                                                })
                                            }}>Save</button>
                                        </div>
                                    </div>

                                    {/* diamond */}
                                    <div className={`w-full md:w-fit md:min-w-[500px] flex flex-col justify-center items-center bg-white rounded-[13px] p-2 lg:p-4 shadow-md ${activeTab === 'diamond' ? 'block' : 'hidden'}`}>
                                        <div className='w-full flex flex-col items-start gap-4 py-1 px-4'>
                                            <div className='w-full border-b pb-3'>
                                                <h1 className='text-[16px] font-[500] text-gray-800'>Diamond Prices</h1>
                                            </div>
                                            {
                                                diamondData?.map((data, i) => (
                                                    <div key={i} className='w-full' onClick={() => diamondDataIndex === i ? setDiamondDataIndex(null) : setDiamondDataIndex(i)}>
                                                        <div className='w-full'>
                                                            <label htmlFor="diamond" className='text-[12px] pl-1'>{data?.title}</label>
                                                            <div className='w-full'>
                                                                <input type="text" name='diamond' className='w-full px-2 py-1 rounded-[10px] outline-none text-[14px] border bg-[#ececec]' value={data?.value} onChange={(e) => {
                                                                    setDiamondData(
                                                                        () => diamondData?.map((d_data, d_i) => {
                                                                            if (d_i === diamondDataIndex) {
                                                                                return {
                                                                                    ...d_data,
                                                                                    value: e?.target?.value
                                                                                }
                                                                            }else {
                                                                                return d_data
                                                                            }
                                                                        })
                                                                    )
                                                                }}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className='w-full flex justify-end items-center mt-5 px-4'>
                                            <button className='px-5 py-1 text-[15px] bg-[#3EDCFF] shadow-md active:scale-95 transition-all duration-300 rounded-[10px] font-[500]' onClick={ async () => {
                                                await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'setDiamondPrice', diamondData).then((response) => {
                                                    console.log(response?.data)
                                                    if (response?.data?.status) {
                                                        toast.success(response?.data?.message, {
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
                                                await axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'getDiamondPrice').then((response) => {
                                                    console.log(response?.data?.diamond_data)
                                                    setDiamondData(response?.data?.diamond_data);
                                                })
                                            }}>Save</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminPricesPage