import { FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import ContactButton from "./ContactButton";

export default function FloatingContactContainer() {
    return (
        <div className="fixed bottom-10 right-10 bg-white-500 rounded-full bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-70 border border-background-100 shadow-lg">
            <ContactButton
                render={<FaLinkedinIn className="size-6 fill-text-50" />}
                url="https://www.linkedin.com/in/jordi-timmers-270459198/"
            />
            <ContactButton
                render={<IoMail className="size-6 fill-text-50" />}
                url="mailto:timmersjordi@outlook.com"
            />
        </div>
    );
}
