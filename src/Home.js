// Hook
import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  // Outputting lists
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // Fires on every render
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
          .then(res => {
            console.log(res);
            if (!res.ok) throw Error('Could not fetch data')
            return res.json()
          })
          .then(data => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
          })
          .catch((err) => {
            setIsPending(false);
            setError(err.message);
          })
      }, 3000);
  }, []);

  return (
      <div className="home">
        {/* Handle error */}
        {error && <div>{ error }</div>}
        {/* Pending state */}
        {isPending && <div>Loading...</div>}
        {/* Blog data */}
        {blogs &&  <BlogList hasBlogs={blogs} title="All blogs"/>}
      </div>
  );
};

export default Home;