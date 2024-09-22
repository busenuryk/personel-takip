import Profile from "../Profile/Profile";
import Content from "./Content";

const Main = () => {
    return (
        <div className="text-gray-500 h-full bg-gray-100 p-4 sm:ml-64 flex gap-2 
        flex-col lg:flex-row translate-all duration-300 mt-14 dark:bg-gray-800">
            <Content />
            <Profile/>
        </div>
    );
};
export default Main;