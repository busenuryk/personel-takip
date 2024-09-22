import UserLogo from '../../images/user-icon.jpg'

const TeamProfile = () => {
    return(
        <div className="flex gap-3 items-center bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300">
            <img src={UserLogo} className='w-8 h-8 rounded-full flex'></img>
        </div>
    )
}
export default TeamProfile;