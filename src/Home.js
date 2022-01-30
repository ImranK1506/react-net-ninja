// Hook
import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  // Outputting lists
  const [blogs, setBlogs] = useState(null)
  const [isPending, setIsPending] = useState(true);

  // Fires on every render
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            console.log('data', data);
            setBlogs(data);
            setIsPending(false);
          });
      }, 3000);
  }, []);

  return (
      <div className="home">
        {/* Pending state */}
        {isPending && <div>Loading</div>}
        {/* Blog data */}
        {blogs &&  <BlogList hasBlogs={blogs} title="All blogs"/>}
      </div>
  );
};

export default Home;