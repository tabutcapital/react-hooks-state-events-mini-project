import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = useState({ text: "", category: categories[0] });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(formData);
    setFormData({ text: "", category: categories[0] }); // Reset form
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="text"
        value={formData.text}
        onChange={handleChange}
        placeholder="New task"
      />
      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
