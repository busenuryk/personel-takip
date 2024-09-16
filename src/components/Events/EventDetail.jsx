const EventDetail = () => {
    return(
        <div className="flex flex-row items-center gap-2">
            <div className="basis-1/3 bg-gray-300 text-gray-700 p-2 rounded-lg
            h-16 w-16 font-bold text-center">Tarih</div>
            <div className="basis-2/3">
                <h1 className="text-xl font-bold">başlık</h1>
                <p className="text-gray-400">detay</p>
            </div>
        </div>
    )
}

export default EventDetail;