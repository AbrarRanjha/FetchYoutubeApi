import { Icon } from "@material-ui/core";
import React from "react";

import "./SideBarRow.css";

const SideBarRow = ({ Icon, title }) => {
  return (
    <div className="sideBarRow">
      <Icon className="sideBarRowI" />
      <h2 className="sideBarRowT">{title}</h2>
    </div>
  );
};

export default SideBarRow;
