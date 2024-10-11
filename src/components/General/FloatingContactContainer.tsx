import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import ContactButton from "./ContactButton";

export default function FloatingContactContainer() {
    return (
        <div className=" hidden md:block fixed bottom-10 right-8 rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg border border-background-100 dark:border-background-900 shadow-lg z-20">
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
