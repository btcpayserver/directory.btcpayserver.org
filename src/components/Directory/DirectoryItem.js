import React from "react";
import "./Directory.scss";
import { icons } from "./Icons";

function DirectoryItem(props) {
  const formattedTwitter = props.user.twitter ? props.user.twitter.slice(1) : '';
  const formattedInstagram = props.user.instagram ? props.user.instagram.slice(1) : '';
  return (
    <div className="item">
      <div className="item-content">
        <a href={props.user.url} target="_blank" rel="noopener noreferrer">
          {props.user.subType
            ? icons[props.user.subType]
            : icons[props.user.type]}
          {props.user.name}
        </a>
        <p>{props.user.description}</p>
        <div className="separator" />
        <div className='social-media-icons'>
          {
            (props.user.twitter)
              ? <a className='social-media-icon' href={`https://twitter.com/${formattedTwitter}`} target="_blank" rel="noopener noreferrer">
                {icons['twitter']}
              </a>
              : ''
          }
          {
            (props.user.instagram)
              ? <a className='social-media-icon' href={`https://instagram.com/${formattedInstagram}`} target="_blank" rel="noopener noreferrer">
                {icons['instagram']}
              </a>
              : ''
          }
          {
            (props.user.github)
              ? <a className='social-media-icon' href={props.user.github} target="_blank" rel="noopener noreferrer">
                {icons['github']}
              </a>
              : ''
          }
          </div>
      </div>
    </div>
  );
}

export default DirectoryItem;
