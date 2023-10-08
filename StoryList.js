import React, { useState } from 'react';
import Story from './Story';
import Filters from './Filters.css'



function StoryList({ stories, categories }) {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleFilterChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredStories = selectedCategory
    ? stories.filter((story) => story.category === selectedCategory)
    : stories;

  return (
    <div className="story-list">
      <div className="filters">
        <div>
      <div>
         <h2 className="Trending_posts">Latest Posts</h2>
       </div>
       <div className="Filter_text">
                    <img  height="13px" width="15px"  alt="Filter Icon" 
                    src="https://cdn-icons-png.flaticon.com/512/566/566737.png" />
                    <span>Filter by Category</span>
                </div>
                </div>

                <div id="Categories">
                <button class="Category_button">All</button>
                <button class="Category_button">Artificial Intelligence</button>
                <button class="Category_button">Cloud Computing</button>
                <button class="Category_button">Programming Languages</button>
                <button class="Category_button">Mobile Application Development </button>
                <button class="Category_button">Technology and tools</button>
                <button class="Category_button">Get a Job in a Tech Company</button>
                <button class="Category_button">Other</button>
            </div>

      </div>
      <div className="stories">
        {filteredStories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>
    </div>
  );
}

export default StoryList;
