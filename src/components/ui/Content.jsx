import Events from "../Events/Events";
import Team from "../Team/Team";

const Content = ({ children }) => {
    return (
        <div className="flex-1 flex flex-col gap-6 lg:flex-row">
            <Team />
            <Events />
        </div>
    )
}
export default Content;