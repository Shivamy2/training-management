import React, { FormEvent, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import fetchGroupData from "../../APIs/GroupsData/groupsData";
import { GroupDataStream } from "../../Models/Groups";
import Alert from "../Alert/Alert";
import Button from "../Button/Button";
import ListGroup from "../ListGroup/ListGroup";
import Search from "../Search/Search";

interface Props {}

const GroupDataButton: React.FC<Props> = () => {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [groupData, setGroupData] = useState<GroupDataStream[]>();
  const [isSubmitClicked, setIsSubmitClicked] = useState(false);

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    fetchGroupData({ query: query, status: "all-groups" })
      .then((response) => {
        setIsSubmitClicked(true);
        if (response?.status === 200) {
          console.log(response);
          setGroupData(response?.data.data);
          setIsLoading(false);
        } else {
          console.log("Error while fetching data", response?.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full h-full">
      <div>
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
          ) : groupData && groupData.length > 0 ? (
            groupData.map((item, index) => {
              let listExtraStyling = "";
              if (index === 0) listExtraStyling += " rounded-t-md ";
              else if (index === groupData.length - 1) {
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
                  title={item.name}
                  description={item.description}
                  url={
                    item.group_image_url
                      ? item.group_image_url
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
                  title={item.name}
                  description={item.description}
                  url={
                    item.group_image_url
                      ? item.group_image_url
                      : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  }
                />
              );
            })
          ) : isSubmitClicked ? (
            <Alert title="0 Results Found!" alertType="error" />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

GroupDataButton.defaultProps = {};

export default React.memo(GroupDataButton);
