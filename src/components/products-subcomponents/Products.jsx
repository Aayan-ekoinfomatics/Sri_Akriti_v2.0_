import React from 'react'
import collection_data from '../../mockapi/apiData'

const Products = (props) => {
  return (
    <div className='w-fit grid gap-5 grid-cols-4 mx-auto'>
        {
            collection_data?.products?.map((data, i) => (
                <div key={i} className='w-full min-w-[400px] max-w-[500px] flex flex-col items-center'>
                    <div className=''>
                        <img src={data?.image} className="" />
                    </div>
                    <button className='w-full bg-blue-400 text-white py-2 poppins tracking-[1px] text-[22px] font-[400]'>ADD TO CART</button>
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
  )
}

export default Products