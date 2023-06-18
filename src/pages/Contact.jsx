import { BsTwitter, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FiMail, FiPhone } from "react-icons/fi";
function Contact() {
  return (
    <section className="h-fit bg-gray-200">
      <div className="flex flex-col items-center justify-center justify-items-center py-20 xl:mx-60 xl:grid xl:grid-cols-2  xl:gap-20">
        <div>
          <h4 className="text-center text-3xl xl:text-left">
            We would love to hear from you!{" "}
          </h4>
          <p className="my-5 p-8 text-justify xl:p-0 xl:text-left">
            Whether you have a question, feedback, or simply want to say hello,
            please don't hesitate to reach out. Our team is here to assist you
            and make your experience on our recipe website the best it can be.
          </p>
          <ul className="my-8 flex flex-col gap-4">
            <li className="flex items-center gap-4 text-xl">
              <FiMail className="text-2xl"></FiMail>
              <span>info@tastytreasure.com</span>
            </li>
            <li className="flex items-center gap-4 text-xl">
              <FiPhone className="text-2xl"></FiPhone>
              <span>575-832-3926</span>
            </li>
          </ul>

          <ul className="my-8 flex items-center justify-center gap-8 text-2xl xl:my-0 xl:items-start xl:justify-start">
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

        <form className="flex w-full flex-col p-4 xl:my-20  ">
          <input
            type="text"
            placeholder="Name"
            className="my-4 border-b-2 border-gray-400 bg-transparent p-2 outline-none duration-300 focus:border-green-600 active:border-green-600"
          />
          <input
            type="text"
            placeholder="Email"
            className="my-4 border-b-2 border-gray-400 bg-transparent  p-2 outline-none duration-300 focus:border-green-600 active:border-green-600"
          />
          <textarea
            rows="6"
            cols="40"
            placeholder="Message"
            className="my-4 border-b-2 border-gray-400 bg-transparent  p-2 outline-none duration-300 focus:border-green-600 active:border-green-600"
          ></textarea>
          <div className="mt-4 flex items-center justify-center">
            <button className="mt-6 rounded-md bg-green-700 px-12 py-4 text-center text-lg text-white duration-300 hover:bg-green-800 xl:mt-6 xl:w-fit xl:px-8 xl:py-2 xl:text-base">
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
