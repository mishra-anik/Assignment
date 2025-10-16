const Card = ({ data, onSeeMore }) => {
  const {
    id,
    name
  } = data;

  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow bg-white flex items-center justify-between">
      <h3 className="font-semibold text-lg">
        {name}{" "}
        <span className="text-gray-500 text-sm">({id})</span>
      </h3>

      <button
        className="border rounded p-2 hover:bg-gray-50"
        onClick={() => onSeeMore && onSeeMore(data)}
      >
        See More
      </button>
 
    </div>
  );
};

export default Card;
