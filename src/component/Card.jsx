import React from "react";

const Card = ({data, idx , onSeeMore}) => {
	const { name, id } = data;
	return (
		
			<div
				key={idx}
				className='flex justify-between items-center border p-4 rounded shadow hover:shadow-lg transition cursor-pointer'
			>
				<h2 className='text-lg font-semibold mb-2'>
					{name} <span className='text-gray-500 text-sm'>({id})</span>
				</h2>
				<button onClick={()=>onSeeMore(data)} className='mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer'>
					See More
				</button>
			</div>
	);
};

export default Card;
