import "./contact.css";

function Contact() {
  return (
    <div className="form-con">
      <form>
        <h1>Send a message to us!!</h1>
        <input type="text" placeholder="Name" />
        <input type="Email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="4" />
      </form>
      <button>Send Message</button>
    </div>
  );
}
export default Contact;
