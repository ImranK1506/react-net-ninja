// Hook
import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  // Outputting lists
  const [blogs, setBlogs] = useState(null)

  const [name, setName] = useState('Imran');

  // Fires on every render
  useEffect(() => {
    fetch('http://localhost:8000/blogs')
        .then(res => {
          return res.json();
        })
        .then(data => {
          console.log('data', data);
          setBlogs(data);
        });
  }, []);

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id)
  //   setBlogs(newBlogs)
  // };

  // useState: Reactive state
  // const [name, setName] = useState('Mahreen');
  // const [age, setAge] = useState(36);

  // const handleClick = () => {
  //   setName('Musa');
  //   setAge(1)
  // }

  // const handleClickAgain = (name, e) => {
  //   console.log('Hi', name, e.target);
  // }

  return (
      <div className="home">
        {blogs &&  <BlogList hasBlogs={blogs} title="All blogs"/>}
        <button onClick={() => setName('Musa')}>Change name</button>
        <p>{ name }</p>
        {/*<p>{name} is {age} year(s) of age</p>*/}
        {/*<button onClick={handleClick}>Click</button>*/}
        {/* Event objects */}
        {/*<button onClick={(e) => handleClickAgain('Imran', e)}>Click again</button>*/}
      </div>
  );
};

export default Home;