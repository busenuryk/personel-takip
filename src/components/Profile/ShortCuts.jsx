import {GoGoal} from 'react-icons/go'
import {FaClipboardCheck, FaRegRectangleList, FaAnglesDown, FaBarsProgress} from 'react-icons/fa6'

const ShortCuts = () => {
    return(
        <div className="flex felx-col gap-4 bg-white rounded-lg p-4 dark:bg-gray-600"> 
            <Title>ShortCuts</Title>
            <div className='flex justify-between items-center cursor-pointer rounded-sm'>
                <ul className='flex gap-4 items-center'>
                    <li className='bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300'>
                        <GoGoal/>
                        <a href="font-medium dark:text-gray-300">Goals</a>
                        <FaAnglesDown className='bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500'/>
                    </li>
                    <li className='bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-centerdark:bg-gray-800 dark:text-gray-300'>
                        <FaClipboardCheck/>
                        <a href="font-medium dark:text-gray-300">Plan</a>
                        <FaAnglesDown className='bg-gray-300 p-2 rounded-md dark:bg-gray- dark:text-gray-300 hover:mr-3 transition-all duration-500'/>
                    </li>
                    <li className='bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300'>
                        <FaBarsProgress/>
                        <a href="font-medium dark:text-gray-300">Stats</a>
                        <FaAnglesDown className='bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500'/>
                    </li>
                    <li className='bg-blue-100 p-2 rounded-full w-8 h-8 flex items-center justify-center dark:bg-gray-800 dark:text-gray-300'>
                        <FaRegRectangleList/>
                        <a href="font-medium dark:text-gray-300">Detail</a>
                        <FaAnglesDown className='bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500'/>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default ShortCuts;