import React from 'react';
import './NewsModal.css';
import './Modal.css';
import { useNavigate } from 'react-router-dom';

const NewsModal = ({ show, article, onClose }) => {
    const navigate = useNavigate(); // ✅ Moved inside the component

    const handleMoreClick = () => {
        navigate(`/article/${article.id}`); // ✅ Navigate to article detail
        onClose(); // ✅ Optional: Close modal on navigation
    };

    if (!show) return null;

    return (
        <div className='modal-overlay'>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>
                    <i className="fa-solid fa-xmark"></i>
                </span>
                <img src={article.thumbnail} alt="Modal Image" className='modal-image' />
                <h2 className="modal-title">{article.title}</h2>
                <p className="modal-source">Source: {article.source || "Unknown"}</p>
                <p className="modal-date">{article.date}</p>
                <p className="modal-views">
                    <span className="eye-icon">👁</span> {article.views}
                </p>
                <p className="modal-content-text">{article.summary}</p>

                <button onClick={handleMoreClick} className="read-more-link">
                    Read More
                </button>
            </div>
        </div>
    );
};

export default NewsModal;
