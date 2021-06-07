import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTilte] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post("http://localhost:4000/posts", {
      title,
    });
    setTilte("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            className="form-control"
            onChange={(e) => setTilte(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" style={{ marginTop: "5px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostCreate;
