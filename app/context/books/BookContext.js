"use client"
import React, { createContext, useState, useEffect } from "react";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [host] = useState(process.env.REACT_APP_BOOKSTORE_API || "http://localhost:5000/"); // Use environment variable for flexibility

  const [error, setError] = useState(null);
  const [book, setBook] = useState([]);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`${host}/api/book/`, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch books: ${response.statusText}`);
        }

        const json = await response.json();
        setBook(json);
      } catch (error) {
        console.error("Failed to fetch books:", error);
        setError(error.message); // Set user-friendly error message
      }
    };

    fetchBook();
  }, [host]); 

  return (
    <BookContext.Provider
      value={{
        book,
        error,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
