import React from 'react';
import { Search, Settings, Camera, Send, PlusSquare } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="main-header">
      <div className="header-logo">
        <img src="https://ik.imagekit.io/qqtube/Social_Media_Logos/%C4%B0nstagram-Profilime-Kim-Bakt%C4%B1-1_tCBJPR6ukzG.png?updatedAt=1662141771142" alt="Instagram" />
      </div>
      
      <div className="search-bar">
        <Search size={18} className="search-icon" />
        <input type="text" placeholder="Username, hashtag and story search" />
      </div>

      <div className="header-actions">
        <Settings size={22} className="action-icon" />
        <Camera size={22} className="action-icon" />
        <Send size={22} className="action-icon" />
        <button className="new-post-btn">
          <PlusSquare size={18} />
          <span>New Post</span>
        </button>
      </div>
    </header>
  );
};

export default Header;