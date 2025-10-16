import { useEffect, useState, useContext, lazy, Suspense } from "react";
const Card = lazy(() => import("../component/Card"));
import Pop from "../component/Pop";
import { DataContext } from "../context/Data";

const Patient = () => {
	const { patients, loading, error, setPatients, setLoading, setError } =
		useContext(DataContext);
	const [selectedPatient, setSelectedPatient] = useState(null);

	useEffect(() => {
		let mounted = true;
		setLoading(true);
		fetch("/patient.json")
			.then((res) => {
				if (!res.ok) throw new Error(`HTTP ${res.status}`);
				return res.json();
			})
			.then((data) => {
				if (!mounted) return;
				setPatients(data);
				setError(null);
			})
			.catch((err) => {
				if (!mounted) return;
				setError(err.message || "Failed to load");
				setPatients([]);
			})
			.finally(() => {
				if (!mounted) return;
				setLoading(false);
			});

		return () => {
			mounted = false;
		};
	}, [setPatients, setLoading, setError]);

	if (loading) return <p className='p-4'>Loading patients...</p>;
	if (error) return <p className='p-4 text-red-600'>Error: {error}</p>;

	return (
		<>
			<div className='container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{patients && patients.length > 0 ? (
					patients.map((patient, idx) => (
						<Suspense >
							<Card
								key={idx}
								data={patient}
								onSeeMore={(p) => setSelectedPatient(p)}
							/>
						</Suspense>
					))
				) : (
					<p>No patients found.</p>
				)}
			</div>

			{selectedPatient && (
				<Pop
					patient={selectedPatient}
					onClose={() => setSelectedPatient(null)}
				/>
			)}
		</>
	);
};

export default Patient;
