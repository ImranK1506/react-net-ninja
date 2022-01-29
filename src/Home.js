// Hook
import { useState, useEffect } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  // Outputting lists
  const [blogs, setBlogs] = useState([
    { title: 'My new website 1', body: 'lorem ipsum...', author: 'Imran', id: 1 },
    { title: 'My new website 2', body: 'lorem ipsum...', author: 'Imran', id: 2 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Mahreen', id: 3 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Musa', id: 4 }
  ]);

  // Fires on every render
  useEffect(() => {
    console.log('effect');
  })

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id)
    setBlogs(newBlogs)
  }

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
        <BlogList hasBlogs={blogs} title="All blogs"
                  handleDelete={handleDelete}/>
        <BlogList hasBlogs={blogs.filter((blog) => blog.author === 'Imran')}
                  title="Imran's blogs"
                  handleDelete={handleDelete}/>
        {/*<p>{name} is {age} year(s) of age</p>*/}
        {/*<button onClick={handleClick}>Click</button>*/}
        {/* Event objects */}
        {/*<button onClick={(e) => handleClickAgain('Imran', e)}>Click again</button>*/}
      </div>
  );
};

export default Home;