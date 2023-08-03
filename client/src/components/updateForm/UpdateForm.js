import "./UpdateForm.css";
import { useState } from "react";

export default function UpdateForm({ handleUpdateBook, id }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  function handleUpdateFormChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={(e) => handleUpdateBook(e, id, formData)}>
      <h1>Form</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleUpdateFormChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleUpdateFormChange}
      />
      <button>Update book</button>
    </form>
  );
}
