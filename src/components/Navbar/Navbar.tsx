import React from 'react';
import { Home, Compass, Film, Tv, Bell, User } from 'lucide-react';
import './Navbar.css';

interface NavbarProps {
  currentView: 'home' | 'profile';
  setView: (view: 'home' | 'profile') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="side-navbar">
      <div 
        className={`nav-item ${currentView === 'home' ? 'active' : ''}`} 
        onClick={() => setView('home')}
      >
        <Home size={24} />
        <span>Home</span>
      </div>
      <div className="nav-item">
        <Compass size={24} />
        <span>Explore</span>
      </div>
      <div className="nav-item">
        <Film size={24} />
        <span>Reels</span>
      </div>
      <div 
        className={`nav-item ${currentView === 'profile' ? 'active' : ''}`} 
        onClick={() => setView('profile')}
      >
        <User size={24} />
        <span>Profile</span>
      </div>
      <div className="nav-item">
        <Tv size={24} />
        <span>iGTV</span>
      </div>
      <div className="nav-item">
        <Bell size={24} />
        <span>Notification</span>
      </div>
    </nav>
  );
};

export default Navbar;