import PropType from "prop-types";
import { useContext } from "react";
import { MovieContext } from "../context/MovieProvider";

const MovieSearch = ({ title, data }) => {
  const { handleVideoTrailer } = useContext(MovieContext);
  return (
    <div className="text-white p-10 mb-10 space-y-3">
      <h2 className="text-white uppercase text-xl">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm: grid-cols-3 lg: grid-cols-4">
        {data &&
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
      </div>
    </div>
  );
};
MovieSearch.propTypes = { title: PropType.string, data: PropType.array };
export default MovieSearch;
