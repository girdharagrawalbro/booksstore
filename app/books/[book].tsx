import React from 'react'
import Header from "../components/header"

export default function PostDetails({
  params,
}:
  {
    params: {
      book: string
    };

  }) {
  return (
    <>
      <Header />
      <section className='section bg-white mt-5 d-flex p-5'>
        <div className='w-50'><img alt="img" /> </div>
        <div className='w-50'>
          <h2 className='fw-bold'>{params.book}</h2>
          <h5 className='fw-bold text-muted'>Harish Rai Bacchan</h5>
          <p className='mt-4'>
            The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway s interactions with his millionaire neighbor, Jay Gatsby</p>
          <h3 className='fw-bold'>$ 14.99</h3>
          <div className='d-flex gap-3'>
          <button className='btn btn-dark'>Buy Now</button>
          <button className='btn btn-white border'>Add to Wishlist</button>

          </div>
        </div>
      </section>
    </>
  )
}