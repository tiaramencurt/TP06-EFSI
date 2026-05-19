import React from 'react';
import currentUser from '../../data/user';
import { Users, Heart, CheckCircle } from 'lucide-react';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    <div className="profile-section">
      <div className="profile-image-container">
        <img src={currentUser.profilePicture} alt={currentUser.fullName} className="profile-avatar" />
      </div>
      
      <div className="profile-info">
        <div className="name-verified">
          <h2>{currentUser.fullName}</h2>
          {currentUser.isVerified && <CheckCircle size={18} className="verified-icon" />}
        </div>
        <p className="username">@{currentUser.username}</p>
      </div>

      <div className="stats-container">
        <div className="stat-card">
          <Users size={20} />
          <div className="stat-text">
            <span className="stat-value">{currentUser.followers}</span>
          </div>
        </div>
        <div className="stat-card">
          <Heart size={20} />
          <div className="stat-text">
            <span className="stat-value">{currentUser.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;