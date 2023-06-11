function Contact() {
  return (
    <section className="bg-gray-100 h-fit">
      <div className="grid grid-cols-2 items-center justify-items-center mx-60 py-20">
        <div>
          <h4 className="text-3xl">We would love to hear from you! </h4>
          <p>
            Whether you have a question, feedback, or simply want to say hello,
            please don't hesitate to reach out. Our team is here to assist you
            and make your experience on our recipe website the best it can be.
            Feel free to fill out the form below with your name, email address,
            and message, and we will get back to you as soon as possible.
            Alternatively, you can contact us directly via email or phone using
            the information provided below. We appreciate your interest in our
            recipes and look forward to connecting with you!
          </p>
        </div>

        <form className="flex flex-col">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
