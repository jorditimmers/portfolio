import { motion } from "framer-motion";

interface ContactButtonProps {
  url?: string;
  render?: React.ReactNode;
}

export default function ContactButton({ url, render }: ContactButtonProps) {
  const handleClick = () => {
    if (url) window.open(url, "_blank");
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: { type: "spring", stiffness: 200 },
        boxShadow: "0px 0px 20px 0px rgba(153, 104, 202, 0.7)",
        y: -10,
      }}
      onClick={handleClick}
      className="p-5 m-2.5 rounded-full bg-secondary-400 dark:bg-secondary-800 hover:bg-secondary-500"
    >
      {render}
    </motion.button>
  );
}
