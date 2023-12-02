import imgBanner from "../assets/img/house-banner.png";

const Banner = () => {
  return (
    <div className="pt-10 pb-6 px-6 md:pl-20 md:pr-0">
      <div className=" flex flex-col md:flex-row ">
        <div className="flex flex-col justify-center items-center text-center md:text-left md:w-1/2 md">
          <h1 className="text-violet-700 text-5xl font-semibold">
            Rent <span className="text-primary">Your Dream House With Us.</span>
          </h1>
          <p className="text-[14px] italic mt-5">
            Powerful, self-serve product and growth analutics to help you
            conver, engage and retain more.
          </p>
        </div>
        <div className="hidden md:block pl-20 w-1/2">
          <img src={imgBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
