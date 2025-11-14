import React from "react";
import { Link, useNavigate } from "react-router-dom";
// Icons
import {
  FaUserCircle,
  FaGlobeAsia,
  FaCreditCard,
  FaMoneyBill,
} from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { RiLockPasswordLine } from "react-icons/ri";
import { IoAccessibility } from "react-icons/io5";
import { LuSquareChartGantt } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="w-64 bg-white min-h-screen flex flex-col justify-between p-6 shadow-lg rounded-xl">
      <div>
        {/* Logo */}
        <div className="text-2xl font-bold text-black mb-5">
          <Link to="/">NetWork</Link>
        </div>

        {/* Profile Section */}
        <div className="py-2">
          <h2 className="px-2 text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Profile
          </h2>
          <Link
            to="/profile/editProfile"
            className="flex items-center gap-2 px-2 py-2 text-base font-normal text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            <FaUserCircle size={20} className="text-gray-700" />
            <span>Edit Profile</span>
          </Link>
          <Link
            to="/profile/language"
            className="flex items-center gap-2 px-2 py-2 text-base font-normal text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            <FaGlobeAsia size={20} className="text-gray-700" />
            <span>Language</span>
          </Link>
          <Link
            to="/profile/notifications"
            className="flex items-center gap-2 px-2 py-2 text-base font-normal text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            <IoMdNotifications size={20} className="text-gray-700" />
            <span>Notifications</span>
          </Link>
        </div>

        {/* Bank Section */}
        <div className="py-2">
          <h2 className="px-2 text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Bank
          </h2>
          <Link
            to="/profile/payments"
            className="flex items-center gap-2 px-2 py-2 text-base font-normal text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            <FaCreditCard size={20} className="text-gray-700" />
            <span>Payments</span>
          </Link>
          <Link
            to="/profile/taxes"
            className="flex items-center gap-2 px-2 py-2 text-base font-normal text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            <FaMoneyBill size={20} className="text-gray-700" />
            <span>Taxes</span>
          </Link>
          <Link
            to="/profile/transactions"
            className="flex items-center gap-2 px-2 py-2 text-base font-normal text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            <GrTransaction size={20} className="text-gray-700" />
            <span>Transactions</span>
          </Link>
        </div>

        {/* Settings Section */}
        <div className="py-2">
          <h2 className="px-2 text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Settings
          </h2>
          <Link
            to="/profile/password"
            className="flex items-center gap-2 px-2 py-2 text-base font-normal text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            <RiLockPasswordLine size={20} className="text-gray-700" />
            <span>Password</span>
          </Link>
          <Link
            to="/profile/access"
            className="flex items-center gap-2 px-2 py-2 text-base font-normal text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            <IoAccessibility size={20} className="text-gray-700" />
            <span>Access</span>
          </Link>
          <Link
            to="/profile/session"
            className="flex items-center gap-2 px-2 py-2 text-base font-normal text-gray-700 rounded hover:bg-gray-200 transition-colors duration-200"
          >
            <LuSquareChartGantt size={20} className="text-gray-700" />
            <span>Session</span>
          </Link>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="text-xl font-medium flex items-center gap-2 py-2 px-4 text-red-500 rounded cursor-pointer hover:bg-red-100"
      >
        <IoIosLogOut size={25} />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
