"use client"
import React, { createContext, useState, useContext } from "react";

const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [authors, setAuthors] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/books`, {
        method: "GET",
      });
      const json = await response.json();
      setBooks(json);
    } catch (error) {
      console.error("Failed to fetch books", error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/category`, {
        method: "GET",
      });
      const json = await response.json();
      setCategories(json);
    } catch (error) {
      console.error("Failed to fetch category", error);
    }
  };

  const fetchAuthor = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/author`, {
        method: "GET",
      });
      const json = await response.json();
      setAuthors(json);
    } catch (error) {
      console.error("Failed to fetch author", error);
    }
  };

  return (
    <BookContext.Provider
      value={{
        books,
        authors,
        categories,
        fetchBooks,
        fetchCategory,
        fetchAuthor,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBookContext = () => useContext(BookContext);
