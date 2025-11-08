import React, { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const SubHeader = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        {/* Category dropdown - hidden on mobile */}
        <div className="relative flex-1 sm:flex-none w-full sm:w-60 hidden sm:block">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 text-sm
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              hover:border-gray-400 transition-colors duration-200 appearance-none pr-10"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="web_development">Web Development</option>
            <option value="mobile_app_development">
              Mobile App Development
            </option>
            <option value="artificial_intelligence">
              Artificial Intelligence (AI)
            </option>
            <option value="machine_learning">Machine Learning</option>
            <option value="data_science">Data Science</option>
            <option value="cyber_security">Cybersecurity</option>
            <option value="cloud_computing">Cloud Computing</option>
            <option value="game_development">Game Development</option>
            <option value="graphic_design">Graphic Design</option>
            <option value="ui_ux_design">UI/UX Design</option>
            <option value="video_editing">Video Editing</option>
            <option value="animation">Animation</option>
            <option value="digital_art">Digital Art</option>
          </select>

          <FiChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>

        {/* Search input - visible on all screens, full width on mobile */}
        <div className="relative flex-1 w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          {/* Search icon inside input */}
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
