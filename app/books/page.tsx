import React from 'react'
import Header from "../components/header"
import BookCard from "../components/BookCard"
const books = () => {
  return (
    <>
      <Header admin="false" />
      <section className='px-5 py-4 mt-5 section bg-white'>
        <h3 className='fw-bold'>Search result for </h3>

        <div className='d-flex flex-wrap gap-4 justify-content-between'>
          <BookCard />
        </div>
      </section>
    </>
  )
}

export default books