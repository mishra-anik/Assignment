import {
	useMemo,
	useState,
	useEffect,
	useContext,
	lazy,
	Suspense,
} from "react";
import { DataContext } from "../context/Data";
import { createFilter } from "react-search-input";
import Pop from "../component/Pop";

const Card = lazy(() => import("../component/Card"));

const Patient = () => {
	const { patients, loading, error, setPatients, setLoading, setError } =
		useContext(DataContext);

	const [selectedPatient, setSelectedPatient] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");
	// Search functionality
	const KEYS_TO_FILTERS = ["name", "id", "illness", "consultant_doctor"];

	const memoizedPatients = useMemo(() => {
		if (!searchTerm) return patients;
		const filter = createFilter(searchTerm, KEYS_TO_FILTERS);
		return patients.filter(filter);
	}, [patients, searchTerm]);

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
			<div className='w-full flex justify-center my-4 px-4'>
				<input
					type='text'
					placeholder='Search Patient...'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className='w-[80vw] max-w-md lg:w-[80vw] md:w-[60vw] p-2 px-4 bg-gray-100 text-gray-800 rounded-full shadow-md placeholder-gray-400 placeholder-opacity-70 italic placeholder:font-light sm:text-base text-xl transition'
				/>
			</div>

			<div className='container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden'>
				<Suspense fallback={<p>Loading cards...</p>}>
					{memoizedPatients.length > 0 ? (
						memoizedPatients.map((patient, idx) => (
							<Card
								key={idx}
								data={patient}
								onSeeMore={(p) => setSelectedPatient(p)}
							/>
						))
					) : (
						<p>No patients found.</p>
					)}
				</Suspense>
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
