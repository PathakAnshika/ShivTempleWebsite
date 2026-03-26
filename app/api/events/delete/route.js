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

      // 🔥 IMPORTANT LINE
      fetchEvents();

      setNewEvent({ name: "", date: "", location: "" });
    }

  } catch (err) {
    console.error("Error:", err);
  }
};