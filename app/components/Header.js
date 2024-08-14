import React from 'react'
import Link from "next/link"
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = ({ admin }) => {
  return (
    <>
      <header className="text-bg-light px-4 py-2 d-flex position-fixed top-0 w-100 align-items-center justify-content-between border">
        <div className="d-flex align-items-center gap-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-dark"
            >
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
            </svg>
          </div>
          <div>
            <h1 className="fw-bold h3 mb-0">Bookworm</h1>
          </div>
        </div>
        <div className="align-items-center">


              <ul className="d-flex text-dark gap-5 align-items-center mb-0">
                <li><Link className="text-dark text-decoration-none" href='/'>Home
                </Link></li>
                <li><a className="text-dark text-decoration-none" href='/#new'>New Arrivals
                </a></li>
                <li><a className="text-dark text-decoration-none" href='/#categories'>Categories
                </a></li>
                <li><Link className="text-dark text-decoration-none" href='/about'>About</Link></li>
                <li><Link className="text-dark text-decoration-none" href='/contact'>Contact</Link></li>
              </ul>

          

        </div>
        <div className="d-flex gap-2 align-items-center">

          <button className="btn btn-outline-dark btn-sm">
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
              class="size-4"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg></button>
          {admin === "true" ? <></> :
            <button className="btn btn-outline-dark btn-sm"><svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg></button>
          }
        </div>
      </header>
    </>
  )
}

export default Header
