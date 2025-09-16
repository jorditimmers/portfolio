import { IoMail } from "react-icons/io5";
import { FaLinkedinIn } from "react-icons/fa";
// @ts-ignore
import ContactButton from "./ContactButton";

export default function ContactInfo() {
    return (
        <div className="flex flex-row md:hidden w-full justify-center items-center">
            <ContactButton
                render={
                    <FaLinkedinIn className="size-6 fill-text-50 dark:fill-text-50" />
                }
                url="https://www.linkedin.com/in/jordi-timmers-270459198/"
            />
            <ContactButton
                render={
                    <IoMail className="size-6 fill-text-50 dark:fill-text-50" />
                }
                url="mailto:timmersjordi@outlook.com"
            />
        </div>
    );
}
