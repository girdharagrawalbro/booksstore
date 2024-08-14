"use client"
import React from 'react'
import { useRef } from "react"
import { submitAction } from "../../actions/form"

export default function contact() {
  let ref = useRef()
  return (
    <>
      <section className="bg-white align-items-center px-5 vh-100 mt-5">
        <div className="container-xxl d-flex flex-column gap-5">
          <div className="d-flex flex-column text-center mt-5">
            <h1 className="fw-bold display-4">Contact Us</h1>
            <h5 className='text-muted'>
              Get in touch with us for any inquiries or feedback.
            </h5>
          </div>
          <div className="d-flex gap-5">
            <div className="shadow py-3 px-4 rounded w-50">
              <h4 className="fw-bold">Send us a message</h4>
              <form className='mt-3' ref={ref} action={(e) => { submitAction(e); ref.current.reset() }}>
                <div className="d-flex flex-column mb-4">
                  <label
                    className="text-sm"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="px-3 py-2 rounded bg-white text-dark border"
                    type="text"
                    id="name"
                    name='name'
                    placeholder="Enter your name"
                  />
                </div>
                <div className="d-flex flex-column mb-4">
                  <label
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="px-3 py-2 rounded bg-white text-dark border"
                    type="email"
                    id="email"
                    name='email'
                    placeholder="Enter your email"
                  />
                </div>
                <div className="d-flex flex-column mb-4">
                  <label
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="px-3 py-2 rounded bg-white border text-dark"
                    id="message"
                    name='message'
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  className="btn btn-dark w-100"
                  type="submit"
                >
                  Send Message
                </button>
              </form>
            </div>
            <div className="shadow py-3 px-4 rounded w-50">
              <h4 className="fw-bold">Contact Information</h4>
              <div className="mt-4 d-flex flex-column gap-4">
                <div className="d-flex align-items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-dark"
                  >
                    <line x1="2" x2="5" y1="12" y2="12"></line>
                    <line x1="19" x2="22" y1="12" y2="12"></line>
                    <line x1="12" x2="12" y1="2" y2="5"></line>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                    <circle cx="12" cy="12" r="7"></circle>
                  </svg>
                  <div className='d-flex flex-column'>
                    <h6 className='fw-bold'>Bookstore HQ</h6>
                    <span className="text-muted">123 Main St, Anytown USA</span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-dark"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div className='d-flex flex-column'>
                    <h6 className='fw-bold'>Phone</h6>
                    <span className="text-muted">+1 (555) 555-5555</span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-dark"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                  <div className='d-flex flex-column'>
                    <h6 className='fw-bold'>Email</h6>
                    <span className="text-muted">info@bookstore.com</span>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="text-dark"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div className='d-flex flex-column'>
                    <h6 className='fw-bold'>Business Hours</h6>
                    <span className="text-muted">Mon-Sat: 9am - 7pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}