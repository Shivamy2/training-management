import React, { useEffect, useState } from "react";
import { MovieGroupFetch } from "../APIs/Movie/Query";
import ListGroup from "../Components/ListGroup/ListGroup";
import { MovieDetails } from "../APIs/Movie/Query";
import Search from "../Components/Search/Search";
import { ImSpinner9 } from "react-icons/im";

interface Props {}

const MovieGroup: React.FC<Props> = () => {
  const [movieData, setMovieData] = useState<MovieDetails[]>();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    MovieGroupFetch({ query: query }).then((response) => {
      setMovieData(response);
      setIsLoading(false);
    });
  }, [query]);

  return (
    <div className="w-full h-full">
      <div className="flex justify-center mt-3">
        <Search
          onSubmit={(event) => {
            event.preventDefault();
          }}
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            console.log(query);
          }}
        />
      </div>
      <div className="max-w-md mx-auto mt-12">
        {isLoading && query ? (
          <div className="">
            <ImSpinner9 className="w-12 h-12 mx-auto animate-spin" />
          </div>
        ) : movieData ? (
          movieData.map((item, index) => {
            let listExtraStyling = "";
            if (index === 0) listExtraStyling += " rounded-t-md ";
            else if (index === movieData.length - 1) {
              listExtraStyling += " rounded-b-md ";
            }
            return (index & 1) === 1 ? (
              <ListGroup
                className={
                  "bg-search-icon shadow-stacked hover:shadow-none " +
                  listExtraStyling
                }
                infoClassName="text-white"
                key={index}
                title={item.l}
                description={item.s}
                url={
                  item.i
                    ? item.i.imageUrl
                    : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                }
              />
            ) : (
              <ListGroup
                className={
                  "hover:bg-gray-100 bg-white hover:shadow-stacked " +
                  listExtraStyling
                }
                key={index}
                title={item.l}
                description={item.s}
                url={
                  item.i
                    ? item.i.imageUrl
                    : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                }
              />
            );
          })
        ) : query ? (
          <ListGroup
            className={"hover:bg-gray-100 bg-white hover:shadow-stacked "}
            title="Not Found"
            description="Seems input field doesn't exist"
            url="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

MovieGroup.defaultProps = {};

export default React.memo(MovieGroup);
