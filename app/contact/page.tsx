import { Metadata } from "next";
import Contact from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with us for any inquiries or support.",
  keywords: "contact, support, inquiries, customer service",
  robots: "index, follow",
  openGraph: {
    title: "Contact Us",
    description: "Get in touch with us for any inquiries or support.",
    type: "website",
  },
};

const Page = () => {
  return (
      <Contact />
  );
};

export default Page;
