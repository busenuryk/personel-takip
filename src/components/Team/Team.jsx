import Member from './Member';

const Team = () => {
    return(
        <div className='bg-white p-2 rounded-2xl dark:bg-gray-600 dark:text-gray-300 flex-1 flex flex-col gap-3'>
            <h1 className='text-2xl font-semibold'>Ekip</h1>
            <Member/>
        </div>
    )
}

export default Team;