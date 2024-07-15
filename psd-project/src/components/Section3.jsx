import React from 'react';

const Section3 = () => {
  return (
    <>
      <section className="flex flex-col items-start p-8 sm:p-[100px_0px_150px_100px] gap-6 sm:gap-[50px] w-full max-w-[1571px] h-auto order-4 flex-none flex-grow-0">
        <section>
          <h1 className="w-full sm:w-[383px] h-auto sm:h-[68px] text-3xl sm:text-5xl font-manrope font-medium text-black leading-tight sm:leading-[68px] flex-none order-0 flex-grow-0">
            Expert feedback
          </h1>
          <h2 className="w-full sm:w-[513px] h-auto sm:h-[58px] text-base sm:text-lg font-manrope font-normal text-[#4C4D59] leading-normal sm:leading-[160%] order-1 flex-none flex-grow-0">
            Read insights and praises from mentors and peers who have guided and witnessed my professional growth.
          </h2>
        </section>
        <ul className="flex flex-col sm:flex-row gap-6 sm:gap-12">
          <li className="flex flex-col items-start gap-4 w-full sm:w-auto">
            <img className="w-[84px] h-[84px]" src="/Portrait/Portrait1.png" alt="Portrait 1" />
            <h3 className="w-full sm:w-[287px] h-auto sm:h-[41px] font-manrope font-medium text-2xl sm:text-[30px] leading-tight sm:leading-[41px] text-[#2A2A28]">
              Dr. James Anderson
            </h3>
            <div className="w-full sm:w-[282px] h-auto sm:h-[21px] font-manrope font-medium text-sm sm:text-[15px] leading-normal sm:leading-[140%] text-[#2A2A28] order-1 flex-none flex-grow-0">
              Director of the College of Art and Design
            </div>
            <div className="w-full sm:w-[397px] h-auto sm:h-[203px] font-manrope font-normal text-base sm:text-[18px] leading-normal sm:leading-[160%] text-[#444444] order-1 flex-none flex-grow-0">
              "As the director of the college, I have witnessed Callum's remarkable growth as a designer. He has a keen eye for detail and a commendable dedication to his craft, which has set a high standard for his peers. Callum's work is a testament to his potential in the design industry."
            </div>
          </li>
          <li className="flex flex-col items-start gap-4 w-full sm:w-auto">
            <img className="w-[84px] h-[84px]" src="/Portrait/Portrait2.png" alt="Portrait 2" />
            <h3 className="w-full sm:w-[287px] h-auto sm:h-[41px] font-manrope font-medium text-2xl sm:text-[30px] leading-tight sm:leading-[41px] text-[#2A2A28]">
              Elizabeth Thompson
            </h3>
            <div className="w-full sm:w-[282px] h-auto sm:h-[21px] font-manrope font-medium text-sm sm:text-[15px] leading-normal sm:leading-[140%] text-[#2A2A28] order-1 flex-none flex-grow-0">
              Senior Lecturer in Graphic Design
            </div>
            <div className="w-full sm:w-[397px] h-auto sm:h-[203px] font-manrope font-normal text-base sm:text-[18px] leading-normal sm:leading-[160%] text-[#444444] order-1 flex-none flex-grow-0">
              "Callum consistently demonstrated exceptional creativity and a deep understanding of user-centric design principles in my design class. His projects were not only aesthetically pleasing but also showcased practical functionality that exceeded course expectations."
            </div>
          </li>
          <li className="flex flex-col items-start gap-4 w-full sm:w-auto">
            <img className="w-[84px] h-[84px]" src="/Portrait/Portrait3.png" alt="Portrait 3" />
            <h3 className="w-full sm:w-[287px] h-auto sm:h-[41px] font-manrope font-medium text-2xl sm:text-[30px] leading-tight sm:leading-[41px] text-[#2A2A28]">
              Michael Richards
            </h3>
            <div className="w-full sm:w-[282px] h-auto sm:h-[21px] font-manrope font-medium text-sm sm:text-[15px] leading-normal sm:leading-[140%] text-[#2A2A28] order-1 flex-none flex-grow-0">
              Creative Director & Design Mentor
            </div>
            <div className="w-full sm:w-[397px] h-auto sm:h-[203px] font-manrope font-normal text-base sm:text-[18px] leading-normal sm:leading-[160%] text-[#444444] order-1 flex-none flex-grow-0">
              "Callum has an extraordinary talent for translating complex concepts into visually appealing and intuitive designs. Working alongside him as a mentor, I was impressed by his ability to seamlessly integrate feedback and push the boundaries of what's possible in digital design."
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Section3;
