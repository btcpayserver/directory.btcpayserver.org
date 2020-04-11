import React, { useEffect, useState } from "react";
import "./Directory.scss";
import { useParams } from "react-router-dom";
import { list } from "./List";
import DirectoryItem from "./DirectoryItem";
import TemporaryDrawer2 from "../Drawer/TemporaryDrawer2";
import shuffle from "../../helpers"

function Directory(props) {
  let { filterName, subFilterName } = useParams();
  const [dirList, setList] = useState(shuffle(list));
  const { colorMode } = props

  useEffect(() => {
    if (subFilterName) {
      let completeList = shuffle(list);
      let filteredList = completeList.filter(
        user => user.subType === subFilterName
      );
      setList(filteredList);
    } else if (filterName) {
      let completeList = shuffle(list);
      let filteredList = completeList.filter(user => user.type === filterName);
      setList(filteredList);
    } else {
      let completeList = shuffle(list);
      setList(completeList);
    }
  }, [filterName, subFilterName]);

  return (
    <div className={`directory-container directory-container-${colorMode}`}>
      <h2>Projects and organizations using BTCPay Server</h2>
      <div className="filters">
        <p>Showing:</p>
        {filterName ? (
          <TemporaryDrawer2
            colorMode={colorMode}
            filterName={filterName}
            subFilterName={subFilterName}
          />
        ) : (
          <TemporaryDrawer2 colorMode={colorMode} filterName="ALL" />
        )}
      </div>
      <div className="list-container">
        {/* dirList is the filtered list of companies - it contains only the companies
            that match the current filter */}
        {dirList.map(user => (
          <DirectoryItem user={user} />
        ))}
      </div>
    </div>
  );
}

export default Directory;
