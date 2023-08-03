import "./AddForm.css";

export default function AddForm({
  handleAddBook,
  formData,
  handleAddFormChange,
}) {
  return (
    <form onSubmit={(e) => handleAddBook(e, formData)}>
      <h1>Form</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleAddFormChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleAddFormChange}
      />
      <button>Add book</button>
    </form>
  );
}
