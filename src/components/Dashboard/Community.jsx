import Navbar from "../Navbar/Navbar"
import Sidebar from "../Navbar/Sidebar"

export default function Community() {

    return (
        <div>
            <Navbar/>
            <div className="flex bg-white pt-16">
                <Sidebar/>
            </div>
        </div>
    )
}