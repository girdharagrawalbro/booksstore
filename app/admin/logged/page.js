  "use client";
import React, { useEffect, useState } from "react";

// import: context
import { useBookContext } from "../../context/BookContext";

// import: components
import AddBook from "../../components/AddBook";
import AddCategory from "../../components/AddCategory";
import AddAuthor from "../../components/AddAuthor";
import AdminHeader from "../../components/AdminHeader";


function Logged() {
  const {
    books,
    authors,
    categories,
    fetchBooks,
    fetchCategory,
    fetchAuthor,
  } = useBookContext();

  useEffect(() => {
    fetchBooks();
    fetchCategory();
    fetchAuthor();
  }, []);

  // useStates
  const [showAddBook, setShowAddBook] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [showAddAuthor, setShowAddAuthor] = useState(false);

  const handleAddBookClick = () => {
    setShowAddBook(true);
  };

  const handleAddCategoryClick = () => {
    setShowAddCategory(true);
  };

  const handleAddAuthorClick = () => {
    setShowAddAuthor(true);
  };

  const handleClose = () => {
    setShowAddBook(false);
    setShowAddCategory(false);
    setShowAddAuthor(false);
  };

  const handleAdd = () => {
    // Add functionality here
  };

  const [orders, setOrders] = useState(null);

  const fetchOrders = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/orders`, {
        method: "GET",
      });
      const json = await response.json();
      setOrders(json);
    } catch (error) {
      console.error("Failed to fetch orders", error);
    }
  };

  return (
    <>
      {showAddBook && <AddBook onClose={handleClose} onAdd={handleAdd} />}
      {showAddCategory && (
        <AddCategory onClose={handleClose} onAdd={handleAdd} />
      )}
      {showAddAuthor && <AddAuthor onClose={handleClose} onAdd={handleAdd} />}
      <AdminHeader />
      <section className="mt-5 vh-full bg-light px-4">
        <div className="d-flex gap-3 py-4" id="dashboard">
          <div className="w-100 border rounded-3 shadow p-4 bg-white">
            <h3 className="fw-bold">Total Books</h3>
            <p className="text-muted">The total number of books in store</p>
            <h1 className="fw-bold">
              {books ? books.length : "Loading..."}
            </h1>
          </div>
          <div className="w-100 border rounded-3 shadow p-4 bg-white">
            <h3 className="fw-bold">Total Orders</h3>
            <p className="text-muted">The total number of orders placed</p>
            <h1 className="fw-bold">0</h1>
          </div>
          <div className="w-100 border rounded-3 shadow p-4 bg-white">
            <h3 className="fw-bold">Total Revenue</h3>
            <p className="text-muted">The total revenue generated</p>
            <h1 className="fw-bold">$0</h1>
          </div>
        </div>

        {/* Order Management */}
        <div className="border rounded-3 p-3 bg-white" id="order">
          <div>
            <h3 className="fw-bold">Orders Management</h3>
            <p className="text-muted">Manage the orders in your store</p>
          </div>

          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col" className="text-muted fw-normal">
                    Book Title
                  </th>
                  <th scope="col" className="text-muted fw-normal">
                    Name
                  </th>
                  <th scope="col" className="text-muted fw-normal">
                    Email
                  </th>
                  <th scope="col" className="text-muted fw-normal">
                    Address
                  </th>
                  <th scope="col" className="text-muted fw-normal">
                    Qty
                  </th>
                  <th scope="col" className="text-muted fw-normal">
                    Total
                  </th>
                  <th scope="col" className="text-muted fw-normal">
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
              <button className="btn btn-outline-dark">
                Filter by Category
              </button>
              <button className="btn btn-outline-dark">Filter by Date</button>
            </div>
            <div className="text-sm text-muted-foreground">
              Showing 1-10 of 100 books
            </div>
          </div>
        </div>

        {/* Books Management */}
        <div className="border rounded-3 p-3 bg-white mt-5" id="books">
          <div className="d-flex justify-content-between  align-items-center">
            <div>
              <h3 className="fw-bold">Books Management</h3>
              <p className="text-muted">Manage the books in your store</p>
            </div>
            <div>
              <button onClick={handleAddBookClick} className="btn btn-dark">
                Add Book
              </button>
            </div>
          </div>

          <div>
            {books ? (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col" className="text-muted fw-normal">
                      Title
                    </th>
                    <th scope="col" className="text-muted fw-normal">
                      Author
                    </th>
                    <th scope="col" className="text-muted fw-normal">
                      Category
                    </th>
                    <th scope="col" className="text-muted fw-normal">
                      Price
                    </th>
                    <th scope="col" className="text-muted fw-normal">
                      Stock
                    </th>
                    <th scope="col" className="text-muted fw-normal">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {books.map((book) => (
                    <tr key={book._id}>
                      <td className="py-4">{book.title}</td>
                      <td className="py-4">{book.author}</td>
                      <td className="py-4">{book.category}</td>
                      <td className="py-4">{book.price}</td>
                      <td className="py-4">{book.stock}</td>
                      <td className="py-4"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Loading...</p>
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-outline-dark">Filter by Category</button>
            <div className="text-sm text-muted-foreground">
              Showing 1-{books ? books.length : "Loading..."} of{" "}
              {books ? books.length : "Loading..."} books
            </div>
          </div>
        </div>

        {/* Category and Author Management */}
        <div className="d-flex border rounded-3 p-3 bg-white mt-5 gap-5">
          {/* Category management */}
          <div className="w-50">
            <div className="d-flex justify-content-between  align-items-center">
              <div>
                <h3 className="fw-bold">Category Management</h3>
                <p className="text-muted">
                  Manage the category of books in your store
                </p>
              </div>
              <div>
                <button onClick={handleAddCategoryClick} className="btn btn-dark">
                  Add Category
                </button>
              </div>
            </div>

            <div>
              {categories ? (
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col" className="text-muted fw-normal">
                        Name
                      </th>
                      <th scope="col" className="text-muted fw-normal">
                        Stock
                      </th>
                      <th scope="col" className="text-muted fw-normal">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories.map((category) => (
                      <tr key={category._id}>
                        <td className="py-4">{category.name}</td>
                        <td className="py-4"></td>
                        <td className="py-4"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <input
                type="text"
                className="bg-white text-dark rounded p-2 border"
                placeholder="Search Category..."
              />
              <div className="text-sm text-muted-foreground">
                Showing 1-10 of 100 books
              </div>
            </div>
          </div>

          {/* Author management */}
          <div className="w-50">
            <div className="d-flex justify-content-between  align-items-center">
              <div>
                <h3 className="fw-bold">Author Management</h3>
                <p className="text-muted">
                  Manage the author of books in your store
                </p>
              </div>
              <div>
                <button onClick={handleAddAuthorClick} className="btn btn-dark">
                  Add Author
                </button>
              </div>
            </div>

            <div>
              {authors ? (
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col" className="text-muted fw-normal">
                        Name
                      </th>
                      <th scope="col" className="text-muted fw-normal">
                        Stock
                      </th>
                      <th scope="col" className="text-muted fw-normal">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {authors.map((author) => (
                      <tr key={author._id}>
                        <td className="py-4">{author.name}</td>
                        <td className="py-4"></td>
                        <td className="py-4"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>Loading...</p>
              )}
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <input
                type="text"
                className="bg-white text-dark rounded p-2 border"
                placeholder="Search Author..."
              />
              <div className="text-sm text-muted-foreground">
                Showing 1-10 of 100 books
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Logged;