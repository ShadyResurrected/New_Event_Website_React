import React, { useContext } from "react";
import "../Stats/stats.css";

import Sidebar from "../Stats/Sidebar/Sidebar";
import MainDash from "../Stats/MainDash/MainDash";
import RightSide from "../Stats/RightSide/RightSide";

import Profile from "../ProfilePic/Profile";
import { UserContext } from "../../Context/UserContext";

const Stats = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="welcome-area">
      <div className="AppGlass">
        <Sidebar />
        <MainDash />
        <RightSide />
        {user?._id ? <Profile /> : ""}
      </div>
    </div>
  );
};

export default Stats;
