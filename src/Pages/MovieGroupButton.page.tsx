import React, { FormEvent, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { MovieDetails, MovieGroupFetch } from "../APIs/Movie/Query";
import Button from "../Components/Button/Button";
import ListGroup from "../Components/ListGroup/ListGroup";
import Search from "../Components/Search/Search";

interface Props {}

const MovieGroupButton: React.FC<Props> = () => {
  const [movieData, setMovieData] = useState<MovieDetails[]>();
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    MovieGroupFetch({ query: query }).then((response) => {
      setMovieData(response);
      setIsSubmitClicked(true);
      console.log("Data submitting!!");
      setIsLoading(false);
    });
  };

  return (
    <div className="w-full h-screen">
      <div>
        <div className="flex justify-center mt-3">
          <Search
            onSubmit={handleFormSubmit}
            className="rounded-r-none"
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
          <Button
            onClick={handleFormSubmit}
            type="submit"
            text="Search"
            className="rounded-l-none"
          />
        </div>
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
        ) : isSubmitClicked ? (
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

MovieGroupButton.defaultProps = {};

export default React.memo(MovieGroupButton);
