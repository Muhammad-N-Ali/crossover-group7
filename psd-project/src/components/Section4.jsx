// import { FaLinkedin } from "react-icons/fa";
const Section4 = () => {
  return (  
  <>
    <div className="bg-[#484848] text-white pt-12 pb-12 pl-10">
      <h1 className="text-2xl">Interested in connecting? </h1>
      <p className="text-[10px] mt-1">Let's talk projects, collaborations or anything design!</p>
      <button className="bg-[#252729]  text-[8px]  mt-2  rounded px-3 py-1">Book a call</button>
    </div>
    <div className="bg-[#252729] text-white divide-y divide-salate-900">
      <div>
        <div className="flex py-6 px-6">
          <p className="text-[12px]">Callum Hayes</p>
          <ul className="flex text-[8px] px-8">
            <li className="pr-6">Projects</li>
            <li className="pr-6">Resume</li>
            <li>About</li>
          </ul>
          <ul className="flex pl-32 text-[10px]">
            <li className="pr-6">Website</li>
            <li className="pr-6">linkedIn</li>
            <li className="pr-6">Be</li>
            <li>Xing</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-[8px] py-8">Copyright 2024 by Callum Hayes</div>
    </div>
  </>
  )
};

export default Section4;
