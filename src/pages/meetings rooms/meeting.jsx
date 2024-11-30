import React from 'react';
import Nav from "../../components/navbar";
import Bg from "../meetings rooms/IMG_4986.png";
import Conference from "../meetings rooms/IMG_4973.png"
import Conference2 from "../meetings rooms/IMG_4974.png"
import Conference3 from "../meetings rooms/IMG_4972.png"
import Conference4 from "../meetings rooms/IMG_4971.png"
import Chek from "../meetings rooms/Group 63.svg"
import Pl from "../meetings rooms/Rectangle 81.png"
import Grn from "../open-space/Group 73.png";
import { Link } from 'react-router-dom';

function Meeting(props) {
    return (
        <div className="w-full h-auto  bg-[#EBEBEB] ">
            <Nav />
            <div
                className="w-full h-screen bg-black sm:h-[80%] bg-cover bg-center pl-14 sm:pl-5"
                style={{ backgroundImage: `url(${Bg})` }}>
                <h2 data-aos='fade-right' data-aos-duration='1000' className=" lg:text-[70px] lg:w-[80%] sm:text-[30px]  sm:pt-[180px]  sm:w-[270px]  sm:leading-[40px] text-white text-[100px] w-[955px] pt-[320px] leading-[100px]">
                    Unlock Our dynamic Meeting rooms
                </h2>
                <button data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200'
                    className={"w-[180px] mt-10 sm:w-[160px] sm:text-[13px]  sm:h-[45px] sm:mt-[40px] text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D]  sm:mb-64"}>BOOKING
                    SPACE
                </button>
            </div>
            <div className="flex w-full h-auto pb-20 pt-32 bg-[#EBEBEB]">
                <div data-aos='zoom-in' className="flex sm:flex-col-reverse  sm:pt-44 w-full justify-between px-14 sm:px-5">
                    <h3 className="text-[32px] text-[#2D2D2D] w-[50%] sm:w-full">Tariff plan</h3>
                    <div data-aos='fade-up' className="w-[50%] sm:w-full">
                        <h2 className="text-[#8D8D8D] text-[32px] lg:mt-[-280px] ">5+ Meeting rooms</h2>
                        <p className="text-[20px] sm:w-[80%] text-[#2D2D2D] w-[390px] mt-8 ">
                            Our meeting rooms blend functionality with sophistication, providing the perfect setting for
                            your professional endeavors.
                        </p>
                    </div>

                </div>

            </div>
            <div className="w-full sm:h-[460vh] flex flex-col py-10 pb-56 gap-20">
                <div className='flex sm:flex-col justify-between px-14 sm:px-5 items-start gap-5'>
                    <div data-aos='zoom-in' data-aos-duration='1000' className="w-[50%] h-full bg-white rounded-[20px] flex sm:w-full sm:flex sm:flex-col ">
                        <img src={Conference} className='w-[40%] sm:w-full sm:rounded-3xl' alt="" />
                        <div data-aos='fade-up' data-aos-duration='1000' className='p-5 pr-10'>
                            <h3 className='text-[#7C7C7C]'>Conference Room “Orange”</h3>
                            <h2 className="text-[30px] text-[#464646] mt-1 sm:text-[30px]">100 000 uzs<span
                                className="text-[10px] text-[#464646]  sm:text-[18px]">/Hourse </span></h2>
                            <div className="w-[300px] h-[50px] flex gap-1 mt-4">
                                <div className="h-[50px] flex flex-col ">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Table</h3>
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />TV</h3>
                                </div>
                                <br />
                                <div className="h-[50px] flex flex-col ">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Armchairs</h3>
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Board</h3>
                                </div>
                                <br />
                                <div className=" h-[50px] flex flex-col ">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />HDMI</h3>
                                    <h3 className="flex w-[150px] items-center gap-2 text-[10px]  text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Air circulation System</h3>
                                </div>
                            </div>
                            <div className={"w-auto h-auto flex gap-4 pt-2 pl-1 "}>
                                <h2 className={"text-[13px] font-light"}>Impact.t hub</h2>
                                <img src={Pl} alt="" />
                                <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 6 people</h2>
                            </div>
                            <br />
                            <p className={"text-[10px] w-[90%] text-[#797979]"}>A professional on-demand office space. Perfect when you
                                need to get your head down and do
                                your best work</p>

                            <button
                                className="w-[127px] h-[30px] bg-[#373737] rounded-[90px] text-white text-[10px] mt-10">
                                BOOKING ROOM
                            </button>
                        </div>
                    </div>
                    <div data-aos='zoom-in' data-aos-duration='1000' className="w-[50%] h-full bg-white rounded-[20px] flex sm:w-full sm:flex sm:flex-col ">
                        <img src={Conference2} className='w-[40%] sm:w-full sm:rounded-3xl' alt="" />
                        <div data-aos='fade-up' data-aos-duration='1000' className='p-5 pr-10'>
                            <h3 className='text-[#7C7C7C]'>Conference Room “Blue”</h3>
                            <h2 className="text-[30px] text-[#464646] mt-1 sm:text-[30px]">100 000 uzs<span
                                className="text-[10px] text-[#464646]  sm:text-[18px]">/Hourse </span></h2>
                            <div className="w-[300px] h-[50px] flex gap-1 mt-4">
                                <div className="h-[50px] flex flex-col">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Table</h3>
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />TV</h3>
                                </div>
                                <br />
                                <div className="h-[50px] flex flex-col">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Armchairs</h3>
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Board</h3>
                                </div>
                                <br />
                                <div className=" h-[50px] flex flex-col">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />HDMI</h3>
                                    <h3 className="flex w-[150px] items-center gap-2 text-[10px]  text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Air circulation System</h3>
                                </div>
                            </div>
                            <div className={"w-auto h-auto flex gap-4 pt-2 pl-1 "}>
                                <h2 className={"text-[13px] font-light"}>Impact.t hub</h2>
                                <img src={Pl} alt="" />
                                <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 6 people</h2>
                            </div>
                            <br />
                            <p className={"text-[10px] w-[90%] text-[#797979]"}>A professional on-demand office space. Perfect when you
                                need to get your head down and do
                                your best work</p>

                            <button
                                className="w-[127px] h-[30px] bg-[#373737] rounded-[90px] text-white text-[10px] mt-10">
                                BOOKING ROOM
                            </button>
                        </div>
                    </div>
                </div>       
                <div className='flex sm:flex-col justify-between px-14 sm:px-5 items-start gap-5'>
                    <div data-aos='zoom-in' data-aos-duration='1000' className="w-[50%] h-full bg-white rounded-[20px] flex sm:w-full sm:flex sm:flex-col ">
                        <img src={Conference3} className='w-[40%] sm:w-full sm:rounded-3xl' alt="" />
                        <div data-aos='fade-up' data-aos-duration='1000' className='p-5 pr-10'>
                            <h3 className='text-[#7C7C7C]'>Conference Room “Impact.t”</h3>
                            <h2 className="text-[30px] text-[#464646] mt-1 sm:text-[30px]">150 000 uzs<span
                                className="text-[10px] text-[#464646]  sm:text-[18px]">/Hourse </span></h2>
                            <div className="w-[300px] h-[50px] flex gap-1 mt-4">
                                <div className="h-[50px] flex flex-col ">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Table</h3>
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />TV</h3>
                                </div>
                                <br />
                                <div className="h-[50px] flex flex-col ">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Armchairs</h3>
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Board</h3>
                                </div>
                                <br />
                                <div className=" h-[50px] flex flex-col ">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />HDMI</h3>
                                    <h3 className="flex w-[150px] items-center gap-2 text-[10px]  text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Air circulation System</h3>
                                </div>
                            </div>
                            <div className={"w-auto h-auto flex gap-4 pt-2 pl-1 "}>
                                <h2 className={"text-[13px] font-light"}>Impact.t hub</h2>
                                <img src={Pl} alt="" />
                                <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 8 people</h2>
                            </div>
                            <br />
                            <p className={"text-[10px] w-[90%] text-[#797979]"}>A professional on-demand office space. Perfect when you
                                need to get your head down and do
                                your best work</p>

                            <button
                                className="w-[127px] h-[30px] bg-[#373737] rounded-[90px] text-white text-[10px] mt-10">
                                BOOKING ROOM
                            </button>
                        </div>
                    </div>
                    <div data-aos='zoom-in' data-aos-duration='1000' className="w-[50%] h-full bg-white rounded-[20px] flex sm:w-full sm:flex sm:flex-col ">
                        <img src={Conference4} className='w-[40%] sm:w-full sm:rounded-3xl' alt="" />
                        <div data-aos='fade-up' data-aos-duration='1000' className='p-5 pr-10'>
                            <h3 className='text-[#7C7C7C]'>Conference Room “Impact.t”</h3>
                            <h2 className="text-[30px] text-[#464646] mt-1 sm:text-[30px]">180 000 uzs<span
                                className="text-[10px] text-[#464646]  sm:text-[18px]">/Hourse </span></h2>
                            <div className="w-[300px] h-[50px] flex gap-1 mt-4">
                                <div className="h-[50px] flex flex-col">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Table</h3>
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />TV</h3>
                                </div>
                                <br />
                                <div className="h-[50px] flex flex-col">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Armchairs</h3>
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Board</h3>
                                </div>
                                <br />
                                <div className=" h-[50px] flex flex-col">
                                    <h3 className="flex items-center gap-1 text-[12px] text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />HDMI</h3>
                                    <h3 className="flex w-[150px] items-center gap-2 text-[10px]  text-[#797979]"><img
                                        className="h-[14px]" src={Chek} alt="" />Air circulation System</h3>
                                </div>
                            </div>
                            <div className={"w-auto h-auto flex gap-4 pt-2 pl-1 "}>
                                <h2 className={"text-[13px] font-light"}>Impact.t hub</h2>
                                <img src={Pl} alt="" />
                                <h2 className={"text-[#FF5722] text-[13px]"}>Capacity 10 people</h2>
                            </div>
                            <br />
                            <p className={"text-[10px] w-[90%] text-[#797979]"}>A professional on-demand office space. Perfect when you
                                need to get your head down and do
                                your best work</p>

                            <button
                                className="w-[127px] h-[30px] bg-[#373737] rounded-[90px] text-white text-[10px] mt-10">
                                BOOKING ROOM
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full pt-24 px-12 sm:px-5'>
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
            <br />
            <br />
        </div>
    );
}

export default Meeting;