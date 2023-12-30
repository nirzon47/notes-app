import Note from './Note'

const Notes = ({ notes, setIndex }) => {
	return notes.map((note) => (
		<Note
			notes={notes}
			key={note.id}
			setIndex={setIndex}
			color={note.color}
			title={note.title}
			id={note.id}
		/>
	))
}

export default Notes
