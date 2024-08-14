"use client";
import React, { useEffect, useState } from 'react';

function Logged() {
  const [books, setBooks] = useState(null);

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

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <section className='mt-5 vh-full bg-light px-4'>
      <div className="d-flex gap-3 py-4">
        <div className="w-100 border rounded-3 shadow p-4 bg-white">
          <h3 className="fw-bold">Total Books</h3>
          <p className="text-muted">The total number sof books in store</p>
          <h1 className="fw-bold">{}</h1>
        </div>
        <div className="w-100 border rounded-3 shadow p-4 bg-white">
          <h3 className="fw-bold">Total Orders</h3>
          <p className="text-muted">The total numbers of orders placed</p>
          <h1 className="fw-bold display-3"></h1>
        </div><div className="w-100 border rounded-3 shadow p-4 bg-white">
          <h3 className="fw-bold">Total Revenue</h3>
          <p className="text-muted">The total revenue generated</p>
          <h1 className="fw-bold display-3"></h1>
        </div>
      </div>

      <div className="border rounded-3 p-3 bg-white">
        <div>
            <h3 className="fw-bold">Orders Management</h3>
            <p className="text-muted">Manage the orders in your store</p>
        </div>

        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope='col' className="text-muted fw-normal">
                  Title
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Author
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Category
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Price
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Stock
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">The Great Gatsby</td>
                <td className="py-4">F. Scott Fitzgerald</td>
                <td className="py-4">Fiction</td>
                <td className="py-4">$12.99</td>
                <td className="py-4">25</td>
                <td className="py-4"></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3">

          <button className="btn btn-outline-dark">Filter by Category</button>
          <button className="btn btn-outline-dark">Filter by Date</button>
          </div>
          <div className="text-sm text-muted-foreground">Showing 1-10 of 100 books</div>
        </div>
      </div>

    {/* Books Management */}
      <div className="border rounded-3 p-3 bg-white mt-5">
        <div className="d-flex justify-content-between  align-items-center">
          <div>
            <h3 className="fw-bold">Books Management</h3>
            <p className="text-muted">Manage the books in your store</p>
          </div>
          <div>
            <button className="btn btn-dark">
              Add Book
            </button>
          </div>
        </div>

        <div>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope='col' className="text-muted fw-normal">
                  Title
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Author
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Category
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Price
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Stock
                </th>
                <th scope='col' className="text-muted fw-normal">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {
                books ? (
                  books.map((book) => (
                    <tr key={book._id}>
                      <td className="py-4">{book.title}</td>
                      <td className="py-4">{book.author}</td>
                      <td className="py-4">{book.category}</td>
                      <td className="py-4">{book.price}</td>
                      <td className="py-4">{book.stock}</td>
                      <td className="py-4"></td>
                    </tr>

                  ))
                ) : (
                  <p>Loading...</p> // Add a loading state
                )
              }
            </tbody>
          </table>
        </div>

        <div className="d-flex justify-content-between align-items-center">
          <button className="btn btn-outline-dark">Filter by Category</button>
          <div className="text-sm text-muted-foreground">Showing 1-10 of 100 books</div>
        </div>
      </div>
    </section >
  );
}

export default Logged;
