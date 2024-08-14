import React from 'react'
const about = () => {
  return (
    <>
      <section className="bg-white align-items-center vh-full mt-5">
        <div className="d-flex flex-column gap-5">

          <div className="d-flex flex-column text-center mt-5">
            <div className='d-flex gap-2 justify-content-center text-center align-items-center'>
              <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
              </svg>
              </span>

              <h1 className="fw-bold display-4">
                Bookworm Emporium</h1>
            </div>
            <h6 className='text-muted'>
              Discover the joy of reading at our cozy bookstore, where every corner is filled with the scent of adventure and the promise of new worlds.
            </h6>
          </div>

          <div>
            <div className="d-flex gap-5 p-5">
              <div className='w-50'>
                <h3 className='fw-bold'>
                  Explore Our Book Selection
                </h3>
                <p className='text-muted'>
                  From classic literature to the latest bestsellers, our shelves are stocked with a diverse range of books to satisfy every reader's taste. Whether you are a fan of fiction, non-fiction, or something in between, we have got you covered.
                </p>
                <button className='btn text-danger'>
                  Explore our books
                </button>
              </div>
              <div className='w-50'>
                <img className='' alt='img' />
              </div>

            </div>

            <div className='d-flex gap-5 mt-4 bg-light p-5'>
              <div className='w-50'>
                <img className='' alt='img' />
              </div>
              <div className='w-50'>
                <h3 className='fw-bold'>
                  Join Our Community Events
                </h3>
                <p className='text-muted'>
                  At Bookworm s Delight, we believe that reading is best enjoyed when shared with others. That s why we host a variety of community events, from author talks and book clubs to poetry readings and open mic nights. Come connect with fellow book lovers and discover new literary gems.
                </p>  
                <button className='btn text-danger'>
                  Explore Our Events 
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default about