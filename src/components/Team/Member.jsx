import TeamProfile from './TeamProfile';

const Member = () => {
    return(
        <div className='items-center'>
            <table className=''>
                <tr>
                <td><TeamProfile/></td>
                    <td className='font-bold'>Ayşe</td>
                    <td className='p-3 text-gray-700 font-semibold dark:text-gray-300'>Yazılım Geliştirici</td>
                </tr>

                <tr>
                    <td><TeamProfile/></td>
                    <td className='font-bold'>Buse</td>
                    <td className='p-3 text-gray-700 font-semibold dark:text-gray-300'>Stajyer</td>
                </tr>
                
                <tr>
                    <td><TeamProfile/></td>
                    <td className='font-bold'>Ali</td>
                    <td className='p-3 text-gray-700 font-semibold dark:text-gray-300'>Tasarımcı</td>
                </tr>
                
                <tr>
                    <td><TeamProfile/></td>
                    <td className='font-bold'>Veli</td>
                    <td className='p-3 text-gray-700 font-semibold dark:text-gray-300'>Mühendis</td>
                </tr>
            </table>
        </div>
    )
}

export default Member;