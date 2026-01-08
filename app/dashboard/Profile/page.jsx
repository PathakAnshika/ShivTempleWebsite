"use client";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-purple-50 flex flex-col items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">📿 My Profile</h2>

        <div className="space-y-3 text-gray-700">
          <p><strong>Name:</strong> Anshika Pathak</p>
          <p><strong>Email:</strong> anshika@example.com</p>
          <p><strong>Member Since:</strong> Oct 2025</p>
        </div>
      </div>
    </div>
  );
}
