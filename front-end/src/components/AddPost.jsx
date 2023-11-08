import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function MyForm() {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  useEffect(() => {
    // This code will run only once when the component is mounted
    axios.get("http://localhost:80/post").then((res) => {
      setPosts(res.data.data);
      console.log(posts);
    });
  }, []);

  //   axios.get("http://localhost:3000/post").then((res) => {
  //     setPosts(res.data);
  //   });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("content", text);
    formData.append("image", image);
    formData.append("email", localStorage.getItem("email"));
    formData.append("name", localStorage.getItem("name"));
    formData.append("id", localStorage.getItem("id"));

    try {
      const response = await axios.post("http://localhost:80/post", formData);
      console.log(response);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text-input">Text:</label>
          <input
            id="text-input"
            type="text"
            value={text}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor="image-input">Image:</label>
          <input
            id="image-input"
            name="avatar"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {posts.length &&
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.name}</h2>
            <p>{post.content}</p>
            <img
              src={post.img_url}
              alt="post"
              height={"400px"}
              width={"600px"}
            />
          </div>
        ))}
    </>
  );
}

export default MyForm;
