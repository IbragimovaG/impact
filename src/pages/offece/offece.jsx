import React from "react";
import Nav from "../../components/navbar";
import Mushin from "../offece/IMG_4972-_3_-_1_.jpg";
import Chek1 from "../offece/Vector (2).png";
import Chek2 from "../offece/Vector (3).png";
import Chek3 from "../offece/2.png";
import Pl from "../meetings rooms/Rectangle 81.png";
import Conference from "../offece/IMG_4982.png";
import Conference1 from "../offece/IMG_5008.png";
import Conference2 from "../offece/IMG_4827.png";
import { Link } from "react-router-dom";

function Offece(props) {
  return (
    <div className="w-full h-auto bg-[#EBEBEB]">
      <Nav />
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col justify-center items-start"
        style={{
          backgroundImage: `url(${Mushin})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          className="lg:text-[70px] lg:w-[80%] ml-[50px] sm:ml-[20px] sm:text-[40px] sm:pt-[180px] sm:w-[270px] sm:leading-[40px] text-white text-[100px] w-[955px] pt-[320px]  leading-[100px]"
        >
          Discover Our Exceptional Offices
        </h2>
        <Link to="/about-studio">
          <button className="w-[180px] mt-20 ml-[50px] sm:w-[160px] sm:text-[13px] sm:h-[45px] sm:ml-[20px] sm:mt-[50px] text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D] sm:mb-64">
            BOOKING SPACE
          </button>
        </Link>
      </div>
      <div className="flex w-full h-auto pb-20 gap-80 pt-32 bg-[#EBEBEB] sm:flex-col lg:flex-col">
        <div className="ml-32 sm:ml-[30px]">
          <h3
            data-aos="fade-right"
            className="text-[32px] text-[#2D2D2D] lg:ml-[85px] md:ml-[10px] md:mb-[280px]"
          >
            Membership
          </h3>
        </div>
        <div className="sm:mt-[-280px] sm:ml-[150px] lg:ml-[210px]">
          <h2
            data-aos="fade-up"
            className="text-[#8D8D8D] text-[32px] lg:mt-[-280px] ml-[-105px]"
          >
            10+ Offices
          </h2>
          <p
            data-aos="fade-up"
            className="text-[20px] sm:w-[100%] text-[#2D2D2D] w-[390px] mt-8 ml-[-105px]"
          >
            Our offices are meticulously designed to elevate your work
            experience, offering a sanctuary for focus, collaboration, and
            innovation.
          </p>
        </div>
      </div>

      <div className={"w-full flex-wrap gap-1  h-[200vh]  sm:h-auto"}>
        <div
          data-aos="zoom-in"
          className="w-[843px] h-[447px] bg-white ml-[490px] rounded-[20px] lg:ml-0 sm:w-[95%] sm:m-auto sm:flex sm:h-[860px] sm:flex-col sm:gap-2 lg:w-full"
        >
          <img src={Conference} className="sm:rounded-3xl" alt="" />
          <div className={"ml-[450px] mt-[-420px]  sm:ml-0 sm:mt-0 sm:py-5"}>
            <h3
              className={
                "ml-[-18px] sm:ml-0 sm:pl-4 text-[#7C7C7C] text-[18px]"
              }
            >
              Office for main team
            </h3>
            <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px] ml-[-20px] sm:ml-0 sm:pl-4">
              5 000 000 uzs
              <span className="text-[#797979] text-[20px] sm:text-[18px] ">
                /Month{" "}
              </span>
            </h2>

            <div className="w-[300px] h-[70px] flex  mt-3 ml-[-20px] sm:w-full sm:ml-0 sm:pl-4">
              <div className=" gap-4 h-[50px] flex flex-col sm:w-full ">
                <h3 className="w-[200px] flex items-center gap-2 text-[13px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek1} alt="" />
                  Access 24/7
                </h3>
                <h3 className="flex items-center gap-2 text-[13px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek2} alt="" />
                  Communal payments
                </h3>
                <h3 className="flex items-center gap-2 text-[13px] text-[#797979]">
                  <img className="w-[12px] h-[14px]" src={Chek3} alt="" />
                  Use of meeting rooms and conference rooms
                </h3>
              </div>
              <div className="w-[200px] gap-4 h-[50px] flex flex-col  sm:w-full">
                <h3 className="w-[200px] flex items-center gap-2 text-[14px] text-[#797979] sm:w-full">
                  <img className="w-[12px] h-[12px]" src={Chek1} alt="" />
                  High speed internet
                </h3>
                <h3 className="flex items-center gap-2 text-[14px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek2} alt="" />
                  Cleaning
                </h3>
                <h3 className="flex items-center gap-2 text-[14px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek3} alt="" />
                  Furniture
                </h3>{" "}
                <h3 className="flex items-center gap-2 text-[14px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek3} alt="" />
                  Delicious black coffee 24/7
                </h3>
              </div>
            </div>
            <div
              className={
                "w-auto h-auto flex gap-4 pt-2 ml-[-15px] mt-[80px] sm:ml-0 sm:pl-4"
              }
            >
              <h2 className={"text-[13px]"}>Impact.t hub</h2>
              <img src={Pl} alt="" />
              <h2 className={"text-[#FF5722] text-[13px]"}>
                Capacity 6 people
              </h2>
            </div>
            <br />
            <p
              className={
                "text-[12px] w-[300px] ml-[-13px] sm:ml-0 sm:pl-4 text-gray-500"
              }
            >
              A professional on-demand office space. Perfect when you need to
              get your head down and do your best work
            </p>
            <Link to="/about-studio">
              <button className="   w-[127px] mt-[20px] ml-[-13px]  h-[35px] bg-[#373737] rounded-[90px] text-white text-[10px]  sm:ml-4">
                BOOKING ROOM
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-[843px] h-[447px] bg-white ml-[490px] mt-10 rounded-[20px] lg:ml-0 sm:w-[95%] sm:m-auto sm:mt-10 sm:flex sm:h-[860px] sm:flex-col sm:gap-2 lg:w-full"
        >
          <img src={Conference1} className="sm:rounded-3xl" alt="" />
          <div className={"ml-[450px] mt-[-400px] sm:ml-0 sm:mt-4 sm:pl-4"}>
            <h3 className={"ml-[-18px] sm:ml-0 text-[#7C7C7C] text-[18px]"}>
              Office for main team
            </h3>
            <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px] ml-[-20px] sm:ml-0 ">
              8 000 000 uzs
              <span className="text-[#797979] text-[20px] sm:text-[18px] ">
                /Month{" "}
              </span>
            </h2>
            <div className="w-[300px] h-[50px] flex mt-4 ml-[-20px] sm:ml-0 sm:w-full ">
              <div className="w-[1500px] gap-4 h-[50px] flex flex-col sm:w-full">
                <h3 className="w-[200px] flex items-center gap-2 text-[13px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek1} alt="" />
                  Access 24/7
                </h3>
                <h3 className="flex items-center gap-2 text-[13px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek2} alt="" />
                  Communal payments
                </h3>
                <h3 className="flex items-center gap-2 text-[13px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek3} alt="" />
                  Use of meeting rooms and conference rooms
                </h3>
              </div>
              <br />
              <div className="w-[200px] gap-4 h-[50px] flex flex-col  sm:w-full">
                <h3 className="w-[200px] flex items-center gap-2 text-[13px] text-[#797979] sm:w-full">
                  <img className="w-[12px] h-[12px]" src={Chek1} alt="" />
                  High speed internet
                </h3>
                <h3 className="flex items-center gap-2 text-[13px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek2} alt="" />
                  Cleaning
                </h3>
                <h3 className="flex items-center gap-2 text-[13px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek3} alt="" />
                  Furniture
                </h3>{" "}
                <h3 className="flex items-center gap-2 text-[13px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek3} alt="" />
                  Delicious black coffee 24/7
                </h3>
              </div>
            </div>
            <div
              className={
                "w-auto h-auto flex gap-4 pt-2 ml-[-15px] mt-[80px] sm:pl-4 sm:ml-0 sm:mt-24"
              }
            >
              <h2 className={"text-[13px] sm:ml-[-10px]"}>Impact.t hub</h2>
              <img src={Pl} alt="" />
              <h2 className={"text-[#FF5722] text-[13px]"}>
                Capacity 8 people
              </h2>
            </div>
            <br />
            <p className={"text-[12px] w-[250px] ml-[-13px] sm:pl-4"}>
              A professional on-demand office space. Perfect when you need to
              get your head down and do your best work
            </p>
            <Link to="/about-studio">
              <button className="   w-[127px] mt-[20px] ml-[-13px] sm:ml-1 h-[35px] bg-[#373737] rounded-[90px] text-white text-[10px]  ">
                BOOKING ROOM
              </button>
            </Link>
          </div>
        </div>
        <div
          data-aos="fade-up"
          className="w-[843px] h-[447px] bg-white ml-[490px] mt-10 rounded-[20px] lg:ml-0 sm:w-[95%] sm:m-auto sm:mt-10 sm:flex sm:h-[860px] sm:flex-col sm:gap-2 lg:w-full"
        >
          <img src={Conference2} className="sm:rounded-3xl" alt="" />
          <div className={"ml-[450px] mt-[-400px] sm:ml-0 sm:mt-4 "}>
            <h3
              className={
                "ml-[-18px] sm:ml-0 sm:pl-4 text-[#7C7C7C] text-[18px]"
              }
            >
              Office for main team
            </h3>
            <h2 className="text-[30px] text-[#2D2D2D] mt-1 sm:text-[30px] ml-[-20px] sm:ml-0 sm:pl-4">
              22 000 000 uzs
              <span className="text-[#797979] text-[20px] sm:text-[18px]">
                /Month{" "}
              </span>
            </h2>
            <div className="w-[300px] h-[50px] flex mt-4 ml-[-20px] sm:ml-0 sm:w-full sm:pl-4">
              <div className="w-[1500px] gap-4 h-[50px] flex flex-col sm:w-full">
                <h3 className="w-[200px] flex items-center gap-2 text-[12px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek1} alt="" />
                  Access 24/7
                </h3>
                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek2} alt="" />
                  Communal payments
                </h3>
                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek3} alt="" />
                  Use of meeting rooms and conference rooms
                </h3>
              </div>
              <br />
              <div className="w-[200px] gap-4 h-[50px] flex flex-col  sm:w-full">
                <h3 className="w-[200px] flex items-center gap-2 text-[12px] text-[#797979] sm:w-full">
                  <img className="w-[12px] h-[12px]" src={Chek1} alt="" />
                  High speed internet
                </h3>
                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek2} alt="" />
                  Cleaning
                </h3>
                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek3} alt="" />
                  Furniture
                </h3>{" "}
                <h3 className="flex items-center gap-2 text-[12px] text-[#797979]">
                  <img className="w-[12px] h-[12px]" src={Chek3} alt="" />
                  Delicious black coffee 24/7
                </h3>
              </div>
            </div>
            <div
              className={
                "w-auto h-auto flex gap-4 pt-2 ml-[-15px] mt-[80px] sm:ml-0 sm:pl-4 sm:mt-24"
              }
            >
              <h2 className={"text-[13px] "}>Impact.t hub</h2>
              <img src={Pl} alt="" />
              <h2 className={"text-[#FF5722] text-[13px]"}>
                Capacity 15-20 people
              </h2>
            </div>
            <br />

            <p className={"text-[12px] w-[250px] ml-[-13px] sm:ml-0 sm:pl-4"}>
              A professional on-demand office space. Perfect when you need to
              get your head down and do your best work
            </p>
            <Link to="/about-studio">
              <button className="   w-[127px] mt-[20px] ml-[-13px]  h-[35px] bg-[#373737] rounded-[90px] text-white text-[10px]  sm:ml-4">
                BOOKING ROOM
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full pt-24 px-12 sm:px-3">
        <div
          data-aos="fade-up"
          className="rounded-[30px] bg-backgroundImageAboutStudio bg-no-repeat bg-cover px-20 lg:px-10 lg:py-10 py-16 h-auto w-full sm:text-center"
        >
          <Link to={"/gallery"}>
            <button className="w-36 h-10 bg-white rounded-full">GALLERY</button>
          </Link>
          <div className="pt-52 w-full flex sm:flex-col sm:py-5 sm:justify-center sm:items-center justify-between items-end">
            <div>
              <h3 className="text-3xl text-white sm:pt-10">
                See all our points!
              </h3>
              <h4 className="text-2xl font-light w-7/12 pt-5 sm:m-auto sm:w-11/12 sm:my-5 text-white">
                Discover all our points and take advantage of the amazing
                benefits and rewards available to you today!
              </h4>
            </div>
            <div>
              <Link to={"/gallery"}>
                <button className="w-36 h-10 sm:mt-5 text-[#FF5722] bg-white rounded-full">
                  VIEW ALL
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}

export default Offece;
