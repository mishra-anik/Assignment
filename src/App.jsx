import AppRoutes from "./routes/Route";
import Nav from "./component/Nav";

const App = () => {
	return (
		<div className='py-[1vh] lg:py-[3vh] px-[3vw] bg-blue-50 min-h-screen overflow-hidden'>
			<Nav />
			<AppRoutes />

			<footer className='bg-gray-200 text-center py-4'>
				<p className='text-gray-600'>
					&copy; {new Date().getFullYear()} Jarurat Care. All rights reserved.
				</p>
			</footer>
		</div>
	);
};

export default App;
