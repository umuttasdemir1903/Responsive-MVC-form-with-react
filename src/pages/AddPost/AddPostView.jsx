const AddPostView = ({handleSubmit,onInputChange}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
      <fieldset>
        <label>User Name</label>
        <input
          onChange={(e) => onInputChange("user", e)}
          type="text"
          placeholder="Example: John"
        />
      </fieldset>
      <fieldset>
        <label>Title</label>
        <input
          onChange={(e) => onInputChange("title", e)}
          type="text"
          placeholder="Example: React"
        />
      </fieldset>
      <fieldset>
        <label>Description</label>
        <textarea
          onChange={(e) => onInputChange("text", e)}
          type="text"
          maxLength={"100"}
          placeholder="Write your explanation..."
        ></textarea>
      </fieldset>

      <button>Send</button>
    </form>
  );
};

export default AddPostView;
