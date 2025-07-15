import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage({ user }) {
  const navigate = useNavigate();

  // Read initial user from sessionStorage if not passed
  const storedUser = user || JSON.parse(sessionStorage.getItem('user'));

  const [preview, setPreview] = useState(storedUser?.profilePic || `https://i.pravatar.cc/150?u=${storedUser?.id}`);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setPreview(newUrl);

      // Update in sessionStorage
      const updatedUser = { ...storedUser, profilePic: newUrl };
      sessionStorage.setItem('user', JSON.stringify(updatedUser));
    }
  };

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '/'; // full reload to clear state
  };

  if (!storedUser) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-cyan-200">
        <p>No user data found. Please login again.</p>
        <button 
          onClick={() => navigate('/login')}
          className="mt-4 px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600"
        >
          Go to Login
        </button>
      </div>
    );
  }

return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <img 
            src={preview}
            alt="Profile"
            className="rounded-full w-24 h-24 object-cover border-2 border-cyan-400 shadow-md"
        />

        {/* Styled upload button */}
        <label className="inline-block px-4 py-2 bg-cyan-600 text-white rounded cursor-pointer hover:bg-cyan-700 transition-colors duration-150">
            Change Photo
            <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />
        </label>

        <h2 className="text-xl text-cyan-100">{storedUser.name}</h2>
        <p className="text-cyan-300">{storedUser.email}</p>
        <p className="text-cyan-300">{storedUser.phone}</p>

        <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
            Logout
        </button>
    </div>
);
}
