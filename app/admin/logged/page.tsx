import React, { useContext } from 'react';
import BookContext from '../../context/books/BookContext';

function MyComponent() {
  const { book, error } = useContext(BookContext);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!book.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* Your component using book data */}
    </div>
  );
}

export default MyComponent;
