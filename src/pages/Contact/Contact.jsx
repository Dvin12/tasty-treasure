import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";
function Contact() {
  return (
    <section className="h-fit bg-gray-200">
      <div className="flex flex-col items-center justify-center justify-items-center py-28 xl:mx-60 xl:grid xl:grid-cols-2 xl:gap-20  xl:py-20">
        <ContactInfo></ContactInfo>
        <ContactForm></ContactForm>
      </div>
    </section>
  );
}

export default Contact;
