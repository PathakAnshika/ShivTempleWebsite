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
} from "lucide-react";

export default function AdminLayout({ children }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const navItems = [
    { label: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Users", path: "/admin/users", icon: Users },
    { label: "Donations", path: "/admin/donations", icon: HandCoins },
    { label: "Events", path: "/admin/events", icon: CalendarDays },
    { label: "Notifications", path: "/admin/notifications", icon: Bell },
    { label: "Settings", path: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex bg-gray-50">

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`${
          open ? "w-64" : "w-20"
        } bg-white border-r transition-all duration-300 flex flex-col`}
      >
        {/* Logo / Toggle */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          {open && (
            <h1 className="text-lg font-bold text-purple-700">
              🛕 Mandir Admin
            </h1>
          )}
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md hover:bg-purple-100 text-purple-700"
          >
            ☰
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.path}
                onClick={() => router.push(item.path)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg 
                text-gray-700 hover:bg-purple-100 hover:text-purple-700 transition`}
              >
                <Icon
                  size={22}
                  className={`${
                    open ? "text-purple-600" : "text-purple-700"
                  }`}
                />
                {open && <span className="font-medium">{item.label}</span>}
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="px-2 py-4 border-t">
          <button
            onClick={() => {
              localStorage.removeItem("user");
              router.replace("/login");
            }}
            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg 
            text-red-600 hover:bg-red-100 transition"
          >
            <LogOut size={22} />
            {open && <span className="font-medium">Logout</span>}
          </button>
        </div>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
