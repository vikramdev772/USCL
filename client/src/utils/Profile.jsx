import React, { useState, useEffect } from "react";

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Replace this URL with your actual API endpoint
    const apiUrl = "https://jsonplaceholder.typicode.com/users/1";

    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUserData({
          name: data.name,
          role: "Full Stack Developer", // Add roles manually if not present in the API
          email: data.email,
          phone: data.phone,
          location: `${data.address.city}, ${data.address.street}`,
          avatar: `https://ui-avatars.com/api/?name=${data.name}`,
          skills: ["React", "Node.js", "CSS", "JavaScript"],
          recentActivity: [
            { title: "Completed React Basics", time: "1 day ago" },
            { title: "Started Advanced JS", time: "3 days ago" },
          ],
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p className="text-center text-blue-500">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }

  return (
    <div className="bg-slate-900 text-white p-6 rounded-lg max-w-md mx-auto">
      {/* Header Section */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-24 h-24">
          <img
            src={userData.avatar || "https://via.placeholder.com/96"}
            alt="User Avatar"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold mt-4">{userData.name}</h2>
        <p className="text-slate-400">{userData.role}</p>
      </div>

      {/* Contact Section */}
      <div className="space-y-2 mb-6">
        <p className="flex items-center">
          📧 <span className="ml-2">{userData.email}</span>
        </p>
        <p className="flex items-center">
          📞 <span className="ml-2">{userData.phone || "N/A"}</span>
        </p>
        <p className="flex items-center">
          📍 <span className="ml-2">{userData.location || "Not provided"}</span>
        </p>
      </div>

      {/* Skills Section */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        <div className="flex flex-wrap gap-2">
          {userData.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-purple-600 text-white py-1 px-3 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
        <ul className="space-y-2">
          {userData.recentActivity.map((activity, index) => (
            <li
              key={index}
              className="bg-slate-800 p-3 rounded-lg flex justify-between"
            >
              <span>{activity.title}</span>
              <span className="text-slate-400 text-sm">{activity.time}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
