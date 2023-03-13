import React, { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import profile_data from '../../mockapi/myProfileApi'
import img_left from "../../assets/icons/black-arrow-left.svg"
import { useRecoilState } from 'recoil'
import profileApiDataAtom from '../../recoil/atoms/profile/profileApiDataAtom'
import axios from 'axios'
import cross from '../../assets/icons/cross.svg'
import PageBackButton from '../global components/PageBackButton'
import { toast } from 'react-toastify'

const MyAccount = () => {

    const navigate = useNavigate();

    const [profileApiData, setProfileApiData] = useRecoilState(profileApiDataAtom);

    const [popUpToggle, setPopUpToggle] = useState(false);

    const [gender, setGender] = useState('')

    const genderRef = useRef();
    const nameRef = useRef();
    const countryCodeRef = useRef();
    const numberRef = useRef();
    const dobRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const termsandConditionsRef = useRef();

    useEffect(() => {
        let formdata = new FormData();
        // formdata.append("id", data?.id);
        formdata.append("token", localStorage.getItem("token"));
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'profileView', formdata).then((response) => {
            console.log(response?.data)
            setProfileApiData(response?.data)
            setGender(profileApiData?.user?.gender)
            // console.log(gender)
        })
    }, [])



    useEffect(() => {
        setGender(profileApiData?.user?.gender)
        // console.log(gender)
        // console.log(profileApiData)
    }, [profileApiData]);

    const editProfile = (e) => {
        e.preventDefault()
        let formdata = new FormData();
        formdata.append("token", localStorage.getItem("token"));
        formdata.append("email", emailRef?.current?.value);
        formdata.append("name", nameRef?.current?.value);
        formdata.append("phone_code", countryCodeRef?.current?.value);
        formdata.append("phone_no", numberRef?.current?.value);
        formdata.append("dob", dobRef?.current?.value);
        formdata.append("gender", gender);
        axios.put(import.meta.env.VITE_APP_BASE_API_LINK + 'profileEdit', formdata).then((response) => {
            // console.log(response?.data)
            // setProfileApiData(response?.data)
        })
    }

    // useEffect(() => {
    //   console.log(gender)
    // }, [gender])



    return (
        <div className='bg-white pb-24 relative'>
            {/* <span className='inline-block ml-4 md:ml-[100px] mt-3 lg:mt-4 cursor-pointer'>
                <img src={img_left} className="w-[28px] md:w-[30px]" onClick={() => navigate(-1)} />
            </span> */}
            <PageBackButton />
            <div className="w-full text-center pt-5 pb-10">
                <h1 className="lora italic text-[18px] md:text-[28px] font-[500]">My Account</h1>
            </div>

            {/* main flex */}

            <div className='w-[90%] md:w-[70%] mx-auto md:flex md:gap-x-12 flex-col-reverse md:flex-row'>

                {/* second sub-main flex item */}
                <div className='md:w-[55%] md:flex flex-col justify-between' >
                    {/* my profile */}
                    <div className='w-full bg-[#E3E3E3] my-4 py-2 pt-4 md:overflow-auto'>
                        {/* <div className="w-[95%] mx-auto flex justify-between py-2 lora text-[15px] shadow-sm">
                            <h1 className="font-[500] md:text-[18px] md:w-full md:text-center md:ml-8">{profile_data?.my_profile?.header?.heading}</h1>
                            <button onClick={() => setPopUpToggle(true)} className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</button>
                        </div> */}
                        <div className="w-full px-[25px] flex justify-between py-2 pb-3 lora text-[15px] shadow-sm md:shadow-none">
                            <h1 className="font-[500] md:text-[18px] md:w-full md:text-center md:ml-8">{profile_data?.my_profile?.header?.heading}</h1>
                            <button onClick={() => setPopUpToggle(true)} className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</button>
                        </div>
                        <div className='md:grid grid-cols-2 max-h-[260px] md:max-h-[320px] overflow-y-scroll md:overflow-auto' >
                            <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                    <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Name</label>
                                    <div readOnly type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.name}</div>
                                </div>
                            </div>
                            <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                    <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Gender</label>
                                    {/* <input style={{ caretColor: 'transparent', }} readOnly type='text' className="w-full p-2 text-[13px] outline-none" value={profileApiData?.gender} /> */}
                                    <div readOnly type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.gender}</div>
                                </div>
                            </div>
                            <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                    <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Date Of Birth</label>
                                    {/* <input style={{ caretColor: 'transparent', }} readOnly type='date' className="w-full p-2 text-[13px] outline-none" value={profileApiData?.dob} /> */}
                                    <div readOnly type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.dob}</div>
                                </div>
                            </div>
                            <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                    <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Email ID</label>
                                    {/* <input style={{ caretColor: 'transparent', }} readOnly type='email' className="w-full p-2 text-[13px] outline-none" value={profileApiData?.email} /> */}
                                    <div readOnly type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.email}</div>
                                </div>
                            </div>
                            <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]">
                                <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                    <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">Phone No</label>
                                    {/* <input style={{ caretColor: 'transparent', }} readOnly type='number' min={0} className="w-full p-2 text-[13px] outline-none" value={profileApiData?.phone_no} /> */}
                                    <div readOnly type='text' className="w-full p-2 text-[13px] outline-none">{profileApiData?.user?.phone_code}{' '}{profileApiData?.user?.phone_no}</div>
                                </div>
                            </div>
                            {/* {
                                profile_data?.my_profile?.content?.map((data, i) => (
                                    <div className="block w-[90%] mx-auto py-2 lora text-[14px] tracking-[1.5px]" key={i}>
                                        <div className="flex flex-col items-start justify-center w-full py-2 md:py-[10px] ">
                                            <label htmlFor="" className="text-[10px] poppins tracking-[1px] font-[500] pl-1">{data?.label}</label>
                                            <input type={data?.type} className="w-full p-2 text-[11px] outline-none" />
                                        </div>
                                    </div>
                                ))
                            } */}
                        </div>
                    </div>

                    {/* address */}
                    <div className='w-full bg-[#E3E3E3] my-4 py-2 md:px-0 pt-4'>
                        {/* <div className="w-[95%] mx-auto flex justify-between md:px-3 py-2 lora text-[14px] mb-4">
                            <h1 className="font-[500] md:text-[18px] md:w-full md:text-center md:ml-8">{profile_data?.address?.header?.heading}</h1>
                            <Link to='/add-address' className="tracking-[2px]">{profile_data?.address?.header?.sub_heading}</Link>
                        </div> */}
                        <div className="w-full px-[25px] flex justify-between py-2 pb-3 lora text-[15px] shadow-sm">
                            <h1 className="font-[500] md:text-[18px] md:w-full md:text-center md:ml-8">{profile_data?.address?.header?.heading}</h1>
                            {
                                profileApiData?.address?.length === 0 ?
                                <Link to='/add-address' className="tracking-[2px]">{profile_data?.address?.header?.sub_heading}</Link>
                                :
                                ''
                            }
                        </div>
                        <div className='max-h-[200px] md:max-h-[175px] px-4'>
                            {
                                profileApiData?.address?.map((data, i) => (
                                    <div className='w-full flex justify-between items-center my-2 border-b border-b-[#6969696b]' key={i}>
                                        <div className="w-full flex flex-col justify-start py-2 md:px-3 lora text-[11px] tracking-[1.5px]">
                                            <div className='w-full flex flex-col'>
                                                <h1>{data?.add_line_1},</h1>
                                                <h1>{data?.add_line_2}</h1>
                                            </div>
                                            <h1>{data?.landmark}</h1>
                                            <h1>{data?.city}</h1>
                                            <h1>{data?.country}</h1>
                                            <h1>{data?.state}</h1>
                                            <h1>{data?.pincode}</h1>
                                        </div>
                                        <Link to={'/edit-address' + '/' + data?.id}>
                                            <div className='lora text-[12px] pr-1 tracking-[2px]'>
                                                <p className='underline'>edit</p>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                </div>


                {/* first sub-main flex item */}
                <div className='md:w-[45%] md:flex flex-col justify-between' >
                    {/* my Orders */}
                    <div className='w-full bg-[#E3E3E3] my-4 md:mx-10 pt-[1rem] min-h-[220px] md:min-h-[280px]'>
                        <div className="w-full px-[25px] flex justify-between py-2 pb-3 lora text-[15px] shadow-sm">
                            <h1 className="font-[500] md:text-[17px]">{profile_data?.my_orders?.header?.heading}</h1>
                            <Link to='/orders' className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</Link>
                        </div>
                        <div className='w-full px-[20px] flex justify-between items-center py-2 lora text-[12px] my-2 tracking-[1.5px]'>
                            <h1 className='w-full text-start'>ID</h1>
                            <h1 className='w-full text-center'>Amount</h1>
                            <h1 className='w-full text-end'>Status</h1>
                        </div>
                        <div className='max-h-[150px] md:max-h-[230px] overflow-y-scroll pt-1'>
                            {/* {
                                profile_data?.my_orders?.content?.map((data, i) => (
                                    <div className="w-full px-[20px] flex justify-between items-center py-2 lora text-[12px] tracking-[1.5px]" key={i}>
                                        <img src={data?.image} className="w-[40px]" />
                                        <h1>{data?.title}</h1>
                                        <h1>{data?.price}</h1>
                                    </div>
                                ))
                            } */}
                            {
                                profileApiData?.my_orders?.map((data, i) => (
                                    <div className="w-full px-[20px] flex justify-between items-center py-2 lora text-[12px] my-2 tracking-[1.5px]" key={i}>
                                        {/* <img src={data?.image} className="w-[40px]" /> */}
                                        <h1 className='w-full'>{data?.id}</h1>
                                        <h1 className='w-full text-center'>₹ {data?.order_amount}</h1>
                                        <h1 className='w-full text-end'>{data?.order_status}</h1>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    {/* wishlist */}
                    <div className='w-full bg-[#E3E3E3] my-4 md:mx-10 pt-[1rem] min-h-[220px] md:min-h-[280px]'>
                        <div className="w-full px-[25px] flex justify-between py-2 pb-3 lora text-[15px] shadow-sm">
                            <h1 className="font-[500] md:text-[17px]">{profile_data?.wishlist?.header?.heading}</h1>
                            <Link to='/wishlist' className="tracking-[2px]">{profile_data?.my_profile?.header?.sub_heading}</Link>
                        </div>
                        <div className='max-h-[150px] md:max-h-[230px] overflow-y-scroll pt-1'>
                            {/* {
                                profile_data?.wishlist?.content?.map((data, i) => (
                                    <div className="w-[95%] mx-auto flex justify-between items-center py-2 px-2 lora text-[12px] tracking-[1.5px]" key={i}>
                                        <img src={data?.image} className="w-[40px]" />
                                        <h1>{data?.title}</h1>
                                        <h1>{data?.price}</h1>
                                    </div>
                                ))
                            } */}
                            {
                                profileApiData?.wishlist?.map((data, i) => (
                                    <div className="w-[95%] mx-auto flex justify-between items-center py-2 px-2 lora text-[12px] tracking-[1.5px] my-2" key={i}>
                                        <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-[40px]" />
                                        <h1>{data?.name}</h1>
                                        <h1>{data?.id}</h1>
                                        {/* <h1>{data?.category}</h1> */}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>


            {/* pop up modal */}

            <div className={`z-[150] pb-4 w-[85vw] mx-auto fixed top-[60%] left-[50%] translate-x-[-50%] translate-y-[-50%] inset-0 bg-[#dddddd] transition-all duration-100 ${popUpToggle ? 'block ease-in bg-opacity-100 h-fit' : 'hidden ease-out h-0'}`}>
                <div className='w-full flex justify-end '>
                    {/* <img src="" alt="" /> */}
                    {/* <p className='cursor-pointer mt-5 mr-5' onClick={() => setPopUpToggle(false)}>X</p> */}
                    <img src={cross} className='cursor-pointer mt-5 mr-5 w-[18px] md:w-[20px]' alt="" onClick={() => {
                        let formdata = new FormData();
                        formdata.append("token", localStorage.getItem("token"));
                        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'profileView', formdata).then((response) => {
                            // console.log(response?.data)
                            setProfileApiData(response?.data)
                        })
                        setPopUpToggle(false)
                    }} />
                </div>
                <div className='w-full flex justify-center items-center '>
                    <form onSubmit={editProfile} className='w-[80%] md:w-[30%] mx-auto px-2 '>
                        <div className='flex justify-between items-center'>
                            <div className='' onClick={() => setGender('Male')}>
                                <label className='text-[13px] mr-2' htmlFor="name">Male</label>
                                {/* <input ref={genderRef} defaultChecked={gender === 'Male' ? true : false} onChange={() => setGender(profileApiData?.user?.gender)} className='text-[13px] outline-none p-1 accent-[#696969] ' htmlFor='male' type="radio" name='gender' /> */}
                                <div className={`w-[12px] h-[12px] rounded-[50%] inline-block ${gender === 'M' ? 'bg-[#696969b9] border border-white' : 'bg-white border border-[#6969694a]'}`} onClick={() => setGender("M")}></div>
                            </div>
                            <div className='' onClick={() => setGender('Female')}>
                                <label className='text-[13px] mr-2' htmlFor="name">Female</label>
                                {/* <input ref={genderRef} defaultChecked={gender === 'Female' ? true : false} onChange={() => setGender(profileApiData?.user?.gender)} className='text-[13px] outline-none p-1 accent-[#696969] ' htmlFor='female' type="radio" name='gender' /> */}
                                <div className={`w-[12px] h-[12px] rounded-[50%] inline-block ${gender === 'F' ? 'bg-[#696969b9] border border-white' : 'bg-white border border-[#6969694a]'}`} onClick={() => setGender("F")}></div>
                            </div>
                            <div className='' onClick={() => setGender('Other')}>
                                <label className='text-[13px] mr-2' htmlFor="name">Others</label>
                                {/* <input ref={genderRef} defaultChecked={gender === 'Other' ? true : false} onChange={() => setGender(profileApiData?.user?.gender)} className='text-[13px] outline-none p-1 accent-[#696969] ' htmlFor='others' type="radio" name='gender' /> */}
                                <div className={`w-[12px] h-[12px] rounded-[50%] inline-block ${gender === 'O' ? 'bg-[#696969b9] border border-white' : 'bg-white border border-[#6969694a]'}`} onClick={() => setGender("O")}></div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Name</label>
                            <input ref={nameRef} className='text-[13px] outline-none py-2 pl-2' type="text" defaultValue={profileApiData?.user?.name} />
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Date of Birth</label>
                            <input ref={dobRef} className='text-[13px] outline-none py-2 pl-2' type="date" defaultValue={profileApiData?.user?.dob} />
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Email</label>
                            <input ref={emailRef} className='text-[13px] outline-none py-2 pl-2' type="email" defaultValue={profileApiData?.user?.email} />
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Region Code</label>
                            <input ref={countryCodeRef} className='text-[13px] outline-none py-2 pl-2' type="text" defaultValue={profileApiData?.user?.phone_code} />
                        </div>
                        <div className='w-full flex flex-col my-8'>
                            <label className='text-[13px] pb-1' htmlFor="name">Phone Number</label>
                            <input ref={numberRef} className='text-[13px] outline-none py-2 pl-2' type="number" min={0} defaultValue={profileApiData?.user?.phone_no} />
                        </div>
                        <div className='w-full pb-4'>
                            <button className='block bg-[black] text-white px-4 py-3 w-[50%] tracking-[2px] mx-auto'>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className={`fixed inset-0 h-screen w-full bg-black opacity-50 z-[100] ${popUpToggle ? 'block ease-in' : 'hidden ease-out'}`} onClick={() => setPopUpToggle(false)}>

            </div>






            {/* main flex 2 */}
            {/* <div className='border-2 border-red-500 w-full'>
      </div> */}
        </div>
    )
}

export default MyAccount