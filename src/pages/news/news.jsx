import React from "react";
import Nav from "../../components/navbar/index";
import Bg1 from "../../assets/images/IMG_4966.png";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
function News(props) {
  return (
    <div className="w-full h-auto bg-[#EDEDED]">
      <Nav />
      <div
        className="w-full h-screen bg-black sm:h-[80%]  bg-cover bg-center pl-14 sm:pl-5 "
        style={{ backgroundImage: `url(${Bg1})` }}
      >
        <h2
          data-aos="fade-right"
          data-aos-duration="1000"
          className=" sm:text-[40px]  sm:pt-[180px]  sm:leading-[40px] text-white text-[100px] pt-[320px] leading-[100px] lg:w-full"
        >
          Welcome to Impact.t Studio
        </h2>
        <Link to="/about-studio">
          <button
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            className={
              "w-[180px] mt-20 sm:w-[160px] sm:text-[13px]  sm:h-[45px]  sm:mt-[50px] text-[15px] h-[50px] bg-white rounded-[90px] text-[#2D2D2D]  sm:mb-64"
            }
          >
            READ
          </button>
        </Link>
      </div>
      <div className="my-14 pt-14 bg-[#EDEDED]">
        <div className="flex justify-between">
          <h1 className="text-2xl pl-[50px] pb-4 sm:pl-[8%]">Popular News</h1>
        </div>
        <div className="flex sm:flex-col justify-between px-12 sm:px-5 gap-20">
          <div
            data-aos="zoom-in"
            className="card w-1/2 sm:w-full bg-no-repeat bg-cover relative flex justify-between text-start flex-col"
          >
            <div className="relative">
              <img
                src={require("../../assets/images/Group 52.png")}
                className="w-full"
              />
            </div>
            <h1 className="my-5">
              How to hire the right product manager for your company
            </h1>
            <div className="flex items-center gap-2 sm: flex-wrap">
              <p className="text-[#FF5722] flex gap-2 items-center sm:text-xs">
                <img src={require("../../assets/images/home/vector-3.png")} />
                Event
              </p>
              <p className="text-[#2D2D2D] sm:text-xs">
                | June 18, 2024 • 19:00
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="card w-1/2 sm:w-full bg-no-repeat bg-cover relative  flex justify-between text-start flex-col"
          >
            <div className="relative">
              <img
                src={require("../../assets/images/IMG_4875.png")}
                className="w-full"
              />
            </div>
            <h1 className="my-5">Impact.t hub: social innovation hub</h1>
            <div className="flex items-center gap-2 sm:flex-wrap  ">
              <p className="text-[#FF5722] flex gap-2 items-center sm:text-xs">
                <img src={require("../../assets/images/home/vector-1.png")} />
                Blog
              </p>
              <p className="text-[#2D2D2D] sm:text-xs">
                | May 2 8, 2024 • Read 7 min
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"w-full h-[100px] flex gap-5 px-14 sm:px-5 sm:gap-1"}>
        <button
          data-aos="zoom-in"
          className={
            "w-[120px] rounded-[30px] h-[50px] bg-[#FF5722] text-white"
          }
        >
          All
        </button>
        <button
          data-aos="zoom-in"
          className={"w-[120px] rounded-[30px] h-[50px] bg-[#DFDFDF] "}
        >
          News
        </button>
        <button
          data-aos="zoom-in"
          className={"w-[120px] rounded-[30px] h-[50px] bg-[#DFDFDF] "}
        >
          Blog
        </button>
        <button
          data-aos="zoom-in"
          className={"w-[120px] rounded-[30px] h-[50px] bg-[#DFDFDF] "}
        >
          Event
        </button>
      </div>
      <div className="w-[100%] flex px-9 justify-between items-start sm:flex-col sm:gap-10 sm:px-5">
        <div
          data-aos="zoom-in"
          className=" w-[30%] bg-no-repeat bg-cover relative sm:w-full mx-auto lg:h-[400px] "
        >
          <div className="relative">
            <img
              src={require("../../assets/images/home/card-1.png")}
              className="w-[450px] h-[350px]"
            />
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center absolute bottom-7 right-7">
              <ArrowRightOutlined className="text-black" />
            </div>
          </div>
          <h1 className="my-5">
            How to hire the right product manager for your company
          </h1>
          <div className="flex items-center gap-2">
            <p className="text-[#FF5722] flex gap-2 items-center">
              <img src={require("../../assets/images/home/vector-3.png")} />
              Event
            </p>
            <p className="text-[#2D2D2D]">| June 18, 2024 • 19:00</p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className=" w-[30%] bg-no-repeat bg-cover relative sm:w-full mx-auto mb-[5%]"
        >
          <div className="relative">
            <img
              src={require("../../assets/images/IMG_4966.png")}
              className="w-[450px] h-[400px] rounded-[20px]"
            />
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center absolute bottom-7 right-7">
              <ArrowRightOutlined className="text-black scale-125" />
            </div>
          </div>
          <h1 className="my-5">Welcome to Impact Studio</h1>
          <div className="flex items-center gap-2">
            <p className="text-[#FF5722] flex gap-2 items-center">
              <img src={require("../../assets/images/home/vector-2.png")} />
              News
            </p>
            <p className="text-[#2D2D2D]">| June 15, 2024 • Read 12 min</p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[30%] bg-no-repeat bg-cover relative sm:w-full mx-auto "
        >
          <div className="relative">
            <img
              src={require("../../assets/images/home/card-3.png")}
              className="w-[450px] h-[350px] rounded-[20px]"
            />
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center absolute bottom-7 right-7">
              <ArrowRightOutlined className="text-black scale-125" />
            </div>
          </div>
          <h1 className="my-5">Impact.t hub: social innovation hub</h1>
          <div className="flex items-center gap-2">
            <p className="text-[#FF5722] flex gap-2 items-center">
              <img src={require("../../assets/images/home/vector-1.png")} />
              Blog
            </p>
            <p className="text-[#2D2D2D]">| May 2 8, 2024 • Read 7 min</p>
          </div>
        </div>
      </div>
      <div className="w-[100%] flex px-9 justify-between items-start pb-32 sm:flex-col sm:gap-10 sm:mt-10 sm:px-5">
        <div
          data-aos="zoom-in"
          className="w-[30%] bg-no-repeat bg-cover sm:w-full mx-auto "
        >
          <div className="relative">
            <img
              src={require("../../assets/images/IMG_4959.png")}
              className="w-[450px]"
            />
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center absolute bottom-7 right-7">
              <ArrowRightOutlined className="text-black scale-125" />
            </div>
          </div>
          <h1 className="my-5">How does creativity help us?</h1>
          <div className="flex items-center gap-2">
            <p className="text-[#FF5722] flex gap-2 items-center">
              <img src={require("../../assets/images/home/vector-1.png")} />
              Blog
            </p>
            <p className="text-[#2D2D2D]">|March 2 8, 2024 Read 4 min</p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[30%] bg-no-repeat bg-cover sm:w-full mx-auto "
        >
          <div className="relative">
            <img
              src={require("../../assets/images/IMG_4820.png")}
              className="w-[450px] h-[350px] rounded-[20px]"
            />
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center absolute bottom-7 right-7">
              <ArrowRightOutlined className="text-black scale-125" />
            </div>
          </div>
          <h1 className="my-5">How does creativity help us?</h1>
          <div className="flex items-center gap-2">
            <p className="text-[#FF5722] flex gap-2 items-center">
              <img src={require("../../assets/images/home/vector-1.png")} />
              Blog
            </p>
            <p className="text-[#2D2D2D]">|March 2 8, 2024 Read 4 min</p>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[30%] bg-no-repeat bg-cover sm:w-full mx-auto "
        >
          <div className="relative">
            <img
              src={require("../../assets/images/IMG_4977.png")}
              className="w-[450px] h-[350px]"
            />
            <div className="h-10 w-10 bg-white rounded-full flex items-center justify-center absolute bottom-7 right-7">
              <ArrowRightOutlined className="text-black scale-125" />
            </div>
          </div>
          <h1 className="my-5">How does creativity help us?</h1>
          <div className="flex items-center gap-2">
            <p className="text-[#FF5722] flex gap-2 items-center">
              <img src={require("../../assets/images/home/vector-1.png")} />
              Blog
            </p>
            <p className="text-[#2D2D2D]">|March 2 8, 2024 Read 4 min</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
