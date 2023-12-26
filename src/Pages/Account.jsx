import React from "react";

const Account = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <section className="vh-100">
              <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                  <div className="col-xl-9">
                    <h1 className="text-dark mb-4 fw-bold">Create Account</h1>
                    <div className="card" style={{ borderRadius: "15px" }}>
                      <div className="card-body">
                        <div className="row align-items-center pt-4 pb-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">Full name</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <input
                              type="text"
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>

                        <div className="row align-items-center py-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">Email address</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <input
                              type="email"
                              className="form-control form-control-lg"
                              placeholder="example@example.com"
                            />
                          </div>
                        </div>

                        <div className="row align-items-center py-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">Full name</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <textarea
                              className="form-control"
                              rows="3"
                              placeholder="Message sent to the employer"
                            ></textarea>
                          </div>
                        </div>

                        <div className="row align-items-center py-3">
                          <div className="col-md-3 ps-5">
                            <h6 className="mb-0">Upload CV</h6>
                          </div>
                          <div className="col-md-9 pe-5">
                            <input
                              className="form-control form-control-lg"
                              id="formFileLg"
                              type="file"
                            />
                            <div className="small text-muted mt-2">
                              Upload your CV/Resume or any other relevant file.
                              Max file size 50 MB
                            </div>
                          </div>
                        </div>

                        <div className="px-5 py-4">
                          <button
                            type="submit"
                            className="btn btn-success btn-lg"
                          >
                            Send application
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
