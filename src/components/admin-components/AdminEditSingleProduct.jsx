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
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'
import down from '../../assets/icons/down-arrow-admin.svg'
import noImage from '../../assets/images/about-us.png'


const AdmitEditSingleProduct = () => {

    const [searchData, setSearchData] = useState('');
    const [filterValue, setFilteredValue] = useState();

    const [dropdown, setDropdown] = useState(false);
    const [selectedDiamondQuality, setSelectedDiamondQuality] = useState(null);

    const [defaultData, setDefaultData] = useState();

    const [gender, setGender] = useState();

    const params = useParams()

    const [activeIndex, setActiveIndex] = useState();

    const [activeParentIndex, setActiveParentIndex] = useState();

    const [selectedDiamondQualityIndex, setSelectedDiamondQualityIndex] = useState();

    const [activeKey, setActiveKey] = useState();

    const [image, setImage] = useState()


    const [testRes, setTestRes] = useState({
        product_id: 861,
        name: "SA-BAND-005",
        gender: "Male",
        category: "rings",
        discount: "",
        image_1: "media/products/SA-BAND-005.jpg",
        image_2: false,
        image_3: false,
        image_4: false,
        diamond_quality: "P",
        diamond_quality_all: [
            "GH-VS/SI",
            "EF-VVS",
            "GH-VS/SI & EF-VVS",
            "P"
        ],
        diamond_size: [
            "0.1"
        ],
        diamond_size_all: [
            "0.01",
            "0.02",
            "0.03",
            "0.04",
            "0.05",
            "0.06",
            "0.07",
            "0.08",
            "0.09",
            "0.10",
            "0.20"
        ],
        size_weight: [
            {
                size: "17",
                weight: "7.78",
                actual_price: "46368",
                sellingprice: "41731",
                id: 0
            },
            {
                size: "18",
                weight: "5.84",
                actual_price: "34806",
                sellingprice: "31325",
                id: 1
            },
            {
                size: "20",
                weight: "6.63",
                actual_price: "39514",
                sellingprice: "35563",
                id: 2
            },
            {
                size: "21",
                weight: "6.63",
                actual_price: "39514",
                sellingprice: "35563",
                id: 3
            }
        ]
    });

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
        console.log(selectedDiamondQualityIndex)
    }, [selectedDiamondQualityIndex])


    useEffect(() => {
        setGender(defaultData?.gender)
        console.log(testRes)
    }, [testRes])


    useEffect(() => {
        // let formdata = new FormData();
        // formdata.append("id", params?.product_id);
        axios.get(import.meta.env.VITE_APP_BASE_API_LINK + 'adminSingleProduct?product_id=' + params?.product_id).then((response) => {
            // console.log(response?.data)
            setDefaultData(response?.data)
            setSelectedDiamondQuality(response?.data?.diamond_quality)
        })
    }, [])


    // useEffect(() => {
    //     console.log(selectedDiamondQuality)
    // }, [selectedDiamondQuality])


    // const diamondQalityApi = {
    //     product: [
    //         {
    //             diamond_quality: 'ABCD',
    //             size: ['22', '21', '20'],
    //             weight: ['50', '60', '70'],
    //             actual_price: ['22000', '23000', '24000'],
    //             selling_price: ['24000', '26000', '28000'],
    //         },
    //         {
    //             diamond_quality: 'EFGH',
    //             size: ['23', '22', '21'],
    //             weight: ['40', '50', '60'],
    //             actual_price: ['24000', '26000', '28000'],
    //             selling_price: ['26000', '28000', '30000'],
    //         },
    //         {
    //             diamond_quality: 'IJKL',
    //             size: ['24', '23', '22'],
    //             weight: ['30', '50', '60'],
    //             actual_price: ['26000', '28000', '30000'],
    //             selling_price: ['28000', '30000', '32000'],
    //         },
    //         {
    //             diamond_quality: 'MNOP',
    //             size: ['25', '24', '23'],
    //             weight: ['20', '70', '90'],
    //             actual_price: ['32000', '30000', '28000'],
    //             selling_price: ['34000', '32000', '30000'],
    //         },
    //     ],
    //     variants: [
    //         {}
    //     ],
    // }
    // const payload = {
    //     name: '',
    //     gender: '',
    //     category: '',
    //     diamond_quality: '',
    //     dimond_size: '',
    //     image_1: '',
    //     image_2: '',
    //     image_3: '',
    //     image_4: '',
    //     size: '',
    //     weight: '',
    //     size_weight: ''
    // }
    const submitForm = (e) => {
        e.preventDefault()
        let formdata = new FormData();
        formdata.append("product_id", params?.product_id);
        formdata.append("name", defaultData?.name);
        formdata.append("gender", defaultData?.gender);
        formdata.append("image_1", defaultData?.image_1);
        formdata.append("image_2", defaultData?.image_2);
        formdata.append("image_3", defaultData?.image_3);
        formdata.append("image_4", defaultData?.image_4);
        formdata.append("category", defaultData?.category);
        formdata.append("diamond_quality", defaultData?.diamond_quality);
        formdata.append("diamond_size", defaultData?.diamond_size);
        formdata.append("size_weight", [{
            "size": "8",
            "weight": "13.92",
            "actual_price": "82962",
            "sellingprice": "74666",
            "id": 2
        }]);
        axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'adminEditSingleProduct', formdata).then((response) => {
            // console.log(response?.data)
            setDefaultData(response?.data)
        })
    }

    const handleVariantChange = (index, field, value) => {
        setTestRes({
            ...testRes,
            size_weight: testRes?.size_weight?.map((variant_data, variant_index) => {
                if (variant_index === index) {
                    return {
                        ...variant_data,
                        [field]: value,
                    };
                } else {
                    return variant_data;
                }
            }),
        });
    };

    const addNewVariant = () => {

        const newIndex = testRes?.size_weight?.length > 0
            ? testRes.size_weight.length
            : 0;

        // Create a new blank variant object with empty values
        const newVariant = {
            size: '',
            weight: '',
            actual_price: '',
            selling_price: '', // Adjust the field name as needed
            id: testRes?.size_weight?.length || 0, // Assign a unique ID, adjust as needed
        };

        // Update the state to add the new variant
        setTestRes((prevState) => ({
            ...prevState,
            size_weight: [...(prevState?.size_weight || []), newVariant],
        }));

        // Set the active index to the new variant's index
        setActiveIndex(newIndex);
    };


    return (
        <div className='w-full bg-[#F5F5F5] flex justify-center items-center relative'>
            <div className='w-full pt-16'>

                {/* mani flex - 1 */}
                <div className='px-10'>

                    {/* sub-flex - 1 */}
                    <div className='w-full flex gap-3'>
                        <div className='w-[18%] pb-4'>
                            <div className='w-full flex flex-col justify-end items-center'>
                                <img src={logo} className="w-[85px]" />
                            </div>
                        </div>
                        <div className='w-[82%] flex justify-between items-center'>
                            <div className='w-full'>
                                {/* <h1 className='roboto text-[50px] font-[900]'>Orders</h1> */}
                            </div>
                        </div>
                    </div>

                    {/* sub-flex - 2 */}
                    <div className='w-full flex gap-10 px-10'>

                        {/* content-flex - 1 */}
                        <div className='w-[18%] px-3'>
                            <div className='w-full flex flex-col justify-start items-center pt-[110px] bg-[#3EDCFF] h-[97%] shadow-xl rounded-[14px] my-2'>
                                <NavLink to='/admin-orders' className='w-full block'>
                                    <div className='w-full hover:bg-[#19C7EE] lg:pl-5 py-2 cursor-pointer flex justify-start gap-4 my-2'>
                                        <div>
                                            <img src={order_logo} className="w-[20px]" />
                                        </div>
                                        <div>
                                            <h1 className='roboto text-[17px] font-[500]'>Order</h1>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink to='/admin-products' className='w-full block'>
                                    <div className='w-full bg-[#19C7EE] pl-5 py-2  cursor-pointer flex justify-start gap-4 my-2'>
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
                        <div className='w-full px-3'>
                            <div className='w-full min-h-[70vh] pt-[20px]'>
                                <form onSubmit={submitForm} className='w-full roboto'>
                                    <div className='w-full flex gap-5'>
                                        <div className='w-full pt-10'>

                                            <div className='flex gap-5 my-2 max-w-[500px]'>
                                                <div className='flex gap-4 items-center' onClick={() => setGender('Male')}>
                                                    <div className={`w-[10px] h-[10px] rounded-[50%] ${gender === 'Male' ? 'bg-[#3EDCFF] border-none' : 'bg-[#c5c5c5]'}`}>
                                                    </div>
                                                    <label htmlFor='gender' className='text-[15px] font-[500]'>Male</label>
                                                </div>
                                                <div className='flex gap-4 items-center' onClick={() => setGender('Female')}>
                                                    <div className={`w-[10px] h-[10px] rounded-[50%] ${gender === 'Female' ? 'bg-[#3EDCFF] border-none' : 'bg-[#c5c5c5]'}`}>
                                                    </div>
                                                    <label htmlFor='gender' className='text-[15px] font-[500]'>Female</label>
                                                </div>
                                                <div className='flex gap-4 items-center' onClick={() => setGender('Unisex')}>
                                                    <div className={`w-[10px] h-[10px] rounded-[50%] ${gender === 'Unisex' ? 'bg-[#3EDCFF] border-none' : 'bg-[#c5c5c5]'}`}>
                                                    </div>
                                                    <label htmlFor='gender' className='text-[15px] font-[500]'>Unisex</label>
                                                </div>
                                            </div>
                                            {
                                                <div className='w-full flex flex-col my-2 max-w-[500px]'>
                                                    <input type="text" name="product name" value={defaultData?.name} onChange={(e) => {
                                                        setDefaultData({
                                                            ...defaultData,
                                                            name: e.target.value
                                                        })
                                                    }} className='outline-none py-[6px] px-3 my-1 rounded-[8px] shadow-md text-[13px]' placeholder='Product Name' />
                                                    <input type="text" name="product category" value={defaultData?.category} onChange={(e) => {
                                                        setDefaultData({
                                                            ...defaultData,
                                                            category: e.target.value
                                                        })
                                                    }} className='outline-none py-[6px] px-3 my-1 rounded-[8px] shadow-md text-[13px]' placeholder='Product Category' />
                                                </div>
                                            }
                                            <h1 className='my-1 pt-14 font-[500]'>Diamond Quality</h1>
                                            <div className='w-full flex flex-col my-2 max-w-[500px]'>

                                                {/* dropdown */}
                                                <div className='w-full rounded-[10px] z-[110] bg-white shadow-md py-[5px] pl-3 my-1 cursor-pointer flex justify-between items-center pr-3' onClick={() => setDropdown(!dropdown)}>
                                                    <div className='text-[15px] text-[#696969b6]'>{!selectedDiamondQuality ? 'Select a diamond quality' : selectedDiamondQuality}</div>
                                                    <div><img src={down} className="" /></div>
                                                </div>
                                                <div className={`fixed max-w-[500px] z-[110] mt-10 rounded-[10px] shadow-md bg-white w-full overflow-hidden transition-all duration-300 ${dropdown ? 'max-h-[180px] ease-in  px-4 py-2' : 'max-h-0 ease-out p-0'}`}>
                                                    {
                                                        defaultData?.diamond_quality_all?.map((data, i) => {
                                                            return (
                                                                <li key={i} className='text-[16px] list-none roboto w-full hover:bg-[#dddddd] my-1 px-2 py-1 cursor-pointer rounded-md' onClick={() => {
                                                                    setSelectedDiamondQuality(data)
                                                                    setSelectedDiamondQualityIndex(i)
                                                                    setDropdown(false)
                                                                }}>{data}</li>
                                                            )
                                                        })
                                                    }
                                                </div>
                                                <div className={`fixed bottom-0 top-0 left-0 right-0 bg-black opacity-40 z-[100] ${dropdown ? 'block' : 'hidden'}`} onClick={() => setDropdown(false)}>

                                                </div>


                                                <input type="text" value={selectedDiamondQuality} onChange={(e) => {
                                                    setDefaultData({
                                                        ...defaultData,
                                                        variants: defaultData?.variants?.map((v_data, v_index) => {
                                                            if (v_data?.diamond_quality === selectedDiamondQuality) {
                                                                return {
                                                                    ...v_data,
                                                                    diamond_quality: e.target.value,
                                                                }
                                                            } else {
                                                                return v_data
                                                            }
                                                        })

                                                    })
                                                }} name="product name" className='outline-none py-[6px] px-3 my-1 rounded-[8px] shadow-md text-[13px]' placeholder='Category Name' />
                                            </div>
                                            {/* <div className='w-full flex justify-end max-w-[500px]'>
                                                <button className=' py-[4px] px-6 rounded-[10px] text-[14px] active:bg-[#d6d6d6] active:scale-[0.91]'>Add more</button>
                                            </div> */}
                                        </div>
                                        <div className='w-full flex flex-col gap-2 justify-end'>
                                            <div className='w-full flex justify-end gap-4'>
                                                <input type="file" name="files" id="files" className="inputfile" onChange={(e) => {
                                                    console.log(e.target.files[0])

                                                }} />
                                                <label htmlFor="files">Add Image</label>
                                                <button className='bg-[#3EDCFF] text-white active:bg-[#d6d6d6] active:scale-[0.91] active:text-[#696363] px-6 py-[5px] shadow-md rounded-[10px]'>Submit</button>
                                            </div>
                                            <div className='w-full pt-10 flex justify-end gap-2'>
                                                <div className="w-full max-w-[500px] relative">
                                                    <img onClick={() => setTestRes({
                                                        ...testRes,
                                                        image_1: image,
                                                    })} src={defaultData?.image_1 ? import.meta.env.VITE_APP_BASE_API_LINK + defaultData?.image_1 : noImage} className="w-full" />
                                                    <input type="file" className='absolute h-full w-full border top-0 opacity-0' />
                                                </div>
                                                <div className='w-[25%] flex flex-col justify-between gap-2'>
                                                    <div className='w-full relative'>
                                                        <img onClick={() => setTestRes({
                                                            ...testRes,
                                                            image_2: image,
                                                        })} src={defaultData?.image_2 ? import.meta.env.VITE_APP_BASE_API_LINK + defaultData?.image_2 : noImage} className="w-full" />
                                                        <input type="file" className="absolute h-full w-full top-0 opacity-0" id="" />
                                                    </div>
                                                    <div className='w-full relative'>
                                                        <img onClick={() => setTestRes({
                                                            ...testRes,
                                                            image_3: image,
                                                        })} src={defaultData?.image_3 ? import.meta.env.VITE_APP_BASE_API_LINK + defaultData?.image_3 : noImage} className="w-full" />
                                                        <input type="file" className="absolute h-full w-full top-0 opacity-0" id="" />
                                                    </div>
                                                    <div className='w-full relative'>
                                                        <img onClick={() => setTestRes({
                                                            ...testRes,
                                                            image_4: image,
                                                        })} src={defaultData?.image_4 ? import.meta.env.VITE_APP_BASE_API_LINK + defaultData?.image_4 : noImage} className="w-full" />
                                                        <input type="file" className="absolute h-full w-full top-0 opacity-0" id="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <h1 className=' font-[500] pt-6'>Variants</h1>
                                    <div className='w-full '>
                                        <div className='grid grid-cols-4 py-4'>
                                            <div className='text-[14px] pl-2'>Size</div>
                                            <div className='text-[14px] pl-2'>Weight</div>
                                            <div className='text-[14px] pl-2'>Actual Price</div>
                                            <div className='text-[14px] pl-2'>Selling Price</div>
                                        </div>
                                        <div className=''>
                                            <div className='w-full'>
                                                {
                                                    testRes?.size_weight?.map((data, i) => (
                                                        <div key={data?.id} className='w-full grid grid-cols-4 gap-4 mb-2'>
                                                            <input type="text" onChange={(e) => handleVariantChange(i, 'size', e?.target?.value)} onClick={() => setActiveIndex(i)} value={data?.size} className='ouline-none bg-[#fff] w-full py-1 px-2 rounded-[8px]' />
                                                            <input type="text" onChange={(e) => handleVariantChange(i, 'weight', e?.target?.value)} onClick={() => setActiveIndex(i)} value={data?.weight} className='ouline-none bg-[#fff] w-full py-1 px-2 rounded-[8px]' />
                                                            <input type="text" onChange={(e) => handleVariantChange(i, 'actual_price', e?.target?.value)} onClick={() => setActiveIndex(i)} value={data?.actual_price} className='ouline-none bg-[#fff] w-full py-1 px-2 rounded-[8px]' />
                                                            <input type="text" onChange={(e) => handleVariantChange(i, 'selling_price', e?.target?.value)} onClick={() => setActiveIndex(i)} value={data?.sellingprice} className='ouline-none bg-[#fff] w-full py-1 px-2 rounded-[8px]' />
                                                        </div>
                                                    ))
                                                }
                                            </div>

                                        </div>
                                        <div className='w-full flex justify-end px-5'>
                                            <button onClick={addNewVariant} className='bg-[#cfcfcf] active:bg-[#d6d6d6] active:scale-[0.91] active:text-[#696363] px-6 py-[5px] shadow-md rounded-[10px] text-gray-700'>Add New Variant</button>
                                        </div>
                                    </div>


                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdmitEditSingleProduct





