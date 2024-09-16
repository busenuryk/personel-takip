import { FaHome, FaUser, FaList, FaExternalLinkAlt, FaToggleOn } from "react-icons/fa";

const Menu = () => {
    return (
        <div className="px-2 h-full flex flex-col justify-between ">
            <div className="flex flex-col justify-items-center">
                <ul>
                    <li>
                        <a href="#" className="flex items-center p-2 m-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FaHome className="mr-2" /> Ana sayfa
                    </a >
                    </li>
                    <li>
                        <a href="#" className="flex items-center p-2 m-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FaUser className="mr-2" /> Profil
                    </a >
                    </li>
                    <li>
                        <a href="#"  className="flex items-center p-2 m-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                        <FaList className="mr-2" /> İş Takip
                    </a>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li className="">
                    <a href="#" className="flex items-center p-2 m-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
							<FaExternalLinkAlt className="mr-2"/> Çıkış
						</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;