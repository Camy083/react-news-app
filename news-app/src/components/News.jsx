import React, { useState, useEffect } from 'react';
import Weather from './Weather';
import DidYouKnow from './DidYouKnow';
import './News.css';
import DailyPoll from './DailyPoll';
import userImg from '../assets/images/user.jpg';
import NewsModal from './NewsModal';
import Bookmarks from './Bookmarks';
import UserProfile from './Profile';
import newsData from '../Data/Data';


const News = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);
    const [showBookmarksModal, setShowBookmarksModal] = useState(false);
    const [viewedArticles, setViewedArticles] = useState([]);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("General");
    
    const [searchTerm, setSearchTerm] = useState('');

    const storedTheme = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedTheme === 'true');

    useEffect(() => {
        const savedBookmarks = localStorage.getItem('bookmarkedArticles');
        const savedViewedArticles = localStorage.getItem('viewedArticles');
        if (savedBookmarks) setBookmarks(JSON.parse(savedBookmarks));
        if (savedViewedArticles) setViewedArticles(JSON.parse(savedViewedArticles));
    }, []);

    useEffect(() => {
        if (bookmarks.length > 0) {
            localStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarks));
        }
    }, [bookmarks]);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    useEffect(() => {
        localStorage.setItem('viewedArticles', JSON.stringify(viewedArticles));
    }, [viewedArticles]);
    const dummyArticles = newsData;

    const filteredArticles = dummyArticles.filter(article => {
        const matchesSearch =
            article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            article.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
        // If searching, return anything that matches
        if (searchTerm.trim() !== "") {
            return matchesSearch;
        }
    
        // If not searching, apply category filtering
        if (selectedCategory === "General") {
            return article.category !== "Business" && article.category !== "Entertainment";
        } else {
            return article.category === selectedCategory;
        }
    });
    



    const handleArticleClick = (article) => {
        setSelectedArticle(article);
        setShowModal(true);
        setViewedArticles((prev) => {
            const exists = prev.some((a) => a.title === article.title);
            return exists ? prev : [...prev, article];
        });
    };

    const handleBookmarkClick = (article) => {
        setBookmarks((prevBookmarks) => {
            const exists = prevBookmarks.some(
                (bookmark) => bookmark.title === article.title && bookmark.source === article.source
            );
            return exists
                ? prevBookmarks.filter(
                      (bookmark) => bookmark.title !== article.title || bookmark.source !== article.source
                  )
                : [...prevBookmarks, article];
        });
    };

    return (
        <div className={`news ${darkMode ? 'dark' : 'light'}`}>
            <header className="news-header">
                <h1 className="logo">News App</h1>
                <div className="search-bar">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            placeholder='Search News...'
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type='submit'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                </div>
            </header>
            <div className="news-content">
                <div className="navbar">
                    <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
                    </button>
                    <div className="user" onClick={() => setShowProfileModal(true)}>
                        <img src={userImg} alt="User" />
                        <p>Camelia</p>
                    </div>
                    <nav className="categories">
                        <h1 className="nav-heading">Categories</h1>
                        <div className="nav-links">
                            {["General", "World", "Business", "Technology", "Entertainment", "Sports", "Science", "Health", "Nation"].map((cat) => (
                                <a
                                    href="#"
                                    key={cat}
                                    className='nav-link'
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedCategory(cat);
                                    }}
                                >
                                    {cat}
                                </a>
                            ))}
                            <a
                                href="#"
                                className="nav-link"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setShowBookmarksModal(true);
                                }}
                            >
                                Bookmarks <i className="fa-solid fa-bookmark"></i>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="news-section">
                    {filteredArticles.length > 0 && (
                        <div className="headline" onClick={() => handleArticleClick(filteredArticles[0])}>
                           <img src={filteredArticles[0].thumbnail} alt="Headline" />
                               <h2 className="headline-title">
                                {filteredArticles[0].title}
                                <i
                                    className={`${bookmarks.some((b) => b.title === filteredArticles[0].title) ? "fa-solid" : "fa-regular"} fa-bookmark bookmark`}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleBookmarkClick(filteredArticles[0]);
                                    }}
                                ></i>
                            </h2>
                        </div>
                    )}
                    <div className="news-grid">
                        {filteredArticles.map((article, index) => (
                            <div className="news-grid-item" key={index} onClick={() => handleArticleClick(article)}>
                                <img src={article.thumbnail} alt="News" />

                                <h3>
                                    {article.title}
                                    <i
                                        className={`${bookmarks.some((b) => b.title === article.title) ? "fa-solid" : "fa-regular"} fa-bookmark bookmark`}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleBookmarkClick(article);
                                        }}
                                    ></i>
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
                <NewsModal show={showModal} article={selectedArticle} onClose={() => setShowModal(false)} />
                <Bookmarks
                    show={showBookmarksModal}
                    bookmarks={bookmarks}
                    onClose={() => setShowBookmarksModal(false)}
                    onSelectArticle={handleArticleClick}
                    onDeleteBookmark={handleBookmarkClick}
                />
                {showProfileModal && (
                    <div className="modal-overlay" onClick={() => setShowProfileModal(false)}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="close-button" onClick={() => setShowProfileModal(false)}>X</button>
                            <UserProfile />
                        </div>
                    </div>
                )}
                <DailyPoll />
                <div className="weather-didyouknow">
                    <Weather /> <DidYouKnow />
                </div>
            </div>
            <div className='news-footer'>Footer</div>
        </div>
    );
};

export default News;
