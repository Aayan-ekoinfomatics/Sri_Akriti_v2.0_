import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../global components/AdminSidebar'

const AdminPricesPage = () => {

    const [activeTab, setActiveTab] = useState('metal');

    const [metalData, setMetalData] = useState();
    const [diamondData, setDiamondData] = useState();

    useEffect(() => {

        setMetalData([
            { id: 1, title: 'Gold', value: '23', },
            { id: 2, title: 'Platinum', value: '53', },
            { id: 3, title: 'Making Charges', value: '234', },
        ])
        
        setDiamondData([
            { id: 1, title: 'D1', value: '23', },
            { id: 2, title: 'D2', value: '53', },
        ])

        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + '').then((response) => {
            console.log(response?.data)
            // setMetalData();
            // setDiamondData();
        })

    }, [])



    return (
        <div className='w-full bg-[#F5F5F5] flex justify-center items-center'>
            <div className='w-full pt-10'>

                {/* content */}
                <div className='w-full pl-[250px] xl:pl-[340px]  pt-10'>

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
                        <div className='w-full pr-10 xl:pr-20 px-3'>
                            <div className='w-full mt-12'>

                                {/* tabs */}
                                <div className='w-full flex justify-between items-center max-w-[190px]'>

                                    <div className={`max-w-[250px] bg-[#fff] rounded-[10px] py-1 px-4 shadow-md cursor-pointer active:scale-95 transition-all duration-300 ${activeTab === 'metal' ? 'bg-[#dfdfdf] shadow-none' : ''}`} onClick={() => setActiveTab('metal')}>
                                        <h1 className='text-[15px] font-[500] text-gray-600'>Metal</h1>
                                    </div>

                                    <div className={`max-w-[250px] bg-[#fff] rounded-[10px] py-1 px-4 shadow-md cursor-pointer active:scale-95 transition-all duration-300 ${activeTab === 'diamond' ? 'bg-[#dfdfdf] shadow-none' : ''}`} onClick={() => setActiveTab('diamond')}>
                                        <h1 className='text-[15px] font-[500] text-gray-600'>Diamond</h1>
                                    </div>

                                </div>

                                {/* body */}
                                <div className='w-full mt-4'>

                                    {/* metal */}
                                    <div className={`w-fit min-w-[500px] flex flex-col justify-center items-center bg-white rounded-[13px] p-2 lg:p-4 shadow-md ${activeTab === 'metal' ? 'block' : 'hidden'}`}>
                                        <div className='w-full flex flex-col items-start gap-4 py-1 px-4'>
                                            {
                                                metalData?.map((data, i) => (
                                                    <div key={i} className='w-full'>
                                                        <div className='w-full'>
                                                            <label htmlFor="gold" className='text-[12px] pl-1'>{data?.title}</label>
                                                            <div className='w-full'>
                                                                <input type="text" className='w-full px-2 py-1 rounded-[10px] outline-none text-[14px] border bg-[#ececec]' value={data?.value}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className='w-full flex justify-end items-center mt-5 px-4'>
                                            <button className='px-4 py-1 text-[14px] bg-[#3EDCFF] shadow-md active:scale-95 transition-all duration-300 rounded-[10px] font-[500]'>Save</button>
                                        </div>
                                    </div>

                                    {/* diamond */}
                                    <div className={`w-fit min-w-[500px] flex flex-col justify-center items-center bg-white rounded-[13px] p-2 lg:p-4 shadow-md ${activeTab === 'diamond' ? 'block' : 'hidden'}`}>
                                        <div className='w-full flex flex-col items-start gap-4 py-1 px-4'>
                                            {
                                                diamondData?.map((data, i) => (
                                                    <div key={i} className='w-full'>
                                                        <div className='w-full'>
                                                            <label htmlFor="gold" className='text-[12px] pl-1'>{data?.title}</label>
                                                            <div className='w-full'>
                                                                <input type="text" className='w-full px-2 py-1 rounded-[10px] outline-none text-[14px] border bg-[#ececec]' value={data?.value} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className='w-full flex justify-end items-center mt-5 px-4'>
                                            <button className='px-4 py-1 text-[14px] bg-[#3EDCFF] shadow-md active:scale-95 transition-all duration-300 rounded-[10px] font-[500]'>Save</button>
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