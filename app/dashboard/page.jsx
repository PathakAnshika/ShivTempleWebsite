"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("home");
 const [sidebarOpen, setSidebarOpen] = useState(false);

  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [stats, setStats] = useState(null);

  // 🌙 Preferences (Dark mode + Notifications)
  const [preferences, setPreferences] = useState({
    darkMode: false,
    notifications: true,
  });

  /* -----------------------------------------
      🌙 APPLY DARK MODE ON LOAD OR CHANGE
  ------------------------------------------- */
  useEffect(() => {
    if (preferences.darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [preferences.darkMode]);

  /* -----------------------------------------
      ✅ STEP 1: CHECK USER + FETCH DATA
  ------------------------------------------- */
  useEffect(() => {
  const stored = localStorage.getItem("user");

  if (!stored) {
    router.replace("/DevoteeCorner/login");
    return;
  }

  let parsedUser = null;

  try {
    parsedUser = JSON.parse(stored);
  } catch (err) {
    localStorage.removeItem("user");
    router.replace("/DevoteeCorner/login");
    return;
  }

  // 🔴 BASIC VALIDATION
  if (!parsedUser?.email || !parsedUser?.role) {
    localStorage.removeItem("user");
    router.replace("/DevoteeCorner/login");
    return;
  }

  // 🟣 ROLE BASED REDIRECTION
  if (parsedUser.role === "admin") {
    router.replace("/admin/dashboard");
    return;
  }

  if (parsedUser.role === "user") {
    fetchUserData(parsedUser.email);
    return;
  }

  // ❌ UNKNOWN ROLE
  localStorage.removeItem("user");
  router.replace("/DevoteeCorner/login");

}, []);


  /* -----------------------------------------
      ✅ STEP 2: Fetch User from API
  ------------------------------------------- */
  const fetchUserData = async (email) => {
    try {
      const res = await fetch("/api/getUserData", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!data.user) {
        router.replace("/DevoteeCorner/login");
        return;
      }

      setUserData(data.user);
    } catch (error) {
      console.error("Fetch failed:", error);
      router.replace("/DevoteeCorner/login");
    } finally {
      setLoading(false);
    }
  };

  /* -----------------------------------------
      🔓 Logout
  ------------------------------------------- */
  const handleLogout = () => {
    localStorage.removeItem("user");
    router.replace("/DevoteeCorner/login");
  };

  /* -----------------------------------------
      ⏳ Loading screen
  ------------------------------------------- */
  if (loading) {
    return (
      <p className="text-center mt-10 text-purple-700 font-medium animate-pulse">
        Loading your dashboard...
      </p>
    );
  }


  /* -----------------------------------------
      MAIN UI
  ------------------------------------------- */

  return (
    <div className="min-h-screen flex bg-purple-50 relative">

      {/* 🔙 Back Button */}
      <button
  onClick={() => router.push("/")}
  className="
    fixed top-4 right-4
    bg-white/80 backdrop-blur-md
    text-purple-700 font-semibold
    px-5 py-2 rounded-full
    shadow-md hover:bg-purple-100
    transition
    z-30
  "
>
  ⬅️ Back
</button>

      {/* Sidebar */}
      <div
  className={`
    fixed top-0 left-0 h-screen
    ${sidebarOpen ? "w-64" : "w-20"}
    bg-purple-700 text-white
   flex flex-col p-4 space-y-3 items-center

   transition-[width] duration-300
    z-40
  `}
>

        <div className="flex items-center justify-between mb-4">
          {sidebarOpen && <h2 className="text-2xl font-bold">🙏 Devotee</h2>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-white hover:bg-purple-600 p-2 rounded-lg"
          >
            <Menu size={22} />
          </button>
        </div>

        {[
          { key: "home", icon: "🏠", label: "Home" },
          { key: "profile", icon: "📿", label: "My Profile" },
          { key: "membership", icon: "💳", label: "My Membership" },
          { key: "offerings", icon: "🎁", label: "Offerings" },
          { key: "notifications", icon: "🔔", label: "Notifications" },
          { key: "settings", icon: "⚙️", label: "Settings" },
        ].map((item) => (
         <button
  key={item.key}
  onClick={() => setActiveTab(item.key)}
  className={`
    w-12 h-12
    flex items-center justify-center
    rounded-xl
    transition-colors duration-200
    ${
      activeTab === item.key
        ? "bg-purple-500"
        : "hover:bg-purple-600"
    }
  `}
>
  <span className="text-lg">{item.icon}</span>
</button>






        ))}

        <button
          onClick={handleLogout}
          className="mt-auto px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
        >
          🚪 {sidebarOpen && <span className="ml-2">Logout</span>}
        </button>
      </div>

      {/* Main Content */}
     <div
  className={`
    flex-1 p-6 sm:p-10 overflow-y-auto
    transition-all duration-300
    ${sidebarOpen ? "ml-64" : "ml-20"}
  `}
>

       {activeTab === "home" && <HomePage user={userData} stats={stats} />}

        {activeTab === "profile" && <ProfilePage user={userData} />}
        {activeTab === "membership" && (
          <MembershipCard user={userData} setUser={setUserData} />
        )}
        {activeTab === "offerings" && <OfferingsPage />}
        {activeTab === "notifications" && <NotificationsPage />}
       {activeTab === "settings" && 
  <SettingsPage 
    user={userData} 
    preferences={preferences}
    setPreferences={setPreferences}
  />
}

      </div>
    </div>
  );
}

/* -----------------------------------------
      HOME PAGE
------------------------------------------- */
/* -----------------------------------------
      HOME PAGE (SHIVA THEME UPGRADE)
------------------------------------------- */
/* -----------------------------------------
      HOME PAGE (BEAUTIFUL & AESTHETIC)
------------------------------------------- */
function HomePage({ user, stats }) {
  return (
    <div className="space-y-10">

      {/* Greeting */}
     <div className="mt-14 bg-gradient-to-r from-indigo-300/40 via-indigo-200/40 to-purple-200/40
                border border-white/30 backdrop-blur-xl p-8 rounded-2xl shadow-lg">
  <h1 className="text-3xl font-bold text-indigo-900">
    🕉️ Namaste, {user?.name || "Devotee"}!
  </h1>
</div>


      {/* Dynamic Statistic Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SoftStatCard
          icon="🕯️"
          title="Total Offerings"
          value={`₹${stats?.totalOfferings || 0}`}
          subtitle="Blessings Received"
        />

        <SoftStatCard
          icon="📅"
          title="Upcoming Events"
          value={`${stats?.upcomingEvents?.length || 0}`}
          subtitle="Temple Celebrations"
        />

        <SoftStatCard
          icon="🪔"
          title="Seva Completed"
          value={`${stats?.sevaCompleted || 0}`}
          subtitle="Your Spiritual Journey"
        />
      </div>


      {/* Highlight Festival Event */}
      <div className="bg-white/70 backdrop-blur-xl border border-gray-200/40 
                      rounded-2xl shadow-md p-6 flex items-center gap-6 hover:shadow-xl transition">
        <img
          src="/images/mahadev.jpg"
          className="w-32 h-32 rounded-xl object-cover shadow-lg"
        />
        <div>
          <h3 className="text-xl font-semibold text-indigo-900">✨ Highlight Event</h3>
          <p className="text-gray-600">
            Maha Shivratri – A night of divine energy, meditation & devotion.
          </p>
          <button className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
            View Details
          </button>
        </div>
      </div>


      {/* Small Horizontal Upcoming Events List */}
      <div>
        <h3 className="text-xl font-semibold text-indigo-900 mb-3">🌙 Upcoming Temple Events</h3>

        <div className="flex gap-4 overflow-x-auto pb-3">
          {[
            { title: "Rudra Abhishek", date: "5 Feb 2025", img: "/images/abhishek.jpg" },
            { title: "Shravan Somvar", date: "12 Aug 2025", img: "/images/shivling.jpg" },
            { title: "Har Har Mahadev Night", date: "20 Apr 2025", img: "/images/mahadev2.jpg" }
          ].map((e, i) => (
            <div
              key={i}
              className="min-w-[220px] bg-white/70 border border-gray-200/40 backdrop-blur-md rounded-xl shadow p-4"
            >
              <img src={e.img} className="h-28 w-full rounded-lg object-cover mb-3" />
              <h4 className="font-semibold text-indigo-900">{e.title}</h4>
              <p className="text-sm text-gray-600">{e.date}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


/* -----------------------------------------
      PROFILE PAGE
------------------------------------------- */
function ProfilePage({ user }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [form, setForm] = React.useState({
    name: user?.name || "",
    email: user?.email || "",
  });

  const handleSave = async () => {
    alert("Save API integrate karenge ✨");
    setIsEditing(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      
      {/* CARD */}
      <div className="bg-white rounded-2xl shadow-xl p-8 relative">

        {/* Edit Button */}
        <button
          onClick={() => setIsEditing(true)}
          className="absolute top-4 right-4 bg-purple-100 text-purple-700 px-4 py-1 rounded-lg text-sm font-medium hover:bg-purple-200 transition"
        >
          ✏️ Edit
        </button>

        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
            className="w-28 h-28 rounded-full shadow-md border-4 border-purple-300"
          />

          <h1 className="text-3xl font-bold text-purple-700 mt-4">
            {user?.name}
          </h1>
          <p className="text-gray-600">{user?.email}</p>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 my-6"></div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="p-5 bg-purple-50 rounded-xl border border-purple-100 shadow-sm">
            <p className="text-sm text-purple-600 font-semibold">
              Member Since
            </p>
            <p className="text-lg text-purple-900 mt-1 font-medium">
              {user?.created_at?.split("T")[0]}
            </p>
          </div>

          <div className="p-5 bg-purple-50 rounded-xl border border-purple-100 shadow-sm">
            <p className="text-sm text-purple-600 font-semibold">
              Membership
            </p>
            <p className="text-lg text-purple-900 mt-1 font-medium">
              {user?.is_member ? user?.membership_type : "Not a Member"}
            </p>
          </div>
        </div>

      </div>

      {/* EDIT MODAL */}
      {isEditing && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
            <h2 className="text-xl font-bold text-purple-700 mb-4">
              Edit Profile
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-purple-400"
                placeholder="Full Name"
              />

              <input
                type="email"
                value={form.email}
                disabled
                className="w-full border p-3 rounded-lg bg-gray-100 cursor-not-allowed"
              />

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}



/* -----------------------------------------
      MEMBERSHIP PAGE
------------------------------------------- */
/* -----------------------------------------
      MEMBERSHIP PAGE – PRO VERSION
------------------------------------------- */
/* -----------------------------------------
      MEMBERSHIP PAGE – POPUP VERSION
------------------------------------------- */

/* -----------------------------------------
      MEMBERSHIP PAGE – FIXED POPUP VERSION
------------------------------------------- */

function MembershipCard({ user, setUser }) {
  const [showPopup, setShowPopup] = useState(false);

  /* -------------------------------
      NOT A MEMBER → Show Join Button
  -------------------------------- */
  if (!user?.is_member) {
    return (
      <div className="text-center bg-white rounded-2xl shadow-lg p-10 max-w-lg mx-auto">

        <h2 className="text-3xl font-bold text-purple-700 mb-4">
          💳 Become a Temple Member
        </h2>

        <p className="text-gray-600 mb-6">
          Join our spiritual community & gain exclusive blessings and privileges.
        </p>

        {/* Join Button */}
        <button
          onClick={() => setShowPopup(true)}
          className="bg-purple-600 text-white px-6 py-3 rounded-xl text-lg font-semibold shadow-md hover:bg-purple-700 transition"
        >
          Join Membership
        </button>

        {/* Popup */}
        {showPopup && (
          <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]"
          >
            <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-2xl relative animate-fadeIn">

              {/* Close Button */}
              <button
                onClick={() => setShowPopup(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
              >
                ✕
              </button>

              <h3 className="text-2xl font-bold text-purple-700 mb-4">
                Complete Membership
              </h3>

              {/* FORM */}
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  const formData = new FormData(e.target);

                 const payload = {
  user_id: user.id,        // ⭐ ADD THIS
  full_name: formData.get("full_name"),
  email: user.email,
  phone: formData.get("phone"),
  membership_type: formData.get("membership_type"),
};


                  try {
                    const res = await fetch("/api/membership", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify(payload),
                    });

                    const data = await res.json();

                    if (data.success) {
                      alert("🎉 Membership Registered Successfully!");
                      setUser({
                        ...user,
                        is_member: true,
                        membership_type: payload.membership_type,
                        membership_date: new Date().toISOString(),
                      });
                      setShowPopup(false);
                    } else {
                      alert(data.message);
                    }
                  } catch (err) {
                    console.error(err);
                    alert("Something went wrong");
                  }
                }}
                className="space-y-4"
              >
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
                />

                <select
                  name="membership_type"
                  required
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-400"
                >
                  <option value="">Select Membership Type</option>
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="Lifetime">Lifetime</option>
                </select>

                {/* BUTTON — FIXED */}
                <button
                  type="submit"
                  className="bg-purple-600 text-white w-full py-3 rounded-xl font-semibold hover:bg-purple-700 transition"
                >
                  Confirm Membership 🙏
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }

  /* -----------------------------------------
      USER IS ALREADY MEMBER
  ------------------------------------------- */
  return (
    <div className="space-y-8 max-w-xl mx-auto">

      {/* Membership Card */}
      <div className="bg-gradient-to-r from-purple-700 to-purple-500 text-white p-6 rounded-2xl shadow-2xl">
        <h2 className="text-xl font-semibold mb-4">Temple Membership Card</h2>
        <p><strong>Name:</strong> {user?.name}</p>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Membership:</strong> {user?.membership_type}</p>
        <p><strong>Joined:</strong> {user?.membership_date?.split("T")[0]}</p>
      </div>

      {/* Benefits */}
      <div className="bg-white rounded-2xl shadow-md p-6">
        <h3 className="text-xl font-bold text-purple-700 mb-3">✨ Member Benefits</h3>
        <ul className="space-y-2 text-gray-700">
          <li>🔥 Priority entry to temple events</li>
          <li>📿 Access to exclusive seva programs</li>
          <li>🎁 Special festival pass</li>
          <li>🕉 Monthly spiritual newsletters</li>
          <li>💠 Exclusive dashboard features</li>
        </ul>
      </div>
    </div>
  );
}



/* -----------------------------------------
      OTHER PAGES
------------------------------------------- */
function OfferingsPage() {
  const offerings = [
    { title: "🪔 Deepak Seva", amount: "₹501", desc: "Offer diya for divine blessings." },
    { title: "🌸 Phool Seva", amount: "₹251", desc: "Offer fresh flowers to the deity." },
    { title: "🍚 Prasad Seva", amount: "₹1101", desc: "Sponsor Prasad for devotees." },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-700">🎁 Offerings</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offerings.map((o, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition group"
          >
            <h3 className="text-xl font-bold text-purple-700">{o.title}</h3>
            <p className="text-gray-600 mt-1">{o.desc}</p>
            <p className="text-purple-600 font-semibold mt-3 text-lg">{o.amount}</p>

            <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg group-hover:bg-purple-700 transition">
              Offer Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


function NotificationsPage() {
  const [notifs, setNotifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (!stored) return;

    const user = JSON.parse(stored);
    fetchNotifications(user.id);
  }, []);

const fetchNotifications = async (userId) => {
  try {
    const res = await fetch("/api/notifications/get", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: userId }),
    });
      const data = await res.json();

      if (data.success) {
        setNotifs(data.notifications);
      }
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  if (loading) {
    return <p className="text-purple-600 animate-pulse">Loading notifications...</p>;
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-purple-700">
        🔔 Notifications
      </h2>

      {notifs.length === 0 && (
        <p className="text-gray-600">No notifications yet.</p>
      )}

      {notifs.map((n) => (
        <div
          key={n.id}
          className="bg-white border-l-4 border-purple-500 p-5 rounded-xl shadow"
        >
          <h3 className="text-lg font-semibold text-purple-700">
            {n.title}
          </h3>

          <p className="text-gray-700 mt-1">
            {n.message}
          </p>

          <p className="text-xs text-gray-400 mt-2">
            {new Date(n.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

function SettingsPage({ user, preferences, setPreferences, darkMode, setDarkMode }) {

  /* ---------------- EDIT PROFILE ---------------- */
  const [editOpen, setEditOpen] = React.useState(false);
  const [editForm, setEditForm] = React.useState({
    name: user?.name,
    phone: user?.phone || "",
  });

  const saveProfile = () => {
    alert("Profile Updated Successfully!");
    setEditOpen(false);
  };

  /* ---------------- CHANGE PASSWORD ---------------- */
  const [passOpen, setPassOpen] = React.useState(false);
  const [passwordForm, setPasswordForm] = React.useState({
    oldPass: "",
    newPass: "",
  });

  const changePassword = () => {
    alert("Password Changed Successfully!");
    setPassOpen(false);
  };

  /* ---------------- DELETE ACCOUNT ---------------- */
  const [deleteOpen, setDeleteOpen] = React.useState(false);

  const deleteAccount = () => {
    alert("Your account has been deleted!");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <div className="max-w-3xl mx-auto space-y-10">

      <h2 className="text-3xl font-bold text-purple-700">⚙️ Settings</h2>

      {/* ===========================================
          1️⃣ Preferences
      ============================================ */}
      <div className="bg-white dark:bg-purple-900/40 p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-100 mb-4">
          🛠 Preferences
        </h3>

        {/* Dark Mode */}
        <div className="flex items-center justify-between py-2">
          <span className="text-gray-700 dark:text-gray-200">Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="w-6 h-6"
          />
        </div>

        {/* Notifications */}
        <div className="flex items-center justify-between py-2">
          <span className="text-gray-700 dark:text-gray-200">Notifications</span>
          <input
            type="checkbox"
            checked={preferences.notifications}
            onChange={(e) =>
              setPreferences({ ...preferences, notifications: e.target.checked })
            }
            className="w-6 h-6"
          />
        </div>
      </div>

      {/* ===========================================
          2️⃣ Personal Info
      ============================================ */}
      <div className="bg-white dark:bg-purple-900/40 p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-200 mb-3">
          👤 Personal Info
        </h3>

        <p className="text-gray-700 dark:text-gray-200"><strong>Name:</strong> {user?.name}</p>
        <p className="text-gray-700 dark:text-gray-200"><strong>Email:</strong> {user?.email}</p>

        <button
          onClick={() => setEditOpen(true)}
          className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Edit Profile
        </button>
      </div>

      {/* ===========================================
          3️⃣ Security
      ============================================ */}
      <div className="bg-white dark:bg-purple-900/40 p-6 rounded-2xl shadow-md">
        <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-200 mb-3">
          🔐 Security
        </h3>

        <button
          onClick={() => setPassOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Change Password
        </button>
      </div>

      {/* ===========================================
          4️⃣ Delete Account
      ============================================ */}
      <div className="bg-white dark:bg-purple-900/40 p-6 rounded-2xl shadow-md border border-red-300">
        <h3 className="text-xl font-semibold text-red-600 mb-3">⚠️ Danger Zone</h3>

        <button
          onClick={() => setDeleteOpen(true)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
        >
          Delete Account
        </button>
      </div>

      {/* ===========================================
         MODALS
      ============================================ */}

      {/* Edit Profile Modal */}
      {editOpen && (
        <Modal title="Edit Profile" onClose={() => setEditOpen(false)}>
          <input
            type="text"
            value={editForm.name}
            onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
            className="w-full border p-2 rounded mb-3"
          />
          <input
            type="text"
            value={editForm.phone}
            onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
            className="w-full border p-2 rounded mb-4"
          />
          <button
            onClick={saveProfile}
            className="bg-purple-600 text-white w-full py-2 rounded"
          >
            Save Changes
          </button>
        </Modal>
      )}

      {/* Change Password Modal */}
      {passOpen && (
        <Modal title="Change Password" onClose={() => setPassOpen(false)}>
          <input
            type="password"
            placeholder="Old Password"
            value={passwordForm.oldPass}
            onChange={(e) => setPasswordForm({ ...passwordForm, oldPass: e.target.value })}
            className="w-full border p-2 rounded mb-3"
          />

          <input
            type="password"
            placeholder="New Password"
            value={passwordForm.newPass}
            onChange={(e) => setPasswordForm({ ...passwordForm, newPass: e.target.value })}
            className="w-full border p-2 rounded mb-4"
          />

          <button
            onClick={changePassword}
            className="bg-purple-600 text-white w-full py-2 rounded"
          >
            Update Password
          </button>
        </Modal>
      )}

      {/* Delete Account Modal */}
      {deleteOpen && (
        <Modal title="Delete Account" onClose={() => setDeleteOpen(false)}>
          <p className="text-red-600 mb-4">
            Your account will be permanently deleted. Are you sure?
          </p>

          <button
            onClick={deleteAccount}
            className="bg-red-600 text-white w-full py-2 rounded"
          >
            Yes, Delete My Account
          </button>
        </Modal>
      )}

    </div>
  );
}

/* ---------- Modal Component ---------- */
function Modal({ title, children, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur flex items-center justify-center z-50">
      <div className="bg-white dark:bg-purple-800 p-6 rounded-xl max-w-md w-full shadow-xl">
        <h2 className="text-xl font-bold text-purple-700 dark:text-purple-100 mb-4">
          {title}
        </h2>

        {children}

        <button
          onClick={onClose}
          className="mt-4 w-full text-purple-600 hover:underline"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}




const Card = ({ title, value, subtitle }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg text-center">
    <h3 className="text-xl font-semibold text-purple-700">{title}</h3>
    <p className="text-4xl font-bold mt-2">{value}</p>
    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
  </div>
);

const SoftStatCard = ({ icon, title, value, subtitle }) => (
  <div className="bg-white/70 backdrop-blur-xl border border-gray-300/40 
                  p-6 rounded-2xl shadow hover:shadow-lg transition">
    <div className="text-3xl">{icon}</div>
    <h3 className="text-xl font-semibold text-indigo-900 mt-2">{title}</h3>
    <p className="text-3xl font-bold mt-1 text-indigo-700">{value}</p>
    <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
  </div>
);

const fetchHomeStats = async (user_id) => {
  try {
    const res = await fetch("/api/home-stats", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id }),
    });

    const data = await res.json();

    if (data.success) {
      setStats(data.data);
    }
  } catch (err) {
    console.error("Home stats error:", err);
  }
};


<style jsx>{`
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}
.switch input { display: none; }
.slider {
  position: absolute;
  cursor: pointer;
  background-color: #ccc;
  border-radius: 34px;
  inset: 0;
  transition: 0.4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  border-radius: 50%;
  transition: 0.4s;
}
input:checked + .slider {
  background-color: #6d28d9;
}
input:checked + .slider:before {
  transform: translateX(24px);
}
`}</style>
