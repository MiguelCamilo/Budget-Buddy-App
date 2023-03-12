import { useState, useEffect } from "react";
import { Modal, Button, Label, Textarea, TextInput } from "flowbite-react";
import { toast } from "react-toastify";
import React from "react";

export default function AddPostModal() {
	const [modalOpen, setModalOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [info, setInfo] = useState("");

	const handleOpen = () => {
		setModalOpen(true);
	};

	const handle_add_post = (e) => {
		e.preventDefault();
		toast.success("Post Added");
	};

	return (
		<React.Fragment>
			<Button className="bg-[#073E38] hover:bg-[#154e47]" onClick={handleOpen}>
				+ Add a New Post
			</Button>
			<Modal
				show={modalOpen}
				onClose={() => setModalOpen(false)}
				dismissible={true}
			>
				<Modal.Header>New Post</Modal.Header>
				<form onSubmit={handle_add_post}>
					<Modal.Body>
						<div>
							<label
								htmlFor="small-input"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Title of Post
							</label>
							<input
								type="text"
								placeholder="Title"
								id="small-input"
								className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							/>
						</div>
						<>
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
							>
								Your message
							</label>
							<textarea
								id="message"
								rows={4}
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="What will this post be about?"
							/>
						</>
					</Modal.Body>
					<Modal.Footer>
						<Button type="submit">Post</Button>
					</Modal.Footer>
				</form>
			</Modal>
		</React.Fragment>
	);
}
