import { Layout, Menu, Avatar, Drawer, Button, Space } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

import { UserOutlined, MenuOutlined } from "@ant-design/icons";

export const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  // If you do not want to auto-close the mobile drawer when a path is selected
  // Delete or comment out the code block below
  // From here
  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);
  // Upto here

  const LeftMenu = ({ mode }) => {
    return (
      <Menu mode={mode}>
        <Menu.Item key="notFound">
          <Link to="/*">Not Found</Link>
        </Menu.Item>
      </Menu>
    );
  };

  const RightMenu = ({ mode }) => {
    return (
      <Menu mode={mode}>
        <Menu.SubMenu
          title={
            <>
              <Avatar icon={<UserOutlined />} />
              <span className="username">Pages</span>
            </>
          }
        >
          <Menu.Item key="notFound">
            <UserOutlined /> <Link to="/*">Not Found</Link>
          </Menu.Item>
        </Menu.SubMenu>
      </Menu>
    );
  };

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <Space>
              <img
                className="brand-font"
                style={{ height: "50px" }}
                src={
                  "https://app-viji.s3.eu-west-2.amazonaws.com/rocket-icon-vector-starter-app.svg"
                }
                alt="logo"
              />
              <Link style={{ marginLeft: "5px" }} to="/">
                Tech for good
              </Link>
            </Space>
          </div>
          <div className="navbar-menu">
            <div className="leftMenu">
              {/* <LeftMenu mode={"horizontal"} /> */}
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}>
              <MenuOutlined />
            </Button>
            <div className="rightMenu">
              {/* <RightMenu mode={"horizontal"} /> */}
            </div>
            <Drawer
              title={"Starter App"}
              placement="right"
              closable={true}
              onClose={showDrawer}
              visible={visible}
              style={{ zIndex: 99999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};
