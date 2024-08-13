import React from 'react'
import Header from "../components/header"

const Checkout = () => {
    return (
        <>
            <Header admin="false"/>
            <section className="vh-full bg-white mt-5 p-5">
                <div className="d-flex gap-5">
                    <div className='w-50 rounded border shadow'>
                        <img
                            src="/placeholder.svg"
                            alt="Book Cover"
                            width="400"
                            height="600"
                        />
                    </div>
                    <div className="d-grid gap-2 w-50">
                        <h2 className="fw-bold">The Alchemist</h2>
                        <h6 className="text-muted">
                            By{" "}
                            <a className="text-primary" href="#" rel="ugc">
                                Paulo Coelho
                            </a>
                        </h6>
                        <h5 className="fw-bold">$14.99</h5>
                        <form className="d-flex flex-column">
                            <div className="d-flex flex-column mb-4">
                                <label

                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className="px-3 py-2 rounded bg-white border"
                                    id="name"
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
                                    className="px-3 py-2 rounded bg-white border"
                                    id="email"
                                    placeholder="Enter your email"

                                    type="email"
                                />
                            </div>
                            <div className="d-flex flex-column mb-4">
                                <label

                                    htmlFor="address"
                                >
                                    Address
                                </label>
                                <textarea
                                    className="px-3 py-2 rounded bg-white border"
                                    id="address"
                                    placeholder="Enter your address"

                                ></textarea>
                            </div>
                            <div className="d-flex flex-column mb-4">
                                <label

                                    htmlFor="card-number"
                                >
                                    Card Number
                                </label>
                                <input
                                    className="px-3 py-2 rounded bg-white border"
                                    id="card-number"
                                    placeholder="Enter your card number"

                                />
                            </div>

                            <div className="d-flex gap-2">
                                <div className="d-flex flex-column mb-4 w-100">
                                    <label

                                        htmlFor="expiry-year"
                                    >
                                        Expiry

                                    </label>
                                    <input
                                        className="px-3 py-2 rounded bg-white border"
                                        id="expiry"
                                        placeholder="Month/Year"

                                    />
                                </div>

                                <div className="d-flex flex-column mb-4 w-100">
                                    <label

                                        htmlFor="cvc"
                                    >
                                        CVC
                                    </label>
                                    <input
                                        className="px-3 py-2 rounded bg-white border"
                                        id="cvc"
                                        placeholder="Enter your CVC"

                                    />
                                </div>
                            </div>

                            <button
                                className="btn btn-dark"
                                type="submit"
                            >
                                Place Order
                            </button>
                        </form>

                    </div>
                </div>
                <div className="mt-5" data-v0-t="card">
                    <hr />
                    <div className="">
                        <h3 className="fw-bold">Order Summery</h3>
                        <div className='mt-3 justify-content-between d-flex'><h5 className='fw-normal'>Book Title:
                        </h5>
                            <h5 className='fw-normal'>
                                Book Name
                            </h5>
                        </div>
                        <div className='justify-content-between d-flex'><h5 className='fw-normal'>Author:
                        </h5>
                            <h5 className='fw-normal'>Author Name</h5>
                        </div><div className='justify-content-between d-flex'><h5 className='fw-normal'>Price:
                        </h5>
                            <h5 className='fw-normal'>
                                Price
                            </h5>
                        </div>
                    </div>
                    <hr />
                    <div className="">
                        <div className='mt-4 justify-content-between d-flex'><h5 className='fw-normal'>Sub Total:
                        </h5>
                            <h5 className='fw-normal'>
                                Book Name
                            </h5>
                        </div>
                        <div className='mt-3 justify-content-between d-flex'><h5 className='fw-normal'>Shipping:
                        </h5>
                            <h5 className='fw-normal'>Author Name</h5>
                        </div>
                        <div className='mt-3 justify-content-between d-flex'><h5 className='fw-bold'>Total:
                        </h5>
                            <h5 className='fw-bold'>Author Name</h5>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Checkout