import { useNavigate } from 'react-router-dom';

export default function ProfilePage({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <img 
        src={user.profilePic || `https://i.pravatar.cc/150?u=${user.id}`}
        alt="Profile"
        className="rounded-full w-24 h-24 object-cover border-2 border-cyan-400 shadow-md"
      />
      <h2 className="text-xl text-cyan-100">{user.name}</h2>
      <p className="text-cyan-300">{user.email}</p>
      <p className="text-cyan-300">{user.phone}</p>

      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}
