import TextAnim from "./TextAnim";

export default function Greeting() {
    return (
        <div className="min-w-max min-h-screen text-center content-center">
            {/* <h1 className="text-text-900">Hi, i am Jordi Timmers</h1> */}
            <TextAnim text="Hi, i am Jordi Timmers." />
        </div>
    );
}
