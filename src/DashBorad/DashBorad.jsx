import React from "react";
import LeftSidebar from "../components/LeftSidebar/LeftSidebar";
import { Switch, Route } from "react-router-dom";
import DHeader from "../components/Header/DHeader";

import Home from "./pages/Home";
import Logout from "./pages/Logout";
export default function Dashborad() {
  return (
    <div id="dashborad">
      <LeftSidebar />
      <div id="right_section">
        <div className="right-tab">
          <DHeader />
          <Switch>
            <Route exact path="/dashboard/home" component={Home} />
            <Route path="/dashboard/logout" component={Logout} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
