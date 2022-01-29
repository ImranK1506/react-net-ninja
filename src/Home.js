// Hook
import { useState } from 'react';
import BlogList from "./BlogList";

const Home = () => {
  // #10 Outputting lists
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'Imran', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Mahreen', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Musa', id: 3 }
  ]);
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
        <BlogList hasBlogs={blogs} title="All blogs"/>
        {/*<p>{name} is {age} year(s) of age</p>*/}
        {/*<button onClick={handleClick}>Click</button>*/}
        {/* Event objects */}
        {/*<button onClick={(e) => handleClickAgain('Imran', e)}>Click again</button>*/}
      </div>
  );
};

export default Home;