import React from 'react';
import './Modal.css';
import './Bookmarks.css';

const Bookmarks = ({ show, bookmarks, onClose, onSelectArticle, onDeleteBookmark }) => {
  if (!show) {
    return null;
  }

 
  const handleBookmarkClick = (article) => {
    setBookmarks((prevBookmarks) => {
        const exists = prevBookmarks.some(
            (bookmark) => bookmark.title === article.title && bookmark.source === article.source
        );
        const updatedBookmarks = exists
            ? prevBookmarks.filter(
                  (bookmark) =>
                      bookmark.title !== article.title || bookmark.source !== article.source
              )
            : [...prevBookmarks, article];
        localStorage.setItem('bookmarkedArticles', JSON.stringify(updatedBookmarks));  // Save to localStorage immediately
        return updatedBookmarks;
    });
};

 
 
 // Bookmarks.jsx
const handleDeleteBookmark = (article) => {
  onDeleteBookmark(article); // Let the parent handle this
};

// No need to call localStorage.setItem() here, it will be handled in News.jsx


  return (
    <div className='modal-overlay'>
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h2 className="bookmarks-heading">Bookmarked News</h2>
        <div className="bookmarks-list">
          {bookmarks.length === 0 ? (
            <p>No bookmarks yet.</p>
          ) : (
            bookmarks.map((article, index) => (
              <div className="bookmark-item" key={index} onClick={() => onSelectArticle(article)}>
                <div className="bookmarked-article">
                  <img src={article.thumbnail} alt="Bookmark Image" />
                  <h3 className="article-title">{article.title}</h3>
                  <span className='delete-button' onClick={(e) => {
                    e.stopPropagation(); // Prevent the modal from closing when deleting
                    handleDeleteBookmark(article);
                  }}>
                    <i className="fa-regular fa-circle-xmark"></i>
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookmarks;
