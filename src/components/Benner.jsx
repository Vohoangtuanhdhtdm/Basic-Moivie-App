import iconStar from "../assets/rating.png";
import iconStarHalf from "../assets/rating-half.png";
import avartar1 from "../assets/avatar1.jpg";
import play from "../assets/play-button.png";

const Benner = () => {
  return (
    <div className="relative w-full h-[600px] bg-benner bg-center bg-no-repeat bg-cover">
      <div className="bg-black w-full h-full absolute left-0 top-0 opacity-25" />
      <div className="w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20">
        <div className=" w-[50%] flex flex-col justify-center space-y-[25px] items-baseline">
          <p className="text-white font-bold bg-gradient-to-r from-red-800 to-white py-2 px-4">
            TV Show
          </p>
          <div className="flex flex-col space-y-[25px]">
            <p className="text-white font-bold text-[40px]">Avatar 2</p>
            <div className="flex items-center space-x-4">
              <img src={iconStar} alt="" className="w-8 h-8" />
              <img src={iconStar} alt="" className="w-8 h-8" />
              <img src={iconStar} alt="" className="w-8 h-8" />
              <img src={iconStar} alt="" className="w-8 h-8" />
              <img src={iconStarHalf} alt="" className="w-8 h-8" />
            </div>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              asperiores. Dolore dolorem repellendus, velit eligendi vel aut at
              sapiente delectus ut illo reiciendis, suscipit, animi nam
              recusandae ullam neque dolor. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quia ut inventore officia quisquam
              voluptates, beatae provident rerum voluptas iure consequatur
              temporibus sequi, reiciendis molestias nam qui odit velit iusto
              architecto.
            </p>
            <div className="flex items-center space-x-[35px]">
              <button className="py-2 font-bold px-4 bg-black text-white">
                Chi Tiết
              </button>
              <button className="bg-red-700 font-bold py-2 px-4 text-white">
                Xem Phim
              </button>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex items-center justify-center">
          <div className="relative w-[300px] h-[400px]  group cursor-pointer">
            <img src={avartar1} alt="" className="w-full h-full object-cover" />
            <div className="w-full h-full absolute top-0 left-0 z-20 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <img src={play} alt="" className="w-16 h-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benner;
