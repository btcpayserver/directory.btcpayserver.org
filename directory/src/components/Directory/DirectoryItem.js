import React from "react";
import "./Directory.scss";
import { icons } from "./Icons";

function DirectoryItem(props) {
  return (
    <div className="item">
      <div className="item-content">
        <a target="_blank" href={props.user.url}>
          {props.user.subType
            ? icons[props.user.subType]
            : icons[props.user.type]}
          {props.user.name}
        </a>
        <p>{props.user.description}</p>
      </div>
      <div className="separator" />
    </div>
  );
}

export default DirectoryItem;
