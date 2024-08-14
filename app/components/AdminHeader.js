import React from 'react'
import Link from 'next/link'

const AdminHeader = () => {
    return (
        <div className="bg-light adminheader">
            <ul className="d-flex text-dark gap-5 align-items-center mb-0 mx-auto  fw-bold">
                <li><Link className="text-dark text-decoration-none" href='#dashboard'>Dashboard
                </Link></li>
                <li><a className="text-dark text-decoration-none" href='#books'>Books
                </a></li>
                <li><a className="text-dark text-decoration-none" href='#orders'>Orders
                </a></li>
                <li><Link className="text-dark text-decoration-none" href='#contact'>Reports</Link></li>
                <li><Link className="text-dark text-decoration-none" href='#contact'>Contact</Link></li>
            </ul>

        </div>

    )
}

export default AdminHeader
