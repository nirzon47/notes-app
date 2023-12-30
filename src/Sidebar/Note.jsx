const Note = ({ note, color, title }) => {
	return (
		<div
			className={`px-4 py-3 text-lg font-medium text-black bg-${color}-300 hover:bg-${color}-400 duration-150 cursor-pointer capitalize`}
		>
			{title}
		</div>
	)
}

export default Note
