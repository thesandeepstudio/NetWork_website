import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SubHeader.css";

const SubHeader = ({ category, setCategory }) => {
  const [currentUser] = useState(null);

  return (
    <div className="sub-header">
      <div className="sub-container">
        <select
          className="category-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="" disabled>
            Select a category
          </option>
          <option value="web_development">Web Development</option>
          <option value="mobile_app_development">Mobile App Development</option>
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

        <input
          type="text"
          placeholder="Search jobs..."
          className="search-box"
        />

        
      </div>
    </div>
  );
};

export default SubHeader;
