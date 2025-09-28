import React from "react";

const Testimonials = () => {
	return (
		<div className='px-[2rem] mt-4'>
			<h1 className='text-4xl font-semibold'>Student Testimonials</h1>
			<div className='flex gap-10 mt-4 flex-wrap'>
				<card className='border p-4  flex flex-col gap-3 rounded-md w-full h-[12rem] '>
					<h1 className='text-xl font-thin'>Sophia Carter</h1>
					<span className='text-bold text-xl'>5 star</span>

					<p className='text-sm/6'>
						ILETS Prep transformed my ILETS preparation. The mock
						tests and personalized coaching helped me achieve my
						target band score of 8.5!
					</p>
				</card>

				<card className='border p-4  flex flex-col gap-3 rounded-md w-full h-[12rem] '>
					<h1 className='text-xl font-thin'>Ethan Bennett</h1>
					<span className='text-bold text-xl'>4.5 star</span>

					<p className='text-sm/6'>
						The coaching was excellent , and I felt well-prepared
						for the exam.Highly recommended.
					</p>
				</card>
			</div>
		</div>
	);
};

export default Testimonials;
