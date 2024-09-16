import Title from '../ui/Title';
import Member from './Member';

const Team = () => {
    return(
        <div className='bg-white p-2 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-5'>
            <Title>Team</Title>
            <table className='flex items-center gap-3'>
                <td>
                    <tr><TeamProfile/></tr>
                    <tr className='font-bold'>Ayşe</tr>
                    <tr className='p-3 text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300'>Yazılım Geliştirici</tr>
                </td>
                <td>
                    <tr><TeamProfile/></tr>
                    <tr className='font-bold'>Buse</tr>
                    <tr className='p-3 text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300'>Stajyer</tr>
                </td>
                <td>
                    <tr><TeamProfile/></tr>
                    <tr className='font-bold'>Ali</tr>
                    <tr className='p-3 text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300'>Tasarımcı</tr>
                </td>
                <td>
                    <tr><TeamProfile/></tr>
                    <tr className='font-bold'>Veli</tr>
                    <tr className='p-3 text-gray-700 font-semibold dark:bg-gray-500 dark:text-gray-300'>Mühendis</tr>
                </td>
            </table>
        </div>
    )
}

export default Team;