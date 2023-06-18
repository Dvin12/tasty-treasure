function ContactForm() {
  return (
    <form className="flex w-full flex-col p-4 xl:mt-28  ">
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
        <button className="mt-6 rounded-md bg-green-600 px-12 py-4 text-center text-lg text-white duration-300 hover:bg-green-700 xl:mt-6 xl:w-fit xl:px-8 xl:py-2 xl:text-base">
          Submit
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
