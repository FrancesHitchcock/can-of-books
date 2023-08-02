import { useState } from "react";
import "./AddForm.css";

export default function AddForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  function handleChange(e) {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // console.log(formData);
  }

  return (
    <form>
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
    </form>
  );
}
