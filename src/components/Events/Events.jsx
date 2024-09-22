import EventDetail from "./EventDetail";

const Events = () => {
    return(
        <div className="bg-white p-5 rounded-2xl dark:bg-gray-600
        dark:text-gray-300 flex-1 flex flex-col gap-5 w-full">
            <h1 className="text-2xl font-semibold">Yapılacaklar</h1>
            <EventDetail/>
        </div>
    )
}
export default Events;