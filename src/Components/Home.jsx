import React from "react";
import { useUserContext } from "./context/usercontext";

function Home() {
  const { name, setName, email, setEmail, phone, setPhone, handleFormSubmit } =
    useUserContext();
  const formId = 11;
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-lg-7 text-center text-lg-start">
          
          <img
            src="data:image/jpeg;base64,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"
            className="img-fluid"
            alt="Contact Us Illustration"
           
          />
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
            <h2 className="display-4 fw-bold lh-1 text-white mb-4">
              Enter Your <span className="text-danger">Data</span>
            </h2>
          <form
            className="p-4 p-md-5 border rounded bg-light"
            onSubmit={(e) => handleFormSubmit(e, { name, email, phone }, formId)}
          >
            
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="nameInput"
                placeholder="Enter the Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="emailInput"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="floatingNumber"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberCheck"
              />
              <label className="form-check-label" htmlFor="rememberCheck">
                Remember me
              </label>
            </div>
            <button className="btn btn-primary w-100" type="submit">
              Add To List
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
