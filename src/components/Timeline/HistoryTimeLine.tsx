import {
    BriefcaseIcon,
    BookOpenIcon,
    AcademicCapIcon,
    UserGroupIcon,
} from "@heroicons/react/24/outline";
import HistoryTimeLineItem from "./HistoryTimeLineItem";

export default function History() {
    return (
        <div className="min-w-screen min-h-screen flex justify-center items-center py-4">
            <div className="w-[38rem]">
                <HistoryTimeLineItem
                    bodyText={`During my Java traineeship at Axxes, I refreshed and 
                        expanded my software development skills through intensive, 
                        hands-on training with technologies like AWS, Spring Boot, 
                        Java, Angular, and React. I worked on developing scalable 
                        backend services, building dynamic user interfaces, and d
                        eploying applications on AWS, while also gaining experience 
                        in project management and communication tools. This 
                        omprehensive program strengthened my technical abilities and 
                        soft skills, preparing me to effectively deliver solutions in 
                        client-focused environments.`}
                    headerText={"Traineeship - Axxes"}
                    periodText={"2024"}
                    icon={<UserGroupIcon className="h-8 w-8" />}
                />
                <HistoryTimeLineItem
                    bodyText={`During my internship at Axxes, I worked with a team of
                        interns to develop an interactive job fair game for the
                        HR department. I contributed to the entire process, from
                        brainstorming and analysis to designing the UI/UX, and
                        developing both the front-end and back-end.
                        Additionally, I helped deploy the application on AWS,
                        ensuring it effectively engaged job fair attendees and
                        provided valuable recruitment data.`}
                    headerText={"Internship - Axxes"}
                    periodText={"2024"}
                    icon={<BookOpenIcon className="h-8 w-8" />}
                />
                <HistoryTimeLineItem
                    bodyText={`During my student job at BIQS IT, I independently 
                        developed an external application to simplify time logging 
                        for employees using Microsoft Navision. The app integrated 
                        seamlessly with Navision, eliminating the need for a VPN 
                        connection and providing a more efficient, user-friendly interface. 
                        This solution improved the overall user experience and streamlined 
                        the time-logging process.`}
                    headerText={"Student job - BIQS IT"}
                    periodText={"2023"}
                    icon={<BriefcaseIcon className="h-8 w-8" />}
                />
                <HistoryTimeLineItem
                    bodyText={`I hold a Bachelor’s degree in Electronics/ICT with a 
                        major in Software Development. Throughout my studies, I gained 
                        experience with various technologies, from front-end development 
                        to cloud deployment, covering the full software development 
                        lifecycle. Over time, I found myself particularly drawn to front-end 
                        development, enjoying the process of creating intuitive and engaging 
                        user interfaces, while still being capable of working across the 
                        entire development cycle.`}
                    headerText={"Bachelor - AP Hogeschool"}
                    periodText={"2021 - 2024"}
                    hideTimeLineConnector={true}
                    icon={<AcademicCapIcon className="h-8 w-8" />}
                />
            </div>
        </div>
    );
}
