import React from 'react'

const Admin = () => {
    return (
        <>
      
            <section className="bg-white align-items-center mt-5">
                <div className="shadow py-3 px-4 w-50 mx-auto">
                    <h4 className="fw-bold">Admin Login</h4>
                    <form className='mt-3'>
                        <div className="d-flex flex-column mb-4">
                            <label
                                className="text-sm"
                                htmlFor="name"
                            >
                                Role
                            </label>

                            <select className='px-3 py-2 rounded bg-white border text-dark'>
                                <option>
                                    Select Role
                                </option>
                                <option>
                                    Something
                                </option>
                            </select>
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                className="px-3 py-2 rounded bg-white border text-dark"
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="d-flex flex-column mb-4">
                            <label
                                htmlFor="password"
                            >
                                Password
                            </label>
                            <input
                                className="px-3 py-2 rounded bg-white text-dark border"
                                id="message"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            className="btn btn-dark w-100"
                            type="submit"
                        >
                            Login
                        </button>
                    </form>
                </div>

            </section>
         </>
    )
}

export default Admin