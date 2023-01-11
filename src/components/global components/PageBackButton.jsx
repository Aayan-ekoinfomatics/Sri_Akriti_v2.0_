import React from 'react'
import { useNavigate } from 'react-router-dom'
import img_left from "../../assets/icons/black-arrow-left.svg"

const PageBackButton = (props) => {

    const navigate = useNavigate();


    return (
        <div className={`w-full bg-${props.bg}`}>
            <div className='inline-block ml-[18px] sm:ml-[30px] md:ml-[180px]'>
                <img src={img_left} className="cursor-pointer w-[28px] md:w-[30px] mt-10" onClick={() => navigate(-1)} />
            </div>
        </div>
    )
}

export default PageBackButton