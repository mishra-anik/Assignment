import React from "react";

const Pop = ({ patient, onClose }) => {
	if (!patient) return null;

	const {
		id,
		name,
		illness,
		reason,
		consultant_doctor,
		address,
		medicines,
		medicine_times,
		time_of_medicine_run,
		first_visit,
	} = patient;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div className="bg-white rounded-lg max-w-xl w-full p-6 mx-4">
				<div className="flex justify-between items-start">
					<h2 className="text-2xl font-semibold">{name} <span className="text-gray-500 text-sm">({id})</span></h2>
					<button
						onClick={onClose}
						className="text-gray-600 hover:text-gray-900 ml-4"
						aria-label="Close details"
					>
						✕
					</button>
				</div>

				<div className="mt-4 space-y-2 text-sm text-gray-700">
					<p><strong>Condition:</strong> {illness}</p>
					<p><strong>Reason:</strong> {reason}</p>
					<p><strong>Consultant:</strong> {consultant_doctor}</p>
					<p><strong>Address:</strong> {address}</p>
					<p><strong>Medicines:</strong> {Array.isArray(medicines) ? medicines.join(", ") : medicines}</p>
					<p><strong>Medicine times:</strong> {Array.isArray(medicine_times) ? medicine_times.join(", ") : medicine_times}</p>
					<p><strong>Time of medicine run:</strong> {time_of_medicine_run}</p>
					<p><strong>First visit:</strong> {first_visit ? new Date(first_visit).toLocaleString() : "—"}</p>
				</div>

				<div className="mt-6 flex justify-end">
					<button
						onClick={onClose}
						className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
					>
						Close
					</button>
				</div>
			</div>
		</div>
	);
};

export default Pop;
