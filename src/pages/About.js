import BackToTopBtn from "../components/BackToTopBtn";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <h1>About Us</h1>
      <h3 className="about-title">
        You spend the most time at home - Why not love where you live.
      </h3>
      <div className="about-body">
        <p>
          Our mission is simple: to deliver exceptional quality and
          craftsmanship in every project we undertake. We understand that the
          right flooring can enhance the aesthetics, functionality, and value of
          any property. That's why we're dedicated to providing our clients with
          superior tiling solutions tailored to their unique needs and
          preferences
        </p>
        <p>
          Ready to transform your space with stunning floor tiling? Contact us
          today to schedule a consultation and discover why we're the preferred
          choice for all your tiling needs. Let us help you turn your flooring
          dreams into reality!
        </p>
      </div>
      <div className="testimonials">
        <h2>What our clients say</h2>
        <div className="testimonial">
          <p className="testimonials-body">
            "A job well done! I recently had my kitchen floors tiled by this
            company, and I'm extremely satisfied with the outcome. The team was
            professional, courteous, and skilled. They worked efficiently and
            left the space clean and tidy. I'm impressed with the quality of
            their workmanship and would definitely hire them again for future
            projects."
          </p>
          <h3 className="testimonial-author">- David H</h3>
        </div>
        <div className="testimonial">
          <p className="testimonials-body">
            "Highly professional and reliable! I hired this tiling company for a
            commercial project, and they delivered outstanding results within
            the specified timeframe. The craftsmanship is top-notch, and the
            finished floors have garnered numerous compliments. I wouldn't
            hesitate to work with them again."
          </p>
          <h3 className="testimonial-author">- Michael P</h3>
        </div>
        <div className="testimonial">
          <p className="testimonials-body">
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
            sequi illo illum veniam error, voluptatum repudiandae corrupti,
            dolor aut dignissimos dolorum et, nemo totam. Iusto harum fugit quo
            sint tempore? "
          </p>
          <h3 className="testimonial-author">- Sarah M.</h3>
        </div>
        <div className="testimonial">
          <p className="testimonials-body">
            "Impressive workmanship! The floor tiling crew transformed my dull
            flooring into a stunning masterpiece. They paid attention to every
            detail, ensuring a seamless finish. Their dedication to quality is
            evident in the final result. Couldn't be happier with the outcome!"
          </p>
          <h3 className="testimonial-author">- John S.</h3>
        </div>
        <div className="testimonial">
          <p className="testimonials-body">
            "Absolutely thrilled with the floor tiling job done by this company!
            From start to finish, the team was professional, efficient, and
            meticulous in their work. They helped me choose the perfect tiles
            for my space and executed the installation flawlessly. Highly
            recommend!"
          </p>
          <h3 className="testimonial-author">- Jane M.</h3>
        </div>
        <div className="testimonial">
          <p className="testimonials-body">
            "Five-star experience all around! This tiling company was a pleasure
            to work with from start to finish. They communicated effectively,
            arrived on time, and completed the job with precision. My new tiled
            floors have completely transformed the look of my home. I
            wholeheartedly recommend their services."
          </p>
          <h3 className="testimonial-author">- Emily R.</h3>
        </div>
      </div>
      <BackToTopBtn />
    </div>
  );
}

export default About;
