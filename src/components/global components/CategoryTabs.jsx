import React from 'react'
import { Link } from 'react-router-dom'
import nav_data from '../../mockapi/mobileNavData'

const CategoryTabs = () => {


    return (
        <div className='w-full md:hidden my-4'>
            <div className='w-full flex justify-between gap-1 sm:gap-2'>
                {
                    nav_data?.slice(0, 5)?.map((data, i) => (
                        <Link className='w-full max-w-[100px] bg-white shadow-md flex justify-center items-center px-1 py-2' key={i} to={data?.routes}>
                            <div>
                                <h1 className='text-[12px]'>{data?.title}</h1>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default CategoryTabs