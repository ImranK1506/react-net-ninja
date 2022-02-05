import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Imran');
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    // Prevent refresh on submit
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log('New blog posted');
        setIsPending(false);
        // Route back one step
        // history.go(-1)
        // Route back home
        history.push('/');
      })
    }, 1000)
  }

  return (
      <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input type="text"
                 required
                 value={title}
                 onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
          />
          <label>Blog author:</label>
          <select value={author}
                  onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="Imran">Imran</option>
            <option value="Musa">Musa</option>
          </select>
          {!isPending && <button>Add Blog</button>}
          {isPending && <button disabled>Adding Blog</button>}
        </form>
      </div>
  );
};

export default Create;