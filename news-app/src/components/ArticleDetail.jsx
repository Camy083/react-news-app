import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // ✅ Added useNavigate
import newsData from '../Data/Data';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ✅ Initialize navigate
  const articleId = parseInt(id);
  const article = newsData.find(item => item.id === articleId);

  const [views, setViews] = useState(article?.views || 0);
  const [likes, setLikes] = useState(article?.likes || 0);
  const [dislikes, setDislikes] = useState(article?.dislikes || 0);
  const [comments, setComments] = useState(article?.comments || []);
  const [newComment, setNewComment] = useState('');
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    setViews(prev => prev + 1);
  }, []);

  const handleLike = () => {
    if (!liked) {
      setLikes(prev => prev + 1);
      if (disliked) setDislikes(prev => prev - 1);
      setLiked(true);
      setDisliked(false);
    }
  };

  const handleDislike = () => {
    if (!disliked) {
      setDislikes(prev => prev + 1);
      if (liked) setLikes(prev => prev - 1);
      setDisliked(true);
      setLiked(false);
    }
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const newEntry = { user: 'Guest', text: newComment };
      setComments([...comments, newEntry]);
      setNewComment('');
    }
  };

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div className="article-detail">
      {/* ✅ Close Button */}
      <button className="close-button" onClick={() => navigate(-1)}>×</button>

      <h1>{article.title}</h1>
      <img src={article.thumbnail || article.image} alt="Article" className="detail-image" />
      <p className="date">{new Date(article.date).toLocaleString()}</p>
      <p className="content">{article.content || 'Content goes here.'}</p>

      <div className="engagement">
        <p><span role="img" aria-label="views">👁</span> {views}</p>
        <button onClick={handleLike} className={liked ? 'active' : ''}>👍 {likes}</button>
        <button onClick={handleDislike} className={disliked ? 'active' : ''}>👎 {dislikes}</button>
      </div>

      <div className="comments-section">
        <h3>💬 Comments ({comments.length})</h3>
        {comments.length === 0 && <p>No comments yet.</p>}
        <ul>
          {comments.map((c, idx) => (
            <li key={idx}><strong>{c.user}:</strong> {c.text}</li>
          ))}
        </ul>

        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            required
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default ArticleDetail;
