import React, { useState, useRef } from "react";
import { CloseCircleOutlined, MenuOutlined } from "@ant-design/icons";
import { Layout, Breadcrumb } from "antd";
import { SidebarMenu } from "../menu/index";
import {
  useClickOutside,
  useClickInside,
  useOnHoverOutside,
  useOnHoverInside,
} from "../../service/hook/customHooks";
import { Link } from "react-router-dom";
import Navbar from "../TunTun/Navbar";

const { Header, Sider, Content } = Layout;

const SidebarLayout = ({ children, breadcrumbList, title }) => {
  const [collapsed, setCollapsed] = useState(true);
  const mobileRef = useRef();
  const desktopRef = useRef();
  useClickOutside(mobileRef, () => setCollapsed(true));
  // useClickInside(ref, () => setCollapsed(true));
  useOnHoverOutside(desktopRef, () => setCollapsed(false));
  useOnHoverInside(desktopRef, () => setCollapsed(true));
  return (
    <Layout>
      {/* <Header className="flex fixed top-0 left-0 z-10 w-screen bg-primary justify-between h-12 px-2 md:px-5">
        <div className="flex items-center justify-center gap-2">
          <Link to="/" className="inline text-white text-xl font-bold">
            {" "}
            {process.env.REACT_APP_NAME}
          </Link>
        </div>
      </Header> */}
      <Navbar
        SidebarToggle={
          <button
            className="block md:hidden text-lg font-bold text-primary"
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? <MenuOutlined /> : <CloseCircleOutlined />}
          </button>
        }
        className={
          "flex w-full justify-between items-center h-20 px-4 fixed z-10 text-white align-center bg-white/[0.8] shadow-lg"
        }
      />
      {/* Mobile */}
      <Layout hasSider>
        {/* <Content className="absolute z-0 pt-16 md:pt-28 w-full min-h-screen px-5 md:px-36"> */}
        <Content className="absolute top-0 left-0 z-0 pt-24 md:pt-28 w-full min-h-screen px-5 md:px-32 bg-white">
          <Sider
            trigger={null}
            theme="light"
            breakpoint="lg"
            collapsedWidth="0"
            collapsed={collapsed}
            className="block md:hidden fixed z-10 left-0 top-0 bottom-0 pt-20 max-h-full h-full overflow-x-hidden overflow-y-auto w-screen drop-shadow-xl bg-white"
            ref={mobileRef}
          >
            <SidebarMenu />
          </Sider>
          {/* Desktop */}
          <Sider
            width={280}
            trigger={null}
            theme="light"
            collapsible
            collapsed={collapsed}
            className="hidden md:block fixed z-10 left-0 top-0 bottom-0 pt-20 max-h-full h-full overflow-x-hidden overflow-y-auto drop-shadow-xl bg-white"
            ref={desktopRef}
          >
            <SidebarMenu />
          </Sider>
          <div className="p-5 rounded-lg h-full w-full bg-gray-100">
            {/* <Breadcrumb items={breadcrumbList} /> */}
            <h1 className="text-xl font-bold mb-2 text-primary">{title}</h1>
            <div className="inline-block w-full">{children}</div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

const FullpageLayout = ({ children }) => {
  return (
    <Layout hasSider>
      {/* <Header className="flex absolute top-0 left-0 z-20 w-screen bg-primary justify-between h-12 px-2">
        <div className="flex items-center justify-center gap-2">
           <button className="block md:hidden text-lg text-white font-bold" onClick={()=>setCollapsed(!collapsed)}>
            {collapsed ? <MenuOutlined /> : <CloseCircleOutlined />}
          </button> 
          <Link to="/" className="inline text-white text-xl font-bold">
            {" "}
            {process.env.REACT_APP_NAME}
          </Link>
        </div>
      </Header> */}
      <Navbar
      // SidebarToggle={
      //   <button
      //     className="block md:hidden text-lg text-white font-bold"
      //     onClick={() => setCollapsed(!collapsed)}
      //   >
      //     {collapsed ? <MenuOutlined /> : <CloseCircleOutlined />}
      //   </button>
      // }
      />
      <Content className="grid absolute z-0 pt-16 md:pt-20 w-full min-h-screen px-5 md:px-32 bg-gray-300">
        {children}
      </Content>
    </Layout>
  );
};

export { SidebarLayout, FullpageLayout };
