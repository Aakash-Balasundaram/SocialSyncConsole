import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage({ user }) {
  const navigate = useNavigate();
  const storedUser = user || JSON.parse(sessionStorage.getItem('user'));
  const [preview, setPreview] = useState(
    storedUser?.profilePic || `https://i.pravatar.cc/150?u=${storedUser?.id}`
  );

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('profilePic', file);
        formData.append('userId', storedUser.id);

        const response = await fetch('http://localhost:5000/api/profile/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();
        if (response.ok) {
          setPreview(data.url);
          const updatedUser = { ...storedUser, profilePic: data.url };
          sessionStorage.setItem('user', JSON.stringify(updatedUser));
          alert('Profile picture updated!');
        } else {
          alert(data.msg || 'Failed to upload');
        }
      } catch (err) {
        console.error(err);
        alert('Error uploading image');
      }
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };

  if (!storedUser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-cyan-200">
        <p className="mb-4">No user data found. Please login again.</p>
        <button
          onClick={() => navigate('/login')}
          className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition"
        >
          Go to Login
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{ background: 'linear-gradient(to right, #0f172a, #020617)' }}
    >
      <div className="relative w-full max-w-sm p-8 rounded-3xl border border-cyan-400 shadow-xl flex flex-col items-center gap-4 bg-transparent overflow-hidden">
        {/* Transparent dark background layer with blur */}
        <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-lg rounded-3xl z-0" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col items-center gap-4 w-full">
          <div className="relative">
            <img
              src={preview}
              alt="Profile"
              className="rounded-full w-32 h-32 object-cover border-4 border-cyan-400 shadow-lg transition-transform duration-200 hover:scale-105"
            />
            <label className="absolute bottom-0 right-0 bg-cyan-600 hover:bg-cyan-700 text-white rounded-full p-1 cursor-pointer shadow-md">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              ✏️
            </label>
          </div>

          <h2 className="text-2xl font-semibold text-cyan-100">{storedUser.name}</h2>
          <p className="text-cyan-300">{storedUser.email}</p>
          <p className="text-cyan-300">{storedUser.phone}</p>

          <button
            onClick={handleLogout}
            className="mt-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 transition transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
