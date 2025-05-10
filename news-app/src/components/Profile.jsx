import React, { useState, useEffect } from 'react';
import './Profile.css';
import userImg from '../assets/images/user.jpg';





const UserProfile = () => {
    const [viewedArticles, setViewedArticles] = useState([]);

    useEffect(() => {
        const savedViewedArticles = localStorage.getItem('viewedArticles');
        if (savedViewedArticles) {
            setViewedArticles(JSON.parse(savedViewedArticles));
        }
    }, []);

    return (
        <div className="user-profile">
            <h1>User Profile</h1>
            <div className="user-info">
            <img src={userImg} alt="User" />
                <p>Username: Camelia</p>
                <p>Email: camelia@example.com</p>
            </div>
            <div className="viewed-articles">
                <h2>Viewed Articles :</h2>
                {viewedArticles.length > 0 ? (
                    <ul>
                        {viewedArticles.map((article, index) => (
                            <li key={index}>
                                <h3>{article.title}</h3>
                                <p>{article.source}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No articles viewed yet.</p>
                )}
            </div>
        </div>


       
    );
};

export default UserProfile;
