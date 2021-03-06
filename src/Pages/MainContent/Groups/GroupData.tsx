import React from "react";
import { ImSpinner9 } from "react-icons/im";
import Alert from "../../../Components/Alert/Alert";

import ListGroup from "../../../Components/ListGroup/ListGroup";
import Search from "../../../Components/Search/Search";
import { store, useAppSelector } from "../../../Store/store";
import {
  groupDataSelector,
  groupLoadingStatusSelector,
  groupQuerySelector,
} from "../../../selectors/groups.selectors";
import { Link } from "react-router-dom";
import { groupUpdateQueryAction } from "../../../actions/groups.actions";

interface Props {}

const GroupData: React.FC<Props> = () => {
  const isLoading = useAppSelector(groupLoadingStatusSelector);
  const query = useAppSelector(groupQuerySelector);
  const groupData = useAppSelector(groupDataSelector);

  return (
    <div className="w-full h-full">
      <div>
        <div className="flex justify-center pt-3">
          <Search
            onSubmit={(event) => {
              event.preventDefault();
            }}
            value={query}
            onChange={(event) => {
              store.dispatch(groupUpdateQueryAction(event.target.value));
            }}
          />
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
              let linkToNextId;
              if (!query) linkToNextId = `/groups/%20/${item?.id}`;
              else linkToNextId = `/groups/${query}/${item?.id}`;
              return (index & 1) === 1 ? (
                <Link to={linkToNextId} key={index}>
                  <ListGroup
                    className={
                      "bg-search-icon shadow-stacked hover:shadow-none " +
                      listExtraStyling
                    }
                    infoClassName="text-white"
                    key={index}
                    name={item?.name ? item.name : "Unknown"}
                    id={item?.description}
                    url={
                      item?.group_image_url
                        ? item.group_image_url
                        : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    }
                  />
                </Link>
              ) : (
                <Link to={linkToNextId} key={index}>
                  <ListGroup
                    className={
                      "hover:bg-gray-100 bg-white hover:shadow-stacked " +
                      listExtraStyling
                    }
                    key={index}
                    name={item?.name ? item.name : "Unknown"}
                    id={item?.description}
                    url={
                      item?.group_image_url
                        ? item.group_image_url
                        : "https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    }
                  />
                </Link>
              );
            })
          ) : query ? (
            <Alert title="0 Results Found!" alertType="error" />
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

GroupData.defaultProps = {};

export default React.memo(GroupData);
