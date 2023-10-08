import React from 'react';
import Header from './Header';
import StoryList from './StoryList';
import'./App.css'

const categories = ["Category 1", "Category 2", "Category 3"]; 
const stories = [
  
  { id: 1,thumbnail: 'https://edyoda.s3.amazonaws.com/media/blog-images/learn_machine_learning_courses_online.png',
   title:'Introduction To A Machine Learning Online Course',
   AuthorName:'EDYODA',date:'| 23 Aug 2019',
   content: ' We have had an insight into Artificial Intelligence. Well, one of its subfields is machine learning and this introduction will help you get a fair idea of what a machine learning online course.....', 
   category: 'Category 1' },

   { id: 2,thumbnail: 'https://edyoda.s3.amazonaws.com/media/blog-images/6.png',
   title:'LAMP Stack Vs MEAN stack....',
   AuthorName:'EDYODA',date:'| 24 Aug 2019',
   content: ' In todays dynamic world, rapid web application development with a smooth user interface that can adapt to specific features is the main business requirement....', 
    },

   { id: 3,thumbnail: 'https://edyoda.s3.amazonaws.com/media/blog-images/4.png',
   title:'Impact of Cloud computing in various Industries',
   AuthorName:'EDYODA',date:'| 24 Aug 2019',
   content: ' Cloud computing has been rapidly gaining pace in the world of information technology. It has been observed that over 90% of global enterprises are using cloud technology ....', 
    },

   { id: 4,thumbnail: 'https://edyoda.s3.amazonaws.com/media/blog-images/3.png',
   title:'Challenges of Machine Learning i...',
   AuthorName:'EDYODA',date:'| 24 Aug 2019',
   content: ' Machine Learning is a subset of artificial intelligence which is an important part of computer science. The revolution of Big Data promises to transform the way we work,..', 
    },

   { id: 5,thumbnail: 'https://edyoda.s3.amazonaws.com/media/blog-images/5.png',
   title:'Breaking the Myths around Cybersecurity',
   AuthorName:'EDYODA',date:'| 26 Aug 2019',
   content: ' As the dependency on online platforms is increasing daily, cybersecurity is becoming an important concern for all companies today. The number of cyberattacks is ever-rising.... ', 
    },

   { id: 6,thumbnail: 'https://edyoda.s3.amazonaws.com/media/blog-images/7.png',
   title:'Importance of Data Backup and Recove..',
   AuthorName:'EDYODA',date:'| 26 Aug 2019',
   content: ' A business must always introspect the areas where they lack in order to bring about a positive change in the work environment. One of the main precautions or a contingency.... ', 
    },

   { id: 7,thumbnail: 'https://edyoda.s3.amazonaws.com/media/blog-images/automation-testing-an-overview-2.png',
   title:'What is Web Scraping?',
   AuthorName:'ZAC CLANCY',date:'| 25 SEP 2019',
   content: ' Simply put, web scraping is one of the tools developers use to gather and analyze information from the Internet.Some websites and platforms offer application programming interfaces (APIs)... ', 
    },

   { id: 8,thumbnail: 'https://edyoda.s3.amazonaws.com/media/blog-images/what_is_isa_blog_1.png',
   title:'What is Income Share Agreement?',
   AuthorName:'EDYODA',date:'| 14 Oct 2019',
   content: 'The term Income Share Agreement has been around for a long time since 1955 to be precise. Surprised, eh? It was first introduced by Milton Friedman, an American economist, and statistician.... ', 
    },

   { id: 9,thumbnail: 'https://edyoda.s3.amazonaws.com/media/blog-images/practical_machine_learning_1.png',
   title:'Practical Machine Learning with Python and Keras',
   AuthorName:'EDYODA',date:'| 16 Oct 2019',
   content: ' Machine learning is a field of artificial intelligence that uses statistical techniques to give computer systems the ability to “learn” e.g., progressively improve performa... ', 
    },

  
];

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <StoryList stories={stories} categories={categories} />
      </main>
    </div>
  );
}

export default App;
