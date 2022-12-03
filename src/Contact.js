import styled from "styled-components";

const Contact = () => {
  return <div className="container mt-5">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-center">Contact Page</h2>
                </div>
                <div className="col-md-12 mt-5">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14376.493314557716!2d89.25260778098827!3d25.733434838391847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e32decb8f523cb%3A0x815e7e69f44654d3!2sAlomnagar%2C%20Rangpur!5e0!3m2!1sen!2sbd!4v1668263993191!5m2!1sen!2sbd" style={{ width :'100%',minHeight:'450px' }}></iframe>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-md-6 mx-auto">
                  <form action="https://formspree.io/f/xrgdrwvl" method="post">
                    <div className="form-gorup mb-3">
                      <input type="text" name="username" className="form-control" required autoComplete="off" placeholder="username" id="username" />
                    </div>
                    <div className="form-gorup mb-3">
                      <input type="email" name="email" className="form-control" required autoComplete="off" placeholder="email" id="email" />
                    </div>
                    <div className="form-gorup mb-3">
                      <textarea name="details" placeholder="write your message.." required autoComplete="off" className="form-control" id="details"></textarea>
                    </div>
                    <div className="form-group text-center">
                      <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
};

export default Contact;
