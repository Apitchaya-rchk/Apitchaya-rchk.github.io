import './ResponsiveNavbar.css';




export default function ResponsiveNavbar() {
    return (
        <div className="fixed w-full h-8 bg-pink-400 text-gray-700 flex justify-between items-center ">
            <div className="brand-logo text-sm font-bold px-2">Infinity Activity</div>
            <ul className="menu-list flex text-xs font-bold">
                <li className="menu-list-item px-2"><a href="#">Journey</a></li>
                <li className="menu-list-item px-2"><a href="#">New Journey</a></li>
                <li className="menu-list-item px-2"><a href="#">Home</a></li>
                <li className="menu-list-item px-2"><a href="#">Profile</a></li>
                <li className="menu-list-item px-2"><a href="#">Settings</a></li>
            </ul>

            <button className="lg:hidden menu-button">
                menu
            </button>
            {SideMenu()}
        </div>
    )
}

function SideMenu() {
    return (
        <div className="fixed h-screen w-1/4 bg-pink-400 top-8" >
            <ul className="menu-list flex-col text-xs font-bold ">
                <li className="menu-list-item py-2 hover:bg-white hover:text-pink-400"><a href="#">Journey</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-pink-400"><a href="#">New Journey</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-pink-400"><a href="#">Home</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-pink-400"><a href="#">Profile</a></li>
                <li className="menu-list-item py-2 hover:bg-white hover:text-pink-400"><a href="#">Settsssssings</a></li>
            </ul>
        </div>
    )
}
