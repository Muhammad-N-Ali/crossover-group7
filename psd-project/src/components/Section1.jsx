const Section1 = () => {
  return (
    <>
      <div className="bg-white w-full p-10">
        <div className="border-2">
          <nav>
            <ul className="grid grid-cols-10">
              <li className="col-span-6">Callum Hayes</li>
              <li>Projects</li>
              <li>Resume</li>
              <li>About me</li>
              <li className="">
                <button type="button">Book a Call</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col justify-items-center border border-2">
          <div>
            <img src="../images/smallprofilepic.svg" alt="profile-pic" />
            <p>
              I'm Callum Hayes, a UX/UI designer specialising in creating sleek,
              user-friendly mobile apps.
            </p>
            <img src="../images/Buttons.svg" alt="buttons" />
          </div>

          <div className="flex justify-items-center gap-x-4">
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
