"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  HandCoins,
  CalendarDays,
  Bell,
  Settings,
  LogOut,
  GraduationCap,
  Menu,
  X,
  Search,
  UserCircle2,
} from "lucide-react";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);

  const router = useRouter();

  const navItems = [
    {
      label: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      label: "Users",
      path: "/admin/users",
      icon: Users,
    },
    {
      label: "Donations",
      path: "/admin/donations",
      icon: HandCoins,
    },
    {
      label: "Events",
      path: "/admin/events",
      icon: CalendarDays,
    },
    {
      label: "Notifications",
      path: "/admin/notifications",
      icon: Bell,
    },
    {
      label: "Scholarship",
      path: "/admin/scholarship",
      icon: GraduationCap,
    },
    {
      label: "Settings",
      path: "/admin/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="
            fixed inset-0
            bg-black/40
            z-40
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static
          top-0 left-0
          h-screen
          z-50
          bg-white
          border-r
          shadow-lg lg:shadow-none
          transition-all duration-300

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }

          ${open ? "w-64" : "w-20"}
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-4 py-4 border-b">

          {open && (
            <div>
              <h1 className="text-lg font-bold text-purple-700">
                🛕 Mandir Admin
              </h1>

              <p className="text-xs text-gray-500">
                Management Panel
              </p>
            </div>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="
              hidden lg:flex
              p-2 rounded-md
              hover:bg-purple-100
              text-purple-700
            "
          >
            ☰
          </button>

          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 py-4 space-y-2">

          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.path}
                onClick={() => {
                  router.push(item.path);
                  setMobileOpen(false);
                }}
                className="
                  w-full
                  flex items-center
                  gap-3
                  px-3 py-3
                  rounded-xl
                  text-gray-700
                  hover:bg-purple-100
                  hover:text-purple-700
                  transition
                "
              >
                <Icon
                  size={22}
                  className="text-purple-600"
                />

                {open && (
                  <span className="font-medium">
                    {item.label}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-2 py-4 border-t">
          <button
            onClick={() => {
              localStorage.removeItem("user");
              router.replace("/DevoteeCorner/login");
            }}
            className="
              w-full
              flex items-center
              gap-3
              px-3 py-3
              rounded-xl
              text-red-600
              hover:bg-red-100
              transition
            "
          >
            <LogOut size={22} />

            {open && (
              <span className="font-medium">
                Logout
              </span>
            )}
          </button>
        </div>
      </aside>

      {/* Main Section */}
      <div className="flex-1 flex flex-col min-h-screen">

        {/* Top Navbar */}
        <header
          className="
            bg-white
            border-b
            px-4 md:px-8
            py-4
            flex
            items-center
            justify-between
            sticky top-0
            z-30
          "
        >
          <div className="flex items-center gap-3">

            <button
              onClick={() => setMobileOpen(true)}
              className="
                lg:hidden
                p-2
                rounded-lg
                hover:bg-gray-100
              "
            >
              <Menu size={22} />
            </button>

            <h2 className="font-semibold text-gray-800">
              Admin Dashboard
            </h2>
          </div>

          <div className="flex items-center gap-4">

            <div
              className="
                hidden md:flex
                items-center
                gap-2
                bg-gray-100
                px-3 py-2
                rounded-xl
              "
            >
              <Search size={16} />

              <input
                placeholder="Search..."
                className="
                  bg-transparent
                  outline-none
                  text-sm
                "
              />
            </div>

            <div className="flex items-center gap-2">

              <UserCircle2
                size={34}
                className="text-purple-700"
              />

              <div className="hidden md:block">
                <p className="text-sm font-medium">
                  Admin
                </p>

                <p className="text-xs text-gray-500">
                  Temple Manager
                </p>
              </div>

            </div>
          </div>
        </header>

        {/* Main Content */}
   <main
  className="
    flex-1
    p-4 md:p-8
    overflow-auto
    bg-gradient-to-br
    from-purple-50
    via-white
    to-purple-100
  "
>
          {children}
        </main>
      </div>
    </div>
  );
}