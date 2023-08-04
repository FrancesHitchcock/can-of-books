import "./UpdateForm.css";
import { useState } from "react";

export default function UpdateForm({ handleUpdateBook, id, book }) {
  const [formData, setFormData] = useState({
    title: book.title,
    description: book.description,
  });

  function handleUpdateFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={(e) => handleUpdateBook(e, id, formData)}>
      <h3>Update Book</h3>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleUpdateFormChange}
      />
      <textarea
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleUpdateFormChange}
      />
      <button>Update book</button>
    </form>
  );
}
