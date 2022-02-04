import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

// components
import AddPost from "./components/AddPost";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

// pages
import Home from "./Pages/Home";
import PostList from "./Pages/PostList";
import Setting from "./Pages/Setting";
import Logout from "./Pages/Logout";
import Blog from "./Pages/Blog";
import JobManagement from "./Pages/JobManagement";
import AddJob from "./components/JobManagement";
// import Login from "./Pages/Login";

export default function Dashborad() {
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
    };
    return (
        <React.Fragment>
            {/* <Login /> */}
            <div id="dashborad">
                <Sidebar menuCollapse={menuCollapse} menuIconClick={menuIconClick} />
                <div className={menuCollapse ? "right_section active" : 'right_section'}>
                    <div className="right-tab">
                        <Header />
                        <Container>
                            <Switch>
                                <Route exact path="/dashboard/home" component={Home} />
                                <Route exact path="/dashboard/post-list" component={PostList} />
                                <Route path="/dashboard/add-post" component={AddPost} />
                                <Route path="/dashboard/add-post/:id" component={AddPost} />
                                <Route path="/dashboard/setting" component={Setting} />
                                <Route path="/dashboard/blog" component={Blog} />
                                <Route path="/dashboard/logout" component={Logout} />
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



