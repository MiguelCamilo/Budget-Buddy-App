import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { menus } from "../../data/menu";

export default function Navbar() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<>
			{/* side navbar  */}
			<div
				className={`bg-white min-h-screen ${
					openMenu ? "w-56" : "w-20"
				} duration-500  px-4 text-black rounded-r-2xl`}
			>
				{/* navbar container */}
				<div className="flex py-3 justify-end">
					<button onClick={() => setOpenMenu(!openMenu)}>
						<HiMenuAlt3 size={26} className="cursor-pointer" />
					</button>
				</div>
				{/* menu items containers */}
				<div className="flex flex-col gap-40 relative mt-16">
					{menus.map((menu, i) => (
						<Link
							key={i}
							to={menu.link}
							className="flex items-center text-sm gap-3.5 font-medium p-2"
						>
							<div>{menu.icon({ size: "35" })}</div>
							<h2
								style={{ transitionDelay: `${i + 3}00ms` }}
								className={`white-space-pre duration-500 ${
									!openMenu && "opacity-0 translate-x-28 overflow-hidden"
								}`}
							>
								{menu.name}
							</h2>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
