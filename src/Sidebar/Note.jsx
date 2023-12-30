const Note = ({ notes, setIndex, color, title, id }) => {
	const handleClickNote = (event) => {
		const targetIndex = Number(event.target.id)
		const index = notes.findIndex((note) => note.id === targetIndex)

		setIndex(index)
	}

	return (
		<button
			className={`px-4 py-3 text-lg font-medium text-black bg-${color}-300 hover:bg-${color}-400 duration-150 cursor-pointer capitalize block w-full text-left`}
			id={id}
			onClick={handleClickNote}
		>
			{title}
		</button>
	)
}

export default Note
