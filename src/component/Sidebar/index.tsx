import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";

const MENU_ITEMS = [
  {
    icon: "",
    title: "Menu",
    url: "",
  },
  {
    icon: AiOutlineHome,
    title: "Dashboard",
    url: "/",
  },
  {
    icon: "",
    title: "Profile",
    url: "",
  },
  {
    icon: MdOutlineLogout,
    title: "Logout",
    url: "/logout",
  },
];

const Sidebar = () => {
  return (
    <div className="w-1/5 flex flex-col top-0 left-0 bg-white min-h-screen border-r">
      <div className="flex items-center justify-start p-4 h-14 border-b font-bold">
        <div>LOGO</div>
      </div>
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        <ul className="flex flex-col space-y-2">
          {MENU_ITEMS.map((item, index) => (
            <>
              {!item.url && !item.icon ? (
                <li className="px-4" key={`i_${index}`}>
                  <div className="flex flex-row items-center h-8">
                    <div className="text-sm tracking-wide text-gray-400">
                      {item.title}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={`i_${index}`}>
                  <NavLink
                    to={item.url}
                    className={({ isActive }) =>
                      `relative flex flex-row items-center px-2 py-3 focus:outline-none text-gray-800 ${
                        isActive
                          ? "bg-primary-100 text-primary-600"
                          : "hover:bg-gray-100 hover:text-gray-900"
                      }`
                    }
                  >
                    <span className="inline-flex justify-center items-center ml-4">
                      <item.icon size={24} />
                    </span>
                    <span className="ml-3 font-medium tracking-wide truncate">
                      {item.title}
                    </span>
                  </NavLink>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
