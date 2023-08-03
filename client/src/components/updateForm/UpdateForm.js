import "./UpdateForm.css";

export default function UpdateForm() {
  return (
    <form>
      <h1>Form</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        // value={formData.title}
        // onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        // value={formData.description}
        // onChange={handleChange}
      />
      <button>Update book</button>
    </form>
  );
}
