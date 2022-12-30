import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditAddress = () => {

    const navigate = useNavigate();

    const add1Ref = useRef();
    const add2Ref = useRef();
    const landmarkRef = useRef();
    const phoneRef = useRef();
    const cityRef = useRef();
    const stateRef = useRef();
    const countryRef = useRef();
    const pincodeRef = useRef();

    const [editApiData, setEditApiData] = useState();

    const params = useParams();

    useEffect(() => {
        let formdata = new FormData();
        formdata.append("address_id", params?.id);
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'addressEdit', formdata).then((response) => {
            // console.log(response?.data)
            setEditApiData(response?.data)
        })
    }, [])

    const submitForm = (e) => {
        e.preventDefault();
        let formdata = new FormData();
        // formdata.append("id", data?.id);
        formdata.append("token", localStorage.getItem("token"));
        formdata.append("address_id", params?.id);
        formdata.append("add_line_1", add1Ref?.current?.value);
        formdata.append("add_line_2", add2Ref?.current?.value);
        formdata.append("phone_no", landmarkRef?.current?.value);
        formdata.append("landmark", landmarkRef?.current?.value);
        formdata.append("city", cityRef?.current?.value);
        formdata.append("country", countryRef?.current?.value);
        formdata.append("state", stateRef?.current?.value);
        formdata.append("pincode", pincodeRef?.current?.value);
        axios.put(import.meta.env.VITE_APP_BASE_API_LINK + 'addressEdit', formdata).then((response) => {
            console.log(response?.data)
            // setProfileApiData(response?.data)
        })
        navigate(-1)
    }
    

  return (
    <div className='w-full pb-10 border-2 bg-[#eeeeee]'>
        <div className='w-full mt-5'>
            <p className='poppins tracking-[2px] text-[10px] pl-2 md:pl-14'>Home / Accounts</p>
        </div>
        <div className='w-full text-center my-10'>
            <h1 className='lora italic font-[500] text-[20px]'>Edit Address</h1>
        </div>
        <form onSubmit={submitForm} className='w-[90%] md:w-[50%] mx-auto flex flex-col gap-3 justify-center items-center'>
            <div className='flex flex-col w-full py-2'>
                <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Address Line I</label>
                <input type="text" className='md:p-2 md:text-[15px] outline-none text-[#696969]' ref={add1Ref} defaultValue={editApiData?.address?.content?.add_line_1} />
            </div>
            <div className='flex flex-col w-full py-2'>
                <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Address Line II</label>
                <input type="text" className='md:p-2 md:text-[15px] outline-none text-[#696969]' ref={add2Ref} defaultValue={editApiData?.address?.content?.add_line_2} />
            </div>
            <div className='flex flex-col md:flex-row gap-3 w-full py-2'>
                <div className='flex flex-col w-full'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Landmark &#40;optional&#41;</label>
                    <input type="text" className='md:p-2 md:text-[15px] outline-none text-[#696969]' ref={landmarkRef} defaultValue={editApiData?.address?.content?.landmark} />
                </div>
                <div className='flex flex-col w-full'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Phone Number</label>
                    <input type="number" className='md:p-2 md:text-[15px] outline-none text-[#696969]' ref={phoneRef} defaultValue={editApiData?.address?.content?.phone_no} min={0} />
                </div>
            </div>
            <div className='md:grid grid-cols-2 gap-3 w-full'>
                <div className='w-full py-2 flex flex-col'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >City</label>
                    <input type="text" className='md:p-2 md:text-[15px] outline-none text-[#696969]' ref={cityRef} defaultValue={editApiData?.address?.content?.city} />
                </div>
                <div className='w-full py-2 flex flex-col'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >State</label>
                    <input type="text" className='md:p-2 md:text-[15px] outline-none text-[#696969]' ref={stateRef} defaultValue={editApiData?.address?.content?.state} />
                </div>
                <div className='w-full py-2 flex flex-col'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Country</label>
                    <input type="text" className='md:p-2 md:text-[15px] outline-none text-[#696969]' ref={countryRef} defaultValue={editApiData?.address?.content?.country} />
                </div>
                <div className='w-full py-2 flex flex-col'>
                    <label className='text-[11px] md:text-[13px] pl-1 poppins tracking-[2px] pb-1' >Pincode</label>
                    <input type="number" className='md:p-2 md:text-[15px] outline-none text-[#696969]' ref={pincodeRef} defaultValue={editApiData?.address?.content?.pincode} min={0} />
                </div>
            </div>
            <div className='w-full flex justify-between md:justify-center md:gap-[60px] pt-5 md:pt-10'>
                <button className='p-2 px-8 md:p-4 md:px-12 poppins tracking-[3px] poppins text-[11px] md:text-[13px] bg-white text-black' >CANCEL</button>
                <button className='p-2 px-8 md:p-4 md:px-14 poppins tracking-[3px] poppins text-[11px] md:text-[13px] bg-black text-white' >SAVE</button>
            </div>
        </form>
    </div>
  )
}

export default EditAddress