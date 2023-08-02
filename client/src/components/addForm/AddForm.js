import { useState } from "react";
import "./AddForm.css";

export default function AddForm() {
  return (
    <form>
      <h1>Form</h1>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Description"
        name="description"
        onChange={handleChange}
      />
    </form>
  );
}
