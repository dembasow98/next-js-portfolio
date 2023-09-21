import emailjs from "emailjs-com";
import { useState } from "react";
require('dotenv').config();

const Contact = () => {
  const [mailData, setMailData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });
  const { from_name, from_email, message, subject } = mailData;
  const [error, setError] = useState(null);
  const onChange = (e) =>
    setMailData({ ...mailData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      from_name.length === 0 ||
      from_email.length === 0 ||
      message.length === 0 ||
      subject.length === 0
    ) {
      setError(true);
      clearError();
    } else {

      emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID,process.env.NEXT_PUBLIC_TEMPLATE_ID,mailData,process.env.NEXT_PUBLIC_PUBLIC_KEY)  
      .then(
          (response) => {
            setError(false);
            clearError();
            setMailData({ name: "", email: "", message: "", subject: "" });
          },
          (err) => {
            console.log(err.text);
          }
        );
    }
  };
  const clearError = () => {
    setTimeout(() => {
      setError(null);
    }, 2000);
  };
  return (
    <section
      id="contactus"
      data-nav-tooltip="Contact Me"
      className="pp-section pp-scrollable section dark-bg"
    >
      <div className="container">
        <div className="title">
          <h3>Get in touch.</h3>
        </div>
        <div className="row">
          <div className="col-lg-5 col-xl-4 m-15px-tb">
            <div className="contact-info">
              <h4>What’s your story? Get in touch</h4>
              <p>
                Always available if the right project comes
                along, Feel free to contact me.
              </p>
              <ul>
                <li className="media">
                  <i className="ti-map" />
                  <span className="media-body">
                  Kemalpaşa Mahallesi, 704. Sk., No:1, 54050 Serdivan/Sakarya
                  </span>
                </li>
                <li className="media">
                  <i className="ti-email" />
                  <span className="media-body">dastech1998@gmail.com</span>
                </li>
                <li className="media">
                  <i className="ti-mobile" />
                  <span className="media-body">+90 538 814 76 41</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7 col-xl-8 m-15px-tb">
            <div className="contact-form">
              <h4>Say Something</h4>
              <form id="contact-form" onSubmit={(e) => onSubmit(e)}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="from_name"
                        onChange={(e) => onChange(e)}
                        value={from_name}
                        id="name"
                        placeholder="Name *"
                        className={`form-control ${
                          error ? (!from_name ? "invalid" : "") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        name="from_email"
                        onChange={(e) => onChange(e)}
                        value={from_email}
                        id="email"
                        placeholder="Email *"
                        className={`form-control ${
                          error ? (!from_email ? "invalid" : "") : ""
                        }`}
                        type="email"
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input
                        name="subject"
                        onChange={(e) => onChange(e)}
                        value={subject}
                        id="subject"
                        placeholder="Subject *"
                        className={`form-control ${
                          error ? (!subject ? "invalid" : "") : ""
                        }`}
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        onChange={(e) => onChange(e)}
                        value={message}
                        id="message"
                        placeholder="Your message *"
                        rows={5}
                        className={`form-control ${
                          error ? (!message ? "invalid" : "") : ""
                        }`}
                      />
                    </div>
                  </div>
                  <div className="d-flex col-md-12">
                    <div className="send">
                      <input
                        className="px-btn px-btn-theme"
                        type="submit"
                        value="send message"
                      />
                    </div>
                    <div className="d-flex mx-4 my-2">
                     
                      <span
                        id="suce_message"
                        className="text-success"
                        style={{
                          display:
                            error !== null ? (!error ? "block" : "none") : "none",
                        }}
                      >
                        Message Sent Successfully!!!
                      </span>
                      <span
                        id="err_message"
                        className="text-danger"
                        style={{ display: "none" }}
                      >
                        Message Sending Failed
                      </span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12">
            <div className="google-map">
              <div className="embed-responsive embed-responsive-21by9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d11747.10911186441!2d30.33000364171304!3d40.743736650501646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssakarya%20university!5e0!3m2!1sen!2str!4v1695199501597!5m2!1sen!2str" 
                allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;