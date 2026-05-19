import React from 'react';
import { X, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import { type CatPost } from '../../services/catApi';
import './PostModal.css';

interface ModalProps {
  post: CatPost;
  onClose: () => void;
}

const PostModal: React.FC<ModalProps> = ({ post, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}><X /></button>
        
        <div className="modal-body">
          <div className="modal-image-container">
            <img src={post.url} alt="Cat detail" />
          </div>
          
          <div className="modal-details">
            <div className="detail-header">
              <img src={`https://i.pravatar.cc/150?u=${post.id}`} className="mini-avatar" alt="user" />
              <strong>cat_lover_{post.id.slice(0,4)}</strong>
            </div>
            
            <div className="comments-area">
              <p><strong>cat_lover_{post.id.slice(0,4)}</strong> Meow! Look at this majestic pose. #cats #react #vibes</p>
              <div className="fake-comment">
                <strong>user_99:</strong> So cute! ❤️
              </div>
              <div className="fake-comment">
                <strong>dev_guru:</strong> This cat codes better than me.
              </div>
            </div>

            <div className="detail-footer">
              <div className="footer-icons">
                <div className="left-icons">
                  <Heart size={24} />
                  <MessageCircle size={24} />
                  <Send size={24} />
                </div>
                <Bookmark size={24} />
              </div>
              <div className="likes-count">1.284 likes</div>
              <div className="post-date">2 HOURS AGO</div>
              <div className="add-comment">
                <input type="text" placeholder="Add a comment..." />
                <button>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;