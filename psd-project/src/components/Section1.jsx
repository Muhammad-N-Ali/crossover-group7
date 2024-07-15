const Section1 = () => {
  return (
    <>
      <div className="bg-white w-full p-4">
        <nav className="text-xl p-8">
          <ul className="grid grid-cols-10">
            <li className="col-span-6 px-3">Callum Hayes</li>
            <li className="border-0 text-center p-1">Projects</li>
            <li className="border-0 text-center p-1">Resume</li>
            <li className="border-0 text-center p-1">About me</li>
            <li className="border-2  rounded-md text-center p-1">
              <button type="button">Book a Call</button>
            </li>
          </ul>
        </nav>

        <div className="flex flex-col px-32 py-10">
          <div className="flex  flex-col gap-6 pb-8">
            <img
              src="../images/smallprofilepic.svg"
              width="80px"
              alt="profile-pic "
            />
            <p className="text-6xl">
              I'm Callum Hayes, a UX/UI designer specialising in creating sleek,
              user-friendly mobile apps.
            </p>
            <img src="../images/Buttons.svg" alt="buttons" width="160px" />
          </div>

          <div className="flex flex-wrap justify-between gap-6">
            <img src="../images/image 89.svg" alt="image89" />
            <img src="../images/image 90.svg" alt="iamges90" />
            <img src="../images/image 91.svg" alt="image 91" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section1;
