import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import checkout from '../../mockapi/checkoutPageApi'


const Checkout = () => {

    const [checkoutData, setCheckoutData] = useState();

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    useEffect(() => {
        let formData = new FormData
        formData?.append("token", localStorage.getItem("token"))
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'checkout', formData).then((response) => {
            // console.log(response?.data)
            setCheckoutData(response?.data)
        })
    }, []);

    // useEffect(() => {
    //     setName(checkoutData?.form?.content[0]?.value);
    //     setAmount(checkoutData?.checkout_data?.total?.amount);
    // }, [])


    // this function will handel payment when user submit his/her money
    // and it will confim if payment is successfull or not
    const handlePaymentSuccess = async (response) => {
        try {
            let bodyData = new FormData();

            // we will send the response we've got from razorpay to the backend to validate the payment
            bodyData.append("response", JSON.stringify(response));
            bodyData.append("token", localStorage.getItem("token"));
            bodyData.append("amount", checkoutData?.checkout_data?.total?.amount);

            await axios({
                url: import.meta.env.VITE_APP_BASE_API_LINK + `success`,
                method: "POST",
                data: bodyData,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    console.log(res)
                    console.log("Everything is OK!");
                    alert('Payment completed')
                    navigate('/cart')
                    // setName(checkoutData?.form?.content[0]?.value);
                    // setAmount(checkoutData?.checkout_data?.total?.amount);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (error) {
            console.log(console.error());
        }
    };

    // this will load a script tag which will open up Razorpay payment card to make //transactions
    const loadScript = () => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        document.body.appendChild(script);
    };

    const showRazorpay = async () => {
        // console.log()
        const res = await loadScript();

        let bodyData = new FormData();

        // we will pass the amount and product name to the backend using form data
        // bodyData.append("amount", product?.price.toString());
        // bodyData.append("name", product?.product_name);

        bodyData.append("amount", checkoutData?.checkout_data?.total?.amount);
        bodyData.append("name", checkoutData?.form?.content[0]?.value);
        bodyData.append("token", localStorage.getItem("token"));

        const data = await axios({
            url: import.meta.env.VITE_APP_BASE_API_LINK + `start_payment`,
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            data: bodyData,
        }).then((res) => {
            console.log(res)
            return res;
        });

        // in data we will receive an object from the backend with the information about the payment
        //that has been made by the user

        var options = {
            key_id: 'rzp_test_gHJS0k5aSWUMQc', // in react your environment variable must start with REACT_APP_
            key_secret: '8hPVwKRnj4DZ7SB1wyW1miaf',
            amount: data.data.payment.amount,
            currency: "INR",
            name: "Org. Name",
            description: "Test teansaction",
            image: "", // add image url
            order_id: data.data.payment.id,
            handler: function (response) {
                // we will handle success by calling handlePaymentSuccess method and
                // will pass the response that we've got from razorpay
                handlePaymentSuccess(response);
            },
            prefill: {
                name: "User's name",
                email: "User's email",
                contact: "User's phone",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#3399cc",
            },
        };

        var rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    useEffect(() => {
        console.log(checkoutData)
        // console.log(checkoutData?.form?.content[0]?.value, checkoutData?.checkout_data?.total?.amount)
    }, [checkoutData])



    return (
        <div className='w-full pt-8 pb-10 bg-[#eeeeee]'>

            {
                checkoutData?.item?.content?.length > 0 ?
                    <div className='w-[80%] mx-auto md:flex pt-14 mb-10'>
                        {/* flex child 1 */}
                        <div className='my-2 w-full md:w-[65%] md:border-r md:border-r-black md:pr-3'>
                            {/* flex child 1.1 */}
                            <div className=' my-2 flex flex-col items-center max-w-[700px] mx-auto'>

                                {/* address form */}
                                <div className='w-full py-3 mb-6'>
                                    <div className='w-full flex justify-between my-2 mb-5'>
                                        <h1 className='lora text-[15px] font-[500]'>{checkoutData?.form?.header?.heading}</h1>
                                        {/* <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.form?.header?.sub_heading}</p> */}
                                    </div>
                                    <div className='w-full  gap-2'>
                                        {/* {
                                    checkoutData?.form?.content?.map((data, i) => (
                                        <div className='w-full flex flex-col justify-start' key={i}>
                                            <label className='poppins text-[12px]' >{data?.label}</label>
                                            <input type='text' defaultValue={data?.value} className='px-2 outline-none py-1 text-[14px]' />
                                        </div>
                                    ))
                                } */}

                                        {
                                            checkoutData?.form?.content?.map((data, i) => (
                                                <div className={`flex items-center justify-start my-1 ${data?.label === 'Phone Code' ? 'w-fit ' : 'w-full'}`} key={i}>
                                                    <h1 className='poppins text-[12px]' >{data?.label}</h1>
                                                    <p className='px-2 outline-none text-[15px]'>{data?.value}</p>
                                                </div>
                                            ))
                                        }

                                    </div>
                                </div>

                                {/* address card */}
                                <div className='w-full py-3 mb-6'>
                                    <div className='w-full flex justify-between my-2'>
                                        <h1 className='lora text-[15px] font-[500]'>{checkout?.address?.header?.heading}</h1>
                                        <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.address?.header?.sub_heading}</p>
                                    </div>
                                    <div className=' w-full max-h-[150px] overflow-y-scroll'>
                                        {
                                            checkoutData?.address?.content?.map((data, i) => {
                                                return (
                                                    <div key={i} className='flex w-full justify-between border-b border-b-[#69696927] pt-1 px-2 pb-3 my-3'>
                                                        <div className='flex flex-col justify-start text-[12px]' key={i}>
                                                            <p className='poppins text-[11px] tracking-[2px]' >{data?.locality}</p>
                                                            <p className='poppins text-[11px] tracking-[2px]' >{data?.city}</p>
                                                            <p className='poppins text-[11px] tracking-[2px]' >{data?.pincode}</p>
                                                        </div>
                                                        {/* <div className='flex justify-between items-center gap-3'>
                                                    <div className={`inline w-[12px] h-[12px] rounded-[50%] border-2 border-[#69696975] bg-white `} ></div>
                                                    <p className='poppins text-[11px] tracking-[2px] cursor-pointer'>{data?.select}select</p>
                                                </div> */}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>

                                {/* card */}
                                {/* <div className='w-full py-3 mb-6'>
                        <div className='w-full flex justify-between my-2'>
                            <h1 className='lora text-[15px] font-[500]'>{checkout?.card?.header?.heading}</h1>
                            <p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.card?.header?.sub_heading}</p>
                        </div>
                        {
                            checkout?.card?.content?.map((data, i) => (
                                <div className='flex justify-between text-[12px]' key={i}>
                                    <div>
                                        <p className='poppins text-[11px] tracking-[2px]' >{data?.number}</p>
                                        <p className='poppins text-[11px] tracking-[2px]' >{data?.name}</p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='poppins text-[11px] tracking-[2px]' >{data?.cvv}</p>
                                        <p className='poppins text-[11px] tracking-[2px]' >{data?.expiry}</p>
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div> */}
                            </div>

                            {/* flex child 1.2 */}
                            <div className=' my-2 flex justify-center items-center max-w-[700px] mx-auto'>

                                {/* item details */}
                                <div className='w-full py-3 mb-6 '>
                                    <div className='w-full flex justify-between my-2'>
                                        <h1 className='lora text-[15px] font-[500]'>{checkout?.item?.header?.heading}</h1>
                                        <Link to='/cart'><p className='poppins tracking-[2px] text-[#696969] text-[14px]'>{checkout?.item?.header?.sub_heading}</p></Link>
                                    </div>
                                    <div className='max-h-[180px] overflow-y-scroll'>
                                        {
                                            checkoutData?.item?.content?.map((data, i) => (
                                                <div className='w-[98%] mx-auto flex justify-between text-[12px] py-2 gap-3 border-b border-b-[#69696927]' key={i}>
                                                    <div className='w-[90px]'>
                                                        <img src={import.meta.env.VITE_APP_BASE_API_LINK + data?.image} className="w-full" />
                                                    </div>
                                                    <div className='w-full flex flex-col justify-start'>
                                                        <h1 className='lora text-[14px] font-[500]'>{data?.title}</h1>
                                                        <p className='poppins text-[11px] tracking-[2px]'>ID: {data?.id}</p>
                                                        <p className='poppins text-[11px] tracking-[2px]'>x{data?.qty}</p>
                                                        <div className='w-full flex justify-end'>
                                                            <p className='poppins text-[14px] tracking-[2px]'>₹ {data?.price}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* flex child 2 */}
                        <div className='my-2 w-full md:w-[45%] border-t border-t-black md:border-t-0 flex justify-center items-center'>
                            {/* checkout details */}
                            <div className='md:mt-16 w-full md:w-[70%] md:ml-auto '>
                                <div className='w-full flex justify-between my-3 md:my-5'>
                                    <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.sub_total?.title}</h1>
                                    <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >₹ {checkoutData?.checkout_data?.sub_total?.amount}</p>
                                </div>
                                <div className='w-full flex justify-between my-3 md:my-5'>
                                    <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.shipping?.title}</h1>
                                    <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >₹ {checkoutData?.checkout_data?.shipping?.amount}</p>
                                </div>
                                <div className='w-full flex justify-between my-3 md:my-5'>
                                    <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.tax?.title}</h1>
                                    <p className='poppins text-[12px] md:text-[14px] tracking-[3px] text-[#696969d2]' >{checkoutData?.checkout_data?.tax?.amount}</p>
                                </div>
                                <div className='w-full flex justify-between my-3 md:my-5'>
                                    <h1 className='poppins text-[12px] md:text-[14px] tracking-[3px]' >{checkoutData?.checkout_data?.total?.title}</h1>
                                    <p className='poppins text-[12px] md:text-[14px] tracking-[3px]' >₹ {checkoutData?.checkout_data?.total?.amount}</p>
                                </div>
                                <div className='w-full flex justify-center items-center pt-10 md:my-5'>
                                    <button className='bg-black text-white p-4 px-14 text-[12px] md:text-[15px] font-[300] tracking-[3px] md:w-full' onClick={() => showRazorpay()}>{checkout?.checkout_data?.checkout_button}</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    :
                    <div className="w-full flex justify-center items-center h-[60vh] md:mt-20 mb-10">
                        <div className="flex flex-col justify-center items-center w-full ">
                            <div className="w-full text-center lora text-[20px] font-[500] my-12">
                                <h1>Nothing to checkout.</h1>
                            </div>
                            <div className="w-full flex justify-center items-center my-12">
                                <Link to='/'>
                                    <button className="bg-[#3EDCFF] tracking-[3px] text-[15px] p-4">CONTINUE SHOPPING</button>
                                </Link>
                            </div>
                        </div>
                    </div>
            }

            {/* main flex */}

        </div>
    )
}

export default Checkout