import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarContent,
} from "react-pro-sidebar";
import { FaBars, FaTimes, FaGripHorizontal, FaFolderPlus, FaList } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { MdPostAdd } from "react-icons/md";
import "react-pro-sidebar/dist/css/styles.css";
import { Link, NavLink } from "react-router-dom";
import useMediaQuery from '../useMediaQuery'

const Sidebar = (props) => {
  const matche767 = useMediaQuery('(max-width: 991.98px)');
  return (
    <>
      <div id="sidebar">
        <ProSidebar collapsed={matche767 ? !props.menuCollapse : props.menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <Link to="/dashboard/home">{props.menuCollapse ? "LT" : "Letxsoft"}</Link>
              <div className="closemenu" onClick={props.menuIconClick}>
                {props.menuCollapse ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <NavLink activeClassName="active" to="/dashboard/home">
                <MenuItem active={true} icon={<FiHome />}>Home</MenuItem>
                <span className="tooltip"></span>
              </NavLink>

              <NavLink activeClassName="active" to="/dashboard/post-list">
                <MenuItem icon={<MdPostAdd />} >Post</MenuItem>
              </NavLink>
              <NavLink activeClassName="active" to="/dashboard/blog">
                <MenuItem icon={<FaList />} >Category</MenuItem>
              </NavLink>
              <NavLink activeClassName="active" to="/dashboard/job-management">
                <MenuItem icon={<FaFolderPlus />} >Job Management</MenuItem>
              </NavLink>
              <NavLink activeClassName="active" to="/dashboard/setting">
                <MenuItem icon={<FaGripHorizontal />} >Settings</MenuItem>
              </NavLink>

            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
};

export default Sidebar;