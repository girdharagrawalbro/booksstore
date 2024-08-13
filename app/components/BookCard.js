import React from 'react'
import Link from "next/link"

const BookCard = () => {
  return (
    <>
    <Link href="/blogs/blog1" className='border px-3 py-2 book-box shadow'>
    <h5 className='fw-bold'>Blog 1</h5>
    <h6 className='text-muted fw-bold'>Harivash Rai Bacchan</h6>
    <h6 className='fw-bold'>$ 14.00</h6>
  </Link>
  </>
  )
}

export default BookCard