import React from "react";
import Img from "../assets/about/IMG_4493.png";
import Card1 from "../assets/about/IMG_4902.png";
import Card2 from "../assets/about/IMG_4959.png";
import Card3 from "../assets/about/IMG_4961.png";
import Bg from "../assets/about/Group 73.png";
import Image from "../assets/about/IMG_4492.png";
import Nav from "../components/navbar/index"
import { Link } from "react-router-dom";

const About = () => {
  const cards = [
    {
      img: Card1,
      p: "Working time",
      time: "24/7",
      day: "364 day",
    },
    {
      img: Card2,
      p: "Terrace on the 4’th floor",
      time: "220",
      day: `m2`,
    },
    {
      img: Card3,
      p: "Events",
      time: "364",
      day: "everyday",
    },
  ];
  return (
    <div>
      <Nav color={"white"}/>
      <div className="w-full h-auto bg-[#EDEDED]">
        <div className="w-full h-[500px] flex flex-col justify-center items-center bg-[#EDEDED]">
          <p data-aos='zoom-out' className="text-[16px]">Elevate Your Work Environment</p>
          <p data-aos='fade-down' data-aos-duration='1000' className="text-[112px] text-center sm:text-[42px] lg:text-[73px]">
            Impact technology hub, coworking, accelerator
          </p>
        </div>
        <div className="w-full h-[850px] sm:h-auto sm:mt-[-80px] bg-[#EDEDED] flex justify-center items-center lg:mt-[-170px]">
          <img src={Img} alt="" className="mx-auto w-[1250px] sm:w-[90%] lg:w-[90%]" />
        </div>
        <div className="w-full mx-auto bg-[#EDEDED] h-auto py-5  flex flex-col justify-start items-center gap-16 pt-2 sm:gap-10 sm:pt-0 ">
          <p data-aos='fade-right' className="text-[60px] w-[90%] sm:mt-10 sm:text-justify sm:text-4xl mx-auto sm:text-[42px] lg:text-[60px]">
            <span className="ml-28">Nestled </span>in the heart of the city, Impact.t hub is more than just a
            workspace— it's a hub of innovation and social impact
          </p>
          <div className="w-full flex justify-center items-center sm:flex-col sm:px-2 sm:gap-10 lg:items-start lg:justify-start lg:px-7">
            <div className="w-[30%] sm:hidden lg:hidden"></div>
            <div className="flex justify-end gap-10 sm:flex-col px-14 sm:px-5 sm:gap-0">
              <p data-aos='fade-right' data-aos-delay='300'
                 className="text-[20px] w-[500px] mb-16 sm:w-full  text-[#2D2D2D] leading-[30px] tracking-[-4%] text-justify">
                With its vibrant community of changemakers, entrepreneurs, and
                activists, Impact.t hub is redefining the traditional coworking
                model. From sustainable design to purpose-driven initiatives,
                every aspect of this dynamic workspace is geared towards driving
                positive change in the world. Whether you're a budding
                entrepreneur with a vision for social impact or a seasoned
                activist looking to connect with like-minded individuals,
                Impact.t hub offers the perfect environment to collaborate,
                innovate, and make a difference.
              </p>
              <p data-aos='fade-right' data-aos-delay='600'
                 className="text-[#2d2d2d] w-[500px] mb-16 sm:w-full text-[20px] leading-[30px] tracking-[-4%] text-justify">
                Join the movement today and be a part of something truly
                transformative. With its focus on social innovation and community
                empowerment, this coworking space is a breeding ground for
                impactful ideas. Whether you're a social entrepreneur, activist,
                or freelancer, Impact.t hub provides the space and resources you
                need to turn your vision into reality. Join the community and be
                inspired to create change.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[800px]  bg-[#EDEDED] flex flex-col sm:h-auto  p-10 sm:p-0  lg:h-auto">
          <p data-aos='fade-right' className="text-[32px] sm:w-full pl-5 w-[30%]">
            Discover a new way of working at Impact.t hub
          </p>
          <div className="w-full h-auto sm:h-[1700px] flex justify-center items-center gap-5 sm:flex-col mt-20">
            {cards.map((item, index) => (
                <div data-aos='zoom-in'
                     key={index}
                     className="w-[407px] h-[550px] flex flex-col sm:w-[90%] "
                >
                  <img src={item.img} alt=""/>
                  <div className="w-full h-[200px] flex flex-col py-6 px-5 bg-white rounded-b-[20px]">
                  <p className="text-[20px] lg:text-[18px]">{item.p}</p>
                  <hr className="mt-5" />
                  <p className="text-[60px] text-[#2D2D2D]">
                    {item.time}
                    <span
                      className="text-[18px] ml-2"
                      style={{ fontWeight: "350" }}
                    >
                      {item.day}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='w-full pt-24 sm:pt-10 px-12 sm:px-3'>
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
        <div className="w-full py-36 sm:h-auto sm:py-20 bg-[#EDEDED] flex justify-center items-center gap-10 px-10 sm:flex-col sm:px-5">
          <img data-aos='fade-down' data-aos-duration='1000' src={Image} alt="" className="pl-7 sm:pl-0 lg:pl-0 sm:rounded-3xl"/>
          <div data-aos='fade-down' data-aos-duration='1000' data-aos-delay='200' className="w-auto h-[540px] flex flex-col pt-20 px-5 bg-[#2D2D2D] rounded-[20px] sm:h-[420px] lg:pt-5 lg:h-[400px]">
            <p className="text-[24px] text-white">
              With its focus on social innovation and community empowerment,
              this coworking space is a breeding ground for impactful ideas.
            </p>
            <p className="text-white mt-20 ">Akmal Paiziev</p>
            <p className="text-[#969696] text-[18px]">CEO and Founder Impact.t</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
