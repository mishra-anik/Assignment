import React from "react";
import Nav from "./component/Nav";
import AppRoutes from "./routes/Route";
import Footer from "./component/Footer";

const App = () => {
	return (
		<div className=' min-h-screen  w-full py-4 px-2 bg-gray-100'>
			<Nav />
			<AppRoutes />
			<Footer />
		</div>
	);
};

export default App;
