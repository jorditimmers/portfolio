import {
    Button,
    Timeline,
    TimelineBody,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineItem,
} from "@material-tailwind/react";

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
    return (
        <Timeline>
            <TimelineItem>
                {hideTimeLineConnector ? null : <TimelineConnector />}
                <TimelineHeader>
                    <TimelineIcon className="p-3 bg-secondary-300 dark:bg-secondary-400">
                        {icon}
                    </TimelineIcon>
                    <h4 className="text-text-900">{headerText}</h4>
                    <p className="text-secondary-600">{periodText}</p>
                </TimelineHeader>
                <TimelineBody className="pb-8">
                    <p className="text-text-900">{bodyText}</p>
                </TimelineBody>
            </TimelineItem>
        </Timeline>
    );
}
