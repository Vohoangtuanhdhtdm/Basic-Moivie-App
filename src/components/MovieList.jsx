import { useContext } from "react";
import PropTypes from "prop-types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MovieContext } from "../context/MovieProvider";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const MovieList = ({ title, data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10 space-y-3">
      <h2 className="text-white uppercase text-xl">{title}</h2>
      <Carousel responsive={responsive} className="flex items-center space-x-4">
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="w-[200px] h-[300px] relative group"
              onClick={() => handleVideoTrailer(item.id)}
            >
              <div className="cursor-pointer w-full h-full group-hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="w-full h-full absolute top-0 left-0 bg-black/20" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  alt={item.title}
                  className="w-full h-full object-cover "
                />
                <div className="absolute left-2 bottom-4">
                  <p className="text-md uppercase">
                    {item.title || item.original_title}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Carousel>
    </div>
  );
};
MovieList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
export default MovieList;
