import React from 'react';



function Story({ story }) {
  return (
    <div className="story">
      <img className="blog-thumbnail" src={story.thumbnail} alt=" "/>
      <h2 className="blog-card-title">{story.title}</h2>
      <p className="blog-card-Authorname">{story.AuthorName}
      <span className="blog-card-date">{story.date}</span></p>
      <p className="blog-card-content">{story.content}</p>
    </div>
  );
}

export default Story;
