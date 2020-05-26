import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import NestedList from "./NestedList";

import "./TemporaryDrawer.scss";

const useStyles = makeStyles({
  list: {
    width: 330
  },
  fullList: {
    width: "auto"
  }
});

const subFilterToName = {
  "3d-printing": "3D Printing",
  adult: "Adult",
  "appliances-furniture": "Appliances & Furniture",
  art: "Art",
  books: "Books",
  electronics: "Electronics",
  "cryptocurrency-paraphernalia": "Cryptocurrency Paraphernalia",
  "domains-hosting-vpns": "Domain Names, Hosting & VPNs",
  education: "Education",
  fashion: "Fashion",
  food: "Food",
  gambling: "Gambling",
  "gift-cards": "Gift Cards",
  "health-household": "Health & Household",
  "holiday-travel": "Holiday & Travel",
  jewelry: "Jewelry",
  pets: "Pets",
  services: "Services",
  "software-video-games": "Software & Video Games",
  sports: "Sports",
  streaming: "Streaming",
  tools: "Tools"
};

export default function TemporaryDrawer2(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <NestedList colorMode={props.colorMode}/>
    </div>
  );

  return (
    <div className={`filter-button-container`}>
      <React.Fragment key={"right"}>
        <button className="filter-button" onClick={toggleDrawer("right", true)}>
          {props.subFilterName
            ? `${props.filterName.toUpperCase()}  >  ${subFilterToName[
                props.subFilterName
              ].toUpperCase()}`
            : props.filterName.toUpperCase()}
        </button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
