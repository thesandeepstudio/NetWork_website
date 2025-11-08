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
  const navigation = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigation("/");
  };

  return (
    <div className="w-64 bg-gray-100 min-h-screen flex flex-col justify-between p-6">
      <div>
        {/* Logo */}
        <div className="text-2xl font-bold text-black mb-5">
          <Link to="/">NetWork</Link>
        </div>

        {/* Profile */}
        <div className="py-2">
          <h2 className="px-2 text-lg font-normal text-gray-500 mb-2">
            Profile
          </h2>
          <Link
            to="/dashboardComponent"
            className="py-2 px-2 text-base font-bold rounded hover:bg-gray-200 flex items-center gap-2"
          >
            <FaUserCircle size={20} className="text-gray-700" />
            <span>Edit Profile</span>
          </Link>
          <Link
            to="/dashboardComponent"
            className="py-2 px-2 text-base font-bold rounded hover:bg-gray-200 flex items-center gap-2"
          >
            <FaGlobeAsia size={20} className="text-gray-700" />
            <span>Language</span>
          </Link>
          <Link
            to="/dashboardComponent"
            className="py-2 px-2 text-base font-bold rounded hover:bg-gray-200 flex items-center gap-2"
          >
            <IoMdNotifications size={20} className="text-gray-700" />
            <span>Notifications</span>
          </Link>
        </div>

        {/* Bank */}
        <div className="py-2">
          <h2 className="px-2 text-lg font-normal text-gray-500 mb-2">Bank</h2>
          <Link
            to="/dashboardComponent"
            className="py-2 px-2 text-base font-bold rounded hover:bg-gray-200 flex items-center gap-2"
          >
            <FaCreditCard size={20} className="text-gray-700" />
            <span>Payments</span>
          </Link>
          <Link
            to="/dashboardComponent"
            className="py-2 px-2 text-base font-bold rounded hover:bg-gray-200 flex items-center gap-2"
          >
            <FaMoneyBill size={20} className="text-gray-700" />
            <span>Taxes</span>
          </Link>
          <Link
            to="/dashboardComponent"
            className="py-2 px-2 text-base font-bold rounded hover:bg-gray-200 flex items-center gap-2"
          >
            <GrTransaction size={20} className="text-gray-700" />
            <span>Transactions</span>
          </Link>
        </div>

        {/* Setting */}
        <div className="py-2">
          <h2 className="px-2 text-lg font-normal text-gray-500 mb-2">
            Settings
          </h2>
          <Link
            to="/dashboardComponent"
            className="py-2 px-2 text-base font-bold rounded hover:bg-gray-200 flex items-center gap-2"
          >
            <RiLockPasswordLine size={20} className="text-gray-700" />
            <span>Password</span>
          </Link>
          <Link
            to="/dashboardComponent"
            className="py-2 px-2 text-base font-bold rounded hover:bg-gray-200 flex items-center gap-2"
          >
            <IoAccessibility size={20} className="text-gray-700" />
            <span>Access</span>
          </Link>
          <Link
            to="/dashboardComponent"
            className="py-2 px-2 text-base font-bold rounded hover:bg-gray-200 flex items-center gap-2"
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
