import React from "react";
import "./Directory.scss";
import { icons } from "./Icons";
import iconSprite from "../../images/icon-sprite.svg";

function DirectoryItem(props) {
  const formattedTwitter = props.user.twitter
    ? props.user.twitter.slice(1)
    : "";
  return (
    <div className="item">
      <div className="item-content">
        <div className="icon-title-tor">
          <a href={props.user.url} target="_blank" rel="noopener noreferrer">
            {props.user.subType
              ? icons[props.user.subType]
              : icons[props.user.type]}
            {props.user.name}
          </a>

          {props.user.onionUrl !== undefined && (
            <a
              href={props.user.onionUrl}
              className="onionIcon"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 1000 500">
                <use href={iconSprite + "#onion"} />
              </svg>
            </a>
          )}
        </div>
        <p>{props.user.description}</p>
        <div className="separator" />
        <div className="social-media-icons">
          {props.user.twitter ? (
            <a
              className="social-media-icon"
              href={`https://twitter.com/${formattedTwitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icons["twitter"]}
            </a>
          ) : (
            ""
          )}
          {props.user.github ? (
            <a
              className="social-media-icon"
              href={props.user.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icons["github"]}
            </a>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default DirectoryItem;
