import React from "react";
import { NavLink } from "react-router-dom";
import SelectAllIcon from "@material-ui/icons/SelectAll";
import AppsIcon from "@material-ui/icons/Apps";
import StorageIcon from "@material-ui/icons/Storage";
import MoneyOffIcon from "@material-ui/icons/MoneyOff";
import StorefrontIcon from "@material-ui/icons/Storefront";
import PrintIcon from "@material-ui/icons/Print";
import ExplicitIcon from "@material-ui/icons/Explicit";
import DeckIcon from "@material-ui/icons/Deck";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import BookIcon from "@material-ui/icons/Book";
import ComputerIcon from "@material-ui/icons/Computer";
import ToysIcon from "@material-ui/icons/Toys";
import VpnLockIcon from "@material-ui/icons/VpnLock";
import CastForEducationIcon from "@material-ui/icons/CastForEducation";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import CasinoIcon from "@material-ui/icons/Casino";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import HealingIcon from "@material-ui/icons/Healing";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import WatchIcon from "@material-ui/icons/Watch";
import PetsIcon from "@material-ui/icons/Pets";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import SportsIcon from "@material-ui/icons/Sports";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import BuildIcon from "@material-ui/icons/Build";

import "./NestedList.scss";

const merchantSubcategories = [
  {
    name: "3D Printing",
    icon: <PrintIcon className="icon" />,
    url: "3d-printing"
  },
  {
    name: "Adult",
    icon: <ExplicitIcon className="icon" />,
    url: "adult"
  },
  {
    name: "Appliances & Furniture",
    icon: <DeckIcon className="icon" />,
    url: "appliances-furniture"
  },
  {
    name: "Art",
    icon: <ArtTrackIcon className="icon" />,
    url: "art"
  },
  {
    name: "Books",
    icon: <BookIcon className="icon" />,
    url: "books"
  },
  {
    name: "Electronics",
    icon: <ComputerIcon className="icon" />,
    url: "electronics"
  },
  {
    name: "Cryptocurrency Paraphernalia",
    icon: <ToysIcon className="icon" />,
    url: "cryptocurrency-paraphernalia"
  },
  {
    name: "Domain Names, Hosting & VPNs",
    icon: <VpnLockIcon className="icon" />,
    url: "domains-hosting-vpns"
  },
  {
    name: "Education",
    icon: <CastForEducationIcon className="icon" />,
    url: "education"
  },
  {
    name: "Fashion",
    icon: <EmojiPeopleIcon className="icon" />,
    url: "fashion"
  },
  {
    name: "Food",
    icon: <FastfoodIcon className="icon" />,
    url: "food"
  },
  {
    name: "Gambling",
    icon: <CasinoIcon className="icon" />,
    url: "gambling"
  },
  {
    name: "Gift Cards",
    icon: <CardGiftcardIcon className="icon" />,
    url: "gift-cards"
  },
  {
    name: "Health & Household",
    icon: <HealingIcon className="icon" />,
    url: "health-household"
  },
  {
    name: "Holiday & Travel",
    icon: <FlightTakeoffIcon className="icon" />,
    url: "holiday-travel"
  },
  {
    name: "Jewelry",
    icon: <WatchIcon className="icon" />,
    url: "jewelry"
  },
  {
    name: "Pets",
    icon: <PetsIcon className="icon" />,
    url: "pets"
  },
  {
    name: "Services",
    icon: <RoomServiceIcon className="icon" />,
    url: "services"
  },
  {
    name: "Software & Video Games",
    icon: <VideogameAssetIcon className="icon" />,
    url: "software-video-games"
  },
  {
    name: "Sports",
    icon: <SportsIcon className="icon" />,
    url: "sports"
  },
  {
    name: "Streaming",
    icon: <ViewStreamIcon className="icon" />,
    url: "streaming"
  },
  {
    name: "Tools",
    icon: <BuildIcon className="icon" />,
    url: "tools"
  }
];

export default function NestedList(props) {
  return (
    <div className={`drawer-list drawer-list-${props.colorMode}`} >
      <p className="drawer-title">Categories</p>

      <NavLink to="/">
        <div className="list-item">
          <SelectAllIcon className="icon" />
          <p>All</p>
        </div>
      </NavLink>

      <NavLink to="/filter/apps">
        <div className="list-item">
          <AppsIcon className="icon" />
          <p>Apps</p>
        </div>
      </NavLink>

      <NavLink to="/filter/hosts">
        <div className="list-item">
          <StorageIcon className="icon" />
          <p>Hosts</p>
        </div>
      </NavLink>

      <NavLink to="/filter/non-profits">
        <div className="list-item">
          <MoneyOffIcon className="icon" />
          <p>Non-profits</p>
        </div>
      </NavLink>

      <NavLink to="/filter/merchants">
        <div className="list-item">
          <StorefrontIcon className="icon" />
          <p>Merchants</p>
        </div>
      </NavLink>

      {merchantSubcategories.map(subCat => (
        <NavLink key={subCat.name} to={`/filter/merchants/${subCat.url}`}>
          <div className="nested-list-item">
            {subCat.icon}
            <p>{subCat.name}</p>
          </div>
        </NavLink>
      ))}
    </div>
  );
}
