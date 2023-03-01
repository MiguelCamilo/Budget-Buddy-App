import { Link } from "react-router-dom"
import { HiMenuAlt3 } from "react-icons/hi"

export default function Dashboard() {

    return (
        
        <section className="flex gap-6 bg-[#13e372]">
            {/* side navbar  */}
            <div className="bg-white min-h-screen w-72 px-4 text-black rounded-r-2xl">
                {/* navbar container */}
                <div className="flex py-3 justify-end">
                    <HiMenuAlt3 size={26} className="cursor-pointer" />
                </div>
                <div className="mt-4 flex flex-col gap-4 relative">
                    <Link to={'/'}>
                        <div> <HiMenuAlt3 size={26}/> </div>
                        <h2>Home</h2>
                    </Link>
                </div>
            </div>
            <div className="m-3 text-xl text-gray-900 font-semibold'">
                Welcome * user *
            </div>
        </section>

    )
}
