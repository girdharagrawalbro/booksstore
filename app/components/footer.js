import React from 'react'

const Footer = () => {
  return (
    <footer className="py-4 text-start bg-light">
    <div className="d-flex justify-content-between px-5">
      <div className='text'>
        <h5 className="fw-semibold">Company</h5>
        <nav className="nav flex-column">
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">About Us</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Our Team</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Careers</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">News</a>
        </nav>
      </div>
      <div>
        <h5 className="fw-semibold">Products</h5>
        <nav className="nav flex-column">
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Fiction</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Non-Fiction</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Classics</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">New Releases</a>
        </nav>
      </div>
      <div>
        <h5 className="fw-semibold">Resources</h5>
        <nav className="nav flex-column">
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Blog</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Reading Lists</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Author Interviews</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">FAQs</a>
        </nav>
      </div>
      <div>
        <h5 className="fw-semibold">Legal</h5>
        <nav className="nav flex-column">
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Privacy Policy</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Terms of Service</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Cookie Policy</a>
        </nav>
      </div>
      <div>
        <h5 className="fw-semibold">Contact</h5>
        <nav className="nav flex-column">
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Customer Service</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Partnerships</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Press</a>
          <a className="nav-link p-0 text-muted" href="#" rel="ugc">Feedback</a>
        </nav>
      </div>
    </div>
  </footer>
  )
}

export default Footer