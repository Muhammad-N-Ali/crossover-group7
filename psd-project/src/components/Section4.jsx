// import { FaLinkedin } from "react-icons/fa";
const Section4 = () => {
  return (  
  <>
    <div className="bg-[#484848] text-white py-24 pl-20">
      <h1 className="text-4xl">Interested in connecting? </h1>
      <p className="text-sm mt-1">Let's talk projects, collaborations or anything design!</p>
      <button className="bg-[#252729]  text-[12px]  mt-2  rounded px-3 py-1">Book a call</button>
    </div>

    <div className="bg-[#252729] text-white divide-y divide-salate-100">

      <div className="flex justify-between py-8">
        <div className="flex px-12">
          <p className="text-xl font-semibold">Callum Hayes</p>
          <ul className="flex text-sm px-12 pt-1">
            <li className="pr-10">Projects</li>
            <li className="pr-10">Resume</li>
            <li className="pr-64">About</li>
          </ul>
        </div>
        <div className="pr-12" >
        <img src="../images/Buttons.svg" alt="buttons" 
        width="160px" />
        </div>
      </div>

      <div className="text-center text-[12px] py-8">Copyright 2024 by Callum Hayes</div>
    </div>
  </>
  )
};

export default Section4;
