const Section2 = () => {
  return (
    <>
   
    <section className="bg-[#F3F3F2] h-auto w-full pb-36 pt-24 px-6 sm:px-12 lg:px-24">
      
      <div className="flex flex-col gap-4 pb-12 w-full sm:w-[26rem]">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl">Selected projects</h2>
        <p className="text-base">Explore my selected projects, showcasting my dedication to innovative and heartfelt design.</p>
      </div>

    
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        
        <div className="flex-1 flex justify-center">
          <div className="w-full sm:w-[30rem] lg:w-[40rem] h-auto flex flex-col gap-4">
            <img className="w-full h-auto" src="/src/assets/iphone mockup 1.png" alt="Iphone Mockup" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl">Redesign project: fitness tracker App Revamp</h3>
            <p className="text-base sm:text-lg">Elevating the user experience of a renowned fitness tracker app through a strategic.</p>
          </div>
        </div>
        
        
        <div className="flex-1 flex justify-center mt-8 lg:mt-0">
          <div className="w-full sm:w-[30rem] lg:w-[40rem] h-auto flex flex-col gap-4">
            <img className="w-full h-auto" src="/src/assets/iphone mockup 2.png" alt="Iphone Mockup 2" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl">Internship project: social dining app design</h3>
            <p className="text-base sm:text-lg">Designing a mobile app to connect food enthusiasts through shared dining experiences, from concept to prototype.</p>
          </div>
        </div>
        
      </div>

    </section>


    <section className="flex flex-col lg:flex-row w-full bg-[#2A2A28] text-white text-lg">

      <div className="flex-1 flex justify-center items-center p-6 sm:p-12 lg:p-24">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl sm:text-6xl lg:text-8xl">My graduation project</h2>
          <p className="text-base sm:text-xl lg:text-2xl">Revolutionizing the educational ecosystem with a mobile app designed to enhance interactive learning and peer collaboration</p>
        </div>
      </div>

      <div className="flex-1">
        <img className="w-full h-auto" src="/src/assets/Phone mockup 3.png" alt="Phone mockup 3" />
      </div>

    </section>

    </>
  )
};

export default Section2;
