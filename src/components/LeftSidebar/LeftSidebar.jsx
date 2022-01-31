import React, { useState } from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { FaBars, FaList, FaRegHeart, FaTimes } from "react-icons/fa";
import { FiHome, FiLogOut } from "react-icons/fi";
import { RiPencilLine } from "react-icons/ri";
import { BiCog } from "react-icons/bi";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, NavLink } from "react-router-dom";

const LeftSidebar = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="leftsidebar">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <Link to="/">{menuCollapse ? "LS" : "Letxsoft"}</Link>
              <div className="closemenu" onClick={menuIconClick}>
                {menuCollapse ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <NavLink activeClassName="active" to="/dashboard/home">
                <MenuItem active={true} icon={<FiHome />}>
                  Home
                </MenuItem>
              </NavLink>
              <NavLink activeClassName="active" to="/dashboard/home">
                <MenuItem icon={<FaList />}>Category</MenuItem>
              </NavLink>
              <NavLink activeClassName="active" to="/dashboard/home">
                <MenuItem icon={<FaRegHeart />}>Favourite</MenuItem>
              </NavLink>
              <NavLink activeClassName="active" to="/dashboard/home">
                <MenuItem icon={<RiPencilLine />}>Author</MenuItem>
              </NavLink>
              <NavLink activeClassName="active" to="/dashboard/home">
                <MenuItem icon={<BiCog />}>Settings</MenuItem>
              </NavLink>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <NavLink activeClassName="active" to="/dashboard/logout">
                <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
              </NavLink>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default LeftSidebar;
