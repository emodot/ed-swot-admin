import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  AccountSettingsIcon,
  NotificationIcon,
  CardIcon,
} from "../../constants/sidebar_icons";

const Settings = () => {
  const navItems = [
    {
      path: "/settings/account",
      label: "Account Settings",
      icon: AccountSettingsIcon,
      exact: true,
    },
    {
      path: "/settings/notification",
      label: "Notification Settings",
      icon: NotificationIcon,
    },
    {
      path: "/settings/security",
      label: "Security Settings",
      icon: CardIcon,
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex gap-6">
      {/* Sidebar Navigation */}
      <aside className="w-[280px] flex-shrink-0 sticky top-0 self-start">
        <nav className="bg-white rounded-lg p-4 border border-neutral_stroke_2">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.exact
                ? location.pathname === item.path
                : location.pathname.startsWith(item.path);
              return (
                <li key={item.path}>
                  <a
                    href={item.path}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(item.path);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-aileron_r transition-colors ${
                      isActive
                        ? "bg-[#6D6D6D]"
                        : "text-brand_secondary hover:bg-neutral_disabled"
                    }`}
                  >
                    <Icon currentColor={isActive ? "white" : "black"} />
                    <span
                      className={`text-38 ${
                        isActive ? "text-white" : "text-brand_secondary"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Settings;
