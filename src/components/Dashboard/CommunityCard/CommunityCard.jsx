import { auth } from "../../../App";
import { Card } from "flowbite-react";

import { Avatar } from "flowbite-react";

export default function CommunityCard({ title, info }) {
	const date = new Date();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const day = date.getDate() + 1;

	const user = auth.currentUser;

	return (
		<>
			<div className="w-full grid grid-cols-1 mt-10">
				<div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-4 ">
					<Card>
						<div className="flex flex-wrap justify-between">
							<label className="mb-2 text-3xl font-bold text-gray-900">
								{title}
							</label>
							<label className="text-gray-500">
								posted on: {month}/{day}/{year}
							</label>
						</div>
						<p className="mb-5 text-base text-gray-500 dark:text-gray-400 sm:text-lg">
							{info}
						</p>
						<div className="border-b border-gray-300"></div>
						<h2 className="flex flex-row font-thin text-gray-400">
							Posted by:
							{user && user.displayName && <p className="font-medium pr-2">{user.displayName}</p>}
							{user && user.photoURL && (
								<img
									src={user.photoURL}
									alt=""
									className="rounded-full h-8 w-8"
								/>
							)}
						</h2>
					</Card>
				</div>
			</div>
		</>
	);
}
