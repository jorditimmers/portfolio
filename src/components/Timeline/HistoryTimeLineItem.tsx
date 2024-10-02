import { ChevronDownIcon } from "@heroicons/react/24/outline";
import {
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
} from "@material-tailwind/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface HistoryTimeLineItemProps {
    icon: JSX.Element;
    bodyText: string;
    headerText: string;
    periodText: string;
    hideTimeLineConnector?: boolean;
}

export default function HistoryTimeLineItem({
    icon,
    bodyText,
    headerText,
    periodText,
    hideTimeLineConnector,
}: HistoryTimeLineItemProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Timeline>
            <TimelineItem className="pb-2">
                {hideTimeLineConnector ? null : <TimelineConnector />}
                <TimelineHeader
                    onClick={toggleOpen}
                    className="cursor-pointer flex items-center justify-between"
                >
                    <div className="flex items-center">
                        <TimelineIcon className="p-3 bg-secondary-300 dark:bg-secondary-400">
                            {icon}
                        </TimelineIcon>
                        <div className="ml-3">
                            <h4 className="text-text-900">{headerText}</h4>
                            <p className="text-secondary-600">{periodText}</p>
                        </div>
                    </div>
                    <motion.div
                        className="ml-3"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronDownIcon className="w-6 h-6 text-text-900" />
                    </motion.div>
                </TimelineHeader>
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                >
                    <TimelineBody className="pb-8">
                        <p className="text-text-900">{bodyText}</p>
                    </TimelineBody>
                </motion.div>
            </TimelineItem>
        </Timeline>
    );
}
