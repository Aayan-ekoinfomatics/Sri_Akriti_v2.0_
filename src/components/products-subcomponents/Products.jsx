import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import collection_data from '../../mockapi/apiData'

const Products = (props) => {

    const [name, setName] = useState("");
    const [amount, setAmount] = useState("");

    // this function will handel payment when user submit his/her money
    // and it will confim if payment is successfull or not
    const handlePaymentSuccess = async (response) => {
        try {
            let bodyData = new FormData();

            // we will send the response we've got from razorpay to the backend to validate the payment
            bodyData.append("response", JSON.stringify(response));

            await axios({
                url: `http://192.168.1.16:3000/success`,
                method: "POST",
                data: bodyData,
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    console.log("Everything is OK!");
                    setName("");
                    setAmount("");
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

    const showRazorpay = async (product) => {
        console.log(product)
        const res = await loadScript();

        let bodyData = new FormData();

        // we will pass the amount and product name to the backend using form data
        // bodyData.append("amount", product?.price.toString());
        // bodyData.append("name", product?.product_name);

        bodyData.append("amount", '400');
        bodyData.append("name", 'p1');

        const data = await axios({
            url: `http://192.168.1.16:3000/start_payment`,
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


    return (
        <div className='w-full p-6'>
            <div className='w-fit grid gap-5 grid-cols-4 mx-auto'>
                {
                    collection_data?.products?.slice(0, 6)?.map?.((data, i) => (
                        <div key={i} className='w-full min-w-[400px] max-w-[500px] flex flex-col items-center'>
                            <div className=''>
                                <img src={data?.image} className="" />
                            </div>
                            <button className='w-full bg-blue-400 text-white py-2 poppins tracking-[1px] text-[22px] font-[400]' onClick={( ) => showRazorpay(data)} >BUY NOW</button>
                            <div className='w-full flex gap-3 poppins tracking-[1px]'>
                                <p className='text-[22px] font-[500]'>₹ {data?.price}</p>
                                <p className='text-[20px] font-[400] line-through'>₹ {data?.price}</p>
                            </div>
                            <h1>{props.name}</h1>
                            <div className='w-full'>
                                <h1 className='text-[22px] font-[400]'>{data?.product_name}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Products