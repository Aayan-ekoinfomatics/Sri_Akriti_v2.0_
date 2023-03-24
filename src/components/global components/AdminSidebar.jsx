import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import order_logo from '../../assets/icons/admin-order-logo.svg'
import products_logo from '../../assets/icons/admin-products-logo.svg'
import logo from '../../assets/icons/sri-aakriti-logo.svg'
import dashboard from '../../assets/icons/dashboard.svg'
import cart_admin from '../../assets/icons/cart_admin.svg'
import users from '../../assets/icons/users.svg'
import logout from '../../assets/icons/logout.svg'

const AdminSidebar = () => {

    const navigate = useNavigate();


    return (
        <div className='hidden md:block w-full max-w-[190px] xl:max-w-[230px] h-[80vh] fixed top-[50px] left-[40px] xl:left-[70px]'>
            <div className='w-full pb-4'>
                <div className='w-full flex flex-col justify-end items-center'>
                    <img src={logo} className="w-[85px]" />
                </div>
            </div>
            <div className='w-full relative flex flex-col justify-start gap-10 items-center pt-[110px] bg-[#3EDCFF] h-[97%] shadow-xl rounded-[14px] my-2'>

                <NavLink to='/admin-products' className='w-full block'>
                    <div className='w-full hover:bg-[#19C7EE] pl-5 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                        <div>
                            <img src={products_logo} className="w-[20px]" />
                        </div>
                        <div>
                            <h1 className='roboto text-[17px] font-[500]'>Products</h1>
                        </div>
                    </div>
                </NavLink>

                <NavLink to='/admin-orders' className='w-full block'>
                    <div className='w-full hover:bg-[#19C7EE] pl-5 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                        <div>
                            <img src={order_logo} className="w-[20px]" />
                        </div>
                        <div>
                            <h1 className='roboto text-[17px] font-[500]'>Orders</h1>
                        </div>
                    </div>
                </NavLink>

                {/* <NavLink to='/admin-products' className='w-full block'>
                    <div className='w-full hover:bg-[#19C7EE] pl-5 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                        <div>
                            <img src={users} className="w-[17px]" />
                        </div>
                        <div>
                            <h1 className='roboto text-[17px] font-[500]'>Users</h1>
                        </div>
                    </div>
                </NavLink> */}

                <NavLink to='/admin-prices' className='w-full block'>
                    <div className='w-full hover:bg-[#19C7EE] pl-5 py-2  cursor-pointer flex justify-start gap-4 my-2'>
                        <div>
                            <img src={cart_admin} className="w-[20px]" />
                        </div>
                        <div>
                            <h1 className='roboto text-[17px] font-[500]'>Prices</h1>
                        </div>
                    </div>
                </NavLink>

                <div className='w-full absolute bottom-0 flex justify-center items-center'>
                    <div className='w-full hover:bg-[#19C7EE] py-2 cursor-pointer flex justify-center items-center gap-2 my-2' onClick={() => {
                        localStorage.clear();
                        navigate('/login')
                    }}>
                        <div>
                            <img src={logout} className="w-[15px]" />
                        </div>
                        <div>
                            <h1 className='roboto text-[17px] font-[500]'>Logout</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminSidebar