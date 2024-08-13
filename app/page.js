import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function Home() {
  return (
    <>
    <Header />
    
      <section className='text-bg-dark align-items-center d-flex px-5 section mt-5'>
        <div className='w-100 d-flex align-items-center justify-content-between px-5'>
          <div className='gap-2 d-flex flex-column align-items-start'>
            <h1 className="fw-bold h1 display-3">Discover Your Next <br/> Great Read</h1>
            <h6 className="text-secondary lead">
              Explore our curated selection of the latest book releases and <br/> find your perfect read.
            </h6>
            <button className='btn text-bg-light'>
              View Book Details
            </button>
          </div>
          <div>
            <img className="main-img" alt='img'src="https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?cs=srgb&dl=background-book-stack-books-1148399.jpg&fm=jpg"/>
          </div>
        </div>
      </section>
      <section className='bg-white align-items-center d-flex flex-column section py-5' id='new'>
        <div className='d-flex align-items-center flex-column gap-2 mt-5'>
          <button className='btn btn-sm btn-outline-secondary'>New Arrivals </button>
          <h1 className='fw-bold'>Discover the Latest Books</h1>
          <h5 className='text-secondary'>
            Check out our selection of the newest books in the store.
          </h5>
        </div>
        <div className="d-flex">
          <div className='card p-3'>
            <img alt='img' className='box-img' src='https://images.pexels.com/photos/1148399/pexels-photo-1148399.jpeg?cs=srgb&dl=background-book-stack-books-1148399.jpg&fm=jpg' />
            <h5>The Greatre Getsby</h5>
            <h5 className='text-secondary'>
              description
            </h5>
            <button className='btn btn-dark btn-sm'>View Details</button>

          </div>
        </div>
      </section>

      <section className='bg-light align-items-center d-flex section justify-content-center' id='categories'>
        <div className='d-flex flex-column gap-3 align-items-center'>
          <button className='btn btn-sm btn-outline-secondary'>Popular Categories</button>
          <h1 className='fw-bold'>Explore Our Book Categories</h1>
          <h5 className=''>
            Browse our wide selection of books across various genres and categories.
          </h5>
          <div className='d-flex gap-4 w-100'>
            <button className='btn btn-box bg-white text-secondary'>Non-Fiction</button>
            <button className='btn btn-box bg-white text-secondary'>Fiction</button>
            <button className='btn btn-box bg-white text-secondary'>Biography</button>
            <button className='btn btn-box bg-white text-secondary'>History</button>
            <button className='btn btn-box bg-white text-secondary'>Scirnce</button>
            <button className='btn btn-box bg-white text-secondary'>Romance</button>

          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
