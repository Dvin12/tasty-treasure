import { BsTwitter, BsFacebook, BsWhatsapp } from "react-icons/bs";
import { FiMail, FiPhone } from "react-icons/fi";
function ContactInfo() {
  return (
    <div>
      <h4 className="text-center text-3xl xl:text-left">
        We would love to hear from you!{" "}
      </h4>
      <p className="my-5 p-8 text-justify xl:p-0 xl:text-left">
        Whether you have a question, feedback, or simply want to say hello,
        please don't hesitate to reach out. Our team is here to assist you and
        make your experience on our recipe website the best it can be.
      </p>
      <ul className="my-8 flex flex-col gap-4">
        <li className="flex items-center gap-4 text-lg">
          <FiMail className="text-xl"></FiMail>
          <span>info@tastytreasure.com</span>
        </li>
        <li className="flex items-center gap-4 text-lg">
          <FiPhone className="text-xl"></FiPhone>
          <span>575-832-3926</span>
        </li>
      </ul>

      <ul className="my-8 flex items-center justify-center gap-4 text-xl xl:my-0 xl:items-start xl:justify-start">
        <li className="cursor-pointer text-gray-500 duration-300 hover:text-blue-400">
          <BsTwitter></BsTwitter>
        </li>
        <li className="cursor-pointer text-gray-500 duration-300 hover:text-green-600 ">
          <BsWhatsapp></BsWhatsapp>
        </li>
        <li className="cursor-pointer text-gray-500 duration-300 hover:text-blue-600 ">
          <BsFacebook></BsFacebook>
        </li>
      </ul>
    </div>
  );
}

export default ContactInfo;
