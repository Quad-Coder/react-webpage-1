import React from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoIcons.IoMdPerson />,
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    icon: <AiIcons.AiOutlineFundProjectionScreen />,
    cName: "nav-text",
  },
  {
    title: "Photography",
    path: "/photography",
    icon: <AiIcons.AiFillCamera />,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <IoIcons.IoMdPhonePortrait />,
    cName: "nav-text",
  },
];
