// Hook
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

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