import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import Logo from "assets/images/logo-main.webp";
import {
  HomeIcon,
  CourseIcon,
  TutorsIcon,
  StudentsIcon,
  TransactionsIcon,
  CouponIcon,
  PermissionIcon,
  SettingsIcon,
  LogoutIcon,
} from "constants/sidebar_icons";

const menuItems = [
  { icon: <HomeIcon size={24} />, label: "Overview", to: "/dashboard" },
  { icon: <TutorsIcon size={24} />, label: "Tutors", to: "/tutors" },
  { icon: <StudentsIcon size={24} />, label: "Students", to: "/students" },
  { icon: <CourseIcon size={24} />, label: "Courses", to: "/courses" },
  {
    icon: <TransactionsIcon size={22} />,
    label: "Transactions",
    to: "/transactions",
  },
  {
    icon: <CouponIcon size={24} />,
    label: "Coupon Management",
    to: "/coupon-management",
  },
  {
    icon: <PermissionIcon size={24} />,
    label: "Admins & Permissions",
    to: "/admin-permissions",
  },
];

const bottomItems = [
  { icon: <SettingsIcon size={22} />, label: "My Settings", to: "/settings" },
  { icon: <LogoutIcon size={22} />, label: "Log Out", to: "/auth/login" },
];

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      {/* Overlay for Mobile */}
      {!isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 md:hidden"
          onClick={toggle}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={clsx(
          "fixed md:static z-30 flex flex-col justify-between bg-white border-r border-neutral_stroke_2 h-full transition-all duration-300 ease-in-out",
          isOpen ? "w-[15%] min-w-[15rem]" : "w-[5.5rem]"
        )}
      >
        {/* Top */}
        <div>
          <div className="flex items-center justify-between p-4 relative h-[90px]">
            <img src={Logo} alt="logo" className="w-[3rem]" />
            <button
              onClick={toggle}
              className="hidden md:flex items-center justify-center bg-light_brand_primary rounded-md p-1 text-brand_secondary absolute right-[-24px] bottom-[10px]"
            >
              <svg
                width="40"
                height="32"
                viewBox="0 0 40 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 8C0 3.58172 3.58172 0 8 0H32C36.4183 0 40 3.58172 40 8V24C40 28.4183 36.4183 32 32 32H8C3.58172 32 0 28.4183 0 24V8Z"
                  fill="#161402"
                />
                <path
                  d="M17.8044 13.1381C18.0648 12.8777 18.0648 12.4556 17.8044 12.1953C17.5441 11.9349 17.122 11.9349 16.8616 12.1953L13.5283 15.5286C13.2679 15.7889 13.2679 16.2111 13.5283 16.4714L16.8616 19.8047C17.122 20.0651 17.5441 20.0651 17.8044 19.8047C18.0648 19.5444 18.0648 19.1223 17.8044 18.8619L14.9425 16L17.8044 13.1381Z"
                  fill="white"
                />
                <path
                  d="M23.1377 12.1953C22.8774 11.9349 22.4553 11.9349 22.1949 12.1953C21.9346 12.4556 21.9346 12.8777 22.1949 13.1381L25.0569 16L22.1949 18.8619C21.9346 19.1223 21.9346 19.5444 22.1949 19.8047C22.4553 20.0651 22.8774 20.0651 23.1377 19.8047L26.4711 16.4714C26.7314 16.2111 26.7314 15.7889 26.4711 15.5286L23.1377 12.1953Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Menu */}
          <nav className="mt-6">
            <ul className="space-y-5 px-[1rem]">
              {menuItems.map((item, index) => {
                const content = (
                  <>
                    <span className="text-brand_secondary basis-[10%] flex justify-center items-center">
                      {item.icon}
                    </span>
                    {isOpen && (
                      <span className={"font-aileron_r text-14 text-brand_secondary"}>
                        {item.label}
                      </span>
                    )}
                  </>
                );

                if (item.to) {
                  return (
                    <li key={index}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          clsx(
                            "flex items-center gap-3 px-4 py-3 hover:bg-light_brand_primary rounded-lg",
                            isActive && "bg-brand_primary"
                          )
                        }
                      >
                        {content}
                      </NavLink>
                    </li>
                  );
                }

                // return (
                //   <li
                //     key={index}
                //     className={clsx(
                //       "flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-light_brand_primary rounded-lg"
                //     )}
                //   >
                //     {content}
                //   </li>
                // );
              })}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mb-4">
          <ul className="space-y-1 px-[1rem]">
            {bottomItems.map((item, index) => {
              const content = (
                <>
                  <span className="text-brand_secondary basis-[10%] flex justify-center items-center">
                    {item.icon}
                  </span>
                  {isOpen && (
                    <span className={"font-aileron_r text-14 text-brand_secondary"}>
                      {item.label}
                    </span>
                  )}
                </>
              );

              if (item.to) {
                return (
                  <li key={index}>
                    <NavLink
                      to={item.to}
                      className={({ isActive }) =>
                        clsx(
                          "flex items-center gap-3 px-4 py-3 hover:bg-light_brand_primary rounded-lg",
                          isActive && "bg-brand_primary"
                        )
                      }
                    >
                      {content}
                    </NavLink>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
