import { useEffect, useState, useContext, lazy, Suspense } from "react";
import { DataContext } from "../context/Data";
import SearchInput, { createFilter } from "react-search-input";
import Pop from "../component/Pop";

const Card = lazy(() => import("../component/Card"));

const Patient = () => {
	const { patients, loading, error, setPatients, setLoading, setError } =
		useContext(DataContext);

	const [selectedPatient, setSelectedPatient] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

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

	// Search functionality
	const KEYS_TO_FILTERS = ["name", "id", "illness", "consultant_doctor"];
	const filteredPatients = patients.filter(
		createFilter(searchTerm, KEYS_TO_FILTERS)
	);

	return (
		<>
			<div className='w-full flex justify-center m-4 px-4'>
				<SearchInput
					onChange={(term) => setSearchTerm(term)}
					type='text'
					placeholder='Search Patient...'
					className='
      placeholder-gray-400
      placeholder-opacity-70
      italic
      placeholder:font-light
      placeholder:text-xl
      block
      w-[50vw]
     
      p-2
      px-4
      bg-gray-100
      text-gray-800
      rounded-full
      shadow-md
      focus:outline-none
      focus:ring-2
      focus:ring-blue-400
      transition
      sm:text-base
      text-xl
    '
				/>
			</div>

			<div className='container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				<Suspense fallback={<p>Loading cards...</p>}>
					{filteredPatients.length > 0 ? (
						filteredPatients.map((patient, idx) => (
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
