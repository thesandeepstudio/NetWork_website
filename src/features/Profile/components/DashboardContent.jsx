import React, { useState, useRef } from "react";

const DashboardContent = ({ title }) => {
  const [profile, setProfile] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    bio: "",
    location: "",
    website: "",
    skills: "",
    profileImage: null,
  });

  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      setProfile({ ...profile, profileImage: files[0] });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    console.log(profile);
  };

  if (title !== "Edit Profile") {
    return <div>{title} content coming soon...</div>;
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow-md max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">{title}</h1>

      {/* Avatar Section */}
      <div className="flex justify-center mb-6 relative">
        <img
          src={
            profile.profileImage
              ? URL.createObjectURL(profile.profileImage)
              : "/images/Hacker.png"
          }
          alt="Profile Avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-600 object-cover"
        />
        <button
          type="button"
          onClick={() => fileInputRef.current.click()}
          className="absolute bottom-0 right-0 bg-blue-600 text-white px-3 py-1 text-sm rounded-full hover:bg-blue-700 transition"
        >
          Edit
        </button>
        <input
          type="file"
          name="profileImage"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleChange}
          className="hidden"
        />
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={profile.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-semibold mb-1">Username</label>
          <input
            type="text"
            name="username"
            value={profile.username}
            onChange={handleChange}
            placeholder="johndoe"
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="john@example.com"
            className="border p-2 rounded w-full"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-semibold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="+1 234 567 890"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold mb-1">Location</label>
          <input
            type="text"
            name="location"
            value={profile.location}
            onChange={handleChange}
            placeholder="City, Country"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Website */}
        <div>
          <label className="block text-sm font-semibold mb-1">Website</label>
          <input
            type="url"
            name="website"
            value={profile.website}
            onChange={handleChange}
            placeholder="https://example.com"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Skills */}
        <div>
          <label className="block text-sm font-semibold mb-1">Skills</label>
          <input
            type="text"
            name="skills"
            value={profile.skills}
            onChange={handleChange}
            placeholder="React, Node.js, Tailwind"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm font-semibold mb-1">Bio</label>
          <textarea
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            className="border p-2 rounded w-full min-h-[120px]"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded font-semibold hover:bg-blue-700 transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default DashboardContent;
