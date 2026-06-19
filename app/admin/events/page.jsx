"use client";

import { useState, useEffect } from "react";

export default function AdminEvents() {
  const [events, setEvents] = useState([]);

  const [newEvent, setNewEvent] = useState({
    name: "",
    date: "",
    location: "",
  });

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

  const handleAdd = async () => {
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

      if (data.success) {
        alert("Event Added ✅");
        fetchEvents();

        setNewEvent({
          name: "",
          date: "",
          location: "",
        });
      }
    } catch (err) {
      console.error(err);
    }
  };

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

  return (
    <div className="space-y-6 md:space-y-8 px-4 md:px-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
          📅 Manage Events
        </h1>

        <p className="text-sm md:text-base text-gray-600 mt-1">
          Create and manage temple events
        </p>
      </div>

      {/* Add Event Form */}
      <div
        className="
          bg-white
          p-4 md:p-6
          rounded-2xl
          shadow-lg
          grid
          grid-cols-1
          md:grid-cols-4
          gap-4
        "
      >
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              name: e.target.value,
            })
          }
          className="
            w-full
            border border-gray-300
            px-4 py-3
            rounded-xl
            text-sm md:text-base
            focus:outline-none
            focus:ring-2
            focus:ring-purple-500
          "
        />

        <input
          type="date"
          value={newEvent.date}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              date: e.target.value,
            })
          }
          className="
            w-full
            border border-gray-300
            px-4 py-3
            rounded-xl
            text-sm md:text-base
            focus:outline-none
            focus:ring-2
            focus:ring-purple-500
          "
        />

        <input
          type="text"
          placeholder="Location"
          value={newEvent.location}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              location: e.target.value,
            })
          }
          className="
            w-full
            border border-gray-300
            px-4 py-3
            rounded-xl
            text-sm md:text-base
            focus:outline-none
            focus:ring-2
            focus:ring-purple-500
          "
        />

        <button
          onClick={handleAdd}
          className="
            bg-gradient-to-r
            from-purple-600
            to-fuchsia-600
            text-white
            font-semibold
            px-6 py-3
            rounded-xl
            hover:scale-[1.02]
            transition
            text-sm md:text-base
          "
        >
          + Add Event
        </button>
      </div>

      {/* Events List */}
      {events.length === 0 ? (
        <div className="bg-white rounded-xl p-8 text-center shadow">
          <p className="text-gray-500">
            No events found
          </p>
        </div>
      ) : (
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            xl:grid-cols-3
            gap-4 md:gap-6
          "
        >
          {events.map((e) => (
            <div
              key={e.id}
              className="
                bg-white
                p-5 md:p-6
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition
                border border-gray-100
              "
            >
              <h2 className="text-lg md:text-xl font-semibold text-purple-700">
                {e.title}
              </h2>

              <p className="text-sm md:text-base text-gray-600 mt-3">
                📅 {e.date}
              </p>

              <p className="text-sm md:text-base text-gray-600 mt-1">
                📍 {e.location || "Not specified"}
              </p>

              <button
                onClick={() => handleDelete(e.id)}
                className="
                  mt-4
                  text-red-600
                  text-sm md:text-base
                  hover:underline
                "
              >
                Delete Event
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}