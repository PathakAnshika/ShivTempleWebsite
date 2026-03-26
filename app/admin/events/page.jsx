"use client";
import { useState, useEffect } from "react";

export default function AdminEvents() {

  const [events, setEvents] = useState([]);

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
  });

  /* ---------------- FETCH EVENTS ---------------- */
  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();

      if (data.success) {
        setEvents(data.events);
      }
    } catch (err) {
      console.error(err);
    }
  };

  /* ---------------- ADD EVENT ---------------- */
  const handleAdd = async () => {
    console.log("Button clicked 🔥");

    if (!newEvent.name || !newEvent.date) {
      alert("Fill all fields");
      return;
    }

    try {
      const res = await fetch("/api/admin/events/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newEvent.name,
          date: newEvent.date,
          location: newEvent.location,
        }),
      });

      const data = await res.json();
      console.log("Response:", data);

      if (data.success) {
        alert("Event Added ✅");
        fetchEvents();
        setNewEvent({ name: "", date: "", location: "" });
      }

    } catch (err) {
      console.error("Error:", err);
    }
  };

  /* ---------------- DELETE EVENT ---------------- */
  const handleDelete = async (id) => {
    try {
      const res = await fetch("/api/admin/events/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Event Deleted ❌");
        fetchEvents();
      }

    } catch (err) {
      console.error(err);
    }
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="space-y-8">

      <h1 className="text-3xl font-bold text-purple-700">
        📅 Manage Events
      </h1>

      {/* ADD EVENT */}
      <div className="bg-white p-6 rounded-2xl shadow-lg grid md:grid-cols-4 gap-4">
        
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={(e) =>
            setNewEvent({ ...newEvent, name: e.target.value })
          }
          className="border px-4 py-2 rounded-lg"
        />

        <input
          type="date"
          value={newEvent.date}
          onChange={(e) =>
            setNewEvent({ ...newEvent, date: e.target.value })
          }
          className="border px-4 py-2 rounded-lg"
        />

        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent({ ...newEvent, location: e.target.value })
          }
          className="border px-4 py-2 rounded-lg"
        />

        <button
          onClick={handleAdd}
          className="bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          + Add Event
        </button>
      </div>

      {/* EVENTS LIST */}
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((e) => (
          <div
            key={e.id}
            className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-purple-700">
              {e.title}
            </h2>

            <p className="text-gray-600 mt-2">
              📅 {e.date}
            </p>

            <p className="text-gray-600">
              📍 {e.location}
            </p>

            <button
              onClick={() => handleDelete(e.id)}
              className="mt-4 text-red-600 hover:underline"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}