import { createContext, useState } from "react";

// ✅ Named export
export const DataContext = createContext();

const DataProvider = ({ children }) => {
	const [patients, setPatients] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	return (
		<DataContext.Provider
			value={{
				patients,
				loading,
				error,
				setPatients,
				setLoading,
				setError,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};

// ✅ Default export
export default DataProvider;
