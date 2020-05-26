import React, { useEffect, useState } from "react";
import "./Directory.scss";
import { useParams } from "react-router-dom";
import { list } from "./List";
import DirectoryItem from "./DirectoryItem";
import TemporaryDrawer from "../Drawer/TemporaryDrawer";
import shuffle from "../../helpers";
import Loader from "react-loader-spinner";
import LazyLoad, { forceCheck } from "react-lazyload";

// const DirectoryItem = React.lazy(() => import("./DirectoryItem"));

function Directory(props) {
  let { filterName, subFilterName } = useParams();
  const [dirList, setList] = useState(shuffle(list));
  const { colorMode } = props;
  setTimeout(forceCheck, 100)

  useEffect(() => {
    if (subFilterName) {
      let completeList = shuffle(list);
      let filteredList = completeList.filter(
        (user) => user.subType === subFilterName
      );
      setList(filteredList);
    } else if (filterName) {
      let completeList = shuffle(list);
      let filteredList = completeList.filter(
        (user) => user.type === filterName
      );
      setList(filteredList);
    } else {
      let completeList = shuffle(list);
      setList(completeList);
    }
  }, [filterName, subFilterName]);

  return (
    <div className={`directory-container directory-container-${colorMode}`}>
      <h2>Merchants, projects and organizations using BTCPay Server</h2>
      <div className="filters">
        <p>Showing:</p>
        {filterName ? (
          <TemporaryDrawer
            colorMode={colorMode}
            filterName={filterName}
            subFilterName={subFilterName}
          />
        ) : (
          <TemporaryDrawer colorMode={colorMode} filterName="ALL" />
        )}
      </div>
      <div className="list-container">
        {/* dirList is the filtered list of companies - it contains only the companies
            that match the current filter */}
        {dirList.map((user) => (
          <LazyLoad
            height={0}
            once
            key={user.name}
            placeholder={
              colorMode === "light" ?
              <Loader type="ThreeDots" color="#000000" height="15" width="30" /> :
              <Loader type="ThreeDots" color="#ffffff" height="15" width="30" />
            }
          >
            <DirectoryItem key={user.name} user={user} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
}

export default Directory;
