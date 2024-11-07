import './Form.css'

const Form = () => {
  return (
    <form className="form-container">
      <h2 className="form-heading">
        Let&apos;s Work Together
      </h2>
      <p className="form-description">
        I am dedicated to creating innovative solutions that meet your unique
        needs. By combining modern design principles with user-centered
        approaches, I ensure that your project not only looks great but also
        functions seamlessly. Let&apos;s collaborate to turn your ideas into
        reality and create impactful digital experiences together.
      </p>

      <div className="form-inputs">
        <input
          type="text"
          name="name"
          required
          className="form-input"
          placeholder="Your Name"
        />
        <input
          type="email"
          name="email"
          required
          className="form-input"
          placeholder="Your Email"
        />
        <input
          type="text"
          name="subject"
          required
          className="form-input"
          placeholder="Subject"
        />
        <input
          type="text"
          name="company"
          required
          className="form-input"
          placeholder="Your Company"
        />
      </div>
      <textarea
        name="message"
        required
        className="form-textarea"
        placeholder="Your Message"
      ></textarea>
      <button type="submit" className="form-submit-button">
        Send Message
      </button>
    </form>
  );
};

export default Form;