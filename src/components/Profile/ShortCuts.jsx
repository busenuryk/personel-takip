import {GoGoal} from 'react-icons/go'
import {FaClipboardCheck, FaRegRectangleList, FaAnglesDown, FaBarsProgress} from 'react-icons/fa6'

const ShortCuts = () => {
    return(
        <div className="flex flex-col justify-between gap-4 bg-white rounded-lg p-4 dark:bg-gray-600"> 
            <div className='flex flex-col justify-between items-center cursor-pointer rounded-sm'>
                    <div className='bg-blue-100 p-2 rounded-lg h-8 flex items-center dark:bg-gray-800 dark:text-gray-300 w-full'>
                        <GoGoal/>
                        <a href="#"className="p-4 font-medium dark:text-gray-300">Yapılacaklar</a>
                    </div>

                    <div className='bg-blue-100 p-2 rounded-lg h-8 flex items-center dark:bg-gray-800 dark:text-gray-300 w-full'>
                        <FaClipboardCheck/>
                        <a href="#"className="p-4 font-medium dark:text-gray-300">Planlar</a>
                    </div>

                    <div className='bg-blue-100 p-2 rounded-lg h-8 flex items-center dark:bg-gray-800 dark:text-gray-300 w-full'>
                        <FaBarsProgress/>
                        <a href="#"className="p-4 font-medium dark:text-gray-300">Proje Durumu</a>
                    </div>

                    <div className='bg-blue-100 p-2 rounded-lg h-8 flex items-center dark:bg-gray-800 dark:text-gray-300 w-full'>
                        <FaRegRectangleList/>
                        <a href="#"className="p-4 font-medium dark:text-gray-300">Detaylar</a>
                    </div>

            </div>
        </div>
    )
}
export default ShortCuts;