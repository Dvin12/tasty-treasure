import { BsTwitter, BsFacebook, BsWhatsapp } from "react-icons/bs";
function Contact() {
  return (
    <section className="bg-gray-200 h-fit">
      <div className="xl:grid xl:grid-cols-2 flex flex-col items-center justify-center py-20 justify-items-center xl:mx-60  xl:gap-20">
        <div>
          <h4 className="text-3xl text-center xl:text-left">
            We would love to hear from you!{" "}
          </h4>
          <p className="my-5 text-justify xl:text-left p-8 xl:p-0">
            Whether you have a question, feedback, or simply want to say hello,
            please don't hesitate to reach out. Our team is here to assist you
            and make your experience on our recipe website the best it can be.
          </p>
          <ul className="flex gap-8 text-2xl items-center justify-center xl:items-start xl:justify-start my-8 xl:my-0">
            <li>
              <BsTwitter></BsTwitter>
            </li>
            <li>
              <BsWhatsapp></BsWhatsapp>
            </li>
            <li>
              <BsFacebook></BsFacebook>
            </li>
          </ul>
        </div>

        <form className="flex flex-col w-full p-4  ">
          <input
            type="text"
            placeholder="Name"
            className="p-2 bg-transparent border-b-2 my-4 border-gray-400 active:border-green-600 duration-300 outline-none focus:border-green-600"
          />
          <input
            type="text"
            placeholder="Email"
            className="p-2 bg-transparent border-b-2 my-4  border-gray-400 active:border-green-600 duration-300 outline-none focus:border-green-600"
          />
          <textarea
            rows="6"
            cols="40"
            placeholder="Message"
            className="p-2 bg-transparent border-b-2 my-4  border-gray-400 active:border-green-600 duration-300 outline-none focus:border-green-600"
          ></textarea>
          <div className="flex items-center justify-center mt-4">
            <button className="bg-green-700 xl:w-fit text-center mt-6 xl:mt-6 xl:py-2 xl:px-8 py-4 px-12 text-lg xl:text-base rounded-md text-white hover:bg-green-800 duration-300">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
