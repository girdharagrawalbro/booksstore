import React, { useState } from "react";
import axios from "axios";

const AddCategory = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/category/AddCategory", formData);
      onAdd(response.data); // Pass the new Book to the parent component
    } catch (error) {
      console.error("Error adding Book:", error);
    }
  };

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <form className="add-form text-dark" onSubmit={handleSubmit}>
        <h3 className="text-center">Add Category</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  );
};

export default AddCategory;
