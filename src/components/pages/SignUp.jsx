import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import arrow from '../../assets/icons/dropdown-arrow.svg'
import country_names from '../../mockapi/countrySelectorApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-dropdown-select';
import axios from 'axios'

const SignUp = () => {

    const [countryDropdown, setCountryDropdown] = useState(false);
    const [countryCode, setCountryCode] = useState('+91')
    const [gender, setGender] = useState('')

    const navigate = useNavigate()

    const genderRef = useRef();
    const nameRef = useRef();
    const countryCodeRef = useRef();
    const numberRef = useRef();
    const dobRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const termsandConditionsRef = useRef();

    const [errorText, setErrorText] = useState(null)

    const formdata = new FormData();

    const showToastMessage = () => {
        toast.success('Success Notification !', {
            position: toast.POSITION.TOP_RIGHT
        });
        toast.error('Error Notification !', {
            position: toast.POSITION.TOP_CENTER
        });
    };

    // const options = [
    //     { name: 'Afghanistan', code: 'AF' },
    //     { name: 'Åland Islands', code: 'AX' },
    //     { name: 'Albania', code: 'AL' },
    //     { name: 'Algeria', code: 'DZ' },
    //     { name: 'American Samoa', code: 'AS' },
    //     { name: 'AndorrA', code: 'AD' },
    //     { name: 'Angola', code: 'AO' },
    //     { name: 'Anguilla', code: 'AI' },
    //     { name: 'Antarctica', code: 'AQ' },
    //     { name: 'Antigua and Barbuda', code: 'AG' },
    //     { name: 'Argentina', code: 'AR' },
    //     { name: 'Armenia', code: 'AM' },
    //     { name: 'Aruba', code: 'AW' },
    //     { name: 'Australia', code: 'AU' },
    //     { name: 'Austria', code: 'AT' },
    //     { name: 'Azerbaijan', code: 'AZ' },
    //     { name: 'Bahamas', code: 'BS' },
    //     { name: 'Bahrain', code: 'BH' },
    //     { name: 'Bangladesh', code: 'BD' },
    //     { name: 'Barbados', code: 'BB' },
    //     { name: 'Belarus', code: 'BY' },
    //     { name: 'Belgium', code: 'BE' },
    //     { name: 'Belize', code: 'BZ' },
    //     { name: 'Benin', code: 'BJ' },
    //     { name: 'Bermuda', code: 'BM' },
    //     { name: 'Bhutan', code: 'BT' },
    //     { name: 'Bolivia', code: 'BO' },
    //     { name: 'Bosnia and Herzegovina', code: 'BA' },
    //     { name: 'Botswana', code: 'BW' },
    //     { name: 'Bouvet Island', code: 'BV' },
    //     { name: 'Brazil', code: 'BR' },
    //     { name: 'British Indian Ocean Territory', code: 'IO' },
    //     { name: 'Brunei Darussalam', code: 'BN' },
    //     { name: 'Bulgaria', code: 'BG' },
    //     { name: 'Burkina Faso', code: 'BF' },
    //     { name: 'Burundi', code: 'BI' },
    //     { name: 'Cambodia', code: 'KH' },
    //     { name: 'Cameroon', code: 'CM' },
    //     { name: 'Canada', code: 'CA' },
    //     { name: 'Cape Verde', code: 'CV' },
    //     { name: 'Cayman Islands', code: 'KY' },
    //     { name: 'Central African Republic', code: 'CF' },
    //     { name: 'Chad', code: 'TD' },
    //     { name: 'Chile', code: 'CL' },
    //     { name: 'China', code: 'CN' },
    //     { name: 'Christmas Island', code: 'CX' },
    //     { name: 'Cocos (Keeling) Islands', code: 'CC' },
    //     { name: 'Colombia', code: 'CO' },
    //     { name: 'Comoros', code: 'KM' },
    //     { name: 'Congo', code: 'CG' },
    //     { name: 'Congo, The Democratic Republic of the', code: 'CD' },
    //     { name: 'Cook Islands', code: 'CK' },
    //     { name: 'Costa Rica', code: 'CR' },
    //     { name: 'Cote D\'Ivoire', code: 'CI' },
    //     { name: 'Croatia', code: 'HR' },
    //     { name: 'Cuba', code: 'CU' },
    //     { name: 'Cyprus', code: 'CY' },
    //     { name: 'Czech Republic', code: 'CZ' },
    //     { name: 'Denmark', code: 'DK' },
    //     { name: 'Djibouti', code: 'DJ' },
    //     { name: 'Dominica', code: 'DM' },
    //     { name: 'Dominican Republic', code: 'DO' },
    //     { name: 'Ecuador', code: 'EC' },
    //     { name: 'Egypt', code: 'EG' },
    //     { name: 'El Salvador', code: 'SV' },
    //     { name: 'Equatorial Guinea', code: 'GQ' },
    //     { name: 'Eritrea', code: 'ER' },
    //     { name: 'Estonia', code: 'EE' },
    //     { name: 'Ethiopia', code: 'ET' },
    //     { name: 'Falkland Islands (Malvinas)', code: 'FK' },
    //     { name: 'Faroe Islands', code: 'FO' },
    //     { name: 'Fiji', code: 'FJ' },
    //     { name: 'Finland', code: 'FI' },
    //     { name: 'France', code: 'FR' },
    //     { name: 'French Guiana', code: 'GF' },
    //     { name: 'French Polynesia', code: 'PF' },
    //     { name: 'French Southern Territories', code: 'TF' },
    //     { name: 'Gabon', code: 'GA' },
    //     { name: 'Gambia', code: 'GM' },
    //     { name: 'Georgia', code: 'GE' },
    //     { name: 'Germany', code: 'DE' },
    //     { name: 'Ghana', code: 'GH' },
    //     { name: 'Gibraltar', code: 'GI' },
    //     { name: 'Greece', code: 'GR' },
    //     { name: 'Greenland', code: 'GL' },
    //     { name: 'Grenada', code: 'GD' },
    //     { name: 'Guadeloupe', code: 'GP' },
    //     { name: 'Guam', code: 'GU' },
    //     { name: 'Guatemala', code: 'GT' },
    //     { name: 'Guernsey', code: 'GG' },
    //     { name: 'Guinea', code: 'GN' },
    //     { name: 'Guinea-Bissau', code: 'GW' },
    //     { name: 'Guyana', code: 'GY' },
    //     { name: 'Haiti', code: 'HT' },
    //     { name: 'Heard Island and Mcdonald Islands', code: 'HM' },
    //     { name: 'Holy See (Vatican City State)', code: 'VA' },
    //     { name: 'Honduras', code: 'HN' },
    //     { name: 'Hong Kong', code: 'HK' },
    //     { name: 'Hungary', code: 'HU' },
    //     { name: 'Iceland', code: 'IS' },
    //     { name: 'India', code: 'IN' },
    //     { name: 'Indonesia', code: 'ID' },
    //     { name: 'Iran, Islamic Republic Of', code: 'IR' },
    //     { name: 'Iraq', code: 'IQ' },
    //     { name: 'Ireland', code: 'IE' },
    //     { name: 'Isle of Man', code: 'IM' },
    //     { name: 'Israel', code: 'IL' },
    //     { name: 'Italy', code: 'IT' },
    //     { name: 'Jamaica', code: 'JM' },
    //     { name: 'Japan', code: 'JP' },
    //     { name: 'Jersey', code: 'JE' },
    //     { name: 'Jordan', code: 'JO' },
    //     { name: 'Kazakhstan', code: 'KZ' },
    //     { name: 'Kenya', code: 'KE' },
    //     { name: 'Kiribati', code: 'KI' },
    //     { name: 'Korea, Democratic People\'S Republic of', code: 'KP' },
    //     { name: 'Korea, Republic of', code: 'KR' },
    //     { name: 'Kuwait', code: 'KW' },
    //     { name: 'Kyrgyzstan', code: 'KG' },
    //     { name: 'Lao People\'S Democratic Republic', code: 'LA' },
    //     { name: 'Latvia', code: 'LV' },
    //     { name: 'Lebanon', code: 'LB' },
    //     { name: 'Lesotho', code: 'LS' },
    //     { name: 'Liberia', code: 'LR' },
    //     { name: 'Libyan Arab Jamahiriya', code: 'LY' },
    //     { name: 'Liechtenstein', code: 'LI' },
    //     { name: 'Lithuania', code: 'LT' },
    //     { name: 'Luxembourg', code: 'LU' },
    //     { name: 'Macao', code: 'MO' },
    //     { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' },
    //     { name: 'Madagascar', code: 'MG' },
    //     { name: 'Malawi', code: 'MW' },
    //     { name: 'Malaysia', code: 'MY' },
    //     { name: 'Maldives', code: 'MV' },
    //     { name: 'Mali', code: 'ML' },
    //     { name: 'Malta', code: 'MT' },
    //     { name: 'Marshall Islands', code: 'MH' },
    //     { name: 'Martinique', code: 'MQ' },
    //     { name: 'Mauritania', code: 'MR' },
    //     { name: 'Mauritius', code: 'MU' },
    //     { name: 'Mayotte', code: 'YT' },
    //     { name: 'Mexico', code: 'MX' },
    //     { name: 'Micronesia, Federated States of', code: 'FM' },
    //     { name: 'Moldova, Republic of', code: 'MD' },
    //     { name: 'Monaco', code: 'MC' },
    //     { name: 'Mongolia', code: 'MN' },
    //     { name: 'Montserrat', code: 'MS' },
    //     { name: 'Morocco', code: 'MA' },
    //     { name: 'Mozambique', code: 'MZ' },
    //     { name: 'Myanmar', code: 'MM' },
    //     { name: 'Namibia', code: 'NA' },
    //     { name: 'Nauru', code: 'NR' },
    //     { name: 'Nepal', code: 'NP' },
    //     { name: 'Netherlands', code: 'NL' },
    //     { name: 'Netherlands Antilles', code: 'AN' },
    //     { name: 'New Caledonia', code: 'NC' },
    //     { name: 'New Zealand', code: 'NZ' },
    //     { name: 'Nicaragua', code: 'NI' },
    //     { name: 'Niger', code: 'NE' },
    //     { name: 'Nigeria', code: 'NG' },
    //     { name: 'Niue', code: 'NU' },
    //     { name: 'Norfolk Island', code: 'NF' },
    //     { name: 'Northern Mariana Islands', code: 'MP' },
    //     { name: 'Norway', code: 'NO' },
    //     { name: 'Oman', code: 'OM' },
    //     { name: 'Pakistan', code: 'PK' },
    //     { name: 'Palau', code: 'PW' },
    //     { name: 'Palestinian Territory, Occupied', code: 'PS' },
    //     { name: 'Panama', code: 'PA' },
    //     { name: 'Papua New Guinea', code: 'PG' },
    //     { name: 'Paraguay', code: 'PY' },
    //     { name: 'Peru', code: 'PE' },
    //     { name: 'Philippines', code: 'PH' },
    //     { name: 'Pitcairn', code: 'PN' },
    //     { name: 'Poland', code: 'PL' },
    //     { name: 'Portugal', code: 'PT' },
    //     { name: 'Puerto Rico', code: 'PR' },
    //     { name: 'Qatar', code: 'QA' },
    //     { name: 'Reunion', code: 'RE' },
    //     { name: 'Romania', code: 'RO' },
    //     { name: 'Russian Federation', code: 'RU' },
    //     { name: 'RWANDA', code: 'RW' },
    //     { name: 'Saint Helena', code: 'SH' },
    //     { name: 'Saint Kitts and Nevis', code: 'KN' },
    //     { name: 'Saint Lucia', code: 'LC' },
    //     { name: 'Saint Pierre and Miquelon', code: 'PM' },
    //     { name: 'Saint Vincent and the Grenadines', code: 'VC' },
    //     { name: 'Samoa', code: 'WS' },
    //     { name: 'San Marino', code: 'SM' },
    //     { name: 'Sao Tome and Principe', code: 'ST' },
    //     { name: 'Saudi Arabia', code: 'SA' },
    //     { name: 'Senegal', code: 'SN' },
    //     { name: 'Serbia and Montenegro', code: 'CS' },
    //     { name: 'Seychelles', code: 'SC' },
    //     { name: 'Sierra Leone', code: 'SL' },
    //     { name: 'Singapore', code: 'SG' },
    //     { name: 'Slovakia', code: 'SK' },
    //     { name: 'Slovenia', code: 'SI' },
    //     { name: 'Solomon Islands', code: 'SB' },
    //     { name: 'Somalia', code: 'SO' },
    //     { name: 'South Africa', code: 'ZA' },
    //     { name: 'South Georgia and the South Sandwich Islands', code: 'GS' },
    //     { name: 'Spain', code: 'ES' },
    //     { name: 'Sri Lanka', code: 'LK' },
    //     { name: 'Sudan', code: 'SD' },
    //     { name: 'Suriname', code: 'SR' },
    //     { name: 'Svalbard and Jan Mayen', code: 'SJ' },
    //     { name: 'Swaziland', code: 'SZ' },
    //     { name: 'Sweden', code: 'SE' },
    //     { name: 'Switzerland', code: 'CH' },
    //     { name: 'Syrian Arab Republic', code: 'SY' },
    //     { name: 'Taiwan, Province of China', code: 'TW' },
    //     { name: 'Tajikistan', code: 'TJ' },
    //     { name: 'Tanzania, United Republic of', code: 'TZ' },
    //     { name: 'Thailand', code: 'TH' },
    //     { name: 'Timor-Leste', code: 'TL' },
    //     { name: 'Togo', code: 'TG' },
    //     { name: 'Tokelau', code: 'TK' },
    //     { name: 'Tonga', code: 'TO' },
    //     { name: 'Trinidad and Tobago', code: 'TT' },
    //     { name: 'Tunisia', code: 'TN' },
    //     { name: 'Turkey', code: 'TR' },
    //     { name: 'Turkmenistan', code: 'TM' },
    //     { name: 'Turks and Caicos Islands', code: 'TC' },
    //     { name: 'Tuvalu', code: 'TV' },
    //     { name: 'Uganda', code: 'UG' },
    //     { name: 'Ukraine', code: 'UA' },
    //     { name: 'United Arab Emirates', code: 'AE' },
    //     { name: 'United Kingdom', code: 'GB' },
    //     { name: 'United States', code: 'US' },
    //     { name: 'United States Minor Outlying Islands', code: 'UM' },
    //     { name: 'Uruguay', code: 'UY' },
    //     { name: 'Uzbekistan', code: 'UZ' },
    //     { name: 'Vanuatu', code: 'VU' },
    //     { name: 'Venezuela', code: 'VE' },
    //     { name: 'Viet Nam', code: 'VN' },
    //     { name: 'Virgin Islands, British', code: 'VG' },
    //     { name: 'Virgin Islands, U.S.', code: 'VI' },
    //     { name: 'Wallis and Futuna', code: 'WF' },
    //     { name: 'Western Sahara', code: 'EH' },
    //     { name: 'Yemen', code: 'YE' },
    //     { name: 'Zambia', code: 'ZM' },
    //     { name: 'Zimbabwe', code: 'ZW' }
    // ]

    const signUp = (e) => {

        e.preventDefault();
        // formdata.append("id", data?.id);
        if (passwordRef?.current?.value === confirmPasswordRef?.current?.value && termsandConditionsRef?.current?.checked === true) {
            formdata.append("email", emailRef?.current?.value);
            formdata.append("name", nameRef?.current?.value);
            formdata.append("phone_code", countryCode);
            formdata.append("phone_no", numberRef?.current?.value);
            formdata.append("dob", dobRef?.current?.value);
            formdata.append("password", passwordRef?.current?.value);
            formdata.append("gender", gender);
            formdata.append("terms&conditions", termsandConditionsRef?.current?.checked);
            axios.post(import.meta.env.VITE_APP_BASE_API_LINK + 'signUp', formdata).then((response) => console.log(response?.data));
            if(response?.data?.status === true) {
                toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    // draggable: true,
                    progress: undefined,
                    theme: "light",
                  })
                navigate('/login')
            }
        } else if (termsandConditionsRef?.current?.checked !== true) {
            setErrorText("Please agree to the terms and conditions")
        } else if (passwordRef?.current?.value !== confirmPasswordRef?.current?.value) {
            setErrorText("Passwords don't match")
        }

        console.log(formdata);
    }

    window.addEventListener("click", (event) => {
        const dropdown = document?.getElementById("dropdown");

        if (dropdown) {
            if (!dropdown?.contains(event?.target)) {
                setCountryDropdown(false);
            }
        }
    });

    // useEffect(() => {
    //     console.log(errorText)
    // }, [errorText])



    return (
        <div className='w-full bg-[#ffffff] pb-10'>
            <div className='w-[90%] mx-auto flex justify-center items-center lora italic text-[24px] font-[400] py-10 mb-10 '>
                <h1>New Customer</h1>
            </div>
            <form onSubmit={signUp} className='w-[85%] max-w-[600px] mx-auto mb-10'>
                <div className='flex justify-between px-1 md:px-10'>
                    <div className='flex gap-[5px] md:gap-2 justify-start items-center'>
                        <input type="radio" id='male' ref={genderRef} className='bg-[#e3e3e3] accent-[#696969]' name="gender" onClick={() => setGender('M')} />
                        <label htmlFor="male" className='poppins text-[12px] md:text-[14px] tracking-[2px]' >Male</label>
                    </div>
                    <div className='flex gap-[5px] md:gap-2 justify-start items-center'>
                        <input type="radio" id='female' ref={genderRef} className='bg-[#e3e3e3] accent-[#696969]' name="gender" onClick={() => setGender('F')} />
                        <label htmlFor="female" className='poppins text-[12px] md:text-[14px] tracking-[2px]' >Female</label>
                    </div>
                    <div className='flex gap-[5px] md:gap-2 justify-start items-center'>
                        <input type="radio" id='other' ref={genderRef} className='bg-[#e3e3e3] accent-[#696969]' name="gender" onClick={() => setGender('O')} />
                        <label htmlFor="other" className='poppins text-[12px] md:text-[14px] tracking-[2px]' >Other</label>
                    </div>
                </div>
                <div className='pt-2 w-full flex flex-col relative'>
                    <input type="text" ref={nameRef} placeholder='Name' className='outline-none my-2 poppins tracking-[2px] text-[12px] md:text-[14px] px-3 py-3 md:p-3 font-[300] bg-[#e3e3e3]' name="name" />
                    <input type="email" ref={emailRef} placeholder='Email ID' className='outline-none my-2 poppins tracking-[2px] text-[12px] md:text-[14px] px-3 py-3 md:p-3 font-[300] bg-[#e3e3e3]' name="email" />
                    <div id='dropdown' className='flex justify-between py-2 gap-[4px] md:gap-4'>
                        <div className='bg-[#e3e3e3] w-[4rem] md:w-[5.5rem] flex justify-between gap-1 items-center px-1 cursor-pointer py-2' onClick={() => setCountryDropdown(!countryDropdown)}>
                            <div className='poppins text-[12px] md:text-[14px] flex-1 min-w-[28px] pl-1' ref={countryCodeRef} >{countryCode}</div>
                            <div className='w-full flex justify-center items-center'><img src={arrow} className="w-[13px]" /></div>
                        </div>
                        <input type="number" min={0} ref={numberRef} placeholder='Moblile Number' className='outline-none w-[8rem] md:w-fit poppins tracking-[2px] text-[12px] md:text-[14px] px-3 py-2 md:p-3 font-[300] flex-1 bg-[#e3e3e3]' name="number" />
                        <div className='bg-[#e3e3e3] w-fit md:w-fit flex justify-between gap-1 items-center px-1 cursor-pointer py-2'>
                            <input type="text"
                            placeholder='D.O.B'
                            onFocus={() => (dobRef.current.type = "date")}
                            onBlur={() => (dobRef.current.type = "text")}
                            ref={dobRef} name="D.O.B" className='outline-none w-full tracking-[1px] text-[12px] md:text-[14px] pl-2 max-w-[4rem] md:max-w-full bg-[#e3e3e3]' />
                        </div>
                    </div>
                    <div className={`bg-[#f0f0f0e0] w-[140px] max-w-[140px] max-h-[180px] md:max-h-[240px] absolute translate-y-[150px] md:translate-y-[180px] left-0 flex flex-col justify-start items-center transition-all duration-400 md:duration-500 cursor-pointer ${countryDropdown ? ' h-[200px] ease-in overflow-y-scroll py-2 px-2' : 'h-0 ease-out overflow-hidden'}`} >
                        {
                            country_names?.map((data, i) => (
                                <button key={i} className='py-1 text-[13px] w-full hover:bg-[white]' onClick={() => setCountryCode(data?.dial_code)}>{data?.name}</button>
                            ))
                        }
                    </div>
                    <input type="password" ref={passwordRef} placeholder='Create Password' className='outline-none my-2 poppins tracking-[2px] text-[12px] md:text-[14px] px-3 py-3 md:p-3 font-[300] bg-[#e3e3e3]' name="password" />
                    <input type="password" ref={confirmPasswordRef} placeholder='Confirm Password' className='outline-none my-2 poppins tracking-[2px] text-[12px] md:text-[14px] px-3 py-3 md:p-3 font-[300] bg-[#e3e3e3]' name="confirm password" />
                </div>
                <div className='text-center text-red-500 w-full text-[12px] md:text-[15px]'>{errorText}</div>
                <div className='w-full md:w-[80%] md:mx-auto flex justify-between sm:justify-start items-center gap-3 pl-1 pt-1'>
                    <input id='terms_&_conditions' type="checkbox" name="terms & conditions" ref={termsandConditionsRef} onChange={() => console.log(termsandConditionsRef?.current?.checked)} />
                    <label htmlFor='terms_&_conditions' name='terms & conditions' className='poppins text-[10px]'>By Signing up to create an account I accept SriAatriti's Terms & Conditions & Privacy Policy</label>
                </div>
                <div className='w-full flex justify-center items-center py-5'>
                    <button className='bg-black text-white poppins transition-all duration-300 active:scale-[0.95] text-[13px] md:text-[16px] py-4 px-16 font-[300] tracking-[3px] w-full sm:w-auto'
                    // onClick={showToastMessage}
                    >
                        SIGN UP</button>
                    {/* <ToastContainer /> */}
                </div>
                <div className='w-full flex justify-center items-center my-4 tracking-[2px] lora font-[400]'>
                    <h1>Already a user ? <Link to='/login' className='underline'>Login</Link></h1>
                </div>
            </form>
        </div>
    )
}

export default SignUp