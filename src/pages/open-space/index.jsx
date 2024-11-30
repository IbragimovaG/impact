import React from 'react';
import Bg from "../open-space/IMG_5010.png";
import Chek from "../open-space/Group 54.png";
import Chek1 from "../open-space/Group 57.png";
import Nav from "../../components/navbar/index"
import { Link } from 'react-router-dom';

function Index(props) {
    return (
        <div className="w-full h-auto bg-[#EBEBEB]  ">
            <Nav/>
            <div
                className="w-full h-screen bg-black sm:h-[80%] pl-14 sm:pl-5  bg-cover bg-center"
                style={{backgroundImage: `url(${Bg})`}}>
                <h2 data-aos='fade-right' data-aos-duration='1000' className=" lg:text-[70px] w-[75%] sm:text-[30px]  sm:pt-[180px]  sm:leading-[40px] text-white text-[100px]  pt-[320px] leading-[100px]">
                    Your Co-Working Journey starts here
                </h2>
                <button data-aos='fade-right' data-aos-delay='200'
                    className={"w-[180px] mt-20 sm:w-[160px] sm:text-[13px]  sm:h-[45px]  sm:mt-[50px] text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D]  sm:mb-64"}>BOOKING
                    SPACE
                </button>
            </div>

            <div className="flex w-full h-[60vh] pb-20 pt-32 sm:mt-28 bg-[#EBEBEB]">
                <div className=" flex sm:flex-col-reverse w-screen px-14 sm:px-5 ">
                    <h3 data-aos='fade-right' className="text-[32px] w-[40%] sm:w-full text-[#2D2D2D]">Membership</h3>
                    <div className='w-[60%] sm:w-full'>
                    <h2 data-aos='fade-down' className="text-[#8D8D8D] text-[32px] lg:mt-[-280px]">120+ Places</h2>
                    <p data-aos='zoom-in' className="text-[20px] text-[#2D2D2D] mt-8 w-[45%] sm:w-full ">
                        Our co-working environment is more than just shared desks. It's a community-driven ecosystem
                        designed to elevate your work experience
                    </p>
                </div>
                </div>
            </div>
            <div className={"flex w-full h-auto justify-center items-center gap-10 bg-[#EBEBEB] sm:flex-wrap lg:flex-wrap"}>
                <div data-aos='fade-up' className="w-[440px] sm:w-[90%] sm:h-auto h-[585px] bg-[#FFFFFF] border rounded-[20px] flex flex-col  p-8">
                    <h3 className=" text-[#2D2D2D] mt-4 text-[28px]">Day Plan</h3>
                    <h2 className="text-[48px] text-[#2D2D2D] mt-1 sm:text-[28px]">70 000 uzs<span
                        className="text-[#797979] text-[20px] sm:text-[18px]">/Day </span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amonites
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px] sm:w-[90%]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Community events and networking opportunites </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Free water, tea, coffee
                        </p>
                    </div>
                    <button
                        className="   sm:w-[90%] w-[347px] mt-[130px]  ml-3 h-[60px] bg-[#373737] rounded-[90px] text-white text-[19px]  ">
                        Booking space
                    </button>
                </div>
                <div data-aos='fade-up' data-aos-delay='300' className="w-[440px] sm:w-[90%] sm:h-auto h-[585px] bg-[#D1D1D1] border rounded-[20px] flex flex-col  p-8">
                    <h3 className=" text-[#2D2D2D] mt-4 text-[28px]">Flex Plan</h3>
                    <h2 className="text-[48px] text-[#2D2D2D] mt-1 sm:text-[28px]">1,7 mln uzs<span
                        className="text-[#797979] text-[20px] sm:text-[18px]">/Month </span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amonites
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px] sm:w-[90%]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Community events and networking opportunites</p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979] w-[450px] sm:w-[90%]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Printer 15 pages</p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Free water, tea, coffee                        </p>
                    </div>
                    <button
                        className="   sm:w-[90%] w-[347px] mt-[95px]  ml-3 h-[60px] bg-[#373737] rounded-[90px] text-white  text-[19px]  ">
                        Booking space
                    </button>
                </div>
                <div data-aos='fade-up' data-aos-delay='600' className="w-[440px] sm:w-[90%] sm:h-auto h-[585px] bg-[#2D2D2D] border rounded-[20px] flex flex-col  p-8">
                    <h3 className=" text-[#FFFFFF] mt-4 text-[28px]">Fix Plan</h3>
                    <h2 className="text-[48px] text-[#FFFFFF] mt-1 sm:text-[28px]">2,2 mln uzs <span
                        className="text-[#797979] text-[18px]">/Month</span></h2>
                    <div className="mt-8 w-full flex flex-col gap-4">
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            Assigned workplace
                        </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            24 hours access to coworking areas.
                        </p>
                        <p className=" sm:w-[85%] flex items-center gap-2 text-[16px] text-[#797979] w-[450px]">
                            <img className="w-[16px] h-[17px]" src={Chek} alt=""/>
                            High-speed internet and tech amonites
                        </p>  <p className="sm:w-[98%]  flex items-center gap-2 text-[16px] text-[#797979] w-[450px]">
                        <img className="  w-[16px] h-[17px]" src={Chek} alt=""/>
                        Community events and networking opportunites
                    </p>
                        <p className="flex items-center gap-2 text-[16px] text-[#797979]">
                            <img className="w-[16px] h-[17px]" src={Chek1} alt=""/>
                            Printer 25 pages
                        </p>
                    </div>
                    <button
                        className="sm:w-[90%]  mt-[91px] w-[347px]  ml-3 h-[57px] bg-[#DFDFDF] rounded-[90px] text-[#2D2D2D] text-[19px]">
                        Booking space
                    </button>
                </div></div>
                <div className='w-full py-24 px-12 sm:px-5'>
                <div data-aos='fade-up' className='rounded-[30px] bg-backgroundImageAboutStudio bg-no-repeat bg-cover px-20 lg:px-10 lg:py-10 py-16 h-auto w-full sm:text-center'>
                    <Link to={'/gallery'}>
                        <button className='w-36 h-10 bg-white rounded-full'>
                            GALLERY
                        </button></Link>
                    <div className='pt-52 w-full flex sm:flex-col sm:py-5 sm:justify-center sm:items-center justify-between items-end'>
                        <div >
                            <h3 className='text-3xl text-white sm:pt-10'>See all our points!</h3>
                            <h4 className='text-2xl font-light w-7/12 pt-5 sm:m-auto sm:w-11/12 sm:my-5 text-white'>Discover all our points and take advantage of the amazing benefits and rewards available to you today!</h4>
                        </div>
                        <div>
                            <Link to={'/gallery'}>
                                <button className='w-36 h-10 sm:mt-5 text-[#FF5722] bg-white rounded-full'>
                                    VIEW ALL
                                </button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Index;