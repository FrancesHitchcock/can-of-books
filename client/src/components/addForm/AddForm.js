import "./AddForm.css";

export default function AddForm({ handleAddBook, formData, handleChange }) {
  return (
    <form id="addBookForm" onSubmit={(e) => handleAddBook(e, formData)}>
      <h1>Form</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <button>Add book</button>
    </form>
  );
}
