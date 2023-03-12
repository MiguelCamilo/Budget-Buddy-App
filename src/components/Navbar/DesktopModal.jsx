import { FiSettings } from "react-icons/fi";
import { Modal, Button } from "flowbite-react";
import React from "react";

export default function DesktopModal() {
	return (
		<React.Fragment>
			<div className="flex flex-wrap gap-4">
				<Button onClick={onClick}>
                    <FiSettings /> 
                </Button>
			</div>
			<Modal
				show={false}
				position="top-right"
				onClose={onClose}
				size="sm"
			>
            <Modal.Header>
                Hello
            </Modal.Header>
            </Modal>
		</React.Fragment>
	);
}
