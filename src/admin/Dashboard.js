import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// components
import AddPost from "./components/AddPost";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// pages
import DashHome from "./Pages/Home";
import PostList from "./Pages/PostList";
import Setting from "./Pages/Setting";
import Logout from "./Pages/Logout";
import DashBlog from "./Pages/Blog";
import JobManagement from "./Pages/JobManagement";
import AddJob from "./components/JobManagement";

export default function Dashboard() {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    return (
        <React.Fragment>
            <div id="dashboard">
                <Sidebar menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
                <div className={menuCollapse ? "right_section active" : 'right_section'}>
                    <div className="right-tab">
                        <Header />
                        <Container>
                            <Switch>
                                <Route path="/dashboard/home" component={DashHome} />
                                <Route path="/dashboard/post-list" component={PostList} />
                                <Route path="/dashboard/add-post" component={AddPost} />
                                <Route path="/dashboard/add-post/:id" component={AddPost} />
                                <Route path="/dashboard/setting" component={Setting} />
                                <Route path="/dashboard/blog" component={DashBlog} />
                                <Route path="/dashboard/job-management" component={JobManagement} />
                                <Route path="/dashboard/add-job" component={AddJob} />
                            </Switch>
                        </Container>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}



