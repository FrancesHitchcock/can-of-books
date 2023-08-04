import "./AddForm.css";

export default function AddForm({
  handleAddBook,
  formData,
  handleAddFormChange,
}) {
  return (
    <form onSubmit={(e) => handleAddBook(e, formData)}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleAddFormChange}
      />
      <textarea
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleAddFormChange}
      />
      <button>Add book</button>
    </form>
  );
}
