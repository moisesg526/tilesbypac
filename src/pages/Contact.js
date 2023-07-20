import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-body">
        <p>
          If you have any questions, concerns or want any information on the
          products and services we provide please dont hesitate to call us. We
          gladyly reply to texts.
        </p>
        <h3>
          Location <i className="fa-solid fa-map-location-dot fa-xl"></i>
        </h3>
        <p>
          We currently don't have a showroom. But are glad to schedule an
          appointment for free estimates anywhere in the five boroughs. We are
          based of Staten Island but willing to travel with advance scheduling
          anywhere in New York and New Jersey.
        </p>
        <h3>
          Hours <i className="fa-solid fa-clock fa-xl"></i>
        </h3>
        <ul>
          <li>Monday - Thursday: 6am - 6pm</li>
          <li>Friday: 6am - 4pm</li>
          <li>Saturday & Sunday: Available by advance scheduling</li>
        </ul>
        <h3>
          Contact Info{" "}
          <i className="fa-solid fa-mobile-screen-button fa-xl"></i>
        </h3>
        <ul>
          <li>Phone: (123) 456 - 7890</li>
          <li>Email: Tilesbypac@gmail.com</li>
        </ul>
        <div className="contact-quote">
          <a href="mailto:tilesbypac@abc.com" className="quote-btn contact-quote-btn">
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
