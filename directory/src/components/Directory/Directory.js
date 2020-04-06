import React, { useEffect, useState } from "react";
import "./Directory.scss";
import { useParams } from "react-router-dom";
import { list } from "./List";
import DirectoryItem from "./DirectoryItem";
import TemporaryDrawer2 from "../Drawer/TemporaryDrawer2";

function shuffle(array) {
  let currentIndex = array.length;
  let temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function Directory() {
  let { filterName, subFilterName } = useParams();
  const [dirList, setList] = useState(shuffle(list));

  const green = "#51B13E";
  const black = "#262626";
  const darkGreen = "#1E7A44";
  const pickedColor = green;

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
    <div className="directory-container">
      <h2>Projects and organizations using BTCPay Server</h2>
      <div className="filters">
        <p>Showing:</p>
        {filterName ? (
          <TemporaryDrawer2
            filterName={filterName}
            subFilterName={subFilterName}
          />
        ) : (
          <TemporaryDrawer2 filterName="ALL" />
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
