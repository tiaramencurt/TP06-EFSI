import React from 'react';
import { stories } from '../../data/user';
import './StoryBar.css';

const StoryBar: React.FC = () => {
  return (
    <div className="story-container">
      <h2 className="section-title">STORIES</h2>
      <div className="story-scroll">
        {stories.map(story => (
          <div key={story.id} className="story-item">
            <div className="story-ring">
              <img src={story.image} alt={story.username} />
            </div>
            <span>@{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryBar;