import {
    BriefcaseIcon,
    BookOpenIcon,
    AcademicCapIcon,
    UserGroupIcon, BuildingOfficeIcon,
} from "@heroicons/react/24/outline";
import HistoryTimeLineItem from "./HistoryTimeLineItem";
import TextAnim from "../greeting/TextAnim";

export default function History() {
    return (
        <div className="min-w-screen flex flex-col justify-center items-center pb-16 md:pb-32 px-6">
            <TextAnim text={"My journey so far:"} duration={3} />
            <hr className="w-full max-w-2xl mb-8 border-t-2 border-text-900 rounded-full opacity-20" />
            <div className="w-full max-w-lg">
                <HistoryTimeLineItem
                    bodyText={`At DPG Media, I work in the team that manages the company’s payment service 
                    provider (PSP) which we call the PPSP. This was a totally new area for me, and I’ve learned a lot while working 
                    on this project. I’ve been using AWS extensively and have spent a lot of time improving 
                    the PPSP and PPSP Portal. I worked on the design and user experience of the portal, as well as 
                    adding features like showing all payment and refund details and giving stakeholders the 
                    option to approve refunds. It’s been a mix of technical work and creating something 
                    useful for people.`}
                    headerText={"DPG Media"}
                    periodText={"2025 - Current"}
                    chipItems={[
                        "React",
                        "RabbitMQ",
                        "Kotlin",
                        "Spring Boot",
                        "AWS",
                        "PostgreSQL"
                    ]}
                    icon={<BuildingOfficeIcon className="h-8 w-8" />}
                />
                <HistoryTimeLineItem
                    bodyText={`During my Java traineeship at Axxes, I worked on improving
                        my software development skills with hands-on training in
                        technologies like AWS, Spring Boot, Java, Angular, and React.
                        I developed backend services, created user-friendly interfaces,
                        and learned how to deploy applications on AWS. I also picked up
                        some project management and communication skills. Overall, this
                        program helped me become better at both technical tasks and
                        working with clients.`}
                    headerText={"Traineeship - Axxes"}
                    periodText={"2024"}
                    chipItems={[
                        "React",
                        "Angular",
                        "Java",
                        "Spring Boot",
                        "AWS",
                    ]}
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
                    chipItems={[
                        "UI/UX",
                        "React",
                        "Java",
                        "Spring Boot",
                        "AWS",
                        "CloudFormation",
                        "Agile",
                    ]}
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
                    chipItems={["UI/UX", "Angular", "Java", "Spring Boot"]}
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
                    headerText={"Bachelor - AP Antwerp"}
                    periodText={"2021 - 2024"}
                    hideTimeLineConnector={true}
                    chipItems={[
                        "Angular",
                        "Java",
                        "Spring Boot",
                        "OOP",
                        "Project Management",
                        "Communication",
                        "AWS",
                    ]}
                    icon={<AcademicCapIcon className="h-8 w-8" />}
                />
            </div>
        </div>
    );
}
