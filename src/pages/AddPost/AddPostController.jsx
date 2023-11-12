import { useState } from "react";
import AddPostView from "./AddPostView";
import AddPostModel from "./AddPostModel";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddPostController = () => {
  const navigate = useNavigate();
  const model = new AddPostModel();
  const [form, setForm] = useState(model.state);
  const [posts, setPosts] = useState([]);
  const onInputChange = (key, e) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.user || !form.title || !form.text) {
      toast.error("Please fill all fields !");
      return;
    } else {
      axios.post("http://localhost:3001/posts", form).then(() => {
      toast.success("Post added successfully!");
      setPosts([form, ...posts]);
      navigate("/");
      });
    }
  };
  return (
    <div>
      <AddPostView handleSubmit={handleSubmit} onInputChange={onInputChange} />
    </div>
  );
};

export default AddPostController;
