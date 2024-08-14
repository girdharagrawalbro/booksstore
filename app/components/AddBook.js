import React, { useState } from "react";
import axios from "axios";

const AddBook = ({ onClose, onAdd }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    stock: "",
    price: "",
    author: "",
    category: "",
    date: new Date().toISOString().slice(0, 10), // Current date in YYYY-MM-DD format
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/AddBook", formData);
      onAdd(response.data); // Pass the new Book to the parent component
    } catch (error) {
      console.error("Error adding Book:", error);
    }
  };

  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <form className="add-form text-dark" onSubmit={handleSubmit}>
        <h3 className="text-center">Add Books</h3>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <select name="author" className="form-select" id="" onChange={handleChange}>
            <option value={formData.author}>author</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>

            
            <select name="category" id="" className="form-select" onChange={handleChange}>
            <option             value={formData.category}
            >category</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className="form-label">
            Stock
          </label>
          <input
            type="text"
            className="form-control"
            id="stock"
            value={formData.stock}
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

export default AddBook;
